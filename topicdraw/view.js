const A={non:"/topicdraw/assets/non.webp",tile:"/topicdraw/assets/tile.webp"};
const S='stroke="#10275C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"';
const ART={
pho:`<svg viewBox="0 0 100 100" fill="none" ${S}><path d="M38 26c-4-6 4-9 0-15M50 24c-4-6 4-9 0-15M62 26c-4-6 4-9 0-15" stroke="#4AACCE"/><path d="M14 48h72c0 19-16 32-36 32S14 67 14 48z" fill="#D8ECF8"/><path d="M22 60c9 5 47 5 56 0" stroke="#1F4FC1"/><path d="M41 80l2 7h14l2-7"/><ellipse cx="50" cy="48" rx="36" ry="7" fill="#F7E2BE"/><path d="M30 47c4-3 8 3 12 0s8 3 12 0 8 3 12 0" stroke="#E9C98B"/><rect x="52" y="42" width="12" height="7" rx="2.5" fill="#C9774B"/><path d="M28 46c3-5 9-4 10 0-4 3-8 3-10 0z" fill="#5BA45F"/><path d="M62 44L92 14M68 46L95 22"/></svg>`,
laksa:`<svg viewBox="0 0 100 100" fill="none" ${S}><path d="M14 48h72c0 19-16 32-36 32S14 67 14 48z" fill="#FBE7DC"/><path d="M20 58h60" stroke="#E8501B"/><path d="M22 64l4 4 4-4 4 4 4-4 4 4 4-4 4 4 4-4 4 4 4-4 4 4 4-4" stroke="#E8501B" stroke-width="2"/><path d="M41 80l2 7h14l2-7"/><ellipse cx="50" cy="48" rx="36" ry="7" fill="#F4A261"/><circle cx="30" cy="47" r="1.6" fill="#B53A0F" stroke="none"/><circle cx="70" cy="49" r="1.6" fill="#B53A0F" stroke="none"/><circle cx="46" cy="51" r="1.4" fill="#B53A0F" stroke="none"/><path d="M34 46a7 7 0 0 1 14 0z" fill="#fff"/><circle cx="41" cy="45.5" r="3" fill="#F2B632" stroke="none"/><path d="M54 47c2-7 12-8 14-2-4 1-7 0-9 3" fill="#F7A27E"/><path d="M76 40c6-14 12-22 16-22 3 1 1 6-3 9L80 44" fill="#fff"/></svg>`,
chung:`<svg viewBox="0 0 100 100" fill="none" ${S}><rect x="20" y="22" width="60" height="60" rx="5" fill="#8FC27F"/><path d="M28 30l12 12M60 30l12 12M28 62l12 12M60 62l12 12" stroke="#5E9450" stroke-width="2"/><path d="M38 22v60M62 22v60M20 44h60M20 64h60" stroke="#E7D3A0" stroke-width="5"/><path d="M38 22v60M62 22v60M20 44h60M20 64h60" stroke="#10275C" stroke-width="1" opacity=".35"/><path d="M50 22c-6-8-14-8-14-3 0 4 8 4 14 3zM50 22c6-8 14-8 14-3 0 4-8 4-14 3z" fill="#E7D3A0"/></svg>`,
ketupat:`<svg viewBox="0 0 100 100" fill="none" ${S}><path d="M50 22l30 30-30 30-30-30z" fill="#D7E6A0"/><path d="M42 30l30 30M34 38l30 30M58 30L28 60M66 38L36 68" stroke="#9BB55A" stroke-width="2"/><path d="M50 22l30 30-30 30-30-30z"/><path d="M50 22c4-8 10-12 16-14M50 22c6-6 14-8 22-6" stroke="#7EA34A" stroke-width="3"/></svg>`,
cau:`<svg viewBox="0 0 100 100" fill="none" ${S}><path d="M46 66C40 46 26 30 20 16c10 4 22 18 30 46" fill="#F7A27E"/><path d="M50 62C48 42 44 24 42 10c8 6 12 24 12 48" fill="#9FD3E8"/><path d="M54 62C58 42 62 24 66 12c4 10 0 30-8 52" fill="#F7A27E"/><path d="M56 66C64 48 76 32 84 20c0 12-12 30-24 48" fill="#9FD3E8"/><rect x="38" y="64" width="24" height="8" rx="3" fill="#E8501B"/><rect x="40" y="72" width="20" height="7" rx="3" fill="#1F4FC1"/><rect x="42" y="79" width="16" height="7" rx="3" fill="#E8501B"/><path d="M14 92h72" stroke="#4AACCE"/></svg>`,
stones:`<svg viewBox="0 0 100 100" fill="none" ${S}><path d="M16 84l9-16 10 16z" fill="#F7A27E"/><path d="M36 86l9-16 10 16z" fill="#9FD3E8"/><path d="M58 84l9-16 10 16z" fill="#F2B632"/><path d="M26 66l9-14 9 14z" fill="#B8A2DB"/><path d="M62 30l9-15 10 15z" fill="#F7A27E"/><path d="M60 40c-4 6-6 12-6 18M72 40c0 6 1 10 3 14" stroke="#4AACCE" stroke-dasharray="3 5"/><circle cx="22" cy="80" r="1.4" fill="#10275C" stroke="none"/><circle cx="45" cy="81" r="1.4" fill="#10275C" stroke="none"/><circle cx="67" cy="79" r="1.4" fill="#10275C" stroke="none"/><path d="M10 92h80" stroke="#4AACCE"/></svg>`,
non:`<img src="${A.non}" alt="">`,
tile:`<img src="${A.tile}" alt="">`,
mam:`<svg viewBox="0 0 100 100" fill="none" ${S}><circle cx="50" cy="52" r="38" fill="#E9C98B"/><circle cx="50" cy="52" r="32" stroke="#C99A55"/><circle cx="50" cy="52" r="10" fill="#fff"/><path d="M44 52c3-3 9-3 12 0-3 3-9 3-12 0z" fill="#F7A27E"/><circle cx="32" cy="38" r="7" fill="#fff"/><circle cx="68" cy="38" r="7" fill="#fff"/><circle cx="32" cy="66" r="7" fill="#fff"/><circle cx="68" cy="66" r="7" fill="#fff"/><path d="M29 36h6M65 36h6" stroke="#5BA45F"/><path d="M42 78l16-4M43 82l16-4" stroke="#9C5B2E"/></svg>`,
tea:`<svg viewBox="0 0 100 100" fill="none" ${S}><path d="M22 50c0-10 10-16 22-16s22 6 22 16-10 22-22 22-22-12-22-22z" fill="#D8ECF8"/><path d="M34 34c0-5 4-8 10-8s10 3 10 8" fill="#fff"/><circle cx="44" cy="23" r="3" fill="#1F4FC1"/><path d="M22 48c-8-4-14 0-12 6l6 4" /><path d="M66 46c8-2 12 6 6 12-4 4-8 4-8 4"/><path d="M30 52c4 4 24 4 28 0" stroke="#1F4FC1"/><path d="M70 72h18l-2 10H72z" fill="#D8ECF8"/><path d="M14 74h16l-2 9H16z" fill="#D8ECF8"/><path d="M8 90h84" stroke="#4AACCE"/></svg>`,
aodai:`<svg viewBox="0 0 100 100" fill="none" ${S}><path d="M50 4c4 0 5 5 0 7v3"/><path d="M50 14L24 26h52z" stroke="#9C5B2E"/><path d="M44 22h12l12 7-4 24 2 41H52l-2-38-2 38H34l2-41-4-24z" fill="#F4B6A0"/><path d="M32 29l-12 5-4 32h6l8-24M68 29l12 5 4 32h-6l-8-24" fill="#F4B6A0"/><path d="M45 17h10v6H45z" fill="#E8501B"/><path d="M50 30v4M47 40l3 3 3-3M44 60c3 4 9 4 12 0" stroke="#E8501B" stroke-width="2"/></svg>`,
kurung:`<svg viewBox="0 0 100 100" fill="none" ${S}><path d="M50 4c4 0 5 5 0 7v3"/><path d="M50 14L24 26h52z" stroke="#9C5B2E"/><path d="M32 66l-2 26h40l-2-26z" fill="#1F4FC1"/><path d="M38 72h4M48 80h4M58 72h4M40 86h4M56 86h4" stroke="#9FD3E8" stroke-width="2.4"/><path d="M42 22h16l14 8-2 36H30l-2-36z" fill="#9FD3E8"/><path d="M28 30l-12 6-2 26h8l6-20M72 30l12 6 2 26h-8l-6-20" fill="#9FD3E8"/><path d="M44 22c2 6 10 6 12 0"/></svg>`
};
/* Real photos (Hoàng, 2026-10-19) replace the line icons; 'tile' slot shows the Merlion */
['pho','laksa','chung','ketupat','cau','stones','non','tile','mam','tea','aodai','kurung'].forEach(k=>ART[k]=`<img class="photo" src="/topicdraw/assets/topics/${k}.webp" alt="">`);
const FLAG={
vn:'<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#DA251D"/><path fill="#FFDD00" d="M15 4.2l1.35 4.15h4.36l-3.53 2.56 1.35 4.15L15 12.5l-3.53 2.56 1.35-4.15-3.53-2.56h4.36z"/></svg>',
sg:'<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#fff"/><rect width="30" height="10" fill="#EF3340"/><circle cx="7" cy="5" r="3.6" fill="#fff"/><circle cx="8.4" cy="5" r="3.4" fill="#EF3340"/><g fill="#fff"><circle cx="10" cy="2.7" r=".7"/><circle cx="12.2" cy="4.2" r=".7"/><circle cx="11.4" cy="6.8" r=".7"/><circle cx="8.6" cy="6.8" r=".7"/><circle cx="7.8" cy="4.2" r=".7"/></g></svg>'
};
/* Same content as the printed topic cards (thread "Nền LED agenda, name tag và thẻ chủ đề") */
const TOPICS=[
 {en:"Food",vi:"Ẩm thực",vn:"Phở",vnS:"Bánh phở, nước dùng bò",vnA:"pho",sg:"Laksa",sgS:"Bún nước cốt dừa cay",sgA:"laksa",q:["Which dish would you show a visitor first?","When and where do people eat it?","What do Phở and Laksa have in common?"]},
 {en:"Festivals",vi:"Lễ hội",vn:"Tết Nguyên Đán",vnS:"Bánh chưng ngày Tết",vnA:"chung",sg:"Hari Raya · CNY · Deepavali",sgS:"Ketupat ngày Hari Raya",sgA:"ketupat",q:["What is the biggest festival for your family?","What do people eat, wear or give?","Which custom do both countries share?"]},
 {en:"Traditional Games",vi:"Trò chơi dân gian",vn:"Đá cầu · Ô ăn quan",vnS:"Chơi ở sân trường",vnA:"cau",sg:"Chapteh · Five Stones",sgS:"Chapteh giống đá cầu",sgA:"stones",q:["Which game did your parents play as kids?","Can you explain the rules in one minute?","Which game is played in both countries?"]},
 {en:"Folk Art & Symbols",vi:"Nghệ thuật và biểu tượng",vn:"Tranh Đông Hồ · Nón lá",vnS:"Làng Đông Hồ, Bắc Ninh",vnA:"non",sg:"Merlion · Peranakan tiles",sgS:"Gạch hoa nhà phố Joo Chiat",sgA:"tile",q:["What does this symbol mean to people?","Where can you see it today?","Which one would you put on a postcard?"]},
 {en:"Family & Respect",vi:"Gia đình và lễ nghĩa",vn:"Gọi cô, chú, anh, chị",vnS:"Mời ông bà ăn cơm trước",vnA:"mam",sg:"Calling elders Uncle, Auntie",sgS:"Salam, bow, both hands",sgA:"tea",q:["How do you greet older people at home?","Who eats first at a family meal?","What words show respect in your language?"]},
 {en:"Traditional Costumes",vi:"Trang phục truyền thống",vn:"Áo dài",vnS:"Mặc dịp lễ, Tết, đến trường",vnA:"aodai",sg:"Baju kurung · Cheongsam · Sari",sgS:"Mỗi cộng đồng một bộ",sgA:"kurung",q:["When do people wear it today?","Which colours and patterns are common?","Which costume would you like to try?"]}
];
const backHTML=()=>`<div class="face back"><div class="frame"></div><div class="mid"><small>TOPIC CARD</small><div class="q">?</div><div class="scr">Sharing Cultures</div><div class="vs">VIETNAM × SINGAPORE</div></div></div>`;
const frontHTML=(ti)=>{const t=TOPICS[ti];return `<div class="face front"><div class="hd"><small>TOPIC ${ti+1} · CHỦ ĐỀ ${ti+1}</small><b>${t.en.replace('&','&amp;')}</b><i>${t.vi}</i></div>
<div class="pair"><div class="side"><div class="art">${ART[t.vnA]}</div><div class="cty">${FLAG.vn}VIETNAM</div><b>${t.vn}</b><span>${t.vnS}</span></div><div class="x">×</div>
<div class="side"><div class="art">${ART[t.sgA]}</div><div class="cty">${FLAG.sg}SINGAPORE</div><b>${t.sg}</b><span>${t.sgS}</span></div></div>
<div class="qs"><b>TALK ABOUT</b><ol>${t.q.map(x=>`<li>${x}</li>`).join('')}</ol></div>
<div class="ft"><span>VIETNAM × SINGAPORE</span><em>Building Friendships</em></div></div>`};

