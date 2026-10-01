import React from 'react';

/** `**word**` → <strong>word</strong>, for copy kept in plain strings. */
export function rich(text: string): React.ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

/** The same text without the markup, for JSON-LD. */
export function plain(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '$1');
}
