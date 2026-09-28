const CACHE='shorts-studio-v20';
const FILES=['./','index.html','styles.css','simulator.css','uploads.css?v=20260928-13','game-ui.css','codex-connect.css?v=20260928-15','redesign.css?v=20260928-18','absurdity-engine.js?v=20260928-10','app.js?v=20260928-11','game-ui.js?v=20260928-1','pwa.js?v=20260928-14','ui-shell.js?v=20260928-1','app-icon.svg','main-visual.png','manifest.webmanifest','새마을모자_정장바지_빨간장화_전신사진.png'];
const CORE=FILES.map(file=>new URL(file,self.registration.scope).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request).then(hit=>hit||caches.match(new URL('index.html',self.registration.scope).href))))});
