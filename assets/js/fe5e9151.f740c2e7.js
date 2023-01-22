"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[2352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="What are the different ways to apply CSS to an HTML document?",s={unversionedId:"questions/frontend/apply-css-html-document",id:"questions/frontend/apply-css-html-document",title:"What are the different ways to apply CSS to an HTML document?",description:"The different ways to apply CSS to an HTML document are:",source:"@site/interview/questions/frontend/apply-css-html-document.md",sourceDirName:"questions/frontend",slug:"/questions/frontend/apply-css-html-document",permalink:"/questions/frontend/apply-css-html-document",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/frontend/apply-css-html-document.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is the purpose of the\xa0`alt`\xa0attribute on images?",permalink:"/questions/frontend/alt-attribute"},next:{title:"What is the purpose of cache?",permalink:"/questions/frontend/browser-cache"}},i={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-are-the-different-ways-to-apply-css-to-an-html-document"},"What are the different ways to apply CSS to an HTML document?"),(0,a.kt)("p",null,"The different ways to apply CSS to an HTML document are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Inline styles: Inline styles are styles that are defined within the HTML element, using the "style" attribute. Inline styles apply to a single element, and they have the highest priority.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<p style="font-weight:bold;">Bold Font</p>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Embedded styles: Embedded styles are styles that are defined within the "style" element in the head of the HTML document. Embedded styles apply to all elements in the document, and they have a higher priority than external styles.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n    <head>\n        <title>Internal CSS Example</title>\n        <style>\n            p {\n                color: red;\n            }\n\n            a {\n                color: blue;\n            }\n        </style>\n        ...\n    </head>\n</html>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'External styles: External styles are styles that are defined in a separate CSS file, and that are linked to the HTML document using the "link" element in the head of the document. External styles apply to all elements in the document, and they have the lowest priority.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n        <title>External CSS Example</title>\n        <link rel="stylesheet" type="text/css" href="/path/to/some-style.css" />\n        ...\n    </head>\n</html>\n')))}u.isMDXComponent=!0}}]);