(()=>{"use strict";function e(e,t){const n=document.createElement("div");n.classList.add("card-container");const a=document.createElement("h3");a.textContent=e;const d=document.createElement("p");d.textContent=t;const c=document.createElement("img");return c.src=`images/${e.toLowerCase()}.jpg`,c.alt=`${e}`,n.appendChild(c),n.appendChild(a),n.appendChild(d),n}function t(){const t=document.createElement("header");t.classList.add("header");const a=document.createElement("p");return a.textContent="The Roman",a.classList.add("heading"),t.appendChild(a),t.appendChild(function(){const t=document.createElement("div");t.classList.add("tab-section");const a=document.createElement("button");a.classList.add("button-tab"),a.textContent="Home",a.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(a),function(){const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("p");t.textContent="THE BEST PIZZA",t.classList.add("heading-home");const n=document.createElement("p");n.textContent="Low Carb and Crunchy",n.classList.add("text-home");const a=document.createElement("p");a.textContent="Order online now or visit us",a.classList.add("text-home");const d=document.createElement("p");d.textContent="Since 2020",d.classList.add("text-home"),e.classList.add("home-section");const c=document.createElement("img");return c.src="images/home.jpg",c.alt="Pizza",e.appendChild(t),e.appendChild(c),e.appendChild(n),e.appendChild(a),e.appendChild(d),e}())}())}));const d=document.createElement("button");d.classList.add("button-tab"),d.textContent="Contact",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(d),function(){const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("div");t.classList.add("card-contact");const n=document.createElement("h2"),a=document.createElement("p");n.textContent="Contact",a.textContent="+51 999 999 999",t.appendChild(n),t.appendChild(a);const d=document.createElement("div");d.classList.add("card-contact");const c=document.createElement("h2"),o=document.createElement("div");c.textContent="Location",o.innerHTML='<div class="mapouter"><div class="gmap_canvas"><iframe width="670" height="468" id="gmap_canvas" \n    src="https://maps.google.com/maps?q=Prolongaci%C3%B3n%20Primavera%202390,%20Lima%2015023&t=&z=17&ie=UTF8&iwloc=&output=embed" \n    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org"></a><br>\n    <style>.mapouter{position:relative;height:468px;width:670px;}</style><a href="https://www.embedgooglemap.net">using google maps on your website</a><style>.gmap_canvas\n    {overflow:hidden;background:none!important;height:468px;width:670px;}</style></div></div>',d.appendChild(c),d.appendChild(o);const i=document.createElement("div");i.classList.add("card-contact");const s=document.createElement("h2"),l=document.createElement("p");return s.textContent="Hours",l.textContent="Monday to Friday - 12:00 a 1:00",i.appendChild(s),i.appendChild(l),e.appendChild(t),e.appendChild(d),e.appendChild(i),e}())}())}));const c=document.createElement("button");return c.classList.add("button-tab"),c.textContent="Menu",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(c),function(){const t=document.querySelector(".main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(e("Hawaiian","Lorem ipsum et al or lele lorem")),t.appendChild(e("Neapolitan","lorem ipsum")),t.appendChild(e("Cheese","lorem ipsum")),t.appendChild(e("Sicilian","lorem ipsum lorie")),t.appendChild(e("Pepperoni","lorem ipsum loriet")),t.appendChild(e("Greek","lorem ipsum")),t.appendChild(e("Chicago","lorem ipsum")),t.appendChild(e("Margherit","lorem ipsum loriet")),t}())}())})),t.appendChild(a),t.appendChild(d),t.appendChild(c),t}()),t}function n(e){document.querySelectorAll("button-tab").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.querySelector(".content");e.appendChild(t()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent="Copyright © "+(new Date).getFullYear()+" jrenzzo";const n=document.createElement("a");n.href="https://github.com/jrenzzo";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}())}()})();