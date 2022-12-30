"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[898],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=l(i),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return i?n.createElement(m,s(s({ref:t},d),{},{components:i})):n.createElement(m,s({ref:t},d))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,s=new Array(o);s[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var l=2;l<o;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},9903:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(7462),a=(i(7294),i(3905));const o={sidebar_position:4,title:"NodeJS"},s="NodeJS Questions",r={unversionedId:"questions/nodejs",id:"questions/nodejs",title:"NodeJS",description:"check//www.edureka.co/blog/interview-questions/top-node-js-interview-questions-2016/ and https://www.interviewbit.com/node-js-interview-questions/",source:"@site/interview/questions/nodejs.md",sourceDirName:"questions",slug:"/questions/nodejs",permalink:"/interview/questions/nodejs",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/nodejs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"NodeJS"},sidebar:"tutorialSidebar",previous:{title:"Frontend",permalink:"/interview/questions/frontend"},next:{title:"Common",permalink:"/interview/questions/common"}},c={},l=[{value:"What is NodeJS?",id:"what-is-nodejs",level:3},{value:"What is Event Loop?",id:"what-is-event-loop",level:3},{value:"\u0412 \u0447\u0435\u043c \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 Node.js \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 (\u041f\u043e\u0434 \u043a\u0430\u043a\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0430 \u043f\u043e\u0434 \u043a\u0430\u043a\u0438\u0435 \u043d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442)?",id:"\u0432-\u0447\u0435\u043c-\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u043e\u0435-\u043e\u0442\u043b\u0438\u0447\u0438\u0435-nodejs-\u043e\u0442-\u0434\u0440\u0443\u0433\u0438\u0445-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438-\u043f\u043e\u0434-\u043a\u0430\u043a\u0438\u0435-\u0437\u0430\u0434\u0430\u0447\u0438-\u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442-\u0430-\u043f\u043e\u0434-\u043a\u0430\u043a\u0438\u0435-\u043d\u0435-\u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442",level:3},{value:"What is asyncsync operations and threading what is difference?",id:"what-is-asyncsync-operations-and-threading-what-is-difference",level:3},{value:"What is Node.js and how it works?",id:"what-is-nodejs-and-how-it-works",level:3},{value:"What is an event-loop in Node JS?",id:"what-is-an-event-loop-in-node-js",level:3},{value:"What is node.js streams?",id:"what-is-nodejs-streams",level:3},{value:"What is an Event Emitter in Node.js?",id:"what-is-an-event-emitter-in-nodejs",level:3},{value:"Monolithic vs. Microservices Architecture",id:"monolithic-vs-microservices-architecture",level:3},{value:"Benefits of Monolithic Architecture",id:"benefits-of-monolithic-architecture",level:4},{value:"Drawbacks of Monolithic Architecture",id:"drawbacks-of-monolithic-architecture",level:4},{value:"Microservice",id:"microservice",level:4},{value:"Benefits of Microservices Architecture",id:"benefits-of-microservices-architecture",level:4},{value:"Drawbacks of Microservices Architecture",id:"drawbacks-of-microservices-architecture",level:4},{value:"Child process in nodejs",id:"child-process-in-nodejs",level:3},{value:"Clustering NodeJS",id:"clustering-nodejs",level:3}],d={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nodejs-questions"},"NodeJS Questions"),(0,a.kt)("p",null,"check: ",(0,a.kt)("a",{parentName:"p",href:"https://www.edureka.co/blog/interview-questions/top-node-js-interview-questions-2016/"},"https://www.edureka.co/blog/interview-questions/top-node-js-interview-questions-2016/")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.interviewbit.com/node-js-interview-questions/"},"https://www.interviewbit.com/node-js-interview-questions/")),(0,a.kt)("h3",{id:"what-is-nodejs"},"What is NodeJS?"),(0,a.kt)("h3",{id:"what-is-event-loop"},"What is Event Loop?"),(0,a.kt)("h3",{id:"\u0432-\u0447\u0435\u043c-\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u043e\u0435-\u043e\u0442\u043b\u0438\u0447\u0438\u0435-nodejs-\u043e\u0442-\u0434\u0440\u0443\u0433\u0438\u0445-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438-\u043f\u043e\u0434-\u043a\u0430\u043a\u0438\u0435-\u0437\u0430\u0434\u0430\u0447\u0438-\u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442-\u0430-\u043f\u043e\u0434-\u043a\u0430\u043a\u0438\u0435-\u043d\u0435-\u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442"},"\u0412 \u0447\u0435\u043c \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 Node.js \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 (\u041f\u043e\u0434 \u043a\u0430\u043a\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0430 \u043f\u043e\u0434 \u043a\u0430\u043a\u0438\u0435 \u043d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442)?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"+Good perfomance for realtime applications (sockets, streams, video)"),(0,a.kt)("li",{parentName:"ul"},"+Easy scalability of using microservices and npm packages"),(0,a.kt)("li",{parentName:"ul"},"+One language for client and backend sides (Backend for frontend development)"),(0,a.kt)("li",{parentName:"ul"},"+Cross-platforming (web, desktop, mobile)"),(0,a.kt)("li",{parentName:"ul"},"-Reduces performance when handling Heavy Computing Tasks"),(0,a.kt)("li",{parentName:"ul"},"-Frequent changes of main nodejs API")),(0,a.kt)("h3",{id:"what-is-asyncsync-operations-and-threading-what-is-difference"},"What is async\\sync operations and threading what is difference?"),(0,a.kt)("h3",{id:"what-is-nodejs-and-how-it-works"},"What is Node.js and how it works?"),(0,a.kt)("p",null,"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It uses libuv to handle asynchronous events."),(0,a.kt)("h3",{id:"what-is-an-event-loop-in-node-js"},"What is an event-loop in Node JS?"),(0,a.kt)("p",null,"The mechanism of how nodejs javascript handle operations. JS has one single thread so only one thing can happen at a time. Also js has the call stack where all operations go. Operations may be blocking and non-blocking or sync and async. All blocking operations are handled one by one, top to bottom. But non-blocking/async operations are handled by the message queue or job queue (for promises). The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue."),(0,a.kt)("h3",{id:"what-is-nodejs-streams"},"What is node.js streams?"),(0,a.kt)("h3",{id:"what-is-an-event-emitter-in-nodejs"},"What is an Event Emitter in Node.js?"),(0,a.kt)("h3",{id:"monolithic-vs-microservices-architecture"},"Monolithic vs. Microservices Architecture"),(0,a.kt)("h4",{id:"benefits-of-monolithic-architecture"},"Benefits of Monolithic Architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Simple to develop."),(0,a.kt)("li",{parentName:"ul"},"Simple to test. For example you can implement end-to-end testing by simply launching the application and testing the UI with Selenium."),(0,a.kt)("li",{parentName:"ul"},"Simple to deploy. You just have to copy the packaged application to a server."),(0,a.kt)("li",{parentName:"ul"},"Simple to scale horizontally by running multiple copies behind a load balancer.")),(0,a.kt)("h4",{id:"drawbacks-of-monolithic-architecture"},"Drawbacks of Monolithic Architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This simple approach has a limitation in size and complexity."),(0,a.kt)("li",{parentName:"ul"},"Application is too large and complex to fully understand and made changes fast and correctly."),(0,a.kt)("li",{parentName:"ul"},"The size of the application can slow down the start-up time."),(0,a.kt)("li",{parentName:"ul"},"You must redeploy the entire application on each update."),(0,a.kt)("li",{parentName:"ul"},"Impact of a change is usually not very well understood which leads to do extensive manual testing."),(0,a.kt)("li",{parentName:"ul"},"Continuous deployment is difficult."),(0,a.kt)("li",{parentName:"ul"},"Monolithic applications can also be difficult to scale when different modules have conflicting resource requirements."),(0,a.kt)("li",{parentName:"ul"},"Another problem with monolithic applications is reliability. Bug in any module (e.g. memory leak) can potentially bring down the entire process. Moreover, since all instances of the application are identical, that bug will impact the availability of the entire application."),(0,a.kt)("li",{parentName:"ul"},"Monolithic applications has a barrier to adopting new technologies. Since changes in frameworks or languages will affect an entire application it is extremely expensive in both time and cost.")),(0,a.kt)("h4",{id:"microservice"},"Microservice"),(0,a.kt)("p",null,"The idea is to split your application into a set of smaller, interconnected services instead of building a single monolithic application. The Microservice architecture pattern significantly impacts the relationship between the application and the database. Instead of sharing a single database schema with other services, each service has its own database schema. Mobile, desktop, web apps don't have direct access to services but they have access to API Gateway. It is responsible for tasks such as load balancing, caching, access control, API metering, and monitoring."),(0,a.kt)("h4",{id:"benefits-of-microservices-architecture"},"Benefits of Microservices Architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It tackles the problem of complexity by decomposing application into a set of manageable services which are much faster to develop, and much easier to understand and maintain."),(0,a.kt)("li",{parentName:"ul"},"It enables each service to be developed independently by a team that is focused on that service."),(0,a.kt)("li",{parentName:"ul"},"It reduces barrier of adopting new technologies since the developers are free to choose whatever technologies make sense for their service and not bounded to the choices made at the start of the project."),(0,a.kt)("li",{parentName:"ul"},"Microservice architecture enables each microservice to be deployed independently. As a result, it makes continuous deployment possible for complex applications."),(0,a.kt)("li",{parentName:"ul"},"Microservice architecture enables each service to be scaled independently.")),(0,a.kt)("h4",{id:"drawbacks-of-microservices-architecture"},"Drawbacks of Microservices Architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microservices architecture adding a complexity to the project just by the fact that a microservices application is a distributed system. You need to choose and implement an inter-process communication mechanism based on either messaging or RPC and write code to handle partial failure and take into account other fallacies of distributed computing."),(0,a.kt)("li",{parentName:"ul"},"Microservices has the partitioned database architecture. Business transactions that update multiple business entities in a microservices-based application need to update multiple databases owned by different services. Using distributed transactions is usually not an option and you end up having to use an eventual consistency based approach, which is more challenging for developers."),(0,a.kt)("li",{parentName:"ul"},"Testing a microservices application is also much more complex then in case of monolithic web application. For a similar test for a service you would need to launch that service and any services that it depends upon (or at least configure stubs for those services)."),(0,a.kt)("li",{parentName:"ul"},"It is more difficult to implement changes that span multiple services. In a monolithic application you could simply change the corresponding modules, integrate the changes, and deploy them in one go. In a Microservice architecture you need to carefully plan and coordinate the rollout of changes to each of the services."),(0,a.kt)("li",{parentName:"ul"},"Deploying a microservices-based application is also more complex. A monolithic application is simply deployed on a set of identical servers behind a load balancer. In contrast, a microservice application typically consists of a large number of services. Each service will have multiple runtime instances. And each instance need to be configured, deployed, scaled, and monitored. In addition, you will also need to implement a service discovery mechanism. Manual approaches to operations cannot scale to this level of complexity and successful deployment a microservices application requires a high level of automation.")),(0,a.kt)("h3",{id:"child-process-in-nodejs"},"Child process in nodejs"),(0,a.kt)("h3",{id:"clustering-nodejs"},"Clustering NodeJS"))}p.isMDXComponent=!0}}]);