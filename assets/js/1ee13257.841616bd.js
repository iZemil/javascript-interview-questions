"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[5580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(o,".").concat(m)]||c[m]||v[m]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={tags:["Hard","Array","Sort"]},l="Insert Interval",s={unversionedId:"algorithms/hard/insert-interval",id:"algorithms/hard/insert-interval",title:"Insert Interval",description:"Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).",source:"@site/interview/algorithms/hard/insert-interval.md",sourceDirName:"algorithms/hard",slug:"/algorithms/hard/insert-interval",permalink:"/algorithms/hard/insert-interval",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/algorithms/hard/insert-interval.md",tags:[{label:"Hard",permalink:"/tags/hard"},{label:"Array",permalink:"/tags/array"},{label:"Sort",permalink:"/tags/sort"}],version:"current",frontMatter:{tags:["Hard","Array","Sort"]},sidebar:"tutorialSidebar",previous:{title:"First Missing Positive",permalink:"/algorithms/hard/first-missing-positive"}},o={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"insert-interval"},"Insert Interval"),(0,a.kt)("p",null,"Given a set of ",(0,a.kt)("strong",{parentName:"p"},"non-overlapping")," intervals, insert a new interval into the intervals (merge if necessary)."),(0,a.kt)("p",null,"You may assume that the intervals were initially sorted according to their start times."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: intervals = [[1,3],[6,9]], newInterval = [2,5]\nOutput: [[1,5],[6,9]]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]\nOutput: [[1,2],[3,10],[12,16]]\nExplanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for an interval.\n * function Interval(start, end) {\n *     this.start = start;\n *     this.end = end;\n * }\n */\n/**\n * @param {Interval[]} intervals\n * @param {Interval} newInterval\n * @return {Interval[]}\n */\nvar insert = function (intervals, newInterval) {\n    var len = intervals.length;\n    var i = 0;\n    var res = [];\n    while (i < len && intervals[i].end < newInterval.start) {\n        res.push(intervals[i]);\n        i++;\n    }\n    while (i < len && intervals[i].start <= newInterval.end) {\n        newInterval.start = Math.min(newInterval.start, intervals[i].start);\n        newInterval.end = Math.max(newInterval.end, intervals[i].end);\n        i++;\n    }\n    res.push(newInterval);\n    while (i < len) {\n        res.push(intervals[i]);\n        i++;\n    }\n    return res;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Complexity:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time complexity: O(n)."),(0,a.kt)("li",{parentName:"ul"},"Space complexity: O(n)."))))}c.isMDXComponent=!0}}]);