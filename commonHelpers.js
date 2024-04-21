import{A as P,b as I,a as w,i as j}from"./assets/vendor-afdc74e2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();document.getElementsByClassName("accordion");const L=document.querySelector("#acc-btn");L.addEventListener("click",()=>{L.classList.toggle("active-btn")});const E=document.querySelector("#acc-btn2");E.addEventListener("click",()=>{E.classList.toggle("active-btn")});const k=document.querySelector("#acc-btn3");k.addEventListener("click",()=>{k.classList.toggle("active-btn")});new Swiper(".swiper-container",{navigation:{nextEl:".button-next"},loop:!0,keyboard:!0,mousewheel:!0,slidesPerView:2,speed:1e3,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},slideActiveClass:"selected"});const m=document.querySelector(".mobile-modal"),B=document.querySelector(".menu-btn"),x=document.querySelector(".menu"),l=document.querySelector(".menu-list"),A=document.querySelector(".close-btn"),C=document.querySelectorAll(".modal-nav-item"),$=document.querySelector(".order-btn"),F=document.querySelector("#order-section"),N=document.querySelector(".button-active"),O=document.querySelector(".header"),z=document.querySelector(".scroll-up");window.addEventListener("load",e=>{e.preventDefault(),m.classList.toggle("is-open"),m.style.transition="0ms",l.classList.toggle("open"),l.style.transition="0ms"});function D(){m.style.transition="opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), visibility 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",m.classList.toggle("is-open")}function v(){m.classList.remove("is-open"),l.classList.remove("open")}function T(){l.style.transition="opacity 750ms cubic-bezier(0.4, 0, 0.2, 1), visibility 750ms cubic-bezier(0.4, 0, 0.2, 1), transform 1250ms cubic-bezier(0.4, 0, 0.2, 1)",l.classList.toggle("open")}function V(e){e.preventDefault();const s=e.target.getAttribute("href"),n=document.querySelector(s);n&&(v(),n.scrollIntoView({behavior:"smooth"}))}function M(e){e.preventDefault(),v(),F.scrollIntoView({behavior:"smooth"})}function R(e){e.preventDefault(),O.scrollIntoView({behavior:"smooth"})}C.forEach(e=>{e.addEventListener("click",V)});$.addEventListener("click",M);l.addEventListener("click",V);z.addEventListener("click",R);B.addEventListener("click",D);A.addEventListener("click",v);x.addEventListener("click",T);N.addEventListener("click",M);document.addEventListener("click",function(e){x.contains(e.target)||B.contains(e.target)||v()});const U=Array.from(document.querySelectorAll(".accordion-container"));new P(U,{showMultiple:!0});const q=document.querySelectorAll(".more-btn");for(let e=0;e<q.length;e++)q[e].addEventListener("click",function(){this.classList.toggle("active-btn")});const y="/bodyagrichka/assets/sprite-e9ee8ff8.svg",H="../images/bodya/thanks.MP4",u=document.querySelector(".js-inputCommit"),h="feedback-form-state",r=document.querySelector(".js-form"),b=document.querySelector(".js-footerBtn"),a=document.querySelector(".js-inputEmail"),c=document.querySelector(".js-status-text");document.querySelector(".js-status-text");const J=1500;let d=null;u.addEventListener("input",K);window.addEventListener("load",W);r.addEventListener("input",_);r.addEventListener("submit",Y);function K(){switch(Number(u.clientWidth)){case 343:d=40;break;case 245:d=30;break;default:d=55;break}if(u.value.length>=d)return u.value=u.value.slice(0,d-3)+"..."}function W(){const e=JSON.parse(localStorage.getItem(h));e&&(r.elements.email.value=e.email??"",r.elements.message.value=e.message??""),S()}function _(e){const s=e.currentTarget.elements,n=s.email.value.trim(),i=s.message.value.trim(),o={email:n,message:i};localStorage.setItem(h,JSON.stringify(o)),G(),setTimeout(()=>{c.style.display="none"},J),S()}function Y(e){e.preventDefault();const s=r.elements.email.value.trim(),n=r.elements.message.value.trim();Q({email:s,comment:n}).then(o=>{const t=I.create(`
        <div class="footer-modal">
          <h2 class="footer-title-modal">Дякую файно! Богданчик скоро з вами звяжеться</h2>
          <video id="modalVideo" width="100" height="100">
            <source src="${H}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <button class="footer-button-modal js-closeModal">
            <svg width="11" height="11" class="close-button-svg">
              <use href="${y}#icon-close-x"></use>
            </svg>
          </button>
        </div>
      `);t.show(),t.element().querySelector("#modalVideo").play(),S(),document.body.classList.add("modal-open"),t.element().querySelector(".js-closeModal").addEventListener("click",()=>{t.close(),g()}),document.addEventListener("keyup",f=>{f.key==="Escape"&&(t.close(),g())}),t.element().addEventListener("click",f=>{f.target===t.element()&&(t.close(),g())})}).catch(X).finally(()=>{r.reset(),localStorage.removeItem(h),b.disabled=!0})}function S(){const e=r.elements.email.value.trim(),s=r.elements.message.value.trim();e&&s?b.disabled=!1:b.disabled=!0}function G(){const e=a.checkValidity();if(!a.value){a.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)";return}e?(c.style.display="block",c.style.color="#3CBC81",c.textContent="Сяк дубрі!",a.style.borderBottom="1px solid #3CBC81"):(c.style.display="block",c.style.color="#E74A3B",c.textContent="Будь добрий напиши нормально",a.style.borderBottom="1px solid #E74A3B")}w.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function Q(e){return(await w.post("/requests",e)).data}function X(e){j.error({position:"topRight",title:"Error",message:"Sorry, your request cannot be processed. Please try again!"})}function g(){document.body.classList.remove("modal-open")}new Swiper(".projects-swiper",{slidesPerView:1,speed:1e3,keyboard:!0,mousewheel:!0,spaceBetween:35,navigation:{nextEl:".next-project-btn",prevEl:".prev-project-btn"}});const Z="https://portfolio-js.b.goit.study/api/reviews",ee=document.querySelector(".gallery");async function te(){try{const{data:e}=await w.get(Z);ee.innerHTML=`<div class="swiper mySwiper">
      <p class = "review">REVIEW</p>
    <div id = "swiper-wrapper" class="swiper-wrapper">
       ${reviews.map(({author:s,avatar_url:n,review:i})=>`
           <div class="swiper-slide">
            <div class="gallery-item">
              <img src="${n}" class="gallery-image" alt="${s}"/>
                <div class="author">${s}</div>
              <p class="review">${i}</p>
            </div>
          </div>
          `).join("")}
    </div>
    <div><button id = "swiper-button-next" class="swiper-button-next">
  <svg>
    <use href="${y}#icon-arrow-right"></use>
  </svg>
</button></div>

    <div><button id = "swiper-button-prev" class="swiper-button-prev">
  <svg>
    <use href="${y}#icon-arrow-left"></use>
  </svg>
</button></div>

  </div>`,new Swiper(".mySwiper",{speed:1e3,slidesPerView:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:!0,mousewheel:!0,slidesPerView:1,breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}})}catch(e){throw console.error("Error while fetching reviews:",e.message),e}}te();
//# sourceMappingURL=commonHelpers.js.map
