"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[28],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(f,o(o({ref:n},s),{},{components:t})):a.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(3117),l=t(7294),r=t(2389),o=t(9443);var u=function(){var e=(0,l.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(9521),c=t(6010),s="tabItem_1uMI";function p(e){var n,t,a,r=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),b=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=g[0])?void 0:a.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=u(),k=h.tabGroupChoices,T=h.setTabGroupChoices,x=(0,l.useState)(y),N=x[0],L=x[1],j=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&L(E)}var I=function(e){var n=e.currentTarget,t=j.indexOf(n),a=v[t].value;a!==N&&(C(n),L(a),null!=m&&T(m,a))},w=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var l=j.indexOf(e.currentTarget)-1;t=j[l]||j[j.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},f)},v.map((function(e){var n=e.value,t=e.label;return l.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":N===n}),key:n,ref:function(e){return j.push(e)},onKeyDown:w,onFocus:I,onClick:I},null!=t?t:n)}))),r?(0,l.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function d(e){var n=(0,r.Z)();return l.createElement(p,(0,a.Z)({key:String(n)},e))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},7472:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=t(3117),l=t(102),r=(t(7294),t(3905)),o=t(6396),u=t(8215),i=["components"],c={id:"indexing",title:"Indexing functions",sidebar_label:"Indexing",slug:"/api/indexing"},s=void 0,p={unversionedId:"api/indexing",id:"api/indexing",isDocsHomePage:!1,title:"Indexing functions",description:"These functions are used for finding the H3 cell index containing coordinates, and for finding the center and boundary of H3 indexes.",source:"@site/docs/api/indexing.mdx",sourceDirName:"api",slug:"/api/indexing",permalink:"/docs/next/api/indexing",editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/indexing.mdx",tags:[],version:"current",frontMatter:{id:"indexing",title:"Indexing functions",sidebar_label:"Indexing",slug:"/api/indexing"},sidebar:"someSidebar",previous:{title:"Tables of cell stats",permalink:"/docs/next/core-library/restable"},next:{title:"Inspection",permalink:"/docs/next/api/inspection"}},d=[{value:"latLngToCell",id:"latlngtocell",children:[],level:2},{value:"cellToLatLng",id:"celltolatlng",children:[],level:2},{value:"cellToBoundary",id:"celltoboundary",children:[],level:2}],m={toc:d};function f(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These functions are used for finding the H3 cell index containing coordinates, and for finding the center and boundary of H3 indexes."),(0,r.kt)("h2",{id:"latlngtocell"},"latLngToCell"),(0,r.kt)(o.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"H3Error latLngToCell(const LatLng *g, int res, H3Index *out);\n"))),(0,r.kt)(u.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.latlng_to_cell(lat, lng, resolution)\n"))),(0,r.kt)(u.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"long latLngToCell(double lat, double lng, int res);\nString latLngToCellAddress(double lat, double lng, int res);\n"))),(0,r.kt)(u.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.latLngToCell(lat, lng, res)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const lat = 45;\n  const lng = 40;\n  const res = 2;\n  return h3.latLngToCell(lat, lng, res);\n}\n")))),(0,r.kt)("p",null,"Indexes the location at the specified resolution, returning the index of the cell containing the location."),(0,r.kt)("p",null,"Returns 0 (",(0,r.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,r.kt)("h2",{id:"celltolatlng"},"cellToLatLng"),(0,r.kt)(o.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"H3Error cellToLatLng(H3Index cell, LatLng *g);\n"))),(0,r.kt)(u.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_latlng(cell)\n"))),(0,r.kt)(u.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"LatLng cellToLatLng(long cell);\nLatLng cellToLatLng(String cellAddress);\n"))),(0,r.kt)(u.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.cellToLatLng(cell)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToLatLng(cell);\n}\n")))),(0,r.kt)("p",null,"Finds the centroid of the cell."),(0,r.kt)("p",null,"Returns 0 (",(0,r.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,r.kt)("h2",{id:"celltoboundary"},"cellToBoundary"),(0,r.kt)(o.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"H3Error cellToBoundary(H3Index cell, CellBoundary *bndry);\n"))),(0,r.kt)(u.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_boundary(cell, geo_json=False)\n"))),(0,r.kt)(u.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<LatLng> cellToBoundary(long cell);\nList<LatLng> cellToBoundary(String cellAddress);\n"))),(0,r.kt)(u.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.cellToBoundary(cell, [formatAsGeoJson])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToBoundary(cell);\n}\n")))),(0,r.kt)("p",null,"Finds the boundary of the cell."),(0,r.kt)("p",null,"Returns 0 (",(0,r.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."))}f.isMDXComponent=!0}}]);