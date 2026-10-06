/* BMA interactions — dependency-free, progressive enhancement. */
(()=>{
const all=s=>[...document.querySelectorAll(s)],reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
all('.mi-faq').forEach((d,i)=>{
 const q=d.querySelector('summary'),a=d.querySelector('.mi-answer'),b=document.createElement('button'),box=document.createElement('div');
 b.className='mi-question';b.type='button';b.append(...q.childNodes);b.id=`mi-q-${i}`;a.id=`mi-a-${i}`;b.setAttribute('aria-controls',a.id);a.setAttribute('aria-labelledby',b.id);
 let open=d.open;box.className=d.className+' is-enhanced';box.append(b,a);d.replaceWith(box);
 const set=()=>{b.setAttribute('aria-expanded',open);box.classList.toggle('is-open',open);a.inert=!open;};set();b.onclick=()=>{open=!open;set();};
});
const stats=all('[data-count-to]'),end=e=>e.textContent=(e.dataset.countPrefix||'')+e.dataset.countTo+(e.dataset.countSuffix||'');
const observer=new IntersectionObserver(entries=>entries.forEach(({target:e,isIntersecting})=>{if(!isIntersecting)return;observer.unobserve(e);if(reduce.matches)return end(e);let start;
 const tick=t=>{start??=t;const p=Math.min((t-start)/1000,1);e.textContent=(e.dataset.countStart?Math.round(+e.dataset.countStart*(1-(1-p)**3))+'–':e.dataset.countPrefix||'')+Math.round(+e.dataset.countTo*(1-(1-p)**3))+(e.dataset.countSuffix||'');if(p<1&&!reduce.matches)requestAnimationFrame(tick);else end(e);};requestAnimationFrame(tick);
}),{threshold:.5});stats.forEach(e=>observer.observe(e));
const cards=all('[data-spotlight]'),buttons=all('.primary-button,.pill-button,[data-magnetic]');buttons.forEach(b=>b.setAttribute('data-magnetic',''));let frame=0,point;
const reset=()=>{cards.forEach(e=>e.classList.remove('mi-lit'));buttons.forEach(e=>{e.style.removeProperty('--mag-x');e.style.removeProperty('--mag-y');});};
addEventListener('pointermove',e=>{if(!fine.matches||reduce.matches)return;point=e;if(frame)return;frame=requestAnimationFrame(()=>{frame=0;const{x,y}=point;
 cards.forEach(c=>{const r=c.getBoundingClientRect(),inside=x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom;c.classList.toggle('mi-lit',inside);if(inside){c.style.setProperty('--mouse-x',x-r.left+'px');c.style.setProperty('--mouse-y',y-r.top+'px');}});
 buttons.forEach(b=>{const r=b.getBoundingClientRect(),dx=x-r.left-r.width/2,dy=y-r.top-r.height/2,near=!b.disabled&&r.width>0&&r.height>0&&Math.hypot(Math.max(Math.abs(dx)-r.width/2,0),Math.max(Math.abs(dy)-r.height/2,0))<=30;
 b.style.setProperty('--mag-x',(near?Math.max(-6,Math.min(6,dx*.08)):0)+'px');b.style.setProperty('--mag-y',(near?Math.max(-6,Math.min(6,dy*.08)):0)+'px');});});},{passive:true});
document.documentElement.addEventListener('pointerleave',reset);addEventListener('blur',reset);reduce.addEventListener('change',reset);fine.addEventListener('change',reset);
})();
