"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={},o="Notes on development",l={unversionedId:"notes",id:"notes",title:"Notes on development",description:"Optics setup",source:"@site/docs/notes.md",sourceDirName:".",slug:"/notes",permalink:"/notes",draft:!1,editUrl:"https://github.com/Plastic-Scanner/documentation/tree/main/docs/notes.md",tags:[],version:"current",lastUpdatedAt:1684173269,formattedLastUpdatedAt:"May 15, 2023",frontMatter:{}},s={},u=[{value:"Optics setup",id:"optics-setup",level:2},{value:"Measuring cavity",id:"measuring-cavity",level:3},{value:"Backing material",id:"backing-material",level:3},{value:"Electronics circuit",id:"electronics-circuit",level:2},{value:"PCB",id:"pcb",level:2},{value:"Data processing",id:"data-processing",level:2},{value:"Pre-processing",id:"pre-processing",level:3},{value:"interpretation",id:"interpretation",level:3},{value:"Housing",id:"housing",level:2},{value:"Usage",id:"usage",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notes-on-development"},"Notes on development"),(0,i.kt)("h2",{id:"optics-setup"},"Optics setup"),(0,i.kt)("h3",{id:"measuring-cavity"},"Measuring cavity"),(0,i.kt)("p",null,"Question: what is the most optimal shape"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"layout leds"),(0,i.kt)("li",{parentName:"ul"},"placement InGaAs sensor"),(0,i.kt)("li",{parentName:"ul"},"heigth wall between ingaas sensor and led?"),(0,i.kt)("li",{parentName:"ul"},"deviders between each led?"),(0,i.kt)("li",{parentName:"ul"},"height side of the wall?"),(0,i.kt)("li",{parentName:"ul"},"aluminuim tape on the sides?"),(0,i.kt)("li",{parentName:"ul"},"distance between sample and sensor")),(0,i.kt)("p",null,"Question: which LEDs are the most valuable?"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{alt:"",src:"/img/sensor_cavity_dim.png",width:"600px"})),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{alt:"",src:"/img/sensor_cavity.png",width:"600px"})),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{alt:"",src:"/img/sensor_cavity2.png",width:"600px"})),(0,i.kt)("h3",{id:"backing-material"},"Backing material"),(0,i.kt)("p",null,"Question: What is the best Backing material?\nideal: a material with a flat response between the 800nm and the 1800nm"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Spectralon (but expensive)"),(0,i.kt)("li",{parentName:"ul"},"Polished aluminium"),(0,i.kt)("li",{parentName:"ul"},"White ceramic tile? (used on the Niro Gun) ")),(0,i.kt)("h2",{id:"electronics-circuit"},"Electronics circuit"),(0,i.kt)("p",null,"Question: what is the best way so measure the signal from the InGaAs sensor\nIs this with a transimpeadance amplifier, which one, how stable should the reference voltage be?"),(0,i.kt)("p",null,"investigate the use of the transimpeadance amplifier\nsimulate the expected outcome of the current setup and make adjustments for tweaks\nsetup of the adc with the ideal settings for our usecase"),(0,i.kt)("h2",{id:"pcb"},"PCB"),(0,i.kt)("p",null,"Question: What footprint of components should be used? For example SMD size.",(0,i.kt)("br",{parentName:"p"}),"\n","Find a balence between batch manufacturing and single unit replication."),(0,i.kt)("p",null,"Question: All in one PCB or modular with separate processor and charge IC?",(0,i.kt)("br",{parentName:"p"}),"\n","Question: Which components are difficult to source, why and how can we be resilliant?"),(0,i.kt)("h2",{id:"data-processing"},"Data processing"),(0,i.kt)("h3",{id:"pre-processing"},"Pre-processing"),(0,i.kt)("p",null,"The data from the board is just a number, it is the ADC value, which on itself is dimentionless. it is possible to convert this into volts, but it does not help much here.\nTo get data ready for interpretation (between multiple plastic scanners) it is good to do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Devide by expected maximum value.",(0,i.kt)("br",{parentName:"li"}),"Devide measurement with calibration of polished aluminium, this gives you a percentage between 0 and 100"),(0,i.kt)("li",{parentName:"ol"},"Devide measurements by eachother (beerslaw)",(0,i.kt)("br",{parentName:"li"}),"to see if ratio is positive or negative"),(0,i.kt)("li",{parentName:"ol"},"Scale alle ratios from 0 to 1 for input into ML model.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"General idea to get from InGaAs sensor to determined plastic type"),(0,i.kt)("div",null,(0,i.kt)("div",null,"1. Take a pre measurement (with sample placed but no LED on) ",(0,i.kt)("br",null),"2. Take a set of measurements (turn on one LED, wait 5ms, measure,turn off the LED, repeat for the rest) ",(0,i.kt)("br",null),"3. Take a post measurement (with sample placed but no LED on) ",(0,i.kt)("br",null),"4. Repeat steps 1-3 multiple times, this allows you to take out backgorund noise/light, if the measurements are too different it might be that the sample moved.",(0,i.kt)("br",null),"5. The measurements can then be compensated for the output power of the LEDs",(0,i.kt)("br",null),"6. The measurements can then be compensated for the sensitivity of the InGaAs photodiode",(0,i.kt)("br",null),"7. The measurements can be scaled relative to maximum possible measurement (a full reflection of IR light (polished aluminium))",(0,i.kt)("br",null),"8. At this point you want to shift the focus on the slopes of the curves, in stead of the actual values, the type of the plastic determines the shape of the curve, not the actual value",(0,i.kt)("br",null),"9. Normalize the slopes between 0 and 1",(0,i.kt)("br",null),"10. Use as input for a machine learning model",(0,i.kt)("br",null)),(0,i.kt)("br",null))),(0,i.kt)("h3",{id:"interpretation"},"interpretation"),(0,i.kt)("p",null,"Question: What is the current quality of the data coming out of the Plastic Scanner, and how can we improve this",(0,i.kt)("br",{parentName:"p"}),"\n","Question: How can we write an identification model?",(0,i.kt)("br",{parentName:"p"}),"\n","Question: Which LEDs are critical, which are nice to have, which are redundant?  "),(0,i.kt)("h2",{id:"housing"},"Housing"),(0,i.kt)("p",null,"this is more long term, but find out most common working conditions for a plastic scanner and define it's harsness"),(0,i.kt)("h2",{id:"usage"},"Usage"))}m.isMDXComponent=!0}}]);