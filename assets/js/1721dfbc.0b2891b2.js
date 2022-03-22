"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5415],{54852:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(t),u=o,b=s["".concat(p,".").concat(u)]||s[u]||m[u]||r;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},50082:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var a=t(26260),o=t(23157),r=(t(49231),t(54852)),l=["components"],i={title:"LoadableComponent",sidebar_position:3},p=void 0,d={unversionedId:"apis/runtime/utility/loadable/loadable-component",id:"apis/runtime/utility/loadable/loadable-component",isDocsHomePage:!1,title:"LoadableComponent",description:"LoadableComponent \u662f loadable \u6216 lazy \u51fd\u6570\u8fd4\u56de\u7684\u5bf9\u8c61\u7c7b\u578b\u3002",source:"@site/docs/apis/runtime/utility/loadable/loadable-component.md",sourceDirName:"apis/runtime/utility/loadable",slug:"/apis/runtime/utility/loadable/loadable-component",permalink:"/docs/apis/runtime/utility/loadable/loadable-component",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"LoadableComponent",sidebar_position:3},sidebar:"apisSidebar",previous:{title:"lazy",permalink:"/docs/apis/runtime/utility/loadable/lazy"},next:{title:"LoadableLibrary",permalink:"/docs/apis/runtime/utility/loadable/loadable-library"}},c=[{value:"LoadableComponent \u7c7b\u578b",id:"loadablecomponent-\u7c7b\u578b",children:[{value:"props",id:"props",children:[]},{value:"fallback",id:"fallback",children:[]}]},{value:"LoadableComponent.preload",id:"loadablecomponentpreload",children:[]},{value:"LoadableComponent.load",id:"loadablecomponentload",children:[]}],m={toc:c};function s(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LoadableComponent")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"loadable")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," \u51fd\u6570\u8fd4\u56de\u7684\u5bf9\u8c61\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"loadablecomponent-\u7c7b\u578b"},"LoadableComponent \u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type LoadableComponent<Props> =\n  React.ComponentType<\n    Props & { fallback?: JSX.Element; }>\n  & {\n    preload(props?: Props): void;\n    load(props?: Props): Promise<React.ComponentType<Props>>;\n  }\n")),(0,r.kt)("h3",{id:"props"},"props"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LoadableComponent")," \u7ec4\u4ef6\u53ef\u63a5\u6536\u4efb\u610f props \u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u4f1a\u8f6c\u53d1\u7ed9 loadFn\u3002"),(0,r.kt)("h3",{id:"fallback"},"fallback"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,r.kt)("p",null,"\u5f53\u7ec4\u4ef6\u5c1a\u672a\u52a0\u8f7d\u5b8c\u6210\uff08\u5373 loading \u9636\u6bb5\uff09\u4f1a\u663e\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback")," \u5185\u5bb9\u3002"),(0,r.kt)("h2",{id:"loadablecomponentpreload"},"LoadableComponent.preload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable'\n\nconst OtherComponent = loadable(() => import('./OtherComponent'))\nOtherComponent.preload()\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"preload")," \u63a5\u6536\u7684\u53c2\u6570\u4f1a\u5168\u90e8\u4f20\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"loadFn"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u9884\u52a0\u8f7d\u811a\u672c\u4e2d\u51fd\u6570\u59cb\u7ec8\u4e0d\u4f1a\u8fd4\u56de\u4e00\u4e2a Promise \u5bf9\u8c61\uff0c\u5982\u679c\u4f60\u60f3\u7b49\u5f85\u7ec4\u4ef6\u52a0\u8f7d\u5b8c\u6210\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"#LoadableComponent.load"},"load")," \u51fd\u6570"))),(0,r.kt)("h2",{id:"loadablecomponentload"},"LoadableComponent.load"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable'\n\nconst OtherComponent = loadable(() => import('./OtherComponent'))\nOtherComponent.load().then(() => {\n  console.log('Component is loaded!')\n})\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u65e0\u9700\u7b49\u5f85\u7ec4\u4ef6\u52a0\u8f7d\u5b8c\u6210\uff0c\u5219\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"#LoadableComponent.preload"},"preload")," \u5373\u53ef\u3002"))))}s.isMDXComponent=!0}}]);