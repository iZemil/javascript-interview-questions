"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[8252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(r),m=a,f=y["".concat(p,".").concat(m)]||y[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="What are template literal types?",l={unversionedId:"questions/typescript/template-literal-type",id:"questions/typescript/template-literal-type",title:"What are template literal types?",description:"Template literal types are a useful way to enforce the type of a string literal or a string template expression, and they can help to prevent errors and improve code quality by ensuring that a string has the correct format or content. They are also a useful way to create more expressive and readable types, and to improve the readability and the maintainability of your code.",source:"@site/interview/questions/typescript/template-literal-type.md",sourceDirName:"questions/typescript",slug:"/questions/typescript/template-literal-type",permalink:"/questions/typescript/template-literal-type",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/typescript/template-literal-type.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Why and how to use `never`?",permalink:"/questions/typescript/never-type"},next:{title:"What is `as` syntax in TypeScript?",permalink:"/questions/typescript/ts-as"}},p={},s=[],c={toc:s};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-are-template-literal-types"},"What are template literal types?"),(0,a.kt)("p",null,"Template literal types are a useful way to enforce the type of a string literal or a string template expression, and they can help to prevent errors and improve code quality by ensuring that a string has the correct format or content. They are also a useful way to create more expressive and readable types, and to improve the readability and the maintainability of your code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Greeting = `Hello, ${'world'}!`;\ntype Name = `${'John'} ${'Doe'}`;\n\nlet greeting: Greeting = 'Hello, world!';  // ok\nlet name: Name = 'John Doe';  // ok\n\nlet x: Greeting = 'Hi, world!';  // error: Type '\"Hi, world!\"' is not assignable to type 'Greeting'\nlet y: Name = 'Jane Doe';  // error: Type '\"Jane Doe\"' is not assignable to type 'Name'\n")))}y.isMDXComponent=!0}}]);