const industries=[
 {id:'hair',name:'미용실·바버샵',pain:'거울 앞 기대와 현실의 간극',proof:'시술 전후 변화와 손질 과정',prop:'빗과 드라이어'},
 {id:'food',name:'음식점·분식',pain:'메뉴를 고르지 못하는 배고픈 손님',proof:'조리 장면과 한입 반응',prop:'집게와 접시'},
 {id:'cafe',name:'카페·디저트',pain:'당 충전이 시급한 오후',proof:'제조 과정과 단면',prop:'컵과 디저트 포크'},
 {id:'bakery',name:'베이커리',pain:'갓 나온 빵을 놓친 손님',proof:'오븐 오픈과 결 표현',prop:'빵 집게'},
 {id:'retail',name:'동네마트·소매점',pain:'필요한 물건을 못 찾는 상황',proof:'진열 위치와 실제 구성',prop:'장바구니'},
 {id:'fashion',name:'의류·잡화',pain:'입을 옷이 없다는 반복',proof:'착용 전후와 디테일',prop:'옷걸이'},
 {id:'beauty',name:'네일·피부관리',pain:'관리 전 급한 약속',proof:'과정과 마무리 상태',prop:'손거울'},
 {id:'fitness',name:'헬스·필라테스',pain:'작심삼일 운동 계획',proof:'동작 교정과 수업 환경',prop:'운동 매트'},
 {id:'academy',name:'학원·교습소',pain:'공부 시작만 미루는 상황',proof:'수업 방식과 학습 결과물',prop:'화이트보드'},
 {id:'repair',name:'수리·설비',pain:'고장 원인을 엉뚱하게 추측함',proof:'진단 과정과 수리 전후',prop:'공구함'},
 {id:'clean',name:'청소·세탁',pain:'지워지지 않는 얼룩과 먼지',proof:'작업 과정과 전후 비교',prop:'청소 장갑'},
 {id:'pet',name:'반려동물',pain:'보호자보다 먼저 요구하는 반려동물',proof:'서비스 과정과 안전 확인',prop:'간식 봉투'},
 {id:'photo',name:'사진관·스튜디오',pain:'카메라 앞에서 굳어버림',proof:'촬영 유도와 결과 사진',prop:'액자'},
 {id:'flower',name:'꽃집·선물',pain:'기념일을 뒤늦게 기억함',proof:'제작 과정과 완성 구성',prop:'리본'},
 {id:'realty',name:'부동산·공간',pain:'사진과 실제 공간의 차이를 걱정함',proof:'동선과 핵심 공간 실사',prop:'줄자'},
 {id:'auto',name:'자동차·세차',pain:'차 안 상태를 외면함',proof:'작업 전후와 세부 공정',prop:'세차 타월'},
 {id:'lodging',name:'숙박·캠핑',pain:'쉬러 가서 준비로 지침',proof:'객실과 편의 시설 동선',prop:'여행 가방'},
 {id:'market',name:'전통시장·농수산',pain:'좋은 재료를 고르기 어려움',proof:'선별 기준과 원물 상태',prop:'장바구니'},
 {id:'care',name:'돌봄·방문서비스',pain:'일상 지원이 필요한 순간',proof:'서비스 범위와 절차',prop:'일정표'},
 {id:'other',name:'기타 서비스',pain:'고객이 해결법을 몰라 헤맴',proof:'서비스 과정과 확인 가능한 결과',prop:'체크리스트'}
];

