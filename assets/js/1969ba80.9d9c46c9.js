"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[6992],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,h=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6119:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="What is the `declare` keyword in TypeScript?",s={unversionedId:"questions/typescript/ts-declare",id:"questions/typescript/ts-declare",title:"What is the `declare` keyword in TypeScript?",description:"The declare keyword in TypeScript is used to tell the compiler that a given symbol is already defined elsewhere, and that it should not try to generate any code for it. This is commonly used for ambient declarations, which are declarations that are not meant to be implemented, but rather to provide a type and/or shape for the code that is using them.",source:"@site/interview/questions/typescript/ts-declare.md",sourceDirName:"questions/typescript",slug:"/questions/typescript/ts-declare",permalink:"/questions/typescript/ts-declare",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/typescript/ts-declare.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is `as` syntax in TypeScript?",permalink:"/questions/typescript/ts-as"},next:{title:"What is a decorator?",permalink:"/questions/typescript/ts-decorator"}},l={},c=[],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-the-declare-keyword-in-typescript"},"What is the ",(0,a.kt)("inlineCode",{parentName:"h1"},"declare")," keyword in TypeScript?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"declare")," keyword in TypeScript is used to tell the compiler that a given symbol is already defined elsewhere, and that it should not try to generate any code for it. This is commonly used for ambient declarations, which are declarations that are not meant to be implemented, but rather to provide a type and/or shape for the code that is using them."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"declare")," keyword can be used to define variables, functions, classes, and other types of symbols, and it can be used in conjunction with other TypeScript features, such as interfaces and type aliases."),(0,a.kt)("p",null,"Here is an example of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"declare")," keyword in TypeScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"declare const MY_CONSTANT: string;\n\nconsole.log(MY_CONSTANT);  // 'Hello World'\n")),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"MY_CONSTANT")," variable is declared with the ",(0,a.kt)("inlineCode",{parentName:"p"},"declare")," keyword, and it is assigned the type ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),". The compiler is told that the ",(0,a.kt)("inlineCode",{parentName:"p"},"MY_CONSTANT")," variable is already defined elsewhere, and that it should not generate any code for it."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"declare")," keyword is commonly used in TypeScript for ambient declarations, and it can be useful for providing type information for code that is written in other languages, or for code that is defined in external libraries or modules. It can help to improve the type safety and reliability of the code, and to make it easier to understand and maintain."))}d.isMDXComponent=!0}}]);