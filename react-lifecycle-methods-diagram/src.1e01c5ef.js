(()=>{"use strict";var e,n,t,a,r,o,s={"./index.jsx":(e,n,t)=>{var a=t("../node_modules/react-dom/index.js"),r=t("../node_modules/@wojtekmaj/react-t/dist/esm/index.js");const o="en-US",s={ar:()=>t.e(571).then(t.t.bind(t,"./i18n/json/ar.json",19)),"be-BY":()=>t.e(679).then(t.t.bind(t,"./i18n/json/be-BY.json",19)),"de-DE":()=>t.e(143).then(t.t.bind(t,"./i18n/json/de-DE.json",19)),"es-ES":()=>t.e(870).then(t.t.bind(t,"./i18n/json/es-ES.json",19)),"fa-IR":()=>t.e(440).then(t.t.bind(t,"./i18n/json/fa-IR.json",19)),"fr-FR":()=>t.e(738).then(t.t.bind(t,"./i18n/json/fr-FR.json",19)),"hy-AM":()=>t.e(306).then(t.t.bind(t,"./i18n/json/hy-AM.json",19)),"id-ID":()=>t.e(345).then(t.t.bind(t,"./i18n/json/id-ID.json",19)),"it-IT":()=>t.e(903).then(t.t.bind(t,"./i18n/json/it-IT.json",19)),"ja-JP":()=>t.e(161).then(t.t.bind(t,"./i18n/json/ja-JP.json",19)),"kk-KZ":()=>t.e(853).then(t.t.bind(t,"./i18n/json/kk-KZ.json",19)),"ko-KR":()=>t.e(636).then(t.t.bind(t,"./i18n/json/ko-KR.json",19)),"pl-PL":()=>t.e(985).then(t.t.bind(t,"./i18n/json/pl-PL.json",19)),"pt-BR":()=>t.e(934).then(t.t.bind(t,"./i18n/json/pt-BR.json",19)),"ro-RO":()=>t.e(519).then(t.t.bind(t,"./i18n/json/ro-RO.json",19)),"ru-RU":()=>t.e(493).then(t.t.bind(t,"./i18n/json/ru-RU.json",19)),"sq-AL":()=>t.e(207).then(t.t.bind(t,"./i18n/json/sq-AL.json",19)),"sv-SE":()=>t.e(95).then(t.t.bind(t,"./i18n/json/sv-SE.json",19)),"th-TH":()=>t.e(597).then(t.t.bind(t,"./i18n/json/th-TH.json",19)),"tr-TR":()=>t.e(30).then(t.t.bind(t,"./i18n/json/tr-TR.json",19)),"uk-UA":()=>t.e(867).then(t.t.bind(t,"./i18n/json/uk-UA.json",19)),"vi-VN":()=>t.e(179).then(t.t.bind(t,"./i18n/json/vi-VN.json",19)),"zh-Hans":()=>t.e(555).then(t.t.bind(t,"./i18n/json/zh-Hans.json",19)),"zh-Hant":()=>t.e(2).then(t.t.bind(t,"./i18n/json/zh-Hant.json",19))},i=[o].concat(Object.keys(s));var d=t("../node_modules/react/index.js"),l=t("../node_modules/@wojtekmaj/react-t/src/utils.js"),c=t("../node_modules/@wojtekmaj/react-hooks/dist/esm/useLocalStorage.js"),u=t("../node_modules/country-code-to-flag-emoji/dist/esm/index.js"),h=t("../node_modules/prop-types/index.js");const m=["16.3","16.4"],j=(t.n(h)().oneOf(m),JSON.parse('[{"code":"en-US","name":"English (US)","translated_name":"English (US)"},{"code":"ar","name":"Arabic","translated_name":"العربية"},{"code":"be","name":"Belarusian","translated_name":"беларуская"},{"code":"de","name":"German","translated_name":"Deutsch"},{"code":"es","name":"Spanish","translated_name":"Español"},{"code":"fa","name":"Persian","translated_name":"فارسی"},{"code":"fr","name":"French","translated_name":"Français"},{"code":"hy","name":"Armenian","translated_name":"Հայերեն"},{"code":"id","name":"Indonesian","translated_name":"Bahasa Indonesia"},{"code":"it","name":"Italian","translated_name":"Italiano"},{"code":"ja","name":"Japanese","translated_name":"日本語"},{"code":"kk","name":"Kazakh","translated_name":"қазақша"},{"code":"ko","name":"Korean","translated_name":"한국어"},{"code":"pl","name":"Polish","translated_name":"Polski"},{"code":"pt-BR","name":"Portuguese (Brazil)","translated_name":"Português do Brasil"},{"code":"pt-PT","name":"Portuguese (Portugal)","translated_name":"Português de Portugal"},{"code":"ro","name":"Romanian","translated_name":"Română"},{"code":"ru","name":"Russian","translated_name":"Русский"},{"code":"sq","name":"Albanian","translated_name":"shqip"},{"code":"sv","name":"Swedish","translated_name":"Svenska"},{"code":"th","name":"Thai","translated_name":"ไทย"},{"code":"tr","name":"Turkish","translated_name":"Türkçe"},{"code":"uk","name":"Ukrainian","translated_name":"Українська"},{"code":"vi","name":"Vietnamese","translated_name":"Tiếng Việt"},{"code":"zh-Hans","name":"Simplified Chinese","translated_name":"简体中文"},{"code":"zh-Hant","name":"Traditional Chinese","translated_name":"繁體中文"}]'));var f=t("../node_modules/react/jsx-runtime.js");const p=["onChange","options","value"];function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},g.apply(this,arguments)}function v(e){const[n]=e.split("-");return j.find((n=>n.code===e))||j.find((e=>e.code===n))}const b=i.sort(((e,n)=>{const t=v(e),a=v(n);return t.name.localeCompare(a.name)})).map((e=>{const n=v(e);return{label:`${e.startsWith("zh-")?"🌏":(0,u.Z)(e)} ${n.translated_name||n.name}`,value:e}}));function x(e){let{onChange:n,options:t,value:a}=e,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,p);return(0,f.jsx)("select",g({id:"language",onChange:n,value:a},r,{children:t.map((e=>(0,f.jsx)("option",{value:e.value||e,children:e.label||e},e.value||e)))}))}function y({advanced:e,locale:n,reactVersion:t,toggleAdvanced:a,toggleLocale:o,toggleReactVersion:s}){const d=m.includes(t)?t:"16.4",l=i.includes(n)?n:"en-US";return(0,f.jsxs)("fieldset",{className:"Options",children:[(0,f.jsx)("legend",{children:(0,f.jsx)(r.ZP,{children:"Options"})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("input",{type:"checkbox",id:"showAdvanced",checked:e,onChange:a}),(0,f.jsx)("label",{htmlFor:"showAdvanced",children:(0,f.jsx)(r.ZP,{children:"Show less common lifecycles"})})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:"reactVersion",children:(0,f.jsx)(r.ZP,{children:"React version"})}),(0,f.jsx)(x,{id:"reactVersion",options:m.map((e=>({label:"16.4"===e?"≥16.4":e,value:e}))),onChange:s,value:d})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:"language",children:(0,f.jsx)(r.ZP,{children:"Language"})}),(0,f.jsx)(x,{id:"language",options:b,onChange:o,value:l})]})]})}function _({children:e,name:n,row:t,rowspan:a}){return(0,f.jsxs)("div",{className:"Phase",style:{gridColumn:1,gridRow:`${3*t} / ${a?"span "+3*a:"auto"}`},children:[(0,f.jsx)("h3",{children:(0,f.jsx)(r.ZP,{name:n,children:"“{name} phase”"})}),(0,f.jsx)("p",{children:(0,f.jsx)(r.ZP,{children:e})})]})}function k({advanced:e}){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:"hidden",children:(0,f.jsx)(r.ZP,{children:"Phases"})}),(0,f.jsxs)("div",{className:"Phases",children:[(0,f.jsx)(_,{name:"Render",row:1,rowspan:e?4:2,children:"Pure and has no side effects. May be paused, aborted or restarted by React."},"render"),e&&(0,f.jsx)(_,{name:"Pre-commit",row:5,rowspan:1,children:"Can read the DOM."},"pre-commit"),(0,f.jsx)(_,{name:"Commit",row:e?6:3,rowspan:2,children:"Can work with DOM, run side effects, schedule updates."},"commit")]})]})}const P={16.3:()=>t.e(850).then(t.bind(t,"./versions/16.3/index.js")),16.4:()=>t.e(85).then(t.bind(t,"./versions/16.4/index.js"))};function O({advanced:e,reactVersion:n}){const[t,a]=(0,d.useState)();if((0,d.useEffect)((function(){P[n]().then(a)}),[n]),!t)return null;const{Mounting:r,Updating:o,Unmounting:s}=t;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:"hidden",children:"Component lifecycle"}),(0,f.jsx)(r,{advanced:e}),(0,f.jsx)(o,{advanced:e}),(0,f.jsx)(s,{advanced:e})]})}function w({advanced:e,reactVersion:n}){return(0,f.jsxs)("main",{className:"DiagramWithLegend",children:[(0,f.jsx)(k,{advanced:e}),(0,f.jsx)(O,{advanced:e,reactVersion:n})]})}function S(){const e=(0,r.$G)("See project's page on GitHub (opens in a new tab)");return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.ZP,{children:"See project on"})," ",(0,f.jsxs)("a",{className:"GitHub",href:"//github.com/wojtekmaj/react-lifecycle-methods-diagram",target:"_blank",rel:"noopener noreferrer",title:e,children:["GitHub",(0,f.jsxs)("svg",{viewBox:"0 0 100 100",width:"15",height:"15",style:{marginLeft:"3px",verticalAlign:"-2px"},fill:"var(--text-color)",children:[(0,f.jsx)("path",{d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0, 0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),(0,f.jsx)("polygon",{points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8, 14.9 62.8,22.9 71.5,22.9"})]})]})]})}function R(){return(0,f.jsx)("footer",{children:(0,f.jsx)(S,{})})}function A(e){e&&requestAnimationFrame((()=>{e.style.width=`${e.clientWidth}px`,requestAnimationFrame((()=>{e.style.width=null}))}))}function E(e,n){return e in localStorage?localStorage[e]:n}const C=["ar","fa"];function T(e){const n=i.includes(e)?e:"en-US";document.documentElement.setAttribute("lang",n);const[t]=n.split("-");document.documentElement.setAttribute("dir",C.includes(t)?"rtl":"ltr")}const N=E("locale",(0,l.x)(i)),L=m[m.length-1];function F(e){const n=E(e);n&&!n.startsWith('"')&&localStorage.setItem(e,JSON.stringify(n))}function V(){const[e,n]=(0,c.Z)("showAdvanced",!1),[t,a]=(0,c.Z)("locale",N),[o,s]=(0,c.Z)("reactVersion",L);return(0,d.useEffect)((()=>{T(t)}),[t]),(0,f.jsxs)("div",{ref:A,children:[(0,f.jsx)("h1",{children:(0,f.jsx)(r.ZP,{children:"React lifecycle methods diagram"})}),(0,f.jsx)(y,{advanced:e,locale:t,reactVersion:o,toggleAdvanced:function(){n((e=>!e))},toggleLocale:function(e){const{value:n}=e.target;a(n)},toggleReactVersion:function(e){const{value:n}=e.target;s(n)}}),(0,f.jsx)(w,{advanced:e,reactVersion:o}),(0,f.jsx)(R,{})]})}T(N),F("locale"),F("reactVersion"),(0,a.render)((0,f.jsx)(r.kA,{defaultLocale:o,languageFiles:s,children:(0,f.jsx)(V,{})}),document.getElementById("react-root"))}},i={};function d(e){var n=i[e];if(void 0!==n)return n.exports;var t=i[e]={exports:{}};return s[e](t,t.exports,d),t.exports}d.m=s,e=[],d.O=(n,t,a,r)=>{if(!t){var o=1/0;for(c=0;c<e.length;c++){for(var[t,a,r]=e[c],s=!0,i=0;i<t.length;i++)(!1&r||o>=r)&&Object.keys(d.O).every((e=>d.O[e](t[i])))?t.splice(i--,1):(s=!1,r<o&&(o=r));if(s){e.splice(c--,1);var l=a();void 0!==l&&(n=l)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[t,a,r]},d.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return d.d(n,{a:n}),n},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var o={};n=n||[null,t({}),t([]),t(t)];for(var s=2&a&&e;"object"==typeof s&&!~n.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((n=>o[n]=()=>e[n]));return o.default=()=>e,d.d(r,o),r},d.d=(e,n)=>{for(var t in n)d.o(n,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((n,t)=>(d.f[t](e,n),n)),[])),d.u=e=>({2:"zh-Hant",30:"tr-TR",85:"16.4",95:"sv-SE",143:"de-DE",161:"ja-JP",179:"vi-VN",207:"sq-AL",306:"am-AM",345:"id-ID",440:"fa-IR",493:"ru-RU",519:"ro-RO",555:"zh-Hans",571:"ar",597:"th-TH",636:"ko-KR",679:"be-BY",738:"fr-FR",850:"16.3",853:"kk-KZ",867:"uk-UA",870:"es-ES",903:"it-IT",934:"pt-BR",985:"pl-PL"}[e]+"."+{2:"a493980b",30:"a770b2ca",85:"0fb3f5f8",95:"88a7b32a",143:"a6e21d65",161:"033cce92",179:"32c050d8",207:"b63f3742",306:"740ce464",345:"69aaa227",440:"314f3ac0",493:"1bfa1961",519:"fff9de33",555:"489b83b8",571:"c53f07ee",597:"e6e13a69",636:"8b19a4ee",679:"0230c1f9",738:"e072cbce",850:"8de01b83",853:"400067ee",867:"f8afe7a5",870:"2b283ceb",903:"001f4122",934:"3cb7738f",985:"c9a5a99e"}[e]+".js"),d.miniCssF=e=>({85:"16.4",523:"src",850:"16.3"}[e]+"."+{85:"0fb3f5f8",523:"1e01c5ef",850:"8de01b83"}[e]+".css"),d.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a={},d.l=(e,n,t,r)=>{if(a[e])a[e].push(n);else{var o,s;if(void 0!==t)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var c=i[l];if(c.getAttribute("src")==e){o=c;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,d.nc&&o.setAttribute("nonce",d.nc),o.src=e),a[e]=[n];var u=(n,t)=>{o.onerror=o.onload=null,clearTimeout(h);var r=a[e];if(delete a[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(t))),n)return n(t)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),s&&document.head.appendChild(o)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="",r=e=>new Promise(((n,t)=>{var a=d.miniCssF(e),r=d.p+a;if(((e,n)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var r=(s=t[a]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===n))return s}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var s;if((r=(s=o[a]).getAttribute("data-href"))===e||r===n)return s}})(a,r))return n();((e,n,t,a)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=o=>{if(r.onerror=r.onload=null,"load"===o.type)t();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||n,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=i,r.parentNode.removeChild(r),a(d)}},r.href=n,document.head.appendChild(r)})(e,r,n,t)})),o={523:0},d.f.miniCss=(e,n)=>{o[e]?n.push(o[e]):0!==o[e]&&{85:1,850:1}[e]&&n.push(o[e]=r(e).then((()=>{o[e]=0}),(n=>{throw delete o[e],n})))},(()=>{var e={523:0};d.f.j=(n,t)=>{var a=d.o(e,n)?e[n]:void 0;if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(((t,r)=>a=e[n]=[t,r]));t.push(a[2]=r);var o=d.p+d.u(n),s=new Error;d.l(o,(t=>{if(d.o(e,n)&&(0!==(a=e[n])&&(e[n]=void 0),a)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+n+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,a[1](s)}}),"chunk-"+n,n)}},d.O.j=n=>0===e[n];var n=(n,t)=>{var a,r,[o,s,i]=t,l=0;if(o.some((n=>0!==e[n]))){for(a in s)d.o(s,a)&&(d.m[a]=s[a]);if(i)var c=i(d)}for(n&&n(t);l<o.length;l++)r=o[l],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(c)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var l=d.O(void 0,[136,577],(()=>d("./index.jsx")));l=d.O(l)})();