const devices=[
 ['과잉진지','사소한 문제를 국가적 위기처럼 브리핑한다'],['무생물상담','제품이 상담을 요청하는 설정'],['역할반전','사장과 고객의 역할이 뒤바뀐다'],['3초재판','제품의 쓸모를 즉석 재판한다'],['긴급속보','가게 안의 작은 사건을 속보로 전한다'],['가짜다큐','관찰 다큐처럼 진지하게 따라간다'],['타임루프','실패 장면이 해결될 때까지 반복된다'],['선택게임','두 선택지 중 엉뚱한 답을 고른다'],['극한직업','평범한 업무를 극한 미션처럼 묘사한다'],['비밀요원','제품 확보 임무를 수행한다'],
 ['청문회','제품이 질문 공세를 받고 증거로 답한다'],['스포츠중계','일상 행동을 결승전처럼 중계한다'],['자막배신','화면과 정반대의 자막이 등장한다'],['침묵폭발','무표정 연기 뒤에 빠른 반전이 온다'],['크기과장','작은 소품으로 큰 문제를 표현한다'],['소리반전','진지한 화면에 생활 소리를 배치한다'],['오디션','제품들이 선택받기 위해 경쟁한다'],['면접','고객의 문제를 지원 자격처럼 묻는다'],['예언','잠시 뒤 생길 문제를 먼저 경고한다'],['착각','전혀 다른 상황으로 오해하다 해결한다'],
 ['복제인간','사장 역할이 여러 명으로 분열된다'],['느린추격','아주 느린 물건을 필사적으로 쫓는다'],['금지어','핵심 단어를 말할 때마다 사건이 생긴다'],['순간이동','장소 전환으로 서비스 속도를 표현한다'],['전문가빙의','소품이 전문가처럼 평가한다'],['최종보스','고객의 문제를 게임 보스로 만든다'],['튜토리얼오류','쉬운 사용법을 일부러 복잡하게 설명한다'],['증거수집','장점을 탐정처럼 하나씩 확인한다'],['ASMR배신','조용한 시작 뒤 빠른 상황극으로 전환한다'],['카운트다운','제한 시간 안에 문제를 해결한다'],
 ['평행세계','이용 전과 후를 두 세계로 비교한다'],['가격수사','혜택을 단서처럼 추적한다'],['단체회의','소품들이 고객 문제로 회의한다'],['퇴근방해','마감 직전 예상 밖 요청이 등장한다'],['첫눈에반함','제품을 본 순간 과장된 반응을 한다'],['기억상실','상호만 빼고 전부 잊은 인물 설정'],['리모컨','버튼으로 상황의 속도와 표정을 바꾼다'],['무한리필대사','같은 문장이 맥락만 바꿔 반복된다'],['관객참여','마지막 선택을 댓글로 받는다'],['비포애프터재판','전후 장면을 증인으로 세운다']
];

const knowledgeBase=industries.flatMap(industry=>devices.map((device,index)=>({
 id:`${industry.id}-${String(index+1).padStart(2,'0')}`,industry:industry.name,device:device[0],mechanic:device[1],pain:industry.pain,proof:industry.proof,prop:industry.prop,
 guardrail:'확인되지 않은 가격·효능·최상급 표현을 만들지 않고 실제 제공 범위만 제시',sourceType:'기획 패턴과 업태 맥락의 구조화 조합'
})));

