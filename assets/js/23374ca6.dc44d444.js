"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[2278],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},g),{},{components:n})):r.createElement(h,o({ref:t},g))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const i={id:"README",title:"Introduction",sidebar_label:"Introduction",slug:"/"},o=void 0,l={unversionedId:"README",id:"README",title:"Introduction",description:"H3 is a geospatial indexing system that partitions the world into hexagonal cells. H3 is open source under the Apache 2 license.",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/README.md",tags:[],version:"current",frontMatter:{id:"README",title:"Introduction",sidebar_label:"Introduction",slug:"/"},sidebar:"someSidebar",next:{title:"Aggregation",permalink:"/docs/highlights/aggregation"}},s={},c=[{value:"Highlights",id:"highlights",level:2},{value:"Comparisons",id:"comparisons",level:2}],g={toc:c};function d(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"H3 is a geospatial indexing system that partitions the world into hexagonal cells. H3 is open source under the Apache 2 license."),(0,a.yg)("p",null,"The H3 Core Library implements the H3 grid system. It includes functions for converting from latitude and longitude coordinates to the containing H3 cell, finding the center of H3 cells, finding the boundary geometry of H3 cells, finding neighbors of H3 cells, and more."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The H3 Core Library is written in ",(0,a.yg)("em",{parentName:"li"},"C"),". ",(0,a.yg)("a",{parentName:"li",href:"/docs/community/bindings"},"Bindings for many other languages")," are available.")),(0,a.yg)("h2",{id:"highlights"},"Highlights"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"H3 is a hierarchical ",(0,a.yg)("a",{parentName:"li",href:"/docs/highlights/indexing"},"geospatial index"),"."),(0,a.yg)("li",{parentName:"ul"},"H3 was developed to address the ",(0,a.yg)("a",{parentName:"li",href:"/docs/highlights/aggregation"},"challenges of Uber's data science needs"),"."),(0,a.yg)("li",{parentName:"ul"},"H3 can be used to ",(0,a.yg)("a",{parentName:"li",href:"/docs/highlights/joining"},"join disparate data sets"),"."),(0,a.yg)("li",{parentName:"ul"},"In addition to the benefits of the hexagonal grid shape, H3 includes features for ",(0,a.yg)("a",{parentName:"li",href:"/docs/highlights/flowmodel"},"modeling flow"),"."),(0,a.yg)("li",{parentName:"ul"},"H3 is well suited to apply ",(0,a.yg)("a",{parentName:"li",href:"/docs/highlights/ml"},"ML to geospatial data"),".")),(0,a.yg)("h2",{id:"comparisons"},"Comparisons"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/comparisons/s2"},"S2"),", an open source, hierarchical, discrete, and global grid system using square cells."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/comparisons/geohash"},"Geohash"),", a system for encoding locations using a string of characters, creating a hierarchical, square grid system (a quadtree)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/comparisons/hexbin"},"Hexbin"),", the process of taking coordinates and binning them into hexagonal cells in analytics or mapping software."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/comparisons/admin"},"Admin Boundaries"),", officially designated areas used for aggregating and analyzing data."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/comparisons/placekey"},"Placekey"),", a system for encoding points of interest (POIs) which incorporates H3 in its POI identifier.")))}d.isMDXComponent=!0}}]);