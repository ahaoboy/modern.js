"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3375],{54852:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7235:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(26260),a=t(23157),i=(t(49231),t(54852)),o=["components"],l={sidebar_position:1},p="\u4ecb\u7ecd",c={unversionedId:"apis/generator/plugin/file/introduce",id:"apis/generator/plugin/file/introduce",isDocsHomePage:!1,title:"\u4ecb\u7ecd",description:"\u6587\u4ef6\u64cd\u4f5c API \u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u4f7f\u7528\uff0c\u53ef\u5bf9\u5f53\u524d\u9879\u76ee\u6587\u4ef6\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\u7684\u64cd\u4f5c\u3002",source:"@site/docs/apis/generator/plugin/file/introduce.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/introduce",permalink:"/docs/apis/generator/plugin/file/introduce",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisSidebar",previous:{title:"AfterForged",permalink:"/docs/apis/generator/plugin/hook/afterForged"},next:{title:"addHelper",permalink:"/docs/apis/generator/plugin/file/addHelper"}},u=[{value:"\u6587\u4ef6\u7c7b\u578b",id:"\u6587\u4ef6\u7c7b\u578b",children:[]}],s={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u6587\u4ef6\u64cd\u4f5c API \u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u4f7f\u7528\uff0c\u53ef\u5bf9\u5f53\u524d\u9879\u76ee\u6587\u4ef6\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u6587\u4ef6\u64cd\u4f5c API \u76f8\u5173\u8def\u5f84\u586b\u5199\u9879\u76ee\u76f8\u5bf9\u8def\u5f84\u5373\u53ef\uff0c\u751f\u6210\u5668\u63d2\u4ef6\u4f1a\u81ea\u52a8\u6dfb\u52a0\u5f53\u524d\u9879\u76ee\u8def\u5f84\u524d\u7f00\u3002"),(0,i.kt)("h2",{id:"\u6587\u4ef6\u7c7b\u578b"},"\u6587\u4ef6\u7c7b\u578b"),(0,i.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u5c06\u6587\u4ef6\u7c7b\u578b\u5206\u4e3a\u4e00\u4e0b\u51e0\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6587\u672c\u6587\u4ef6\uff1a\u7eaf\u6587\u672c\u5185\u5bb9\u6587\u4ef6\uff0c\u53ef\u4f7f\u7528 handlebars \u8fdb\u884c\u6a21\u677f\u5904\u7406\u7684\u6587\u4ef6\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a\u56fe\u7247\u3001\u97f3\u9891\u3001\u89c6\u9891\u7b49\u6587\u4ef6"))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f7f\u7528\u53d8\u91cf\u7684 jsx \u6216 tsx \u6587\u4ef6\u4e3a\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5176\u8bed\u6cd5\u4e0e handlebars \u6e32\u67d3\u51b2\u7a81\uff0c\u4f1a\u9020\u6210\u6a21\u677f\u6587\u4ef6\u521b\u5efa\u5931\u8d25\u3002"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JSON \u6587\u4ef6\uff1aJSON \u683c\u5f0f\u7684\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6587\u672c\u5217\u8868\u6587\u4ef6\uff1a\u6587\u4ef6\u7531\u884c\u6587\u672c\u7ec4\u6210\u7684\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".editorconfig"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc"),"\u3002"))),(0,i.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u7684\u6587\u4ef6\u64cd\u4f5c API \u5c06\u662f\u9488\u5bf9\u8fd9\u56db\u79cd\u6587\u4ef6\u7c7b\u578b\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export enum FileType {\n  Text = 'text',\n  Binary = 'binary',\n  Json = 'json',\n  TextRaw = 'textRaw',\n}\n")))}d.isMDXComponent=!0}}]);