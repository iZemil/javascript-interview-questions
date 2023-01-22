"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[159],{1730:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(7294),s=n(4646),r=n(3612),i=n(6010),l=n(7462),o=n(460),c=n.n(o),m=n(3746),u=n(2949),p=n(7694),d=n(1418);const y="editor_NE6_";function g(e){const{code:t,onChange:n}=e,{colorMode:s}=(0,u.I)(),r="dark"===s?d.Z:p.Z;return a.createElement(c(),{value:t,onValueChange:e=>{n(e)},highlight:e=>a.createElement(m.ZP,(0,l.Z)({},m.lG,{theme:r,code:e,language:"typescript"}),(e=>{let{className:t,style:n,tokens:s,getLineProps:r,getTokenProps:i}=e;return a.createElement(a.Fragment,null,s.map(((e,t)=>a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>a.createElement("span",i({token:e,key:t}))))))))})),padding:10,insertSpaces:!0,tabSize:4,className:y,style:r.plain})}const k="browserWindow_my1Q",h="browserWindowHeader_jXSR",f="buttons_uHc7",b="browserWindowAddressBar_Pd8y",S="dot_giz1",E="browserWindowBody_Idgs";function N(e){let{children:t,minHeight:n,url:s}=e;return a.createElement("div",{className:k,style:{minHeight:n}},a.createElement("div",{className:h},a.createElement("div",{className:f},a.createElement("span",{className:S,style:{background:"#f25f58"}}),a.createElement("span",{className:S,style:{background:"#fbbe3c"}}),a.createElement("span",{className:S,style:{background:"#58cb42"}})),s&&a.createElement("div",{className:(0,i.Z)(b,"text--truncate")},s)),a.createElement("div",{className:E},t))}const v="tools_Q6LD",w="run_Nfcz",C="status_vbKK",$="testCases_IQq2";var x;!function(e){e.SUCCESS="success",e.FAILURE="failure"}(x||(x={}));const P=e=>{const t=e.match(/function .+\(/gi);return t&&t[0]?t[0].replace(/(function)|[|\(\) ]/gi,""):"main"};function _(e){const{placeholder:t,tests:n}=e,[l,o]=(0,a.useState)(t),[c,m]=(0,a.useState)([]),[u,p]=(0,a.useState)(""),d=(0,a.useMemo)((()=>c.filter((e=>e.status===x.SUCCESS)).length),[c]),y=(0,a.useMemo)((()=>d===c.length),[d,c]);return a.createElement(N,{minHeight:400},a.createElement("div",{className:v},0!==c.length?a.createElement("div",{className:(0,i.Z)(C,"alert",y?"alert--success":"alert--warning")},"Status: ",y?"Success":`Failure (${d}/${c.length})`):a.createElement("div",{className:(0,i.Z)(C)},"Write your solution:"),a.createElement("button",{className:(0,i.Z)("button button--primary",w),onClick:()=>{const e=[];let t="",a=0;for(const r of n){const{input:n,output:i}=r,o=`${n.map((e=>JSON.stringify(e))).join(", ")}`,c=P(l);let m,u="";u+=`${l};`,u+=`return ${c}(${o});`;try{m=new Function(u)()}catch(s){t=String(s)}const p=JSON.stringify(m)===JSON.stringify(i);console.log(`${a+1}. ${p?"Successful":"Failed"} Test: (${o}) => ${m} expected ${i}`),e.push({index:a,status:p?x.SUCCESS:x.FAILURE,result:m}),a+=1}m(e),p(t)}},"Run")),a.createElement(g,{code:l,onChange:o}),a.createElement("div",{className:$},u&&a.createElement(r.Z,{type:"danger",title:"Error"},u),n.map(((e,t)=>{const n=c[t],r=n?.status,i=r===x.SUCCESS,l=r===x.FAILURE;return a.createElement(s.Z,{key:`${t}`,language:"md",title:`Test Case ${t+1} ${i?"\u2705":""}${l?"\ud83d\udeab":""}`},(e=>{let t="";return t+=`Input: ${e.input.map((e=>JSON.stringify(e))).join(", ")}\n`,t+=`Output: ${JSON.stringify(e.output)}`,t})(e),l?`\nResult: ${JSON.stringify(n.result)}`:"")}))))}},9500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),s=(n(7294),n(3905)),r=n(1730);const i={tags:["Easy","Array","Dynamic Programming"],title:"Buy and Sell Stocks 1"},l=void 0,o={unversionedId:"algorithms/easy/best-time-to-buy-and-sell-stock-1",id:"algorithms/easy/best-time-to-buy-and-sell-stock-1",title:"Buy and Sell Stocks 1",description:"Say you have an array for which the i-th element is the price of a given stock on day i.",source:"@site/interview/algorithms/easy/best-time-to-buy-and-sell-stock-1.md",sourceDirName:"algorithms/easy",slug:"/algorithms/easy/best-time-to-buy-and-sell-stock-1",permalink:"/algorithms/easy/best-time-to-buy-and-sell-stock-1",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/algorithms/easy/best-time-to-buy-and-sell-stock-1.md",tags:[{label:"Easy",permalink:"/tags/easy"},{label:"Array",permalink:"/tags/array"},{label:"Dynamic Programming",permalink:"/tags/dynamic-programming"}],version:"current",frontMatter:{tags:["Easy","Array","Dynamic Programming"],title:"Buy and Sell Stocks 1"},sidebar:"tutorialSidebar",previous:{title:"Add Strings",permalink:"/algorithms/easy/add-strings"},next:{title:"Buy and Sell Stocks 2",permalink:"/algorithms/easy/best-time-to-buy-and-sell-stock-2"}},c={},m=[],u={toc:m};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Say you have an array for which the ",(0,s.kt)("strong",{parentName:"p"},"i"),"-th element is the price of a given stock on day ",(0,s.kt)("strong",{parentName:"p"},"i"),"."),(0,s.kt)("p",null,"If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note that you cannot sell a stock before you buy one.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on 5 (price = 6) with profit = 5\n")),(0,s.kt)(r.Z,{placeholder:"function main (prices) {\n    return;\n}",tests:[{input:[[7,1,5,3,6,4]],output:5},{input:[[7,6,4,3,1]],output:0}],mdxType:"Algo"}),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Solution"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Complexity:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Time complexity: O(n)"),(0,s.kt)("li",{parentName:"ul"},"Space complexity: O(1)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"function maxProfit(prices) {\n    let minPrice = Number.MAX_SAFE_INTEGER;\n    let maxProfit = 0;\n\n    prices.forEach((price) => {\n        if (price < minPrice) {\n            minPrice = price;\n        } else if (price - minPrice > maxProfit) {\n            maxProfit = price - minPrice;\n        }\n    });\n\n    return maxProfit;\n}\n"))))}p.isMDXComponent=!0}}]);