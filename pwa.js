(()=>{
 const panel=document.querySelector('#installPanel');
 const button=document.querySelector('#installApp');
 const status=document.querySelector('#installStatus');
 if(!panel||!button||!status)return;
 const standalone=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
 if(standalone){panel.hidden=true;document.documentElement.classList.add('standalone-app');return}
 let installEvent=null;
 window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installEvent=event;button.hidden=false;status.textContent='홈 화면에 설치할 수 있습니다.'});
 window.addEventListener('appinstalled',()=>{status.textContent='홈 화면 설치 완료';button.hidden=true});
 button.addEventListener('click',async()=>{if(installEvent){installEvent.prompt();const choice=await installEvent.userChoice;status.textContent=choice.outcome==='accepted'?'설치 요청 완료':'설치가 취소되었습니다.';installEvent=null;return}const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);status.textContent=ios?'Safari 공유 버튼 → 홈 화면에 추가를 선택하세요.':'브라우저 메뉴 → 홈 화면에 추가를 선택하세요.'});
 if(location.hostname.endsWith('github.io'))document.querySelector('#codexConnect')?.setAttribute('hidden','');
 if('serviceWorker' in navigator&&isSecureContext)navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
 else status.textContent='브라우저 메뉴에서 홈 화면에 추가하면 앱 형태로 실행됩니다.';
})();
