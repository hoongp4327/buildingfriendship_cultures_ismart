document.documentElement.classList.add('js');
(function(){
  var root=document.documentElement, saved=null;
  try{saved=localStorage.getItem('lang');}catch(e){}
  var lang=saved||((navigator.language||'').toLowerCase().indexOf('vi')===0?'vi':'en');
  function set(l){root.setAttribute('data-lang',l);root.lang=l;
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.set===l?'true':'false');});
    try{localStorage.setItem('lang',l);}catch(e){}}
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.set);});});
  set(lang);
})();

(function(){
  var dots=document.querySelectorAll('.kvmap .dot'), items=document.querySelectorAll('.kvlist li');
  function hi(k){dots.forEach(function(d){d.classList.toggle('on',d.dataset.k===k);});items.forEach(function(i){i.classList.toggle('on',i.dataset.k===k);});}
  items.forEach(function(i){i.addEventListener('mouseenter',function(){hi(i.dataset.k);});i.addEventListener('mouseleave',function(){hi(null);});});
  dots.forEach(function(d){d.addEventListener('mouseenter',function(){hi(d.dataset.k);});d.addEventListener('mouseleave',function(){hi(null);});});
})();

(function(){
  var dots=document.querySelectorAll('.kvmap .dot'), map=document.querySelector('.kvmap');
  var smooth=window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth';
  function card(k){return document.querySelector('.kvlist li[data-k="'+k+'"]');}
  function goCard(k){var c=card(k);if(!c)return;c.scrollIntoView({behavior:smooth,block:'center'});c.classList.remove('flash');void c.offsetWidth;c.classList.add('flash');}
  function goDots(k){if(!map)return;map.scrollIntoView({behavior:smooth,block:'center'});dots.forEach(function(d){d.classList.remove('ping');if(d.dataset.k===k){void d.offsetWidth;d.classList.add('ping');}});}
  dots.forEach(function(d){d.setAttribute('role','button');d.setAttribute('tabindex','0');
    d.addEventListener('click',function(){goCard(d.dataset.k);});
    d.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();goCard(d.dataset.k);}});});
  document.querySelectorAll('.kvlist li').forEach(function(li){li.addEventListener('click',function(){goDots(li.dataset.k);});});
})();
(function(){
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.15});
  els.forEach(function(e){io.observe(e);});
})();
