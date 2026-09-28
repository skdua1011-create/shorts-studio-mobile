const codexState=document.querySelector('#codexState');
const codexRequest=document.querySelector('#codexRequest');
const codexPreview=document.querySelector('#codexPreview');
const codexApply=document.querySelector('#codexApply');
const codexOutput=document.querySelector('#codexOutput');
let reviewedRequest='';
let reviewId='';
let codexToken='';

async function codexCall(path,payload){
 const response=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json','X-Codex-Token':codexToken},body:JSON.stringify(payload)});
 const data=await response.json();
 if(!response.ok)throw new Error(data.error||'요청을 처리하지 못했습니다.');
 return data;
}

fetch('/codex/status').then(response=>response.json()).then(data=>{
 codexToken=data.token||'';
 codexState.textContent=data.connected?'Codex 연결됨':'Codex 연결 필요';
 codexState.className=`connection-state ${data.connected?'online':'offline'}`;
 codexPreview.disabled=!data.connected;
}).catch(()=>{codexState.textContent='전용 실행기로 다시 시작 필요';codexState.className='connection-state offline';codexPreview.disabled=true});

codexPreview.addEventListener('click',async()=>{
 const request=codexRequest.value.trim();if(request.length<5){codexOutput.textContent='수정 요청을 5자 이상 입력하세요.';return}
 codexPreview.disabled=true;codexApply.disabled=true;codexOutput.textContent='프로젝트를 읽고 수정 범위를 검토하고 있습니다.';
 try{const data=await codexCall('/codex/preview',{request});reviewedRequest=request;reviewId=data.reviewId;codexOutput.textContent=data.output;codexApply.disabled=false}
 catch(error){codexOutput.textContent=`검토 실패: ${error.message}`}
 finally{codexPreview.disabled=false}
});

codexApply.addEventListener('click',async()=>{
 if(!reviewedRequest||codexRequest.value.trim()!==reviewedRequest){codexOutput.textContent='요청 내용이 변경되었습니다. 수정안을 다시 검토하세요.';codexApply.disabled=true;return}
 codexPreview.disabled=true;codexApply.disabled=true;codexOutput.textContent='백업 후 검토한 변경을 적용하고 있습니다. 완료될 때까지 창을 닫지 마세요.';
 try{const data=await codexCall('/codex/apply',{request:reviewedRequest,reviewId});reviewId='';codexOutput.textContent=`${data.output}\n\n백업: ${data.backup}\n변경 사항을 보려면 페이지를 새로고침하세요.`}
 catch(error){codexOutput.textContent=`적용 실패: ${error.message}`}
 finally{codexPreview.disabled=false}
});
