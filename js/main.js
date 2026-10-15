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
