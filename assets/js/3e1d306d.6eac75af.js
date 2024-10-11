"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[8419],{5680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>g});var t=n(6540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(n),g=l,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||r;return n?t.createElement(m,o(o({ref:a},c),{},{components:n})):t.createElement(m,o({ref:a},c))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var u={};for(var s in a)hasOwnProperty.call(a,s)&&(u[s]=a[s]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<r;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9365:(e,a,n)=>{n.d(a,{A:()=>o});var t=n(6540),l=n(53);const r="tabItem_Ymn6";function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.A)(r,o),hidden:n},a)}},1470:(e,a,n)=>{n.d(a,{A:()=>N});var t=n(8168),l=n(6540),r=n(53),o=n(3104),u=n(2681),s=n(7485),i=n(1682),c=n(9466);function p(e){return function(e){var a,n;return null!=(a=null==(n=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}function d(e){const{values:a,children:n}=e;return(0,l.useMemo)((()=>{const e=null!=a?a:p(n);return function(e){const a=(0,i.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function g(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const t=(0,u.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function y(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=d(e),[o,u]=(0,l.useState)((()=>function(e){var a;let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const l=null!=(a=t.find((e=>e.default)))?a:t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:a,tabValues:r}))),[s,i]=m({queryString:n,groupId:t}),[p,y]=function(e){let{groupId:a}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(a),[t,r]=(0,c.Dv)(n);return[t,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),b=(()=>{const e=null!=s?s:p;return g({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);u(e),i(e),y(e)}),[i,y,r]),tabValues:r}}var b=n(2303);const f="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:a,block:n,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const a=e.currentTarget,n=c.indexOf(a),t=i[n].value;t!==u&&(p(a),s(t))},g=e=>{var a;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const a=c.indexOf(e.currentTarget)+1;n=null!=(t=c[a])?t:c[0];break}case"ArrowLeft":{var l;const a=c.indexOf(e.currentTarget)-1;n=null!=(l=c[a])?l:c[c.length-1];break}}null==(a=n)||a.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a)},i.map((e=>{let{value:a,label:n,attributes:o}=e;return l.createElement("li",(0,t.A)({role:"tab",tabIndex:u===a?0:-1,"aria-selected":u===a,key:a,ref:e=>c.push(e),onKeyDown:g,onClick:d},o,{className:(0,r.A)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":u===a})}),null!=n?n:a)})))}function w(e){let{lazy:a,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function k(e){const a=y(e);return l.createElement("div",{className:(0,r.A)("tabs-container",f)},l.createElement(v,(0,t.A)({},e,a)),l.createElement(w,(0,t.A)({},e,a)))}function N(e){const a=(0,b.A)();return l.createElement(k,(0,t.A)({key:String(a)},e))}},9551:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var t=n(8168),l=(n(6540),n(5680)),r=n(1470),o=n(9365);const u={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/installation"},s=void 0,i={unversionedId:"installation",id:"version-3.x/installation",title:"Installation",description:"\x3c!-- when updating this file with a new version number, do a search and replace",source:"@site/versioned_docs/version-3.x/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/3.x/installation",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/installation.mdx",tags:[],version:"3.x",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/installation"},sidebar:"version-3.x/someSidebar",previous:{title:"Placekey",permalink:"/docs/3.x/comparisons/placekey"},next:{title:"Quick Start",permalink:"/docs/3.x/quickstart"}},c={},p=[{value:"Package managers",id:"package-managers",level:2},{value:"Install from source",id:"install-from-source",level:2}],d={toc:p};function g(e){let{components:a,...n}=e;return(0,l.yg)("wrapper",(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"We recommend using prebuilt bindings if they are available for your programming language. Bindings for Go, Java, JavaScript, Python, and others are available."),(0,l.yg)("h2",{id:"package-managers"},"Package managers"),(0,l.yg)(r.A,{groupId:"env",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Homebrew",value:"brew"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,l.yg)("p",null,"Using ",(0,l.yg)("a",{parentName:"p",href:"https://pypi.org/project/h3/"},"PyPi"),", run:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"pip install h3\n")),(0,l.yg)("p",null,"Using ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/conda-forge/h3-py-feedstock"},"Conda"),", run:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"conda config --add channels conda-forge\nconda install h3-py\n"))),(0,l.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,l.yg)("p",null,"Using Maven, add to your ",(0,l.yg)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.uber</groupId>\n    <artifactId>h3</artifactId>\n    <version>3.7.1</version>\n</dependency>\n")),(0,l.yg)("p",null,"Using Gradle, add to your build script:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-gradle"},'compile("com.uber:h3:3.7.1")\n'))),(0,l.yg)(o.A,{value:"javascript",mdxType:"TabItem"},(0,l.yg)("p",null,"Using npm, run:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npm install h3-js\n")),(0,l.yg)("p",null,"Using yarn, run:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add h3-js\n"))),(0,l.yg)(o.A,{value:"brew",mdxType:"TabItem"},(0,l.yg)("p",null,"Using brew, run:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"brew install h3\n")),(0,l.yg)("p",null,"This installs the C library and filter applications."))),(0,l.yg)("h2",{id:"install-from-source"},"Install from source"),(0,l.yg)("p",null,"First, clone the repository or ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/uber/h3"},"download the source"),"\nand check out the latest release:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/uber/h3.git\ncd h3\ngit checkout v$(<VERSION)\n")),(0,l.yg)("p",null,"You will need to install build dependencies for your operating system."),(0,l.yg)(r.A,{groupId:"os",defaultValue:"macos",values:[{label:"mac OS",value:"macos"},{label:"alpine",value:"alpine"},{label:"Debian/Ubuntu",value:"debian"},{label:"Windows",value:"windows"},{label:"FreeBSD",value:"freebsd"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"macos",mdxType:"TabItem"},(0,l.yg)("p",null,"First make sure you ",(0,l.yg)("a",{parentName:"p",href:"http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/"},"have the developer tools installed")," and then run:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# Installing the bare build requirements\nbrew install cmake\n# Installing useful tools for development\nbrew install clang-format lcov doxygen\n"))),(0,l.yg)(o.A,{value:"alpine",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# Installing the bare build requirements\napk add cmake make gcc libtool musl-dev\n"))),(0,l.yg)(o.A,{value:"debian",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# Installing the bare build requirements\nsudo apt install cmake make gcc libtool\n# Installing useful tools for development\nsudo apt install clang-format cmake-curses-gui lcov doxygen\n"))),(0,l.yg)(o.A,{value:"windows",mdxType:"TabItem"},(0,l.yg)("p",null,"You will need to install CMake and Visual Studio, including the Visual C++ compiler."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# Installing the bare build requirements\nsudo apt install cmake make gcc libtool\n# Installing useful tools for development\nsudo apt install clang-format cmake-curses-gui lcov doxygen\n"))),(0,l.yg)(o.A,{value:"freebsd",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# Installing the build requirements\nsudo pkg install bash cmake gmake doxygen lcov\n")))),(0,l.yg)("p",null,"Next, you can build the library:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir build\ncd build\ncmake ..\ncmake --build .\n")),(0,l.yg)("p",null,"Optionally, to run H3's test suite, run:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"ctest\n")),(0,l.yg)("p",null,"By default, the filter applications are built when you build H3. You can confirm they are working by running:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./bin/geoToH3 --lat 14 --lon -42 --resolution 2\n")))}g.isMDXComponent=!0}}]);