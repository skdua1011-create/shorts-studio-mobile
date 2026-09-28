(function(root,factory){
 const api=factory();
 if(typeof module==='object'&&module.exports)module.exports=api;
 root.ShortsAbsurdity=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
 const strongDevices=new Set(['무생물상담','3초재판','긴급속보','타임루프','자막배신','침묵폭발','착각','금지어','최종보스','튜토리얼오류','ASMR배신','단체회의']);
 const industryKeywords={hair:['미용실','헤어','바버','살롱','컷트','커트'],food:['식당','갈비','고기','국밥','분식','김밥','치킨','피자','족발','횟집','한식','중식','일식'],cafe:['카페','커피','디저트','로스터리'],bakery:['베이커리','빵집','제과','제빵'],retail:['마트','슈퍼','편의점','상회'],fashion:['의류','옷가게','패션','잡화'],beauty:['네일','피부','에스테틱'],fitness:['헬스','필라테스','요가','짐'],academy:['학원','교습소','공부방'],repair:['수리','설비','열쇠','보일러'],clean:['청소','세탁','클리닝'],pet:['반려','애견','동물병원','펫'],photo:['사진관','스튜디오'],flower:['꽃집','플라워','화원'],realty:['부동산','공인중개'],auto:['세차','자동차','카센터','타이어'],lodging:['호텔','모텔','펜션','캠핑'],market:['수산','농산','청과','정육','시장'],care:['돌봄','방문요양','요양'],other:['서비스']};

 function hash(text){return [...String(text)].reduce((a,c)=>((a<<5)-a+c.charCodeAt(0))|0,0)>>>0}

 function withParticle(word,withFinal,withoutFinal){
  const last=String(word).codePointAt(String(word).length-1);
  const hasFinal=last>=0xac00&&last<=0xd7a3&&(last-0xac00)%28!==0;
  return `${word}${hasFinal?withFinal:withoutFinal}`;
 }

 function chooseKnowledge(pool,seed,intensity){
  const candidates=Number(intensity)===3?pool.filter(item=>strongDevices.has(item.device)):pool;
  const usable=candidates.length?candidates:pool;
  return usable[hash(seed)%usable.length];
 }

 function matchIndustryFromText(text){
  const normalized=String(text||'').replace(/\s+/g,'').toLowerCase();
  const ranked=Object.entries(industryKeywords).map(([id,words])=>{const matched=words.filter(word=>normalized.includes(word.toLowerCase()));return {id,score:matched.length,matched}}).filter(item=>item.score>0).sort((a,b)=>b.score-a.score||a.id.localeCompare(b.id));
  return ranked[0]||null;
 }

 function strongContract(){
  return [
   '첫 1초 안에 설명 없이 비정상 행동 1건을 화면으로 보여줌',
   '인물은 끝까지 무표정을 유지하고 상황과 소품만 과장함',
   '도입 소품을 중간 갈등과 마지막 회수에 반복 등장시킴',
   '0.5~1초 정적 직후 예상과 반대되는 행동으로 전환함',
   '평범한 진열·미소·제품 근접 촬영만으로 장면을 끝내지 않음',
   '화면 글자·가격·상호는 생성하지 않고 후반 편집으로 합성함'
  ];
 }

 function createStrongScenes({prop,product,pain,proof,businessName,point,visit,cta}){
  return [
   ['0-3초','비정상 사건',`첫 1초에 ${withParticle(prop,'을','를')} 마이크처럼 든 인물이 ${product} 앞에 과하게 정중히 차렷한다. 짧은 경보음 2회 뒤 아무도 설명하지 않음.`],
   ['3-8초','무생물 심문',`인물이 ${product}에 ${withParticle(prop,'을','를')} 들이대고 대답을 기다린다. 1초 완전 정적 뒤, 제품이 대답했다는 듯 심각하게 메모하고 고개를 끄덕임.`],
   ['8-15초','규칙 붕괴',`${pain}을 해결한다며 같은 ${prop} 3개가 회의하는 구도로 빠르게 교차 편집한다. 인물은 무표정으로 손가락만 들어 회의를 중단시킴.`],
   ['15-23초','증거 반격',`${businessName} 현장에서 ${proof}을 3개의 초근접 컷으로 제시한다. 각 컷 사이에 도입부 ${prop}의 황당한 판정 동작을 0.3초씩 삽입하며, ${point} 문구는 후반 자막으로만 처리.`],
   ['23-27초','반전 회수',`도입부 ${withParticle(prop,'이','가')} 다시 등장하자 인물이 ${withParticle(product,'을','를')} 보호하듯 품에 안고 무표정으로 \"이제야 말이 되네\"라고 말한다. 바로 다음 순간 제품을 원래 자리에 태연하게 돌려놓음.`],
   ['27-30초','건조한 퇴장',`${businessName}의 제품과 ${visit} 안내 영역을 비워 둔다. 인물은 ${cta} 손짓 대신 ${prop}에 고개 숙여 인사하고 화면 밖으로 퇴장함.`]
  ];
 }

 function buildFlowPrompt(data,plan){
  const strong=Number(data.tone)===3;
  const contract=strong?`\n병맛 연출 계약:\n${strongContract().map((item,i)=>`${i+1}) ${item}`).join('\n')}`:'';
  const clips=[
   {duration:8,range:'0-8초',scenes:plan.scenes.slice(0,2)},
   {duration:8,range:'8-16초',scenes:plan.scenes.slice(2,3)},
   {duration:8,range:'16-24초',scenes:plan.scenes.slice(3,4)},
   {duration:6,range:'24-30초',scenes:plan.scenes.slice(4,6)}
  ];
  const continuity=`동일 인물·의상·장소·소품 유지: 30대 한국인 점주, 단정한 흰 셔츠, 네이비 바지, 빨간 장화, 무표정, ${plan.k.prop}. 각 클립은 앞 클립의 마지막 손·시선·소품 위치에서 시작.`;
  const clipText=clips.map((clip,index)=>`CLIP ${index+1} · ${clip.duration}초 · 9:16\n${clip.scenes.map(scene=>`${scene[0]} ${scene[2]}`).join('\n')}\n끝 상태: 다음 클립이 이어받을 수 있도록 인물과 ${withParticle(plan.k.prop,'을','를')} 화면에 유지.`).join('\n\n');
  return `Google Flow 세로형 숏츠 제작 지시문\n최종 길이: 30초(8초+8초+8초+6초)\n업태: ${data.industry.name}\n제품·서비스: ${data.product}\n${continuity}${contract}\n\n${clipText}\n\n공통 금지: 평범한 시네마틱 제품 광고로 순화하지 않음. 인물이 제품을 들고 미소 짓는 장면, 빵이나 제품만 천천히 보여주는 장면, 의미 없는 워킹·진열 반복 금지. 생성 화면 안의 글자·로고·가격 금지. 위험 행동·타 상호 비방·확인되지 않은 효능 표현 금지.\n음향: 대사보다 짧은 경보음·완전 정적·생활 효과음을 우선하며, 웃음을 설명하는 음악은 사용하지 않음.`;
 }

 function buildScenarioSupport(data,plan){
  const assets=Array.isArray(data.assets)?data.assets:[];
  const labels=new Set(assets.map(asset=>asset.captureLabel).filter(Boolean));
  const required=[['매장',labels.has('매장 외관')||labels.has('매장 내부')],['실제 제품',labels.has('실제 제품')],['조리 과정',labels.has('조리 과정')],['출연자 기준',labels.has('출연자 기준')]];
  const readiness=required.map(([label,ready])=>`${ready?'확보':'미확보'}: ${label}`).join(' · ');
  const comment=data.conceptComment?` 추가 콘셉트: ${data.conceptComment}.`:'';
  const identity=`촬영 자료 상태: ${readiness}.${comment} 기준 이미지: 동일 점주 1명, 동일 의상, 동일 매장 위치, 동일 ${plan.k.prop}, 실제 판매 형태와 같은 ${data.product}. 첫 촬영 전에 정면 전신·상반신·소품·음식 기준 사진을 각각 확보.`;
  const cards=plan.scenes.map((scene,index)=>{
   const method=index===3?'직접 촬영 권장':'직접 촬영 우선 · 생성 보조 가능';
   const action=scene[2].replace(/\s+/g,' ').trim();
   return `장면 ${index+1} · ${scene[0]} · ${scene[1]}\n방식: ${method}\n화면 행동: ${action}\n생성 보조 입력: 세로 9:16, 고정 카메라, 기준 이미지와 동일한 인물·의상·장소·소품. ${scene[1]} 장면의 핵심 동작 1개만 수행. 화면 글자·로고·새 인물·새 소품을 만들지 않음.\n편집: 대사·효과음·자막은 영상 생성 후 별도 합성.`;
  }).join('\n\n');
  return `시나리오·촬영 보조 패키지\n업태: ${data.industry.name}\n제품·서비스: ${data.product}\n운영 원칙: 본 결과는 완성 영상을 보장하지 않으며, 촬영 시나리오와 장면별 생성 보조에만 사용. 실제 제품 형태·상호·가격·혜택은 사업자가 확인한 자료로 후반 편집에서 합성.\n${identity}\n\n사용 순서\n1) 기준 이미지를 먼저 촬영함\n2) 직접 촬영 가능한 조리·제품·반응 장면을 우선 확보함\n3) 생성 보조는 한 번에 1개 동작, 3~5초 분량으로만 사용함\n4) 각 결과를 아래 불합격 기준으로 판정함\n5) 통과 장면만 편집하고 자막·음향·상호를 후반 합성함\n\n${cards}\n\n불합격 기준\n- 얼굴·의상·소품·음식 형태가 기준 이미지와 다름\n- 손가락·집게·접시·조리도구의 개수나 형태가 변함\n- 요청하지 않은 가면·글자·로고·인물이 등장함\n- 한 장면에 2개 이상의 핵심 행동이 섞임\n- 장면의 웃음 장치가 사라지고 평범한 제품 광고가 됨\n- 실제 판매 제품과 다른 모양·양·조리 상태가 등장함\n\n재시도 원칙\n불합격 장면 전체를 길게 다시 만들지 않음. 해당 장면을 3~5초 단일 동작으로 줄이고 기준 이미지를 다시 지정한 뒤 1회 재시도. 두 번째도 불합격이면 직접 촬영 장면으로 교체.`;
 }

 return {strongDevices,industryKeywords,matchIndustryFromText,chooseKnowledge,strongContract,createStrongScenes,buildFlowPrompt,buildScenarioSupport,withParticle};
});
