(()=>{"use strict";const n=()=>'\n        <div class="erorr404">\n            <h2>Error 404</h2>\n        </div>\n    ',a={"/":()=>'\n        <div>\n            <article>\n                <a href="#/1/">\n                    <igm src="imagen" alt="name">\n                    <h2></h2>\n                </a>\n            </article>\n        </div>\n    ',"/:id":()=>'\n        <div class="character-inner">\n            <article class="character-card">\n                <img src="iamge" alt="name">\n                <h2>Name<(h2)>\n            </article>\n\n            <article class="character-card">\n                <h3>Episodes:</h3>\n                <h3>Status:</h3>\n                <h3>Species:</h3>\n                <h3>Gender:</h3>\n                <h3>Origin:</h3>\n                <h3>Location:</h3>\n                <a href="#/">Home</a>\n            </article>\n        </div>\n    ',"/contact":"contact"},e=async()=>{const e=document.getElementById("header"),i=document.getElementById("content");e.innerHTML=await'\n        <div class="header-main">\n            <div class="header-logo">\n                <h1>\n                    <a href="">Cientificos.co</a>\n                </h1>\n            </div>\n\n            <div class="header-nav">\n                <a href="#/">Home</a>\n            </div>\n        </div>\n    ';let t=void location.hash.slice(1).toLocaleLowerCase().split("/")[1],c=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(t),r=a[c]?a[c]:n;i.innerHTML=await r()};window.addEventListener("load",e),window.addEventListener("hashchange",e)})();