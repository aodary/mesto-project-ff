(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{gm:()=>R,aq:()=>M,Tp:()=>P,A1:()=>F,i0:()=>z,Hs:()=>U,K3:()=>G,CC:()=>C,bF:()=>A,Gv:()=>$});var t=function(e,t){var r=e.querySelector(".".concat(t.id,"-error"));r&&(t.classList.remove("popup__input-care"),r.classList.remove("popup__input_error-message"),r.textContent="")},r=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.removeAttribute("disabled"),t.classList.remove("popup__button_disabled")):(t.setAttribute("disabled",!0),t.classList.add("popup__button_disabled"))},n=function(e){var n=Array.from(e.querySelectorAll(".popup__input"));n.forEach((function(r){t(e,r)}));var o=e.querySelector(".popup__button");r(n,o)};function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u);var t=e.querySelector(".popup__form");t&&(n(t),t.reset())}function u(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}var i=document.forms.edit_profile,a=document.forms.new_place,l=document.forms.edit_img,p=document.querySelector(".profile__title"),s=document.querySelector(".profile__description"),d=document.querySelector(".profile__image");function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return(t=function(e){var t=function(e){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={headers:{authorization:"c4fe7178-db8e-4fa3-8523-a6df09ca090f","Content-Type":"application/json"}},b={resJson:function(e){return e.ok?e.json():Promise.reject(e.status)}},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="".concat("https://nomoreparties.co/v1/wff-cohort-31").concat(e),n=y(y({},t),{},{headers:v.headers});return fetch(r,n).then(b)},h=function(e){return g("/cards/likes/".concat(e),{method:"PUT"})},S=function(e){return g("/cards/likes/".concat(e),{method:"DELETE"})},k=function(e,t){return(Array.isArray(e.likes)?e.likes:[]).some((function(e){return e._id===t}))},q=function(e,t,r,n,o){var c,u=P.querySelector(".card").cloneNode(!0),i=u.querySelector(".card__delete-button"),a=u.querySelector(".card__like-button"),l=u.querySelector(".card__image"),p=u.querySelector(".card__like_count");e&&e.link&&(l.src=e.link),e&&e.name&&(l.alt=e.name,u.querySelector(".card__title").textContent=e.name),(null===(c=e.owner)||void 0===c?void 0:c._id)===o?i.addEventListener("click",(function(){return t(u)})):i.remove();var s=e.likes||[];return p.textContent=s.length,k(e,o)&&a.classList.add("card__like-button_is-active"),a.addEventListener("click",(function(){return r(a,p,e,o,u)})),l.addEventListener("click",(function(){return n(e)})),u},E=function(e,t){var r,n=e.target.closest(".card");(r=t,g("/cards/".concat(r),{method:"DELETE"})).then((function(){n.remove()})).catch((function(e){return console.log(e)}))},j=function(e,t,r,n,o){(k(e,t)?S:h)(e._id).then((function(t){n.classList.toggle(".card__like-button_is-active"),o.textContent=t.likes.length,e.likes=t.likes})).catch((function(e){return console.log(e)}))};function L(e){e.classList.toggle("card__like-button_is-active")}function O(e){e.remove()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var x=document.querySelector(".places__list"),A=document.querySelector(".popup_type_edit"),C=document.querySelector(".popup_type_new-card"),P=document.querySelector("#card-template").content,D=document.querySelector(".popup_type_image"),T=D.querySelector(".popup__image"),I=D.querySelector(".popup__caption"),G=i.querySelector(".popup__input_type_name"),z=i.querySelector(".popup__input_type_description"),M=a.querySelector(".popup__input_type_card-name"),U=a.querySelector(".popup__input_type_url"),F=l.querySelector(".popup__input_type_img"),H=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__edit-button"),K=document.querySelector(".profile__image"),N=document.querySelectorAll(".popup__close"),$=document.querySelector(".popup_type_edit-profile-image"),B="";function Q(e){T.src=e.link,T.alt=e.name,I.textContent=e.name,o(D)}function R(e,t){var r=q({name:e,link:t},O,L,Q);x.prepend(r)}document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(t){t.target===e&&c(e)}))})),Promise.all([g("/users/me",{method:"GET"}),g("/cards",{method:"GET"})]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,u,i=[],a=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=c.call(r)).done)&&(i.push(n.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1];o&&o._id&&(B=o._id,p.textContent=o.name,s.textContent=o.about,d.style.backgroundImage="url('".concat(o.avatar,"')"),c.forEach((function(e){x.append(q(e,E,j,B,Q))})))})),N.forEach((function(e){e.addEventListener("click",(function(e){c(e.target.closest(".popup"))}))})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t=q(e,O,L,Q);x.append(t)})),H.addEventListener("click",(function(){return o(C)})),J.addEventListener("click",(function(){G.value=p.textContent,z.value=s.textContent,o(A)})),K.addEventListener("click",(function(){var e=d.style.backgroundImage;F.value=e.includes("url")?"":e,o($)})),a.addEventListener("submit",(function(e){e.preventDefault(),R(M.value,U.value),c(C),a.reset()})),i.addEventListener("submit",(function(e){e.preventDefault(),p.textContent=G.value,s.textContent=z.value,c(A),i.reset()})),l.addEventListener("submit",(function(e){e.preventDefault();var t=F.value;d.style.backgroundImage="url('".concat(t,"')"),c($),l.reset()})),Array.from(document.querySelectorAll(".popup")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()}));var n=e.querySelector(".popup__form");n&&function(e){var n=Array.from(e.querySelectorAll(".popup__input")),o=e.querySelector(".popup__button");r(n,o),n.forEach((function(c){c.addEventListener("input",(function(){!function(e,r){r.validity.valid?t(e,r):function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));n&&(t.classList.add("popup__input-care"),n.textContent=r,n.classList.add("popup__input_error-message"))}(e,r,r.dataset.errorMessage)}(e,c),r(n,o)}))}))}(n)}))})();