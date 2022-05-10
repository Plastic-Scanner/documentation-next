"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[264],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,m=u["".concat(d,".").concat(b)]||u[b]||s[b]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8169:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={},d="Development Board 2.1",c={unversionedId:"boards/DB2.1",id:"boards/DB2.1",title:"Development Board 2.1",description:"The goal of this development board is to make it easy to test and debug different situations.",source:"@site/docs/boards/DB2.1.md",sourceDirName:"boards",slug:"/boards/DB2.1",permalink:"/boards/DB2.1",draft:!1,editUrl:"https://github.com/Plastic-Scanner/docs/boards/DB2.1.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"How it works",permalink:"/how_it_works"},next:{title:"Build instructions",permalink:"/boards/DB2.1_build"}},p={},s=[{value:"Schematics",id:"schematics",level:2},{value:"Pinout",id:"pinout",level:2},{value:"Bill of Materials",id:"bill-of-materials",level:2},{value:"Technical drawing",id:"technical-drawing",level:2},{value:"Packages",id:"packages",level:2},{value:"PCB renders",id:"pcb-renders",level:2}],u={toc:s};function b(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"development-board-21"},"Development Board 2.1"),(0,i.kt)("p",null,"The goal of this development board is to make it easy to test and debug different situations.\nThis board is not optimised for size or functionality, but for easy of use for development."),(0,i.kt)("img",{src:"/img/developmentboards/developmentboard2.1.jpg",alt:"development board 2.1",width:"200"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Item"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\udf08 Codename"),(0,i.kt)("td",{parentName:"tr",align:null},"Blue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\udcc6 Release date"),(0,i.kt)("td",{parentName:"tr",align:null},"March 2022")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83e\udd84 People"),(0,i.kt)("td",{parentName:"tr",align:null},"Jure Vidmar and Jerry de Vos")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u231a Development time"),(0,i.kt)("td",{parentName:"tr",align:null},"1 months")))),(0,i.kt)("h2",{id:"schematics"},"Schematics"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("embed",{src:"https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/Plastic-Scanner/DB2.x-Hardware/raw/181a10dfa44b1fb86fd0e2b79a7eaff53d0bc4b2/PCB/PCB%20Schematic.pdf",width:"100%",height:"600px"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/181a10dfa44b1fb86fd0e2b79a7eaff53d0bc4b2/PCB/PCB%20Schematic.pdf"},"Download PDF")),(0,i.kt)("h2",{id:"pinout"},"Pinout"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("embed",{src:"https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/Plastic-Scanner/DB2.x-Hardware/raw/df5eb378e63ef788a2f61706267ac1ccd03abba1/PCB/PCB%20Pinout.pdf",width:"100%",height:"600px"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/6d1664db3ee18b0f2725af986c448b64545aa78f/PCB/PCB%20Pinout.pdf"},"Download PDF"),"  "),(0,i.kt)("h2",{id:"bill-of-materials"},"Bill of Materials"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("iframe",{width:"100%",height:"800px",src:"http://htmlpreview.github.io/?https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/181a10dfa44b1fb86fd0e2b79a7eaff53d0bc4b2/PCB/PCB%20interactive%20BOM.html",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/181a10dfa44b1fb86fd0e2b79a7eaff53d0bc4b2/PCB/PCB%20BOM.csv"},"Download CSV"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"http://htmlpreview.github.io/?https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/main/PCB/PCB%20interactive%20BOM.html"},"Open in new tab")),(0,i.kt)("h2",{id:"technical-drawing"},"Technical drawing"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("embed",{src:"https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/Plastic-Scanner/DB2.x-Hardware/raw/181a10dfa44b1fb86fd0e2b79a7eaff53d0bc4b2/CAD/PCB%20Technical%20Drawing.pdf",width:"100%",height:"600px"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/181a10dfa44b1fb86fd0e2b79a7eaff53d0bc4b2/CAD/PCB%20Technical%20Drawing.pdf"},"Download PDF")),(0,i.kt)("h2",{id:"packages"},"Packages"),(0,i.kt)("p",null,"Hardware package - click ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Plastic-Scanner/DB2.x-Hardware/releases/tag/v2.0"},"here")," to download all hardware documentation of this development board",(0,i.kt)("br",{parentName:"p"}),"\n","Firmware package - click ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Plastic-Scanner/DB2.x-Firmware"},"here")," to download all firmware (documentation) of this development board",(0,i.kt)("br",{parentName:"p"}),"\n","Software package - click ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Plastic-Scanner/software"},"here")," to download all software (documentation) of this development board  "),(0,i.kt)("h2",{id:"pcb-renders"},"PCB renders"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{alt:"Front View",src:"https://raw.githubusercontent.com/Plastic-Scanner/DB2.x-Hardware/181a10dfa44b1fb86fd0e2b79a7eaff53d0bc4b2/Media/pcb_front_view.svg",width:"50%"})))}b.isMDXComponent=!0}}]);