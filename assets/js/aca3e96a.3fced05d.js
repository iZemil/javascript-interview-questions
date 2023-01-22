"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[2250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={},s="What does async and defer refer in a script tag?",o={unversionedId:"questions/frontend/script-async-defer",id:"questions/frontend/script-async-defer",title:"What does async and defer refer in a script tag?",description:"Without async or defer, the browser will run your script immediately, before rendering the elements.",source:"@site/interview/questions/frontend/script-async-defer.md",sourceDirName:"questions/frontend",slug:"/questions/frontend/script-async-defer",permalink:"/questions/frontend/script-async-defer",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/frontend/script-async-defer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is the responsive design, and how do you implement it?",permalink:"/questions/frontend/responsive-design"},next:{title:"What is SPA and how to make it SEO-friendly?",permalink:"/questions/frontend/spa-and-seo"}},c={},l=[{value:"<code>async</code> script:",id:"async-script",level:2},{value:"<code>defer</code> script:",id:"defer-script",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-does-async-and-defer-refer-in-a-script-tag"},"What does async and defer refer in a script tag?"),(0,i.kt)("p",null,"Without ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"defer"),", the browser will run your script immediately, before rendering the elements. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="myscript.js"><\/script>\n')),(0,i.kt)("h2",{id:"async-script"},(0,i.kt)("inlineCode",{parentName:"h2"},"async")," script:"),(0,i.kt)("p",null,"Downloads the script file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading. With async (asynchronous), the browser will continue to load the HTML page and render it while the browser load and execute the script at the same time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Google Analytics is usually added like this --\x3e\n<script async src="https://google-analytics.com/analytics.js"><\/script>\n')),(0,i.kt)("h2",{id:"defer-script"},(0,i.kt)("inlineCode",{parentName:"h2"},"defer")," script:"),(0,i.kt)("p",null,"Defer downloads the script file during HTML parsing and will only execute it after the HTML parser has completed. With defer, the browser will run your script when the page finished parsing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script defer src="myscript.js"><\/script>\n')))}d.isMDXComponent=!0}}]);