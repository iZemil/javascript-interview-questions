"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[195],{8665:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var i={};n.r(i),n.d(i,{exclude:()=>P,extract:()=>j,parse:()=>C,parseUrl:()=>I,pick:()=>J,stringify:()=>O,stringifyUrl:()=>F});var o=n(7294),s=n(6010),a=n(9960),r=n(2263),c=n(3285);const u="indexBanner_PBYZ",d="index__title_acqg",l="index__slogan_EC0o",p="buttons_AeoN",h="%[a-f0-9]{2}",f=new RegExp("("+h+")|([^%]+?)","gi"),m=new RegExp("("+h+")+","gi");function y(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const n=e.slice(0,t),i=e.slice(t);return Array.prototype.concat.call([],y(n),y(i))}function q(e){try{return decodeURIComponent(e)}catch{let t=e.match(f)||[];for(let n=1;n<t.length;n++)t=(e=y(t,n).join("")).match(f)||[];return e}}function g(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"};let n=m.exec(e);for(;n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{const e=q(n[0]);e!==n[0]&&(t[n[0]]=e)}n=m.exec(e)}t["%C2"]="\ufffd";const i=Object.keys(t);for(const o of i)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function b(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const n=e.indexOf(t);return-1===n?[]:[e.slice(0,n),e.slice(n+t.length)]}function W(e,t){const n={};if(Array.isArray(t))for(const i of t){const t=Object.getOwnPropertyDescriptor(e,i);t?.enumerable&&Object.defineProperty(n,i,t)}else for(const i of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,i);if(o.enumerable){t(i,e[i],e)&&Object.defineProperty(n,i,o)}}return n}const v=Symbol("encodeFragmentIdentifier");function S(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function w(e,t){return t.encode?t.strict?encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)):encodeURIComponent(e):e}function k(e,t){return t.decode?g(e):e}function E(e){return Array.isArray(e)?e.sort():"object"==typeof e?E(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function N(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function x(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function j(e){const t=(e=N(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function C(e,t){S((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,i)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===i[e]&&(i[e]={}),i[e][t[1]]=n):i[e]=n};case"bracket":return(e,n,i)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==i[e]?i[e]=[...i[e],n]:i[e]=[n]:i[e]=n};case"colon-list-separator":return(e,n,i)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==i[e]?i[e]=[...i[e],n]:i[e]=[n]:i[e]=n};case"comma":case"separator":return(t,n,i)=>{const o="string"==typeof n&&n.includes(e.arrayFormatSeparator),s="string"==typeof n&&!o&&k(n,e).includes(e.arrayFormatSeparator);n=s?k(n,e):n;const a=o||s?n.split(e.arrayFormatSeparator).map((t=>k(t,e))):null===n?n:k(n,e);i[t]=a};case"bracket-separator":return(t,n,i)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(i[t]=n?k(n,e):n);const s=null===n?[]:n.split(e.arrayFormatSeparator).map((t=>k(t,e)));void 0!==i[t]?i[t]=[...i[t],...s]:i[t]=s};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[...[n[e]].flat(),t]:n[e]=t}}}(t),i=Object.create(null);if("string"!=typeof e)return i;if(!(e=e.trim().replace(/^[?#&]/,"")))return i;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[s,a]=b(e,"=");void 0===s&&(s=e),a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:k(a,t),n(k(s,t),a,i)}for(const[o,s]of Object.entries(i))if("object"==typeof s&&null!==s)for(const[e,n]of Object.entries(s))s[e]=x(n,t);else i[o]=x(s,t);return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce(((e,t)=>{const n=i[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=E(n):e[t]=n,e}),Object.create(null))}function O(e,t){if(!e)return"";S((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],i=function(e){switch(e.arrayFormat){case"index":return t=>(n,i)=>{const o=n.length;return void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:null===i?[...n,[w(t,e),"[",o,"]"].join("")]:[...n,[w(t,e),"[",w(o,e),"]=",w(i,e)].join("")]};case"bracket":return t=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:null===i?[...n,[w(t,e),"[]"].join("")]:[...n,[w(t,e),"[]=",w(i,e)].join("")];case"colon-list-separator":return t=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:null===i?[...n,[w(t,e),":list="].join("")]:[...n,[w(t,e),":list=",w(i,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(i,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?i:(o=null===o?"":o,0===i.length?[[w(n,e),t,w(o,e)].join("")]:[[i,w(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:null===i?[...n,w(t,e)]:[...n,[w(t,e),"=",w(i,e)].join("")]}}(t),o={};for(const[a,r]of Object.entries(e))n(a)||(o[a]=r);const s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((n=>{const o=e[n];return void 0===o?"":null===o?w(n,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?w(n,t)+"[]":o.reduce(i(n),[]).join("&"):w(n,t)+"="+w(o,t)})).filter((e=>e.length>0)).join("&")}function I(e,t){t={decode:!0,...t};let[n,i]=b(e,"#");return void 0===n&&(n=e),{url:n?.split("?")?.[0]??"",query:C(j(e),t),...t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:k(i,t)}:{}}}function F(e,t){t={encode:!0,strict:!0,[v]:!0,...t};const n=N(e.url).split("?")[0]||"";let i=O({...C(j(e.url),{sort:!1}),...e.query},t);i&&(i=`?${i}`);let o=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);if(e.fragmentIdentifier){const i=new URL(n);i.hash=e.fragmentIdentifier,o=t[v]?i.hash:`#${e.fragmentIdentifier}`}return`${n}${i}${o}`}function J(e,t,n){n={parseFragmentIdentifier:!0,[v]:!1,...n};const{url:i,query:o,fragmentIdentifier:s}=I(e,n);return F({url:i,query:W(o,t),fragmentIdentifier:s},n)}function P(e,t,n){return J(e,Array.isArray(t)?e=>!t.includes(e):(e,n)=>!t(e,n),n)}const R=i;var A=n(6550),T=n(2222);const L=n(581);function $(e){return e[Math.floor(Math.random()*e.length)]}const D="any";class H{static getCache(){return T.get(H.KEY)??{}}static getTopicQuestions(e){return H.getCache()[e]??[]}static clearCache(e){if(e){const t=H.getCache();return T.set(H.KEY,{...t,[e]:[]})}return T.remove(H.KEY)}static updateCache(e){let{topicKey:t,data:n,topicLen:i}=e;const o=H.getCache(),s=H.getTopicQuestions(t);s.length===i?H.clearCache(t):T.set(H.KEY,{...o,[t]:s.concat(n.id)})}}H.KEY="questionStore";class M{static topics(){return L.map((e=>e.key))}static random(e,t){void 0===t&&(t=!1);let n=L.find((t=>t.key===e));n&&e!==D||(n=$(L));const{path:i,key:o,data:s}=n,a=H.getTopicQuestions(o),r=s.filter((e=>!a.includes(e.id))),c=$(r.length>0?r:s),u={topicPath:i,topicKey:o,topicLen:s.length,data:c};return t&&H.updateCache(u),u}static getLink(e){let{data:t,topicPath:n}=e;return`/interview/questions/${n}#${`${t.question.split(" ").join("-").replace(/[?()\.\\\/\,\~\^\'\"\`]/gi,"")}`}`.toLowerCase()}}const U="container_vHpI",_="title_skrs",B="topic_T0Yv",Z="question_d14t",K="nextButton_ZP1A",Y=()=>{const e=(0,A.k6)(),t=(0,A.TH)(),n=R.parse(t.search),[i,r]=o.useState(n?.topic||D),[c,u]=o.useState(M.random(i));return o.createElement("div",{className:U},o.createElement("h2",{className:_},"question",o.createElement("select",{className:B,value:i,onChange:t=>{const{value:n}=t.target;r(n),e.push({search:`topic=${n}`})}},M.topics().map((e=>o.createElement("option",{key:e},e))),o.createElement("option",{value:D},"All"))),o.createElement("div",{className:Z},o.createElement(a.Z,{to:M.getLink(c)},c.data.question)),o.createElement("button",{className:(0,s.Z)("button button--secondary button--lg",K),onClick:()=>{u(M.random(i,!0))}},"\ud83c\udfb2 Next"))};function G(){const{siteConfig:e}=(0,r.Z)();return o.createElement("header",{className:(0,s.Z)("hero hero--primary",u)},o.createElement("div",{className:"container"},o.createElement("h1",{className:d},e.title),o.createElement("div",{className:l},"\ud83c\udf08 Be a Better Javascript Developer"),o.createElement("div",{className:p},o.createElement(a.Z,{className:"button button--secondary button--lg",to:"/interview/getting-started"},"\ud83d\udcd9 Interview Guide"),o.createElement(a.Z,{className:"button button--secondary button--lg",to:"/resume-example"},"\ud83d\udc64 Resume Builder"))))}function Q(){const{siteConfig:e}=(0,r.Z)();return o.createElement(c.Z,{title:"Search",description:`${e.tagline}`},o.createElement(G,null),o.createElement("main",null,o.createElement(Y,null)))}},2222:(e,t,n)=>{var i=n(3907),o=n(542),s=n(2478),a="localStorage"in n.g&&n.g.localStorage?n.g.localStorage:i;function r(e,t){return 1===arguments.length?c(e):u(e,t)}function c(e){const t=a.getItem(e);return o(t)}function u(e,t){try{return a.setItem(e,JSON.stringify(t)),!0}catch(n){return!1}}r.set=u,r.get=c,r.remove=function(e){return a.removeItem(e)},r.clear=function(){return a.clear()},r.backend=function(e){return e&&(a=e),a},r.on=s.on,r.off=s.off,e.exports=r},542:e=>{e.exports=function(e){const t=function(e){try{return JSON.parse(e)}catch(t){return e}}(e);return void 0===t?null:t}},3907:e=>{var t={};e.exports={getItem:function(e){return e in t?t[e]:null},setItem:function(e,n){return t[e]=n,!0},removeItem:function(e){return!!(e in t)&&delete t[e]},clear:function(){return t={},!0}}},2478:(e,t,n)=>{var i=n(542),o={};function s(e){e||(e=n.g.event);var t=o[e.key];t&&t.forEach((function(t){t(i(e.newValue),i(e.oldValue),e.url||e.uri)}))}e.exports={on:function(e,t){o[e]?o[e].push(t):o[e]=[t],n.g.addEventListener?n.g.addEventListener("storage",s,!1):n.g.attachEvent?n.g.attachEvent("onstorage",s):n.g.onstorage=s},off:function(e,t){var n=o[e];n.length>1?n.splice(n.indexOf(t),1):o[e]=[]}}},581:e=>{e.exports=JSON.parse('[{"file":"common.md","path":"common","key":"Common","data":[{"id":0,"question":"What is code refactoring?"},{"id":1,"question":"What is CORS?"},{"id":2,"question":"SPA vs MPA"},{"id":3,"question":"What is Memoization?"},{"id":4,"question":"What is monolithic architecture?"},{"id":5,"question":"What is Microservice architecture?"},{"id":6,"question":"What is SOLID?"},{"id":7,"question":"Single Responsibility Principle"},{"id":8,"question":"Open-Closed Principle"},{"id":9,"question":"Liskov Substitution Principle"},{"id":10,"question":"Interface Segregation Principle"},{"id":11,"question":"Dependency Inversion Principle"}]},{"file":"frontend.md","path":"frontend","key":"Frontend","data":[{"id":0,"question":"What is DOM?"},{"id":1,"question":"What is HTML?"},{"id":2,"question":"What is the difference between attributes and properties?"},{"id":3,"question":"What is Event Propagation?"},{"id":4,"question":"What is Event Bubbling?"},{"id":5,"question":"What is Event Capturing?"},{"id":6,"question":"Difference between attributes and properties in DOM"},{"id":7,"question":"Ways to store data in browser?"},{"id":8,"question":"What is SPA and how to make it SEO-friendly?"},{"id":9,"question":"What is CSS?"},{"id":10,"question":"What is the difference between \\"display: block\\" and \\"display: inline\\" in CSS?"},{"id":11,"question":"What is the difference between \\"display: inline-block\\" and \\"display: block\\" in CSS?"},{"id":12,"question":"What is the difference between \\"display: none\\" and \\"visibility: hidden\\" and \\"opacity: 0\\" in CSS?"},{"id":13,"question":"What is the difference between \\"padding\\" and \\"margin\\" in CSS?"},{"id":14,"question":"What are the different ways to apply CSS to an HTML document?"},{"id":15,"question":"What CSS style type do you prefer and why?"},{"id":16,"question":"What are the different types of CSS units, and how do they work?"},{"id":17,"question":"rem vs em"},{"id":18,"question":"What is responsive design, and how do you implement it in CSS?"},{"id":19,"question":"What is ReactJS, its pros and cons?"},{"id":20,"question":"Props vs State"},{"id":21,"question":"What is Virtual DOM?"},{"id":22,"question":"What is JSX?"},{"id":23,"question":"Why is it used className, neither class in React?"},{"id":24,"question":"What is React Component?"},{"id":25,"question":"Controlled vs Uncontrolled components"},{"id":26,"question":"Describe a React Lifecycle"},{"id":27,"question":"What is Redux and its principes?"},{"id":28,"question":"Differences between redux-saga and redux-thunk?"},{"id":29,"question":"Describe React Context API"},{"id":30,"question":"What is Ref and why to use it?"},{"id":31,"question":"What is SynteticEvent in React?"},{"id":32,"question":"Describe react routing"},{"id":33,"question":"Functional components vs Class components"},{"id":34,"question":"What is the problem with code below?"},{"id":35,"question":"React useCallback vs useMemo?"}]},{"file":"javascript.md","path":"javascript","key":"Javascript","data":[{"id":0,"question":"What is JavaScript and what is it used for?"},{"id":1,"question":"Tell about JS types"},{"id":2,"question":"What is NaN? What type? How to define NaN value?"},{"id":3,"question":"Tell about JS type converting"},{"id":4,"question":"Tell about JS Operators"},{"id":5,"question":"Tell about var vs. let vs. const"},{"id":6,"question":"What is the difference between undefined and is not defined?"},{"id":7,"question":"What is hoisting in JavaScript?"},{"id":8,"question":"What is this?"},{"id":9,"question":"Why is the result of comparing two similar objects false?"},{"id":10,"question":"What is an arguments object?"},{"id":11,"question":"What is the difference between null, undefined and undeclared?"},{"id":12,"question":"What is the difference between const person = Person() and const person = new Person()?"},{"id":13,"question":"Why is it better to leave the global scope \\"as is\\" and not touch it?"},{"id":14,"question":"How do you handle errors in JavaScript?"},{"id":15,"question":"What tools do you use when debugging?"},{"id":16,"question":"Explain the difference between mutable and immutable values"},{"id":17,"question":"What is an event loop? What is the difference between a call stack and a task queue?"},{"id":18,"question":"What is a higher-order function?"},{"id":19,"question":"What is Function Composition?"},{"id":20,"question":"What are Map and Set objects?"},{"id":21,"question":"What are WeakMap and WeakSet objects?"},{"id":22,"question":"What is a callback function?"},{"id":23,"question":"What is an arrow function and its specifics?"},{"id":24,"question":"What is a pure function?"},{"id":25,"question":"What is a closure in JavaScript? Give an example."},{"id":26,"question":"Explain Proxy object and its use cases"},{"id":27,"question":"Explain Generator function and its use cases"},{"id":28,"question":"How to clone an object? And Shallow Clone vs. Deep Clone"},{"id":29,"question":"What are the ways to parallelize calculations?"},{"id":30,"question":"What is Concurrency execution?"},{"id":31,"question":"What is Parallel execution?"},{"id":32,"question":"What is Multi-threaded execution?"},{"id":33,"question":"What is Asynchronous execution?"},{"id":34,"question":"What is a promise, and how is it used?"},{"id":35,"question":"How to create promises?"},{"id":36,"question":"What is promise chaining"},{"id":37,"question":"How to handle promise errors?"},{"id":38,"question":"What is async/await?"},{"id":39,"question":"Tell about promise common pitfalls"},{"id":40,"question":"What do you know about AJAX?"},{"id":41,"question":"How to handle multiple asynchronous requests?"},{"id":42,"question":"What is OOP?"},{"id":43,"question":"Explain methods and properties"},{"id":44,"question":"Purpose of \xabnew\xbb keyword?"},{"id":45,"question":"What is the difference between a class and an object?"},{"id":46,"question":"What is Inheritance?"},{"id":47,"question":"What is Polymorphism?"},{"id":48,"question":"What is Encapsulation?"},{"id":49,"question":"Explain differences between bind vs apply vs call"}]},{"file":"nodejs.md","path":"nodejs","key":"NodeJS","data":[{"id":0,"question":"What is NodeJS?"},{"id":1,"question":"Pros and Cons of NodeJS?"},{"id":2,"question":"What is libuv?"},{"id":3,"question":"What is an Event Loop?"},{"id":4,"question":"List down the various timing features of NodeJS"},{"id":5,"question":"What is the diff process.nextTick vs setImmediate"},{"id":6,"question":"What is the difference between synchronous and asynchronous code in Node.js?"},{"id":7,"question":"What is the package.json?"},{"id":8,"question":"What is the role of the package-lock.json?"},{"id":9,"question":"What are tilde(~) and caret(^) in package.json?"},{"id":10,"question":"Explain\xa0REPL in the context of NodeJS"},{"id":11,"question":"What is a middleware in NodeJS?"},{"id":12,"question":"How do you handle errors in a NodeJS application?"},{"id":13,"question":"What is the diff between spawn and fork methods?"},{"id":14,"question":"Explain the concept of stub in NodeJS"},{"id":15,"question":"What is a NodeJS Buffer?"},{"id":16,"question":"What is a NodeJS Stream?"},{"id":17,"question":"What is an Event Emitter in NodeJS?"},{"id":18,"question":"How do you structure a NodeJS project?"},{"id":19,"question":"How do you handle the performance of a NodeJS application?"},{"id":20,"question":"How do you test a Node.js application?"},{"id":21,"question":"Describe child process in NodeJS"},{"id":22,"question":"How to create a clustering in NodeJS?"}]},{"file":"typescript.md","path":"typescript","key":"Typescript","data":[{"id":0,"question":"What is TypeScript, and its benefits?"},{"id":1,"question":"What is the typeof operator?"},{"id":2,"question":"Difference void vs undefined"},{"id":3,"question":"What is an unknown type?"},{"id":4,"question":"Why to use never?"},{"id":5,"question":"Interfaces vs Types"},{"id":6,"question":"What is enum and why to use?"},{"id":7,"question":"What is difference between enum vs const?"},{"id":8,"question":"What is as syntax in TypeScript?"},{"id":9,"question":"Describe Unions and Intersection Types"},{"id":10,"question":"What is abstract class and why to use it?"},{"id":11,"question":"What is the \u2018implement\u2019 clause?"},{"id":12,"question":"What are Decorators?"},{"id":13,"question":"Tell about public vs private vs protected"},{"id":14,"question":"Function overloading typescript"},{"id":15,"question":"What is the use of the tsconfig.json file?"},{"id":16,"question":"What is the declare Keyword in TypeScript?"},{"id":17,"question":"What are Mixins?"},{"id":18,"question":"What is Namespace and how to declare it?"},{"id":19,"question":"What are Generics?"},{"id":20,"question":"What are template literal types?"},{"id":21,"question":"What is conditional type and how to create?"},{"id":22,"question":"What utility types exist and their usage"}]}]')}}]);