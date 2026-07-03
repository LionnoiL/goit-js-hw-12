import{a as f,S as m,i as h}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(t){if(t.ep)return;t.ep=!0;const l=e(t);fetch(t.href,l)}})();const p=async(r,o)=>(await f.get("https://pixabay.com/api/",{params:{key:"56531539-5e3b24e94e26e4155d21285b1",q:r,per_page:15,page:o,safesearch:!0,orientation:"horizontal",image_type:"photo"}})).data,d=document.querySelector(".gallery"),u=document.querySelector(".loader-wraper"),g=document.querySelector(".load-more-btn"),v=new m(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250});function b(r){const o=r.map(e=>`<li class="gallery-item">
            <a href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
            </a>
            <div class="gallery-item-legend">
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Likes</h2>
                <p class="gallery-legend-block-value">${e.likes}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Views</h2>
                <p class="gallery-legend-block-value">${e.views}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Comments</h2>
                <p class="gallery-legend-block-value">${e.comments}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Downloads</h2>
                <p class="gallery-legend-block-value">${e.downloads}</p>
              </div>
            </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",o),v.refresh()}function L(){d.innerHTML=""}function w(){u.classList.add("active")}function k(){u.classList.remove("active")}function q(){g.classList.remove("sr-only")}function E(){g.classList.add("sr-only")}let c;const S=15;let s=1;const M=document.querySelector(".form");M.addEventListener("submit",r=>{r.preventDefault(),c=r.currentTarget.elements["search-text"].value.trim(),$()});const P=document.querySelector(".load-more-btn");P.addEventListener("click",()=>{s+=1,y(c,s)});const $=()=>{if(L(),!c){n("Please enter a valid query.");return}y(c,s)},y=(r,o)=>{w(),p(r,o).then(e=>{const a=e.hits;if(a.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}else b(a),s!==1&&B(),S*s>=e.totalHits?(n("We're sorry, but you've reached the end of search results."),E()):q()}).catch(e=>{console.error(e),n("Error while executing request")}).finally(()=>{k()})};function n(r){h.error({message:r,position:"topRight",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",animateInside:!1})}function B(){const r=document.querySelector(".gallery-item");window.scrollBy({top:r.getBoundingClientRect().height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
