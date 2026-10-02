
(function(){
  const $=(s,r=document)=>r.querySelector(s); const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  window.EH={
    money:n=>'₹'+Number(n).toLocaleString('en-IN'),
    escape:s=>String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])),
    toast(msg){let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove('show'),2400)},
    getJSON(k,fallback){try{return JSON.parse(localStorage.getItem(k))??fallback}catch{return fallback}},
    setJSON(k,v){localStorage.setItem(k,JSON.stringify(v))},
    cart(){return this.getJSON('electrohub_cart',[])},
    wishlist(){return this.getJSON('electrohub_wishlist',[])},
    user(){return this.getJSON('electrohub_currentUser',null)},
    updateCounts(){const c=this.cart().reduce((n,x)=>n+x.qty,0),w=this.wishlist().length;$$('[data-cart-count]').forEach(e=>e.textContent=c);$$('[data-wish-count]').forEach(e=>e.textContent=w)},
    addCart(id,qty=1,options={}){const p=getProductById(id);if(!p)return;let c=this.cart(),i=c.findIndex(x=>x.id===id&&JSON.stringify(x.options||{})===JSON.stringify(options));if(i>=0)c[i].qty+=qty;else c.push({id,qty,options});this.setJSON('electrohub_cart',c);this.updateCounts();this.toast('Added to cart!')},
    toggleWish(id){let w=this.wishlist();if(w.includes(id)){w=w.filter(x=>x!==id);this.toast('Removed from wishlist.')}else{w.push(id);this.toast('Added to wishlist!')}this.setJSON('electrohub_wishlist',w);this.updateCounts();document.dispatchEvent(new CustomEvent('wishlistChanged'))},
    isWish(id){return this.wishlist().includes(id)},
    requireLogin(next){if(!this.user()){location.href='login.html?next='+encodeURIComponent(next||location.pathname+location.search);return false}return true},
    initHeader(){
      const header=$('.site-header');if(!header)return;
      const user=this.user();
      const account=$('[data-account-label]');if(account){account.textContent=user?`Hi, ${user.name.split(' ')[0]}`:'Account';account.href=user?'profile.html':'login.html'}
      const nav=$('.nav-links'),menu=$('.menu-btn');if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
      const form=$('[data-global-search]'),input=$('[data-search-input]'),results=$('[data-search-results]');
      if(form&&input){form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();if(q)location.href='shop.html?search='+encodeURIComponent(q)});input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();if(!results)return;if(!q){results.style.display='none';return}const hits=PRODUCTS.filter(p=>(p.name+' '+p.brand+' '+p.category).toLowerCase().includes(q)).slice(0,5);results.innerHTML=hits.length?hits.map(p=>`<a class="search-result" href="product.html?id=${p.id}"><img src="${p.image}" alt="${this.escape(p.name)}"><span><b>${this.escape(p.name)}</b><br><small>${this.escape(p.brand)} · ${this.money(p.price)}</small></span></a>`).join(''):'<div class="search-result">No products found.</div>';results.style.display='block'});document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))results&&(results.style.display='none')})}
      this.updateCounts();
    },
    initCommon(){this.initHeader();const b=$('.back-top');if(b){window.addEventListener('scroll',()=>b.classList.toggle('show',scrollY>500));b.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}))}$$('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());}
  };
  document.addEventListener('DOMContentLoaded',()=>EH.initCommon());
})();
