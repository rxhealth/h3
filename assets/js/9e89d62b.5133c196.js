"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[1128],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},h),{},{components:r})):n.createElement(f,a({ref:t},h))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9952:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],s={id:"overview",title:"Overview of the H3 Geospatial Indexing System",sidebar_label:"Overview",slug:"/core-library/overview"},l=void 0,c={unversionedId:"core-library/overview",id:"core-library/overview",isDocsHomePage:!1,title:"Overview of the H3 Geospatial Indexing System",description:"The H3 geospatial indexing system is a discrete global grid system (see Sahr et al., 2003) consisting of a multi-precision hexagonal tiling of the sphere with hierarchical indexes.",source:"@site/docs/core-library/overview.md",sourceDirName:"core-library",slug:"/core-library/overview",permalink:"/docs/next/core-library/overview",editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview of the H3 Geospatial Indexing System",sidebar_label:"Overview",slug:"/core-library/overview"},sidebar:"someSidebar",previous:{title:"Applications Using H3",permalink:"/docs/next/community/applications"},next:{title:"H3 Index Representations",permalink:"/docs/next/core-library/h3Indexing"}},h=[],p={toc:h};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The H3 geospatial indexing system is a discrete global grid system (see ",(0,o.kt)("a",{parentName:"p",href:"http://webpages.sou.edu/~sahrk/sqspc/pubs/gdggs03.pdf"},"Sahr et al., 2003"),") consisting of a multi-precision hexagonal tiling of the sphere with hierarchical indexes."),(0,o.kt)("p",null,"The hexagonal grid system is created on the planar faces of a sphere-circumscribed icosahedron, and the grid cells are then projected to the surface of the sphere using an inverse face-centered polyhedral gnomonic projection. The coordinate reference system (CRS) is spherical coordinates with the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WGS84"},"WGS84"),"/",(0,o.kt)("a",{parentName:"p",href:"https://epsg.io/4326"},"EPSG:4326")," authalic radius. It is common to use WGS84 CRS data with the H3 library."),(0,o.kt)("p",null,"The icosahedron is fixed relative to the sphere using a ",(0,o.kt)("em",{parentName:"p"},"Dymaxion")," orientation (due to R. Buckminster Fuller). This orientation of a spherical icosahedron places all 12 icosahedron vertices in the ocean. (At the time of H3's development, this was the only known orientation with this property. ",(0,o.kt)("a",{parentName:"p",href:"https://richard.science/sci/2019_barnes_dgg_published.pdf"},"Others have since been found"),".)"),(0,o.kt)("p",null,"The H3 grid is constructed on the icosahedron by recursively creating increasingly higher precision hexagon grids until the desired resolution is achieved. Note that it is impossible to tile the sphere/icosahedron completely with hexagons; each resolution of an icosahedral hexagon grid must contain exactly 12 pentagons at every resolution, with one pentagon centered on each of the icosahedron vertices."),(0,o.kt)("p",null,"The first H3 resolution (resolution 0) consists of 122 cells (110 hexagons and 12 icosahedron vertex-centered pentagons), referred to as the ",(0,o.kt)("em",{parentName:"p"},"base cells"),". These were chosen to capture as much of the symmetry of the spherical icosahedron as possible. These base cells are assigned numbers from 0 to 121 based on the latitude of their center points; base cell 0 has the northern most center point, while base cell 121 has the southern most center point."),(0,o.kt)("p",null,"Each subsequent resolution beyond resolution 0 is created using an aperture 7 resolution spacing (aperture refers to the number of cells in the next finer resolution grid for each cell); as resolution increases the unit length is scaled by ",(0,o.kt)("inlineCode",{parentName:"p"},"sqrt(7)")," and each hexagon has 1/7",(0,o.kt)("sup",null,"th")," the area of a hexagon at the next coarser resolution (as measured on the icosahedron). H3 provides 15 finer grid resolutions in addition to the resolution 0 base cells. The finest resolution, resolution 15, has cells with an area of less than 1 m",(0,o.kt)("sup",null,"2"),". A table detailing the average cell area for each H3 resolution is available ",(0,o.kt)("a",{parentName:"p",href:"/docs/core-library/restable"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note:")," you can create KML files to visualize the H3 grids by running the ",(0,o.kt)("inlineCode",{parentName:"p"},"kml")," make target. It will place the files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"KML")," output sub-directory."))}u.isMDXComponent=!0}}]);