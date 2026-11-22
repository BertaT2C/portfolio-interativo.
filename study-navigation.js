for (const header of document.querySelectorAll('.study-header')) {
 const button=header.querySelector('.study-menu-button');
 const nav=header.querySelector('.study-main-nav');
 const mobile=matchMedia('(max-width:760px)');
 const isOpen=()=>button.getAttribute('aria-expanded')==='true';
 const close=()=>button.setAttribute('aria-expanded','false');
 button.onclick=()=>button.setAttribute('aria-expanded',String(!isOpen()));
 nav.addEventListener('click',event=>{
  if(mobile.matches&&event.target.closest('a')){
   close();
   button.focus({preventScroll:true});
  }
 });
 document.addEventListener('click',event=>{if(isOpen()&&!header.contains(event.target))close();});
 document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&isOpen()){close();button.focus();}
 });
 mobile.addEventListener('change',close);
 header.classList.add('study-menu-ready');
}