let uploadedAssets=[];
const roleRules=[
 {role:'전 상태',scene:2,words:['before','전','손상','시술전','관리전','문제']},
 {role:'후 상태',scene:4,words:['after','후','완성','시술후','관리후','결과']},
 {role:'과정·증거',scene:3,words:['process','과정','시술','작업','detail','제품','서비스']},
 {role:'매장·도입',scene:0,words:['shop','store','매장','외관','간판','입구']}
];
function assetRole(name,type,index){const lower=name.toLowerCase();const matched=roleRules.find(rule=>rule.words.some(word=>lower.includes(word)));if(matched)return {...matched,basis:'파일명 근거'};if(type.startsWith('video/'))return {role:'과정·증거',scene:3,basis:'영상 형식 임시 배치'};return {...[{role:'매장·도입',scene:0},{role:'문제 확대',scene:1},{role:'전 상태',scene:2},{role:'과정·증거',scene:3},{role:'후 상태',scene:4},{role:'마무리',scene:5}][index%6],basis:'순서 기반 임시 배치'}}
function inspectFile(file,index){return new Promise(resolve=>{const url=URL.createObjectURL(file);const base={file,url,name:file.name,type:file.type,size:file.size,...assetRole(file.name,file.type,index)};if(file.type.startsWith('video/')){const video=document.createElement('video');video.preload='metadata';video.onloadedmetadata=()=>resolve({...base,width:video.videoWidth,height:video.videoHeight,duration:video.duration});video.onerror=()=>resolve(base);video.src=url;return}const image=new Image();image.onload=()=>resolve({...base,width:image.naturalWidth,height:image.naturalHeight});image.onerror=()=>resolve(base);image.src=url})}
const assetRoles=[['매장·도입',0],['문제 확대',1],['전 상태',2],['과정·증거',3],['후 상태',4],['마무리',5]];
function captureReadiness(){const labels=new Set(uploadedAssets.map(asset=>asset.captureLabel).filter(Boolean));const ready=[labels.has('매장 외관')||labels.has('매장 내부'),labels.has('실제 제품'),labels.has('조리 과정'),labels.has('출연자 기준')].filter(Boolean).length;const progress=document.querySelector('#captureProgress');if(progress)progress.textContent=`${ready}/4 완료`;return ready}
function renderAssetList(){const list=document.querySelector('#assetList');list.innerHTML=uploadedAssets.map((asset,index)=>{const thumb=asset.type.startsWith('video/')?`<video class="asset-thumb" src="${asset.url}" muted playsinline></video>`:`<img class="asset-thumb" src="${asset.url}" alt="">`;const options=assetRoles.map(([role,scene])=>`<option value="${scene}" ${scene===asset.scene?'selected':''}>${role}</option>`).join('');const framing=asset.width&&asset.height?(asset.height>asset.width?'세로 적합':'가로 크롭 확인'):'';return `<div class="asset-item" data-index="${index}">${thumb}<div class="asset-meta"><b>${escapeHtml(asset.captureLabel||asset.name)}</b><span>${asset.width||'?'}×${asset.height||'?'}${asset.duration?` · ${asset.duration.toFixed(1)}초`:''}</span><span>${escapeHtml(asset.basis||'임시 배치')}${framing?` · ${framing}`:''}</span></div><select class="asset-role" aria-label="${escapeHtml(asset.name)} 장면 역할">${options}</select><button class="asset-remove" type="button" aria-label="${escapeHtml(asset.name)} 제거">삭제</button></div>`}).join('');captureReadiness()}
async function receiveFiles(files,forced=null){const status=document.querySelector('#assetStatus');const incoming=[...files].filter(file=>file.type.startsWith('image/')||file.type.startsWith('video/'));const room=Math.max(0,12-uploadedAssets.length);const accepted=incoming.filter(file=>file.size<=200*1024*1024).slice(0,room);const rejected=incoming.length-accepted.length;if(!accepted.length){status.textContent=rejected?'최대 12개, 파일당 200MB 이하만 첨부할 수 있습니다.':'지원되는 사진 또는 영상이 없습니다.';return}status.textContent=`${accepted.length}개 자료 분석 중`;if(window.gameWorker)window.gameWorker.setState('scanning');const analyzed=await Promise.all(accepted.map((file,index)=>inspectFile(file,uploadedAssets.length+index)));if(forced){const role=assetRoles.find(item=>item[1]===forced.scene)?.[0]||'과정·증거';analyzed.forEach(asset=>Object.assign(asset,{scene:forced.scene,role,captureLabel:forced.label,basis:'휴대폰 현장 촬영'}))}uploadedAssets.push(...analyzed);renderAssetList();status.textContent=`${uploadedAssets.length}개 준비 완료${rejected?` · ${rejected}개 제외`:''}`}

