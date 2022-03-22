"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7666],{54852:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(49231);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),u=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||o;return n?t.createElement(d,a(a({ref:r},c),{},{components:n})):t.createElement(d,a({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51091:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var t=n(26260),i=n(23157),o=(n(49231),n(54852)),a=["components"],l={sidebar_position:9},p="rmFile",u={unversionedId:"apis/generator/plugin/file/rmFile",id:"apis/generator/plugin/file/rmFile",isDocsHomePage:!1,title:"rmFile",description:"\u5220\u9664\u6587\u4ef6\u3002",source:"@site/docs/apis/generator/plugin/file/rmFile.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/rmFile",permalink:"/en/docs/apis/generator/plugin/file/rmFile",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"apisSidebar",previous:{title:"updateModernConfig",permalink:"/en/docs/apis/generator/plugin/file/updateModernConfig"},next:{title:"rmDir",permalink:"/en/docs/apis/generator/plugin/file/rmDir"}},c=[{value:"fileName",id:"filename",children:[]}],s={toc:c};function f(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rmfile"},"rmFile"),(0,o.kt)("p",null,"\u5220\u9664\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u4efb\u4f55\u6587\u4ef6\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,o.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  rmFile: (fileName: string) => Promise<void>;\n  ...\n};\n")),(0,o.kt)("h2",{id:"filename"},"fileName"),(0,o.kt)("p",null,"\u9700\u5220\u9664\u7684\u6587\u4ef6\u540d\u79f0\u6216\u6587\u4ef6\u8def\u5f84\u3002"))}f.isMDXComponent=!0}}]);