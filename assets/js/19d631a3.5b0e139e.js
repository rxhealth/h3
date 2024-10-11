"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[1619],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),s=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(g.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),u=a,y=c["".concat(g,".").concat(u)]||c[u]||h[u]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(8168),a=(r(6540),r(5680));const i={id:"aggregation",title:"Aggregation",sidebar_label:"Aggregation",slug:"/highlights/aggregation"},o=void 0,l={unversionedId:"highlights/aggregation",id:"highlights/aggregation",title:"Aggregation",description:"Analysis of location data, such as locations of cars in a city, can be done by bucketing locations. (Sahr et al., 2003) Using a regular grid provides smooth gradients and the ability to measure differences between cells.",source:"@site/docs/highlights/aggregation.md",sourceDirName:"highlights",slug:"/highlights/aggregation",permalink:"/docs/highlights/aggregation",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/highlights/aggregation.md",tags:[],version:"current",frontMatter:{id:"aggregation",title:"Aggregation",sidebar_label:"Aggregation",slug:"/highlights/aggregation"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Joining",permalink:"/docs/highlights/joining"}},g={},s=[{value:"References",id:"references",level:2}],p={toc:s};function h(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Analysis of location data, such as locations of cars in a city, can be done by bucketing locations. (",(0,a.yg)("a",{parentName:"p",href:"http://webpages.sou.edu/~sahrk/sqspc/pubs/gdggs03.pdf"},"Sahr et al., 2003"),") Using a regular grid provides smooth gradients and the ability to measure differences between cells."),(0,a.yg)("p",null,"The cell shape of that grid system is an important consideration. For simplicity, it should be a polygon that tiles regularly: the triangle, the square, or the hexagon. Of these, triangles and squares have neighbors with different distances. Triangles have three different distances, and squares have two different distances. For hexagons, all neighbors are equidistant."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Triangle"),(0,a.yg)("th",{parentName:"tr",align:null},"Square"),(0,a.yg)("th",{parentName:"tr",align:null},"Hexagon"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{src:"/images/neighbors-triangle.png",style:{width:"400px"}})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{src:"/images/neighbors-square.png",style:{width:"400px"}})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{src:"/images/neighbors-hexagon.png",style:{width:"400px"}}))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Triangles have 12 neighbors"),(0,a.yg)("td",{parentName:"tr",align:null},"Squares have 8 neighbors"),(0,a.yg)("td",{parentName:"tr",align:null},"Hexagons have 6 neighbors")))),(0,a.yg)("p",null,"This property allows for simpler analysis of movement. Hexagons have the property of expanding rings of neighbors approximating circles:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"/images/neighbors.png",style:{width:"400px"}}),(0,a.yg)("br",null),(0,a.yg)("i",null,"All six neighbors of a hexagon (ring 1)")),(0,a.yg)("p",null,"Hexagons are also optimally space-filling. On average, a polygon may be filled with hexagon tiles with a smaller margin of error than would be present with square tiles."),(0,a.yg)("h2",{id:"references"},"References"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Use case: ",(0,a.yg)("a",{parentName:"li",href:"https://eng.uber.com/h3/"},"H3: Uber\u2019s Hexagonal Hierarchical Spatial Index ")),(0,a.yg)("li",{parentName:"ul"},"Observable notebook example: ",(0,a.yg)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/h3-tutorial-the-h3-js-library?collection=@nrabinowitz/h3-tutorial"},"Intro to h3-js")),(0,a.yg)("li",{parentName:"ul"},"Jupyter notebook example: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/uber/h3-py-notebooks/blob/master/notebooks/usage.ipynb"},"H3 Python API"))))}h.isMDXComponent=!0}}]);