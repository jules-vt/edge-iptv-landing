# Config serveur (nginx)

`edge-iptv.app.nginx` est la copie versionnée du vhost du VPS
(`/etc/nginx/sites-available/edge-iptv.app`). Le serveur ne lit pas ce dépôt :
on modifie le fichier ici, puis on le pousse à la main.

```bash
scp "docs/server/edge-iptv.app.nginx" root@72.60.172.173:/etc/nginx/sites-available/edge-iptv.app
ssh root@72.60.172.173 'nginx -t && systemctl reload nginx'
```

`nginx -t` refuse une config invalide avant le rechargement : en cas d'erreur,
l'ancienne config reste en service.

Une page supprimée du site doit recevoir une ligne dans le `map` des URL
retirées, vers la page qui la remplace (301), et non finir en 404.