const promoAssets=document.querySelector('#promoAssets');const assetDrop=document.querySelector('#assetDrop');
promoAssets.addEventListener('change',event=>{receiveFiles(event.target.files);event.target.value=''});
document.querySelectorAll('[data-capture-role]').forEach(input=>input.addEventListener('change',event=>{receiveFiles(event.target.files,{scene:Number(event.target.dataset.captureRole),label:event.target.dataset.captureLabel});event.target.value=''}));
const signPhoto=document.querySelector('#signPhoto');
const signText=document.querySelector('#signText');
const signState=document.querySelector('#signAnalysisState');
const industrySuggestion=document.querySelector('#industrySuggestion');
const applyIndustrySuggestion=document.querySelector('#applyIndustrySuggestion');
function recommendIndustry(){const words={hair:['미용실','헤어','바버','살롱'],food:['식당','갈비','고기','국밥','분식','김밥','치킨','피자','족발','횟집'],cafe:['카페','커피','디저트'],bakery:['베이커리','빵집','제과'],retail:['마트','슈퍼','편의점'],beauty:['네일','피부','에스테틱'],fitness:['헬스','필라테스','요가'],academy:['학원','교습소'],clean:['청소','세탁'],pet:['반려','애견','펫'],photo:['사진관','스튜디오'],flower:['꽃집','플라워'],realty:['부동산','공인중개'],auto:['세차','카센터','타이어'],lodging:['호텔','모텔','펜션','캠핑'],market:['수산','농산','청과','정육','시장'],care:['돌봄','방문요양','요양']};const normalized=signText.value.replace(/\s+/g,'').toLowerCase();const matched=Object.entries(words).map(([id,list])=>({id,matched:list.filter(word=>normalized.includes(word))})).filter(item=>item.matched.length).sort((a,b)=>b.matched.length-a.matched.length)[0];if(!matched){applyIndustrySuggestion.disabled=true;delete applyIndustrySuggestion.dataset.industry;industrySuggestion.textContent='일치하는 업태를 찾지 못했습니다. 간판의 업종 단어를 추가하거나 업태를 직접 선택하세요.';return}const industry=industries.find(item=>item.id===matched.id);applyIndustrySuggestion.disabled=false;applyIndustrySuggestion.dataset.industry=matched.id;industrySuggestion.textContent=`추천 업태: ${industry.name} · 근거 단어: ${matched.matched.join(', ')}`;signState.textContent='추천 확인 필요'}
signPhoto.addEventListener('change',async event=>{const file=event.target.files[0];if(!file)return;receiveFiles([file],{scene:0,label:'상호 간판'});signState.textContent='간판 글자 인식 중';try{if(!('TextDetector' in window))throw new Error('unsupported');const bitmap=await createImageBitmap(file);const detector=new TextDetector();const blocks=await detector.detect(bitmap);bitmap.close();const text=blocks.map(block=>block.rawValue).filter(Boolean).join(' ').trim();if(!text)throw new Error('empty');signText.value=text;signState.textContent='글자 인식 완료';recommendIndustry()}catch{signState.textContent='글자 직접 확인 필요';industrySuggestion.textContent='이 기기에서는 자동 글자 인식을 사용할 수 없습니다. 간판 글자를 입력하면 업태를 추천합니다.'}finally{event.target.value=''}});
document.querySelector('#analyzeSign').addEventListener('click',recommendIndustry);
applyIndustrySuggestion.addEventListener('click',()=>{const id=applyIndustrySuggestion.dataset.industry;if(!id)return;industrySelect.value=id;industrySelect.dispatchEvent(new Event('change',{bubbles:true}));const businessName=document.querySelector('#businessName');if(!businessName.value.trim()&&signText.value.trim())businessName.value=signText.value.trim();document.querySelector('#briefForm').dispatchEvent(new Event('input',{bubbles:true}));signState.textContent='업태 적용 완료'});
['dragenter','dragover'].forEach(name=>assetDrop.addEventListener(name,event=>{event.preventDefault();assetDrop.classList.add('dragover')}));
['dragleave','drop'].forEach(name=>assetDrop.addEventListener(name,event=>{event.preventDefault();assetDrop.classList.remove('dragover')}));
assetDrop.addEventListener('drop',event=>receiveFiles(event.dataTransfer.files));
document.querySelector('#assetList').addEventListener('change',event=>{if(!event.target.matches('.asset-role'))return;const index=Number(event.target.closest('.asset-item').dataset.index);const scene=Number(event.target.value);const role=assetRoles.find(item=>item[1]===scene)[0];Object.assign(uploadedAssets[index],{scene,role});document.querySelector('#assetStatus').textContent=`${uploadedAssets[index].name} 역할을 ${role}(으)로 변경했습니다.`});
document.querySelector('#assetList').addEventListener('click',event=>{const button=event.target.closest('.asset-remove');if(!button)return;const index=Number(button.closest('.asset-item').dataset.index);const [removed]=uploadedAssets.splice(index,1);URL.revokeObjectURL(removed.url);renderAssetList();document.querySelector('#assetStatus').textContent=`${removed.name}을 제거했습니다.`});
window.addEventListener('beforeunload',()=>uploadedAssets.forEach(asset=>URL.revokeObjectURL(asset.url)));

