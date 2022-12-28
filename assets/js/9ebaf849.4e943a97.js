"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="Typescript",p={unversionedId:"questions/typescript",id:"questions/typescript",title:"Typescript",description:"What is TypeScript and why would I use it in place of JavaScript?",source:"@site/interview/questions/typescript.md",sourceDirName:"questions",slug:"/questions/typescript",permalink:"/interview/questions/typescript",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/typescript.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/interview/questions/javascript"},next:{title:"Frontend",permalink:"/interview/questions/frontend"}},s={},l=[{value:"What is TypeScript and why would I use it in place of JavaScript?",id:"what-is-typescript-and-why-would-i-use-it-in-place-of-javascript",level:4},{value:"void vs any",id:"void-vs-any",level:4},{value:"Create fn with object argument and return string",id:"create-fn-with-object-argument-and-return-string",level:4},{value:"Optional Properties",id:"optional-properties",level:4},{value:"Interfaces vs Types",id:"interfaces-vs-types",level:4},{value:"Union types",id:"union-types",level:4},{value:"Values of object type",id:"values-of-object-type",level:4},{value:"Generics",id:"generics",level:4},{value:"Function overloading typescript",id:"function-overloading-typescript",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typescript"},"Typescript"),(0,i.kt)("h4",{id:"what-is-typescript-and-why-would-i-use-it-in-place-of-javascript"},"What is TypeScript and why would I use it in place of JavaScript?"),(0,i.kt)("p",null,"typings, error handling, type documentation, team coding"),(0,i.kt)("h4",{id:"void-vs-any"},"void vs any"),(0,i.kt)("h4",{id:"create-fn-with-object-argument-and-return-string"},"Create fn with object argument and return string"),(0,i.kt)("h4",{id:"optional-properties"},"Optional Properties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface IPerson {\n    name: string;\n    midlename?: string;\n}\n\ntype TPersonUdate = Partial<IPerson>;\n")),(0,i.kt)("h4",{id:"interfaces-vs-types"},"Interfaces vs Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"different syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface SetPoint {\n    (x: number, y: number): void;\n}\n\ntype SetPoint = (x: number, y: number) => void;\n\n// extening\ninterface PartialPointX {\n    x: number;\n}\ninterface Point extends PartialPointX {\n    y: number;\n}\n\ntype PartialPointX = { x: number };\ntype Point = PartialPointX & { y: number };\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"other type creation only with type:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// primitive\ntype Name = string;\n\n// object\ntype PartialPointX = { x: number };\ntype PartialPointY = { y: number };\n\n// map\ntype TMap = new Map<string, number>;\n\n// union\ntype PartialPoint = PartialPointX | PartialPointY;\n\n// tuple\ntype Data = [number, string];\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Both can be implemented by classes"),(0,i.kt)("li",{parentName:"ul"},"interface merging")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Point {\n    x: number;\n}\ninterface Point {\n    y: number;\n}\n\nconst point: Point = { x: 1, y: 2 };\n")),(0,i.kt)("h4",{id:"union-types"},"Union types"),(0,i.kt)("h4",{id:"values-of-object-type"},"Values of object type"),(0,i.kt)("h4",{id:"generics"},"Generics"),(0,i.kt)("h3",{id:"function-overloading-typescript"},"Function overloading typescript"),(0,i.kt)("p",null,"TypeScript provides the concept of function overloading. You can have multiple functions with the same name but different parameter types and return type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function add(a: string, b: string): string;\nfunction add(a: number, b: number): number;\nfunction add(a: any, b: any): any {\n    return a + b;\n}\n")))}u.isMDXComponent=!0}}]);