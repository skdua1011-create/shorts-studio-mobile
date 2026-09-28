const workerWorld=document.querySelector('#workerWorld');
const workerStatus=document.querySelector('#workerStatus');
const workerSpeech=document.querySelector('#workerSpeech');
const workerMeter=document.querySelector('#workerMeter');
const workPanelState=document.querySelector('#workPanelState');
const questItems=[...document.querySelectorAll('.quest-list li')];
const gameStates={
 idle:['새 업무를 기다리는 중','상호와 홍보 내용을 알려주세요.',12,0,'입력 대기'],
 collecting:['업무 내용을 정리 중','좋아요. 필요한 내용을 하나씩 확인할게요.',28,0,'내용 입력 중'],
 scanning:['첨부 자료 분석 중','사진과 영상을 장면별로 분류하고 있어요.',48,1,'자료 분석 중'],
 planning:['30초 기획 제작 중','도입, 반전, 증거 장면을 조립합니다.',72,2,'기획 생성 중'],
 filming:['영상 흐름 확인 중','카메라와 자막 타이밍을 확인합니다.',88,3,'미리보기 재생'],
 complete:['업무 완료','30초 기획이 완성됐습니다. 결과를 확인하세요.',100,3,'기획 완료']
};
function setWorkerState(state){const data=gameStates[state]||gameStates.idle;workerWorld.dataset.state=state;workerStatus.textContent=data[0];workerSpeech.textContent=data[1];workerMeter.style.width=`${data[2]}%`;if(workPanelState)workPanelState.textContent=data[4];questItems.forEach((item,index)=>{item.classList.toggle('active',index===data[3]);item.classList.toggle('done',index<data[3]||state==='complete')})}
window.gameWorker={setState:setWorkerState};
document.querySelector('#briefForm').addEventListener('input',()=>setWorkerState('collecting'));
document.querySelector('#promoAssets').addEventListener('change',()=>setWorkerState('scanning'));
document.querySelector('#briefForm').addEventListener('submit',()=>{const business=document.querySelector('#businessName').value.trim();const product=document.querySelector('#product').value.trim();if(business&&product)setWorkerState('planning')});
document.addEventListener('plan:created',()=>setTimeout(()=>setWorkerState('complete'),350));
document.querySelector('#result').addEventListener('click',event=>{if(event.target.closest('#simPlay'))setWorkerState('filming')});
document.querySelector('#codexRequest').addEventListener('input',()=>setWorkerState('collecting'));
document.querySelector('#codexPreview').addEventListener('click',()=>setWorkerState('planning'));
document.querySelector('#codexApply').addEventListener('click',()=>setWorkerState('planning'));
