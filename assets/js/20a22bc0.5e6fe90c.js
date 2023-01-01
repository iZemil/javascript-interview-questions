"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[845],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},m="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),m=c(t),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(f,i(i({ref:e},p),{},{components:t})):r.createElement(f,i({ref:e},p))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[m]="string"==typeof n?n:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2789:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},i="Resume Example",l={type:"mdx",permalink:"/resume-example",source:"@site/src/pages/resume-example.md",title:"Resume Example",frontMatter:{}},s=[],c={toc:s};function p(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resume-example"},"Resume Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const name = 'John Doe';\nconst title = 'Front-End Developer';\nconst description =\n    'Highly skilled and experienced frontend developer with a strong background at working effectively in both individual and team settings, and able to mentor junior developers. Seeking a challenging and rewarding frontend developer role where I can use my skills and experience to make a positive impact.';\nconst stack = [\n    'typescript',\n    'reactjs',\n    'redux-toolkit',\n    'scss/styled-components',\n    'CSS-grids',\n    'graphql',\n    'jest',\n    'enzyme',\n];\nconst career = [\n    {\n        title: 'Senior Front-End Developer',\n        team: 'GitHub',\n        from: new Date('Oct 2020'),\n        to: new Date(),\n        achievements: [\n            'led development team of 5 to create GitHub pages, allowing customer repositories to be hosted directly',\n            'created a new documentation for UI library that prevented the need for a 3-week onboarding course',\n            'mentored 4 juniour frontend developers on team in expanding ReactJS skillset',\n            'worked with PM to keep on track with the project plan, timeline, and billing',\n        ],\n        stack: ['typescript', 'react', 'github pages', 'graphql'],\n    },\n    {\n        title: 'Middle Frontend Developer',\n        team: 'IBM Team',\n        from: new Date('Aug 2015'),\n        to: new Date('Sep 2020'),\n        achievements: [\n            'participated in the initial wave of developers learning and implementing the ReactJS library',\n            'rewrote HTML to meet industry and company standards for SEO and Accessibility',\n            'tested, debugged, and shipped 10s of 1000s of lines of code to various development teams',\n            'led javascript technical interviews',\n        ],\n        stack: ['html/css', 'react', 'redux'],\n    },\n];\nconst contacts = ['San Francisco CA', 'linkedin: https://www.linkedin.com/in/john-doe', 'email: john-doe@gmail.com'];\nconst hobbies = ['\ud83e\udd84 developing my own projects', '\ud83e\udd4b brazilian jiu-jitsu', '\ud83c\udf73 cooking'];\n\nconst ID = 'resume';\n\nconst ResumeExample = () => (\n    <div id={ID}>\n        <img src=\"https://via.placeholder.com/200\" alt=\"author\" />\n\n        <h1>\n            {title}\n            <br />\n            {name}\n        </h1>\n        <p>{description}</p>\n\n        <h2>Stack</h2>\n        <p>{stack.join(', ')}</p>\n\n        <h2>Experience</h2>\n        {career.map(({ title, team, from, to, achievements, stack }) => (\n            <div key={team}>\n                <h3>\n                    {team} \u2022{' '}\n                    <small>\n                        {format(from)} - {format(to)} ({getDuration(from, to)})\n                    </small>\n                </h3>\n                <h4>{title}</h4>\n                <ul>{[achievements.map((it) => <li key={it}>{it}</li>)]}</ul>\n                <ul className=\"skills\">{renderListItems(stack, 'skill')}</ul>\n            </div>\n        ))}\n\n        <h2>Hobbies</h2>\n        <ul>{renderListItems(hobbies)}</ul>\n\n        <h2>Contacts</h2>\n        <ul>{renderListItems(contacts)}</ul>\n\n        <button className=\"button button--secondary download\" onClick={handleDownload}>\n            PDF\n        </button>\n    </div>\n);\n\nfunction renderListItems(data, className) {\n    return data.map((it) => (\n        <li key={it} className={className}>\n            {it}\n        </li>\n    ));\n}\nfunction format(date) {\n    return date.toLocaleString('default', { month: 'short', year: 'numeric' });\n}\nfunction getDuration(from, to) {\n    let months = monthDiff(from, to);\n    const years = Math.trunc(months / 12);\n    months = months - years * 12;\n\n    const yearsDuration = `${years ? `${years} y` : ''}`;\n    const monthsDuration = `${months ? ` ${months} m` : ''}`;\n\n    return `${yearsDuration}${monthsDuration}`;\n}\nfunction monthDiff(from, to) {\n    return to.getMonth() - from.getMonth() + 12 * (to.getFullYear() - from.getFullYear());\n}\nfunction handleDownload() {\n    window.print();\n}\n\nconst Styles = () => (\n    <style>\n        {`\n            #${ID} {\n                position: relative;\n            }\n\n            .skills {\n                padding: 10px 0px;\n                display: flex;\n                gap: 5px;\n                flex-wrap: wrap;\n            }\n\n            .skill {\n                display: block;\n                padding: 5px 10px;\n                border: 1px solid lightgrey;\n                border-radius: 50px;\n                font-size: 12px;\n            }\n\n            .download {\n                position: absolute;\n                top: 0;\n                right: 0;\n            }\n\n            @media only print {\n                body * {\n                    visibility: hidden;\n                }\n\n                #${ID}, #${ID} * {\n                    visibility: visible;\n                }\n\n                #${ID} {\n                    position: fixed;\n                    left: 0;\n                    top: 0;\n                }\n\n                .download {\n                    display: none;\n                }\n            }\n            `}\n    </style>\n);\n\nrender(\n    <>\n        <Styles />\n        <ResumeExample />\n    </>\n);\n")))}p.isMDXComponent=!0}}]);