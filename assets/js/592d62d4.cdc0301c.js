"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[1239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(h,o(o({ref:t},l),{},{components:n})):i.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={},o="What is ts Mixin?",s={unversionedId:"questions/typescript/ts-mixin",id:"questions/typescript/ts-mixin",title:"What is ts Mixin?",description:"Mixins are a way to reuse a set of functions or properties in multiple classes, without using inheritance or composition. Mixins allow you to define a common behavior or functionality that can be shared by multiple classes, and they can be used to avoid duplication and to create more modular and flexible code.",source:"@site/interview/questions/typescript/ts-mixin.md",sourceDirName:"questions/typescript",slug:"/questions/typescript/ts-mixin",permalink:"/questions/typescript/ts-mixin",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/typescript/ts-mixin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is `implement` clause?",permalink:"/questions/typescript/ts-implement"},next:{title:"What is `namespace` and how to declare it?",permalink:"/questions/typescript/ts-namespace"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-ts-mixin"},"What is ts Mixin?"),(0,r.kt)("p",null,"Mixins are a way to reuse a set of functions or properties in multiple classes, without using inheritance or composition. Mixins allow you to define a common behavior or functionality that can be shared by multiple classes, and they can be used to avoid duplication and to create more modular and flexible code."),(0,r.kt)("p",null,"To define a mixin in TypeScript, you can create a function or a class that contains the common behavior or functionality, and then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mixin")," helper function to apply the mixin to one or more target classes. The ",(0,r.kt)("inlineCode",{parentName:"p"},"mixin")," helper function creates a new class that combines the target class with the mixin, and it returns the resulting class."),(0,r.kt)("p",null,"Here is an example of using mixins in TypeScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function Timestamps<T extends new(...args: any[]) => {}>(Base: T) {\n  return class extends Base {\n    createdAt = new Date();\n    updatedAt = new Date();\n  };\n}\n\nclass User {\n  name: string;\n  age: number;\n}\n\nconst TimestampedUser = Timestamps(User);\n\nconst user = new TimestampedUser();\nuser.name = 'John';\nuser.age = 42;\nconsole.log(user.createdAt);  // current date and time\nconsole.log(user.updatedAt);  // current date and time\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamps")," mixin is defined as a function that takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"Base")," class as a parameter, and it returns a new class that extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"Base")," class and adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"createdAt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"updatedAt")," properties. The ",(0,r.kt)("inlineCode",{parentName:"p"},"TimestampedUser")," class is created by applying the ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamps")," mixin to the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class, and it combines the properties and methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class with the ",(0,r.kt)("inlineCode",{parentName:"p"},"createdAt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"updatedAt")," properties of the mixin."),(0,r.kt)("p",null,"Mixins are a useful technique in TypeScript for reusing common behavior or functionality in multiple classes, and they can help to create more modular and flexible code. It is important to use mixins appropriately, as they can affect the inheritance hierarchy and the type compatibility of the code, and to make sure that the mixins do not interfere with the intended behavior of the code."))}u.isMDXComponent=!0}}]);