"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[4218],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),g=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=g(n),u=i,p=y["".concat(a,".").concat(u)]||y[u]||s[u]||l;return n?r.createElement(p,d(d({ref:t},c),{},{components:n})):r.createElement(p,d({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,d=new Array(l);d[0]=y;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,d[1]=o;for(var g=2;g<l;g++)d[g]=n[g];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=n(8168),i=(n(6540),n(5680));const l={id:"directededge",title:"Directed edge mode",sidebar_label:"Directed edge mode",slug:"/library/index/directededge"},d=void 0,o={unversionedId:"library/index/directededge",id:"library/index/directededge",title:"Directed edge mode",description:'An H3 Directed Edge index (mode 2) represents a single directed edge between two cells (an "origin" cell and a neighboring "destination" cell). The components of the H3 Directed Edge index are packed into a 64-bit integer in order, highest bit first, as follows:',source:"@site/docs/library/index/directededge.md",sourceDirName:"library/index",slug:"/library/index/directededge",permalink:"/docs/library/index/directededge",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/library/index/directededge.md",tags:[],version:"current",frontMatter:{id:"directededge",title:"Directed edge mode",sidebar_label:"Directed edge mode",slug:"/library/index/directededge"},sidebar:"someSidebar",previous:{title:"Cell mode",permalink:"/docs/library/index/cell"},next:{title:"Vertex mode",permalink:"/docs/library/index/vertex"}},a={},g=[{value:"Bit layout of H3Index for directed edges",id:"bit-layout-of-h3index-for-directed-edges",level:2}],c={toc:g};function s(e){let{components:t,...n}=e;return(0,i.yg)("wrapper",(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{height:"300",src:"/images/edge_mode.png"})),(0,i.yg)("p",null,'An H3 Directed Edge index (mode 2) represents a single directed edge between two cells (an "origin" cell and a neighboring "destination" cell). The components of the H3 Directed Edge index are packed into a 64-bit integer in order, highest bit first, as follows:'),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"1 bit reserved and set to 0,"),(0,i.yg)("li",{parentName:"ul"},"4 bits to indicate the H3 Unidirectional Edge index mode,"),(0,i.yg)("li",{parentName:"ul"},"3 bits to indicate the edge (1-6) of the origin cell,"),(0,i.yg)("li",{parentName:"ul"},"Subsequent bits matching the index bits of the ",(0,i.yg)("a",{parentName:"li",href:"./cell#h3-cell-index"},"origin cell"),".")),(0,i.yg)("h2",{id:"bit-layout-of-h3index-for-directed-edges"},"Bit layout of H3Index for directed edges"),(0,i.yg)("p",null,"The layout of an ",(0,i.yg)("inlineCode",{parentName:"p"},"H3Index"),' is shown below in table form. The interpretation of the "Mode-Dependent" field differs depending on the mode of the index.'),(0,i.yg)("table",null,(0,i.yg)("tr",null,(0,i.yg)("th",null),(0,i.yg)("th",null,"0x0F"),(0,i.yg)("th",null,"0x0E"),(0,i.yg)("th",null,"0x0D"),(0,i.yg)("th",null,"0x0C"),(0,i.yg)("th",null,"0x0B"),(0,i.yg)("th",null,"0x0A"),(0,i.yg)("th",null,"0x09"),(0,i.yg)("th",null,"0x08"),(0,i.yg)("th",null,"0x07"),(0,i.yg)("th",null,"0x06"),(0,i.yg)("th",null,"0x05"),(0,i.yg)("th",null,"0x04"),(0,i.yg)("th",null,"0x03"),(0,i.yg)("th",null,"0x02"),(0,i.yg)("th",null,"0x01"),(0,i.yg)("th",null,"0x00")),(0,i.yg)("tr",null,(0,i.yg)("th",null,"0x30"),(0,i.yg)("td",null,"Reserved (0)"),(0,i.yg)("td",{colspan:"4"},"Mode (2)"),(0,i.yg)("td",{colspan:"3"},"Edge"),(0,i.yg)("td",{colspan:"4"},"Resolution"),(0,i.yg)("td",{colspan:"4"},"Base cell")),(0,i.yg)("tr",null,(0,i.yg)("th",null,"0x20"),(0,i.yg)("td",{colspan:"3"},"Base cell"),(0,i.yg)("td",{colspan:"3"},"Digit 1"),(0,i.yg)("td",{colspan:"3"},"Digit 2"),(0,i.yg)("td",{colspan:"3"},"Digit 3"),(0,i.yg)("td",{colspan:"3"},"Digit 4"),(0,i.yg)("td",null,"Digit 5")),(0,i.yg)("tr",null,(0,i.yg)("th",null,"0x10"),(0,i.yg)("td",{colspan:"2"},"Digit 5"),(0,i.yg)("td",{colspan:"3"},"Digit 6"),(0,i.yg)("td",{colspan:"3"},"Digit 7"),(0,i.yg)("td",{colspan:"3"},"Digit 8"),(0,i.yg)("td",{colspan:"3"},"Digit 9"),(0,i.yg)("td",{colspan:"2"},"Digit 10")),(0,i.yg)("tr",null,(0,i.yg)("th",null,"0x00"),(0,i.yg)("td",null,"Digit 10"),(0,i.yg)("td",{colspan:"3"},"Digit 11"),(0,i.yg)("td",{colspan:"3"},"Digit 12"),(0,i.yg)("td",{colspan:"3"},"Digit 13"),(0,i.yg)("td",{colspan:"3"},"Digit 14"),(0,i.yg)("td",{colspan:"3"},"Digit 15"))))}s.isMDXComponent=!0}}]);