const industrySelect=document.querySelector('#industry');
industries.forEach(item=>industrySelect.add(new Option(item.name,item.id)));
document.querySelector('#knowledgeCount').textContent=knowledgeBase.length;
const beautyOption=document.querySelector('#beautyOption');
function syncBeautyOption(){
 const enabled=['hair','beauty'].includes(industrySelect.value);
 beautyOption.hidden=!enabled;
 document.querySelector('#beautyTransform').disabled=!enabled;
}
industrySelect.addEventListener('change',syncBeautyOption);
syncBeautyOption();

function hash(text){return [...text].reduce((a,c)=>((a<<5)-a+c.charCodeAt(0))|0,0)>>>0}
function escapeHtml(text=''){return text.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
let generationVariant=0;
function selectedKnowledge(data){
 const pool=knowledgeBase.filter(k=>k.industry===data.industry.name);
 return ShortsAbsurdity.chooseKnowledge(pool,`${data.businessName}${data.product}${data.sellingPoint}${data.conceptComment||''}${generationVariant}`,data.tone);
}

function createPlan(data){
 const k=selectedKnowledge(data); const point=data.sellingPoint&&data.sellingPointVerified==='yes'?data.sellingPoint:'게시 전 사업자 확인 필요'; const customer=data.audience||'해당 제품이나 서비스가 필요한 지역 고객';
 const intensity=Number(data.tone); const beat=intensity===1?'생활 공감 중심':intensity===3?'빠른 반전 중심':'공감과 반전의 균형';
 const transform=data.beautyTransform==='comic'
  ? {label:'못난 얼굴에서 잘난 얼굴로 바뀌는 코믹 반전',before:'헝클어진 헤어, 과장된 찡그린 표정, 고개를 숙인 자세와 평평한 조명으로 코믹하게 연출',after:'정돈된 헤어, 자신감 있는 표정, 곧은 자세와 화사한 조명으로 동일 인물의 매력을 강조'}
  : data.beautyTransform==='glam'
   ? {label:'지친 인상에서 화사한 인상으로 바뀌는 자연스러운 반전',before:'정돈 전 헤어, 지친 표정과 평평한 조명으로 관리 전 상태를 자연스럽게 표현',after:'정돈된 헤어, 편안한 미소와 화사한 조명으로 동일 인물의 생기를 강조'}
   : null;
 const conflict=transform?`${transform.before}. 거울을 확인한 인물이 1초간 정지한 뒤 소품을 바라봄.`:`${k.pain}을 몸짓과 소품으로 과장. 1초 정적 뒤 짧은 효과음.`;
 const reveal=transform?`${transform.after}. 얼굴 형태를 바꾸지 않고 스타일링 전후를 같은 구도에서 비교.`:'도입부 소품이 다시 등장하고 인물이 무표정으로 "이제야 말이 되네"라고 마무리.';
 const region=data.region?`${data.region}의 `:'';const visit=[data.region,data.contactInfo].filter(Boolean).join(' · ')||`${data.cta} 방법을 게시 전 입력`;
 const hooks=[`문제형: ${region}${customer}이 겪는 ${k.pain}, 정상 맞나요?`,`결과 선공개형: ${data.product} 전후를 먼저 보여드리겠습니다`,`소품형: ${k.prop}까지 긴급 출동한 이유`];
 const defaultScenes=[
  ['0-3초','멈춤 장면',`${k.prop} 등장. 화면 중앙을 가득 채우며 자막: "지금 이 상황, 정상 맞나요?"`],
  ['3-8초','문제 확대',`${k.mechanic}. 인물이 "${data.product} 때문에 온 건 아닌데요"라고 능청스럽게 말함.`],
  ['8-15초','엉뚱한 충돌',conflict],
  ['15-23초','증거 제시',`${data.businessName} 현장에서 ${k.proof} 중심으로 근접 촬영. 자막은 "${point}"만 간결하게 표시.`],
  ['23-27초',transform?'외모 반전':'반전 회수',reveal],
  ['27-30초','행동 유도',`${data.businessName} 상호와 ${visit} 노출. ${data.cta} 행동을 한 가지로 명확히 안내.`]
 ];
 const scenes=intensity===3&&!transform?ShortsAbsurdity.createStrongScenes({prop:k.prop,product:data.product,pain:k.pain,proof:k.proof,businessName:data.businessName,point,visit,cta:data.cta}):defaultScenes;
 const comment=data.conceptComment?` · 추가 콘셉트: ${data.conceptComment}`:'';
 return {k,hooks,visit,concept:`${k.device} 형식으로 고객의 문제를 과장한 뒤, ${data.product} 관련 ${k.proof} 장면을 활용해 해결하는 ${beat} 기획${comment}`,scenes,customer,point,transform};
}

let simulatorTimer=null;

function setupSimulator(data,plan){
 if(simulatorTimer) clearInterval(simulatorTimer);
 const starts=[0,3,8,15,23,27];
 const images=['더엠헤어/다운로드.jpg','더엠헤어/다운로드%20(1).jpg','더엠헤어/다운로드%20(1).jpg','더엠헤어/다운로드%20(2).jpg','더엠헤어/다운로드%20(1).jpg','더엠헤어/다운로드%20(2).jpg'];
 const hasSalonImages=['hair','beauty'].includes(data.industry.id);
 let elapsed=0;
 let playing=false;
 const stage=document.querySelector('#simStage');
 const caption=document.querySelector('#simCaption');
 const sceneName=document.querySelector('#simSceneName');
 const clock=document.querySelector('#simClock');
 const progress=document.querySelector('#simProgress');
 const play=document.querySelector('#simPlay');
 const media=document.querySelector('#simMedia');
 const video=document.querySelector('#simVideo');
 const sfx=document.querySelector('#simSfx');
 const sceneButtons=[...document.querySelectorAll('.sim-scene-button')];
 const cues=['쿵','띠링','정적','사각사각','반짝','찰칵'];
 let lastIndex=-1;
 function sceneIndexAt(second){for(let i=starts.length-1;i>=0;i--)if(second>=starts[i])return i;return 0}
 function paint(){
  const index=sceneIndexAt(elapsed);const scene=plan.scenes[index];
  clock.textContent=`${elapsed.toFixed(1)} / 30.0초`;progress.style.width=`${Math.min(100,elapsed/30*100)}%`;
  sceneName.textContent=scene[1];caption.textContent=scene[2];stage.dataset.scene=String(index+1);sfx.textContent=cues[index];
  if(index!==lastIndex){
   const exact=data.assets.find(asset=>asset.scene===index);const fallback=data.assets[index%Math.max(1,data.assets.length)];const asset=exact||fallback;
   video.pause();video.style.display='none';media.style.display='block';
   if(asset?.type.startsWith('video/')){media.style.display='none';video.style.display='block';video.src=asset.url;video.currentTime=0;if(playing)video.play().catch(()=>{})}
   else media.src=asset?.url||images[index];
   stage.classList.remove('scene-enter');void stage.offsetWidth;stage.classList.add('scene-enter');lastIndex=index;
  }
  sceneButtons.forEach((button,i)=>button.classList.toggle('active',i===index));
 }
 function stop(){playing=false;video.pause();play.textContent='재생';play.setAttribute('aria-pressed','false');if(simulatorTimer){clearInterval(simulatorTimer);simulatorTimer=null}}
 function start(){
  if(elapsed>=30)elapsed=0;playing=true;play.textContent='일시정지';play.setAttribute('aria-pressed','true');
  if(video.style.display==='block')video.play().catch(()=>{});simulatorTimer=setInterval(()=>{elapsed=Math.min(30,elapsed+.1);paint();if(elapsed>=30)stop()},100);
 }
 play.addEventListener('click',()=>playing?stop():start());
 document.querySelector('#simRestart').addEventListener('click',()=>{stop();elapsed=0;paint()});
 sceneButtons.forEach((button,index)=>button.addEventListener('click',()=>{stop();elapsed=starts[index];paint()}));
 paint();
}

function renderPlan(data,plan){
 const scenes=plan.scenes.map(s=>`<div class="scene"><time>${s[0]}</time><div><b>${s[1]}</b><p>${escapeHtml(s[2])}</p></div></div>`).join('');
 const transformPrompt=plan.transform?`\n외모 반전: ${plan.transform.label}. 동일 인물·동일 구도를 유지하고 얼굴 골격이나 피부색은 변경하지 않음. 변화는 헤어, 표정, 자세, 조명으로만 표현.`:'';
 const supportPrompt=ShortsAbsurdity.buildScenarioSupport(data,plan)+transformPrompt;
 const title=`${data.product} 때문에 ${plan.k.prop}까지 출동했습니다`;
 const locationTitle=data.region?`${data.region} ${data.product}`:`${data.industry.name} ${data.product}`;
 const channelGuide=data.platform==='Instagram Reels'
  ? [`릴스 첫 문장: ${plan.hooks[1]}`,`캡션: ${data.businessName} · ${plan.visit}`,`저장 이유: 방문 전 서비스와 위치를 다시 확인하기`]
  : data.platform==='YouTube Shorts'
   ? [`검색 제목: ${locationTitle} 직접 확인해봤습니다`,`상황극 제목: ${title}`,`고정 댓글: ${plan.visit}`]
   : [`YouTube 검색 제목: ${locationTitle} 직접 확인해봤습니다`,`Instagram 첫 문장: ${plan.hooks[1]}`,`공통 방문정보: ${plan.visit}`];
 document.querySelector('#result').className='result';
 const simulatorButtons=plan.scenes.map((scene,index)=>`<button class="sim-scene-button" type="button"><span>${index+1}</span>${escapeHtml(scene[1])}</button>`).join('');
 const assetSummary=data.assets.length?`${data.assets.length}개 자료 분석 완료 · ${data.assets.map(asset=>asset.role).join(' · ')}`:'첨부 자료 없음 · 기본 예시 화면 사용';
 document.querySelector('#result').innerHTML=`<div class="result-head"><div><span class="badge">${escapeHtml(data.industry.name)} 전용 · ${escapeHtml(plan.k.device)}</span><h2 id="resultTitle">${escapeHtml(title)}</h2></div><button class="copy-btn" id="copyAll" type="button">전체 복사</button></div><p class="concept">${escapeHtml(plan.concept)}</p><div class="generation-limit"><b>제작 범위 안내</b><span>완성 영상을 자동 제작하지 않습니다. 촬영 시나리오, 장면별 생성 보조 입력, 불합격 판정 기준을 제공합니다.</span></div><section class="simulator" aria-labelledby="simulatorTitle"><div class="simulator-head"><div><span class="badge">콘티 프리뷰 · 30초</span><h3 id="simulatorTitle">촬영·편집 리듬 미리보기</h3></div><div class="simulator-controls"><button id="simPlay" type="button" aria-pressed="false">재생</button><button id="simRestart" type="button">처음부터</button></div></div><div class="simulator-body"><div class="phone"><div class="phone-stage" id="simStage"><img class="sim-media" id="simMedia" alt="현재 장면 미리보기"><div class="sim-vignette"></div><div class="sim-props" aria-hidden="true"><span class="sim-brush"><i></i></span><span class="sim-dryer"><i></i></span></div><span class="sim-sfx" id="simSfx"></span><div class="sim-flash" aria-hidden="true"></div><div class="safe-area" aria-hidden="true"></div><div class="platform-ui"><span>${escapeHtml(data.platform)}</span><b id="simClock">0.0 / 30.0초</b></div><div class="phone-copy"><small id="simSceneName"></small><strong id="simCaption"></strong><em>${escapeHtml(data.businessName)}</em></div><div class="sim-progress-track"><span id="simProgress"></span></div></div></div><div class="simulator-panel"><p>정지 이미지로 장면 순서와 편집 리듬만 점검하는 콘티입니다.</p><div class="sim-scene-list">${simulatorButtons}</div><div class="sim-note"><b>사용 기준</b><span>조리·제품·고객 반응은 직접 촬영을 우선하고, 생성 보조는 3~5초 단일 동작에만 사용합니다.</span></div></div></div></section><div class="timeline">${scenes}</div><div class="prompt-box"><h3>시나리오·촬영 보조 패키지</h3><pre id="videoPrompt">${escapeHtml(supportPrompt)}</pre></div><div class="publishing"><h3>${escapeHtml(data.platform)} 게시안</h3><ul><li>제목: ${escapeHtml(title)}</li><li>첫 댓글: "여러분이라면 바로 ${escapeHtml(data.cta)}한다 vs 한 번 더 본다"</li><li>검색 문구: 상호명, 업태, 지역명, 제품명을 자연스럽게 제목과 설명에 포함</li><li>검증: 게시 전 가격, 효능, 음원 권리, 인물 촬영 동의를 확인</li></ul></div>`;
 document.querySelector('.concept').insertAdjacentHTML('afterend',`<div class="asset-plan"><b>첨부 자료 자동 배치</b><span>${escapeHtml(assetSummary)}</span></div>`);
 document.querySelector('.asset-plan').insertAdjacentHTML('beforebegin',`<div class="hook-options"><b>첫 3초 후킹 3안</b>${plan.hooks.map((hook,index)=>`<button type="button"><span>${index+1}</span>${escapeHtml(hook)}</button>`).join('')}</div>`);
 document.querySelector('.sim-props').innerHTML=`<span class="sim-object-label">${escapeHtml(plan.k.prop)}</span>`;
 document.querySelector('#simMedia').insertAdjacentHTML('afterend','<video class="sim-video" id="simVideo" muted playsinline loop></video>');
 document.querySelector('.timeline').insertAdjacentHTML('afterend','<div class="shoot-checklist"><h3>촬영 전 확인</h3><label><input type="checkbox"> 필요한 전·과정·후 컷 확보</label><label><input type="checkbox"> 인물 촬영 동의</label><label><input type="checkbox"> 음원·이미지 상업 이용 권리</label><label><input type="checkbox"> 지역·예약·영업정보 확인</label><label><input type="checkbox"> 가격·효능·혜택 문구 확인</label></div>');
 document.querySelector('.publishing').insertAdjacentHTML('afterbegin',`<div class="channel-package"><b>${escapeHtml(data.platform)} 전용 게시 패키지</b>${channelGuide.map(item=>`<p>${escapeHtml(item)}</p>`).join('')}</div>`);
 document.querySelector('#copyAll').addEventListener('click',async e=>{await navigator.clipboard.writeText(document.querySelector('#result').innerText.replace('전체 복사',''));e.currentTarget.textContent='복사 완료';setTimeout(()=>e.currentTarget.textContent='전체 복사',1500)});
 document.querySelector('#copyAll').insertAdjacentHTML('beforebegin','<button class="copy-btn" id="regeneratePlan" type="button">다른 기획</button>');
 document.querySelector('#regeneratePlan').addEventListener('click',()=>{generationVariant+=1;document.querySelector('#briefForm').requestSubmit()});
 setupSimulator(data,plan);
}

document.querySelector('#briefForm').addEventListener('submit',event=>{
 event.preventDefault(); const form=new FormData(event.currentTarget); const raw=Object.fromEntries(form.entries()); const error=document.querySelector('#formError');
 if(!raw.businessName.trim()||!raw.product.trim()){error.textContent='상호명과 홍보 제품 또는 서비스를 입력하세요.';return}
 error.textContent=''; const industry=industries.find(i=>i.id===raw.industry); const data={...raw,businessName:raw.businessName.trim(),product:raw.product.trim(),sellingPoint:raw.sellingPoint.trim(),audience:raw.audience.trim(),conceptComment:(raw.conceptComment||'').trim(),industry,assets:[...uploadedAssets]}; renderPlan(data,createPlan(data)); document.dispatchEvent(new CustomEvent('plan:created')); document.querySelector('#result').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
});

window.__SHORTS_KB__=knowledgeBase;
