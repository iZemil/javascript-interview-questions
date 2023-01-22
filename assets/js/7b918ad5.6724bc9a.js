"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[7859],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8260:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294),i=r(2802),o=r(9960),s=r(6010);const a="card_oSrP",d="label_iXv5",c="index_AVPh";function l(e){const{docId:t,label:r,index:l}=e,p=(0,i.xz)(t);return n.createElement("div",{className:(0,s.Z)(a,"card")},void 0!==l&&n.createElement("div",{className:c},l+1),n.createElement(o.Z,{className:d,to:`/${t}`},r??p.title))}const p="list_rY5C";function u(e){const{path:t="",children:r=[]}=e;return n.createElement("div",{className:p},r.map(((e,r)=>{let{id:i}=e;return n.createElement(l,{key:`${i}-${r}`,index:r,docId:`${t}${i}`})})))}},5863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=r(7462),i=(r(7294),r(3905)),o=r(8260);const s={title:"Frontend Questions"},a=void 0,d={unversionedId:"questions/frontend/index",id:"questions/frontend/index",title:"Frontend Questions",description:"DOM",source:"@site/interview/questions/frontend/index.mdx",sourceDirName:"questions/frontend",slug:"/questions/frontend/",permalink:"/questions/frontend/",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/frontend/index.mdx",tags:[],version:"current",frontMatter:{title:"Frontend Questions"},sidebar:"tutorialSidebar",previous:{title:"What is TypeScript?",permalink:"/questions/typescript/what-is-typescript"},next:{title:"What is the purpose of the\xa0`alt`\xa0attribute on images?",permalink:"/questions/frontend/alt-attribute"}},c={},l=[{value:"DOM",id:"dom",level:2},{value:"CSS",id:"css",level:2},{value:"Browser",id:"browser",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dom"},"DOM"),(0,i.kt)(o.Z,{path:"questions/frontend/",mdxType:"List"},[{id:"dom"},{id:"html"},{id:"span-vs-div"},{id:"meta-tags"},{id:"alt-attribute"},{id:"html-aria"},{id:"html-iframe"},{id:"rel-nofollow-noreferrer-noopener"},{id:"dom-attributes-properties"},{id:"event-propagation"},{id:"event-bubbling"},{id:"event-capturing"},{id:"enctype-attribute"},{id:"script-async-defer"}]),(0,i.kt)("h2",{id:"css"},"CSS"),(0,i.kt)(o.Z,{path:"questions/frontend/",mdxType:"List"},[{id:"css"},{id:"apply-css-html-document"},{id:"padding-vs-margin"},{id:"css-units"},{id:"css-vs-js-animations"},{id:"css-at-rule"},{id:"css-box-model"},{id:"css-engine"},{id:"css-grid-vs-flexbox"},{id:"css-position"},{id:"css-preprocessor"},{id:"css-selectors"},{id:"progressive-rendering"},{id:"pseudo-class-vs-element"},{id:"reset-vs-normilize"},{id:"translate-vs-position"},{id:"ui-ux"}]),(0,i.kt)("h2",{id:"browser"},"Browser"),(0,i.kt)(o.Z,{path:"questions/frontend/",mdxType:"List"},[{id:"browser-rendering-engine"},{id:"browser-event-loop"},{id:"tasks-vs-microtasks"},{id:"browser-microtasks"},{id:"website-perfomance"},{id:"store-data-browser"},{id:"browser-cache"},{id:"mobile-vs-desktop-first-approach"},{id:"responsive-design"},{id:"image-replacement"},{id:"spa-and-seo"}]))}u.isMDXComponent=!0}}]);