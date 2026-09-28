(()=>{
 const splash=document.querySelector('#appSplash');
 const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const closeSplash=()=>{if(!splash)return;splash.classList.add('is-leaving');setTimeout(()=>splash.remove(),reduceMotion?0:1050)};
 setTimeout(closeSplash,reduceMotion?250:1900);
 splash?.addEventListener('click',closeSplash,{once:true});

 document.querySelectorAll('.top-drawer').forEach(panel=>document.body.append(panel));
 const buttons=[...document.querySelectorAll('[data-panel-target]')];
 const closePanels=except=>buttons.forEach(button=>{const panel=document.querySelector(`#${button.dataset.panelTarget}`);if(panel!==except)panel?.setAttribute('hidden','');if(panel!==except)button.setAttribute('aria-expanded','false')});
 buttons.forEach(button=>button.addEventListener('click',()=>{
  const panel=document.querySelector(`#${button.dataset.panelTarget}`);if(!panel)return;
  const opening=panel.hasAttribute('hidden');closePanels(opening?panel:null);
  panel.toggleAttribute('hidden',!opening);button.setAttribute('aria-expanded',String(opening));
 }));
 document.addEventListener('keydown',event=>{if(event.key==='Escape')closePanels(null)});
})();