const SLUG=['food','festivals','games','folk-art','family','costumes'];
const LINKS=window.TOPIC_LINKS||{};
const seg=location.pathname.replace(/\/+$/,'').split('/').pop().toLowerCase();
const gm=seg.match(/^nhom-?([1-6])$/), G=gm?+gm[1]-1:-1, FIXED=SLUG.indexOf(seg);
const v=document.getElementById('v');
v.innerHTML=`<header class="top"><img src="/topicdraw/assets/lockup.webp" alt="Vietnam × Singapore · Building Friendships, Sharing Cultures">
<div class="g"><small>${G>=0?'SHARING CULTURES · GROUP PRESENTATION':'SHARING CULTURES · TOPIC CARD'}</small>${G>=0?`<b>Group ${G+1} <em>· Nhóm ${G+1}</em></b>`:'<b>Topic Card <em>· Thẻ chủ đề</em></b>'}</div></header>
<main class="main"><div class="cardbox" id="box"><div class="flip" id="flip">${backHTML()}</div></div><div class="side" id="side"></div></main>`;
const flip=document.getElementById('flip'),side=document.getElementById('side'),box=document.getElementById('box');
let cur=null,fails=0;
function show(ti){
  if(ti===cur)return;cur=ti;
  if(ti<0){
    box.classList.add('wait');flip.classList.remove('open');
    side.innerHTML=G>=0?`<h2>Đang chờ Nhóm ${G+1} lên bốc thăm<span class="dots"></span></h2><p>Khi nhóm bấm bốc trên màn hình lớn, thẻ chủ đề và link slide Canva sẽ hiện ra ở đây. Trang tự cập nhật, không cần tải lại.</p>`:`<h2>Không tìm thấy chủ đề</h2><p>Kiểm tra lại đường dẫn trên màn hình lớn.</p>`;
    return;
  }
  box.classList.remove('wait');
  const old=flip.querySelector('.front');if(old)old.remove();
  flip.insertAdjacentHTML('beforeend',frontHTML(ti));
  requestAnimationFrame(()=>requestAnimationFrame(()=>flip.classList.add('open')));
  const t=TOPICS[ti],url=LINKS[SLUG[ti]];
  side.innerHTML=`<h2>${t.en.replace('&','&amp;')}<br><span style="font-weight:700;color:var(--muted);font-size:.6em">${t.vi}</span></h2>
  ${url?`<a class="btn" href="${url}" target="_blank" rel="noopener">Mở slide Canva của nhóm ↗</a>`:`<span class="btn off">Chưa có link Canva</span>`}
  <p class="note">Cả nhóm cùng làm trên file Canva này, không tạo file mới. Cần đăng nhập Canva để chỉnh sửa.</p>
  <span class="lnk">${location.host}/topicdraw/${SLUG[ti]}</span>`;
}
function state(s){if(!s||!Array.isArray(s.owner)||!Array.isArray(s.order))return -1;const sl=s.owner.indexOf(G);return sl<0?-1:s.order[sl]}
async function poll(){
  try{const r=await fetch('/api/topicdraw',{cache:'no-store'});if(!r.ok)throw 0;fails=0;show(state(await r.json()))}
  catch(e){fails++;if(fails===3&&cur===-1){side.insertAdjacentHTML('beforeend','<p class="warn">Chưa kết nối được với màn hình lớn. Khi nhóm bốc xong, hãy gõ link hiện dưới thẻ trên màn hình lớn.</p>')}}
  setTimeout(poll,2000);
}
if(FIXED>=0)show(FIXED);else if(G>=0){show(-1);poll()}else show(-1);
