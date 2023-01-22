"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[99],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a="Interface Segregation Principle",c={unversionedId:"questions/common/interface-segregation-principle",id:"questions/common/interface-segregation-principle",title:"Interface Segregation Principle",description:"Create highly specialized interfaces designed for a specific client. Customers should not be dependent on interfaces that they do not use.",source:"@site/interview/questions/common/interface-segregation-principle.md",sourceDirName:"questions/common",slug:"/questions/common/interface-segregation-principle",permalink:"/questions/common/interface-segregation-principle",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/common/interface-segregation-principle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is Inheritance?",permalink:"/questions/common/inheritance"},next:{title:"Liskov Substitution Principle",permalink:"/questions/common/liskov-substitution-principle"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-segregation-principle"},"Interface Segregation Principle"),(0,i.kt)("p",null,"Create highly specialized interfaces designed for a specific client. Customers should not be dependent on interfaces that they do not use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface ITodoList {\n    items: ITodo[];\n}\n\ninterface IWeatherList extends ITodoList {\n    getWeather: () => void;\n    getWeekForecast: () => void;\n}\n\nclass TodoList implements IWeatherList {\n    constructor(items: ITodo[]) {\n        this.items = items;\n    }\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class TodoList implements ITodoList {}\n"))))}u.isMDXComponent=!0}}]);