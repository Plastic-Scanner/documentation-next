"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Firmware installation"},i=void 0,l={unversionedId:"boards/DB2.x_firmware",id:"boards/DB2.x_firmware",title:"Firmware installation",description:"Up to date source of the firmware can be found here",source:"@site/docs/boards/DB2.x_firmware.md",sourceDirName:"boards",slug:"/boards/DB2.x_firmware",permalink:"/boards/DB2.x_firmware",draft:!1,editUrl:"https://github.com/Plastic-Scanner/documentation/tree/main/docs/boards/DB2.x_firmware.md",tags:[],version:"current",lastUpdatedAt:1684173269,formattedLastUpdatedAt:"May 15, 2023",frontMatter:{title:"Firmware installation"},sidebar:"docsSidebar",previous:{title:"Build instructions",permalink:"/boards/DB2.2_build"},next:{title:"Software usage",permalink:"/boards/DB2.x_software"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Different IC&#39;s",id:"different-ics",level:2},{value:"Usage",id:"usage",level:2},{value:"Development",id:"development",level:2},{value:"Contributing",id:"contributing",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Up to date source of the firmware can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Plastic-Scanner/DB2.x-Firmware/"},"here"))),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Firmware runs on DB2.x (tested on DB2.1), powered by Arduino.\nRequires ",(0,a.kt)("strong",{parentName:"p"},"PlatformIO"),", a cross-platform embedded development toolset. See installation instructions ",(0,a.kt)("a",{parentName:"p",href:"https://platformio.org/install/"},"here "),"it can be as easy as one-click-plugin-installation (PlatformIO IDE)."),(0,a.kt)("p",null,"In order to build and upload the firmware to DB2.x, connect the board to computer and find the ",(0,a.kt)("em",{parentName:"p"},"Build")," and ",(0,a.kt)("em",{parentName:"p"},"Upload")," buttons in the PlatformIO IDE OR use the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ pio run -t upload         # build and upload fw image\n")),(0,a.kt)("p",null,"The compiled firmware image is placed in ",(0,a.kt)("inlineCode",{parentName:"p"},".pio/build/<board>/firmware.hex"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Compilation options can be tweaked in ",(0,a.kt)("em",{parentName:"p"},"platformio.ini")," file (see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.platformio.org/en/latest/projectconf/section_env_build.html"},"build options"),")."),(0,a.kt)("h2",{id:"different-ics"},"Different IC's"),(0,a.kt)("p",null,"There are differenet branches in the Github repository for different IC's. The master branch is for the ADS1256, but there are also branches for the NAU7802. And for the LED driver there is a branch for the TLC59209 and one for the PCA9551."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Connect your DB2.x to your computer, build and flash the firmware and open the serial console with ",(0,a.kt)("inlineCode",{parentName:"p"},"$ pio device monitor")," or your favourite app (e.g Putty, screen, minicom, picocom...). Enable local echo in order to see commands you're typing by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"--echo")," to command above, or pressing CTRL+T followed by CTRL+E while running it."),(0,a.kt)("p",null,"User can send the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> scan\n> adc\n> led [i] on|off    # i = 0..7\n> help\n")),(0,a.kt)("p",null,"Scan command outputs a full scan, 8 values, one for each LED.",(0,a.kt)("br",{parentName:"p"}),"\n","Adc command outputs a reading from the ADC chip.",(0,a.kt)("br",{parentName:"p"}),"\n","Led command turns on or off a LED, indexed from 0 to 7.",(0,a.kt)("br",{parentName:"p"}),"\n","Help lists all available commands.  "),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,'Feedback on architecture and implementation is welcome. Firmware currently controls an Arduino, which "talks" to an ADC chip and a LED driver, communicating via the serial interface. In directory ',(0,a.kt)("inlineCode",{parentName:"p"},"app")," are the main sources, ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," is for unit tests (which needs much more love and actual tests), ",(0,a.kt)("inlineCode",{parentName:"p"},"drivers")," contains custom drivers for componments on board."),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"Feel free to improve, modify and contribute to this project. You can find the lastest open source code here ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Plastic-Scanner/DB2.x-Firmware/"},"Github Repo"),"."))}m.isMDXComponent=!0}}]);