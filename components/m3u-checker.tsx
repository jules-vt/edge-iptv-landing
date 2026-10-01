'use client';

import React from 'react';
import { AlertTriangle, CheckCircle2, FileUp, Lock, Search } from 'lucide-react';
import { DownloadButton } from '@/components/download-button';
import { type EntryKind, type M3UReport, type XtreamLogin, analyzeM3U, detectXtream } from '@/lib/m3u-check';
import type { CheckerUi } from '@/lib/m3u-checker-copy';

type Mode = 'paste' | 'file' | 'url';

const MAX_ROWS = 200;
const MAX_GROUPS = 40;

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
}

function Check({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      {ok ? (
        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
      ) : (
        <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
      )}
      <span className={ok ? 'text-muted-foreground' : 'text-foreground'}>{children}</span>
    </li>
  );
}

function XtreamCard({ login, ui }: { login: XtreamLogin; ui: CheckerUi }) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-950/30">
      <p className="font-semibold text-blue-800 dark:text-blue-200">{ui.xtreamTitle}</p>
      <p className="mt-2 text-sm text-blue-900/80 dark:text-blue-100/80">
        {fill(ui.xtreamBody, { server: login.server, user: login.username })}
      </p>
    </div>
  );
}

export function M3UChecker({ ui, location }: { ui: CheckerUi; location: string }) {
  const [mode, setMode] = React.useState<Mode>('paste');
  const [text, setText] = React.useState('');
  const [link, setLink] = React.useState('');
  const [fileName, setFileName] = React.useState('');
  const [fileText, setFileText] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState('');
  const [report, setReport] = React.useState<M3UReport | null>(null);
  const [xtream, setXtream] = React.useState<XtreamLogin | null>(null);
  const [query, setQuery] = React.useState('');

  const kindLabel: Record<EntryKind, string> = {
    live: ui.live,
    movie: ui.movies,
    episode: ui.episodes,
  };

  async function readFile(file: File | undefined) {
    if (!file) return;
    setFileName(file.name);
    setFileText(await file.text());
  }

  async function run() {
    setError('');
    setReport(null);
    setXtream(null);
    setQuery('');

    let content = '';
    let source: string | undefined;

    // A single pasted line that is a link is treated as the URL option.
    const pasted = text.trim();
    const pastedIsLink = mode === 'paste' && /^https?:\/\/\S+$/i.test(pasted);

    if (mode === 'url' || pastedIsLink) {
      source = (pastedIsLink ? pasted : link).trim();
      if (!source) return setError(ui.errorEmpty);
      setXtream(detectXtream(source));
      setBusy(true);
      try {
        const response = await fetch(source);
        if (!response.ok) throw new Error(String(response.status));
        content = await response.text();
      } catch {
        setBusy(false);
        return setError(ui.errorFetch);
      }
      setBusy(false);
    } else if (mode === 'file') {
      content = fileText;
    } else {
      content = text;
    }

    if (!content.trim()) return setError(ui.errorEmpty);

    // Let the "reading" state paint before a large playlist blocks the thread.
    setBusy(true);
    await new Promise((resolve) => setTimeout(resolve, 20));
    const result = analyzeM3U(content, source);
    setBusy(false);

    if (result.entries.length === 0) return setError(ui.errorNotM3U);
    setReport(result);
  }

  const rows = React.useMemo(() => {
    if (!report) return [];
    const needle = query.trim().toLowerCase();
    const matches = needle
      ? report.entries.filter(
          (entry) =>
            entry.name.toLowerCase().includes(needle) ||
            (entry.group ?? '').toLowerCase().includes(needle),
        )
      : report.entries;
    return matches.slice(0, MAX_ROWS);
  }, [report, query]);

  const tabs: { id: Mode; label: string }[] = [
    { id: 'paste', label: ui.tabPaste },
    { id: 'file', label: ui.tabFile },
    { id: 'url', label: ui.tabUrl },
  ];

  return (
    <div>
      <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-lg">
        <div role="tablist" className="inline-flex rounded-full bg-secondary/60 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={mode === tab.id}
              onClick={() => setMode(tab.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                mode === tab.id ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-5">
          {mode === 'paste' && (
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder={ui.pastePlaceholder}
              spellCheck={false}
              dir="ltr"
              className="h-48 w-full rounded-xl border border-border bg-background p-4 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          )}

          {mode === 'file' && (
            <label
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                readFile(event.dataTransfer.files[0]);
              }}
              className="flex h-48 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-background text-center transition-colors hover:border-primary/50"
            >
              <FileUp className="h-8 w-8 text-muted-foreground" />
              <span className="font-medium">{fileName || ui.fileLabel}</span>
              {!fileName && <span className="text-sm text-muted-foreground">{ui.fileHint}</span>}
              <input
                type="file"
                accept=".m3u,.m3u8,audio/x-mpegurl,application/vnd.apple.mpegurl,text/plain"
                className="sr-only"
                onChange={(event) => readFile(event.target.files?.[0])}
              />
            </label>
          )}

          {mode === 'url' && (
            <div>
              <input
                type="url"
                value={link}
                onChange={(event) => setLink(event.target.value)}
                placeholder={ui.urlPlaceholder}
                spellCheck={false}
                dir="ltr"
                className="w-full rounded-xl border border-border bg-background p-4 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <p className="mt-3 text-sm text-muted-foreground">{ui.urlNote}</p>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={run}
            disabled={busy}
            data-umami-event="m3u_check"
            data-umami-event-mode={mode}
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-bold text-white transition-shadow hover:shadow-xl disabled:opacity-60"
          >
            {busy ? ui.loading : ui.analyze}
          </button>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5 flex-shrink-0" />
            {ui.privacy}
          </p>
        </div>

        {error && (
          <p role="alert" className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
            {error}
          </p>
        )}
        {xtream && !report && <div className="mt-4"><XtreamCard login={xtream} ui={ui} /></div>}
      </div>

      {report && (
        <div className="mt-10 space-y-10">
          {/* ── Summary ── */}
          <section>
            <h2 className="text-2xl font-bold">{ui.summaryTitle}</h2>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {[
                [ui.entries, report.entries.length],
                [ui.live, report.counts.live],
                [ui.movies, report.counts.movie],
                [ui.episodes, report.counts.episode],
                [ui.groups, report.groups.length],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-border/60 bg-card p-4">
                  <p className="text-2xl font-bold tabular-nums">{Number(value).toLocaleString()}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </section>

          {report.xtream && <XtreamCard login={report.xtream} ui={ui} />}

          {/* ── Checks ── */}
          <section>
            <h2 className="text-2xl font-bold">{ui.checksTitle}</h2>
            <ul className="mt-5 space-y-2">
              <Check ok={report.hasHeader}>{report.hasHeader ? ui.headerOk : ui.headerMissing}</Check>
              <Check ok={report.guideUrls.length > 0}>
                {report.guideUrls.length > 0 ? (
                  <>
                    {fill(ui.guideFound, { n: '' })}
                    <span dir="ltr" className="break-all font-mono text-xs">
                      {report.guideUrls.join(', ')}
                    </span>
                  </>
                ) : (
                  ui.guideMissing
                )}
              </Check>
              <Check ok={report.orphanInfoLines === 0}>{fill(ui.orphan, { n: report.orphanInfoLines })}</Check>
              <Check ok={report.duplicateUrls === 0}>{fill(ui.duplicates, { n: report.duplicateUrls })}</Check>
              <Check ok={report.missingTvgId === 0}>{fill(ui.missingTvgId, { n: report.missingTvgId })}</Check>
              <Check ok={report.missingLogo === 0}>{fill(ui.missingLogo, { n: report.missingLogo })}</Check>
              <Check ok={report.missingGroup === 0}>{fill(ui.missingGroup, { n: report.missingGroup })}</Check>
              <Check ok={report.insecureStreams === 0}>{fill(ui.insecure, { n: report.insecureStreams })}</Check>
              <Check ok={report.invalidUrls === 0}>{fill(ui.invalid, { n: report.invalidUrls })}</Check>
            </ul>
          </section>

          {/* ── Groups ── */}
          {report.groups.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold">{ui.groupsTitle}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {report.groups.slice(0, MAX_GROUPS).map((group) => (
                  <button
                    key={group.name}
                    type="button"
                    onClick={() => setQuery(group.name)}
                    className="rounded-full border border-border/60 bg-secondary/30 px-3 py-1 text-sm transition-colors hover:border-primary/40"
                  >
                    {group.name} <span className="text-muted-foreground tabular-nums">{group.count}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* ── Entries ── */}
          <section>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-bold">{ui.entriesTitle}</h2>
              <label className="relative w-full sm:w-72">
                <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={ui.search}
                  className="w-full rounded-full border border-border bg-background py-2 pe-4 ps-9 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{fill(ui.showing, { n: rows.length })}</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-border">
              <table className="min-w-full text-sm">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="px-4 py-2 text-start font-semibold">{ui.colName}</th>
                    <th className="px-4 py-2 text-start font-semibold">{ui.colGroup}</th>
                    <th className="px-4 py-2 text-start font-semibold">{ui.colType}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((entry, i) => (
                    <tr key={`${entry.url}-${i}`}>
                      <td className="px-4 py-2">{entry.name}</td>
                      <td className="px-4 py-2 text-muted-foreground">{entry.group ?? '—'}</td>
                      <td className="px-4 py-2 text-muted-foreground">{kindLabel[entry.kind]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="rounded-3xl border border-border/50 bg-card p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold">{ui.ctaTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{ui.ctaBody}</p>
            <DownloadButton location={`${location}-result`} size="lg" className="mt-6">
              {ui.ctaButton}
            </DownloadButton>
          </section>
        </div>
      )}
    </div>
  );
}
