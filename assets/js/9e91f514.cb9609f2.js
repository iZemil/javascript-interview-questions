"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[4524],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),h=i,d=l["".concat(c,".").concat(h)]||l[h]||f[h]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={},a="What is `this`?",s={unversionedId:"questions/javascript/what-is-this",id:"questions/javascript/what-is-this",title:"What is `this`?",description:"In JavaScript, this is a keyword that refers to the current context of a function or method. It is used to access and modify properties of the current context, and its value is determined by how a function or method is called.",source:"@site/interview/questions/javascript/what-is-this.md",sourceDirName:"questions/javascript",slug:"/questions/javascript/what-is-this",permalink:"/questions/javascript/what-is-this",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/javascript/what-is-this.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is an object?",permalink:"/questions/javascript/what-is-object"},next:{title:"Why to use `new` keyword?",permalink:"/questions/javascript/why-to-use-new-keyword"}},c={},u=[],p={toc:u};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-this"},"What is ",(0,i.kt)("inlineCode",{parentName:"h1"},"this"),"?"),(0,i.kt)("p",null,"In JavaScript, ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," is a keyword that refers to the current context of a function or method. It is used to access and modify properties of the current context, and its value is determined by how a function or method is called."),(0,i.kt)("p",null,"For example, in the global context, ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," refers to the global object (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," in the browser)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n    value: 1,\n    getObj() {\n        return this;\n    }\n}\nobj.getObj() === obj; // true\n\nfunction fn() {\n    return this;\n}\nfn() === this; // true; this - global context\n")))}l.isMDXComponent=!0}}]);