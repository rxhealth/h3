"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[1093],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=i,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1100:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],s={id:"hexbin",title:"Hexbin",sidebar_label:"Hexbin",slug:"/comparisons/hexbin"},c=void 0,l={unversionedId:"comparisons/hexbin",id:"comparisons/hexbin",isDocsHomePage:!1,title:"Hexbin",description:"Hexbinning is the process of taking coordinates and binning them into hexagonal cells in analytics or mapping software. The size of the hexagons is configurable, and the hexagons can align with the map projection being used.",source:"@site/docs/comparisons/hexbin.md",sourceDirName:"comparisons",slug:"/comparisons/hexbin",permalink:"/docs/next/comparisons/hexbin",editUrl:"https://github.com/uber/h3/edit/master/website/docs/comparisons/hexbin.md",tags:[],version:"current",frontMatter:{id:"hexbin",title:"Hexbin",sidebar_label:"Hexbin",slug:"/comparisons/hexbin"},sidebar:"someSidebar",previous:{title:"Geohash",permalink:"/docs/next/comparisons/geohash"},next:{title:"Admin Boundaries",permalink:"/docs/next/comparisons/admin"}},p=[{value:"Hexbin vs H3 Comparison",id:"hexbin-vs-h3-comparison",children:[],level:2}],u={toc:p};function h(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hexbinning is the process of taking coordinates and binning them into hexagonal cells in analytics or mapping software. The size of the hexagons is configurable, and the hexagons can align with the map projection being used."),(0,o.kt)("p",null,"Hexbins are generally very computationally cheap to create, and for the best performance can be computed directly on a GPU. Their coordinates, while not hierarchical, support many common operations like finding neighbors and grid distances very efficiently."),(0,o.kt)("p",null,"Hexbins have drawbacks in the ability to reuse the grids. The cell identifiers they use are only useful in the specific hexbin grid, and are not portable to another grid, limiting their ability to be used for joining datasets. The cell identifiers are not hierarchical, so relating data at different grid resolutions can be difficult."),(0,o.kt)("p",null,"Hexbins are also limited by the projection system they are created on top of. This usually results in discontinuities at the edges of the projections, for example at the anti-meridian or at the poles."),(0,o.kt)("h2",{id:"hexbin-vs-h3-comparison"},"Hexbin vs H3 Comparison"),(0,o.kt)("iframe",{width:"100%",height:"500px",src:"https://studio.unfolded.ai/public/0beb2afb-9dd4-400b-90dd-f61580c582b9/embed",frameborder:"0",allowfullscreen:!0}),(0,o.kt)("p",null,"Hexbins on the left, H3 on the right. Data: ",(0,o.kt)("a",{parentName:"p",href:"https://data.sfgov.org/City-Infrastructure/Street-Tree-List/tkzw-k3nq"},"San Francisco Street Tree List")))}h.isMDXComponent=!0}}]);