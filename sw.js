const C='cvh-asistencia-v4';
const FILES=['./','./index.html','./app.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==C).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return;
  // red primero para el documento: así una versión nueva siempre gana
  if(e.request.mode==='navigate'||e.request.destination==='document'){
    e.respondWith(fetch(e.request).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put('./index.html',cp));return res;})
      .catch(()=>caches.match('./index.html')));
    return; }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
    const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));return res;}).catch(()=>caches.match('./index.html'))));
});