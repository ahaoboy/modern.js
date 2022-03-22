"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1925],{54852:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(t),c=o,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17332:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=t(26260),o=t(23157),r=(t(49231),t(54852)),i=["components"],p={sidebar_position:7},s="\u6a21\u5757\u7684\u5165\u53e3\u6587\u4ef6\u914d\u7f6e",l={unversionedId:"guides/features/modules/exports",id:"guides/features/modules/exports",isDocsHomePage:!1,title:"\u6a21\u5757\u7684\u5165\u53e3\u6587\u4ef6\u914d\u7f6e",description:"\u5bf9\u4e8e\u53ef\u590d\u7528\u6a21\u5757\u6765\u8bf4\uff0cpackage.json \u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u5f88\u591a\u4fe1\u606f\uff0c\u4f8b\u5982\u9879\u76ee\u7684\u540d\u79f0\u3001\u4f9d\u8d56\u7684\u6a21\u5757\u3002",source:"@site/docs/guides/features/modules/exports.md",sourceDirName:"guides/features/modules",slug:"/guides/features/modules/exports",permalink:"/docs/guides/features/modules/exports",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guidesSidebar",previous:{title:"\u6784\u5efa\u53ef\u590d\u7528\u6a21\u5757",permalink:"/docs/guides/features/modules/build"},next:{title:"\u6d4b\u8bd5\u53ef\u590d\u7528\u6a21\u5757",permalink:"/docs/guides/features/modules/test"}},d=[{value:"package.json \u4e2d\u7684 <code>exports</code> \u662f\u4ec0\u4e48\uff1f",id:"packagejson-\u4e2d\u7684-exports-\u662f\u4ec0\u4e48",children:[{value:"\u4e3e\u4e2a\u4f8b\u5b50",id:"\u4e3e\u4e2a\u4f8b\u5b50",children:[]},{value:"\u5173\u4e8e&quot;exports&quot; \u4e0e &quot;main&quot;\u4e4b\u95f4\u7684\u4f18\u5148\u7ea7",id:"\u5173\u4e8eexports-\u4e0e-main\u4e4b\u95f4\u7684\u4f18\u5148\u7ea7",children:[]},{value:"\u6761\u4ef6\u5bfc\u51fa",id:"\u6761\u4ef6\u5bfc\u51fa",children:[]}]},{value:"\u5728 Modern.js \u4e2d\u63d0\u4f9b\u7684\u652f\u6301",id:"\u5728-modernjs-\u4e2d\u63d0\u4f9b\u7684\u652f\u6301",children:[]}],m={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6a21\u5757\u7684\u5165\u53e3\u6587\u4ef6\u914d\u7f6e"},"\u6a21\u5757\u7684\u5165\u53e3\u6587\u4ef6\u914d\u7f6e"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u53ef\u590d\u7528\u6a21\u5757\u6765\u8bf4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u5f88\u591a\u4fe1\u606f\uff0c\u4f8b\u5982\u9879\u76ee\u7684\u540d\u79f0\u3001\u4f9d\u8d56\u7684\u6a21\u5757\u3002"),(0,r.kt)("p",null,"\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),' \u6587\u4ef6\u4e2d "exports" \u5b57\u6bb5\u7684\u4f7f\u7528\u4ee5\u53ca Modern.js \u5bf9\u4e8e\u5b83\u505a\u4e86\u54ea\u4e9b\u652f\u6301\u3002'),(0,r.kt)("h2",{id:"packagejson-\u4e2d\u7684-exports-\u662f\u4ec0\u4e48"},"package.json \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"h2"},"exports")," \u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"\u5728\u4e00\u4e2a\u5305\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),' \u6587\u4ef6\u4e2d\uff0c"main" \u5b57\u6bb5\u53ef\u4ee5\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a\u5305\u7684\u5165\u53e3\u6587\u4ef6\u3002\u8fd9\u4e2a\u5b57\u6bb5\u5728 Node.js \u6240\u6709\u7248\u672c\u4e2d\u90fd\u652f\u6301\uff0c\u5e76\u4e14\u5728\u5176\u4ed6\u5de5\u5177\u4e2d\uff08\u4f8b\u5982 webpack\uff09\u4e2d\u4e5f\u9ed8\u8ba4\u652f\u6301\u3002\n\u867d\u7136\u5b83\u5df2\u7ecf\u88ab\u666e\u904d\u652f\u6301\uff0c\u4f46\u662f\u5b83\u63d0\u4f9b\u7684\u80fd\u529b\u5176\u5b9e\u5f88\u6709\u9650\uff1a\u5b83\u4ec5\u4ec5\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\u4e3b\u8981\u7684\u5165\u53e3\u6587\u4ef6\u3002'),(0,r.kt)("p",null,'\u800c "exports" \u5b57\u6bb5\u63d0\u4f9b\u4e86 "main" \u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u5b83\u4e0d\u4ec5\u53ef\u4ee5\u5b9a\u4e49\u4e3b\u8981\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5165\u53e3\u3002\u5728\u81ea\u5b9a\u4e49\u5165\u53e3\u7684\u540c\u65f6\u8fd8\u8d77\u5230\u4e86\u5c01\u88c5\u5165\u53e3\u7684\u4f5c\u7528\uff1a\u4f7f\u7528\u8005\u4e0d\u53ef\u4ee5\u8bbf\u95ee\u672a\u5728 "exports" \u4e2d\u5b9a\u4e49\u7684\u5165\u53e3\u8def\u5f84\u4ee5\u5916\u7684\u4efb\u4f55\u5176\u4ed6\u8def\u5f84\u3002'),(0,r.kt)("h3",{id:"\u4e3e\u4e2a\u4f8b\u5b50"},"\u4e3e\u4e2a\u4f8b\u5b50"),(0,r.kt)("p",null,"\u5982\u679c\u6709\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"foo")," \u5305\uff0c\u5176\u4e2d\u5305\u542b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"./index.js"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"./lib.js"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"./feature.js")," \u4e09\u4e2a\u6587\u4ef6\uff0c\u5982\u679c\u5b83\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "exports": {\n    ".": "./index.js",\n    "./lib": "./lib.js"\n  }\n}\n')),(0,r.kt)("p",null,'\u5728\u652f\u6301 "exports" \u7684\u73af\u5883\u91cc\uff0c\u4f60\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u8fd9\u6837\u5bfc\u5165\u6a21\u5757 ',(0,r.kt)("strong",{parentName:"p"},"foo")," \u7684\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const foo = require('foo');\nconst fooLib = require('foo/lib');\n")),(0,r.kt)("p",null,"\u4f46\u662f\u4f60\u65e0\u6cd5\u8fd9\u6837\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fooFeat = require('foo/feature');\n")),(0,r.kt)("p",null,"\u56e0\u4e3a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u672a\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"./feature")," \u5165\u53e3\u8def\u5f84\u3002"),(0,r.kt)("h3",{id:"\u5173\u4e8eexports-\u4e0e-main\u4e4b\u95f4\u7684\u4f18\u5148\u7ea7"},'\u5173\u4e8e"exports" \u4e0e "main"\u4e4b\u95f4\u7684\u4f18\u5148\u7ea7'),(0,r.kt)("p",null,'\u5982\u679c\u540c\u65f6\u5b9a\u4e49\u4e86 "exports" \u548c "main"\uff0c"exports" \u5b57\u6bb5\u4f18\u5148\u4e8e "main"\u3002\u56e0\u6b64\u5982\u679c\u5f53 "exports" \u5b57\u6bb5\u5b58\u5728\u7684\u65f6\u5019\uff0c"main" \u5b57\u6bb5\u7684\u914d\u7f6e\u4f1a\u88ab\u8986\u76d6\u6389\u3002'),(0,r.kt)("p",null,'"exports" \u5b57\u6bb5\u4e0d\u662f\u7279\u5b9a\u4f5c\u7528\u4e8e ES Module \u8fd8\u662f CommonJS\uff0c\u56e0\u6b64\u4e0d\u80fd\u4f7f\u7528 "main" \u5b57\u6bb5\u6765\u4f5c\u4e3a\u4f7f\u7528 CommonJS \u7684\u56de\u9000\u624b\u6bb5\u3002\u4f46\u5b83\u53ef\u4ee5\u4f5c\u4e3a\u4e0d\u652f\u6301 "exports "\u5b57\u6bb5\u7684\u65e7\u7248\u672c\u7684 Node.js \u7684\u56de\u9000\u624b\u6bb5\u3002\n\u56e0\u6b64\u5bf9\u4e8e\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u6211\u4eec\u5c31\u53ef\u4ee5\u8fd9\u6837\u4fee\u6539\uff1a'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"package.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "name": "foo",\n  "main": "./index.js",\n  "exports": {\n    ".": "./index.js",\n    "./lib": "./lib.js"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u6761\u4ef6\u5bfc\u51fa"},"\u6761\u4ef6\u5bfc\u51fa"),(0,r.kt)("p",null,'"exports" \u5b57\u6bb5\u63d0\u4f9b\u4e86\u6761\u4ef6\u5bfc\u51fa\u7684\u529f\u80fd\u3002\u901a\u8fc7\u6761\u4ef6\u5bfc\u51fa\uff0c\u53ef\u4ee5\u5b9a\u4e49\u6bcf\u4e2a\u73af\u5883\u5bf9\u5e94\u4e0d\u540c\u7684\u6a21\u5757\u5305\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u8fd9\u4e5f\u5305\u62ec\u6a21\u5757\u5305\u88ab\u4f7f\u7528\u7684\u65f6\u5019\u662f\u901a\u8fc7 ',(0,r.kt)("inlineCode",{parentName:"p"},"require")," \u7684\u65b9\u5f0f\u8fd8\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," \u7684\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u9488\u5bf9\u4e0a\u9762\u7684\u4f8b\u5b50\u8fdb\u884c\u6269\u5c55\uff0c\u5047\u8bbe\u8be5\u6a21\u5757\u5305\u63d0\u4f9b\u4e86 ES Module \u5b9e\u73b0\u7684\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.mjs")," \uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4f1a\u6709\u5982\u4e0b\u7684\u53d8\u5316\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "main": "./index.cjs",\n  "exports": {\n    "import": "./wrapper.mjs",\n    "require": "./index.cjs"\n  }\n}\n')),(0,r.kt)("p",null,"\u6b64\u65f6\u5982\u679c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"require('foo')")," \u8fd9\u6837\u7684\u65b9\u5f0f\u4f7f\u7528\u8be5\u6a21\u5757\uff0c\u5219\u5b9e\u9645\u4e0a\u5bfc\u5165\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"foo/index.cjs")," \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u800c\u5f53\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"import foo from 'foo';")," \u8fd9\u6837\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u5219\u5b9e\u9645\u5bfc\u5165\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"foo/wrapper.mjs")," \u6587\u4ef6\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},".cjs")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},".mjs")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".mjs")," \u4e3a\u540e\u7f00\u7684\u6587\u4ef6\u5176\u4ee3\u7801\u4f1a\u88ab\u8bc6\u522b\u4e3a\u4f7f\u7528\u4e86 ES Module \u6a21\u5757\u7cfb\u7edf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".cjs")," \u4e3a\u540e\u7f00\u7684\u6587\u4ef6\u5176\u4ee3\u7801\u4f1a\u88ab\u8bc6\u522b\u4e3a\u4f7f\u7528\u4e86 Commonjs \u6a21\u5757\u7cfb\u7edf\u3002")))),(0,r.kt)("p",null,'\u9664\u4e86\u50cf\u4e0a\u9762\u4f7f\u7528\u76f4\u63a5\u6620\u5c04\u65b9\u5f0f\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5d4c\u5957\u6761\u4ef6\u7684\u65b9\u5f0f\u6765\u5b9a\u4e49 "exports"\uff0c\u4f8b\u5982\uff1a'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "main": "./main.js",\n  "exports": {\n    "node": {\n      "import": "./feature-node.mjs",\n      "require": "./feature-node.cjs"\n    },\n    "default": "./feature.mjs",\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"node" \u7528\u4e8e\u5339\u914d\u4efb\u4f55 Node.js \u73af\u5883\uff0c\u53ef\u4ee5\u662f CommonJS \u6216\u8005\u662f ES Module \u6587\u4ef6\u3002')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"default" \u7528\u4e8e\u5728\u4e0d\u6ee1\u8db3\u4e0a\u9762\u4efb\u4f55\u6761\u4ef6\u60c5\u51b5\u4e0b\u7684\u56de\u9000\u624b\u6bb5\u3002')),(0,r.kt)("p",null,'\u5173\u4e8e\u66f4\u591a\u5173\u4e8e "exports" \u7684\u4f7f\u7528\uff0c\u53ef\u4ee5\u9605\u8bfb ',(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/packages.html"},"Node.js Documentation About Packages")),(0,r.kt)("h2",{id:"\u5728-modernjs-\u4e2d\u63d0\u4f9b\u7684\u652f\u6301"},"\u5728 Modern.js \u4e2d\u63d0\u4f9b\u7684\u652f\u6301"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e0d\u540c\u7684\u53ef\u590d\u7528\u6a21\u5757\u6765\u8bf4\uff0c\u53ef\u80fd\u4f1a\u6709\u4e0d\u540c\u7684\uff08\u8bed\u6cd5\u4ee5\u53ca\u6a21\u5757\u5316\uff09\u6784\u5efa\u4ea7\u7269\u9700\u6c42 Modern.js \u9488\u5bf9\u8be5\u9700\u6c42\u63d0\u4f9b\u4e86\u4e0d\u540c\u5f62\u5f0f\u7684\u6784\u5efa\u4ea7\u7269\u4ee5\u6ee1\u8db3\u5404\u79cd\u573a\u666f\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/modules/build"},"\u6784\u5efa\u53ef\u590d\u7528\u6a21\u5757")," \u7ae0\u8282\u4e2d\u63d0\u5230\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 JS \u6784\u5efa\u4ea7\u7269\u76ee\u5f55\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"dist/js")," \uff09\u4e0b\u4f1a\u5b58\u5728\u4e09\u4e2a\u76ee\u5f55\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dist/js/modern")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dist/js/node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dist/js/treeshaking"))),(0,r.kt)("p",null,"\u8fd9\u4e9b\u76ee\u5f55\u4ece\u4e0a\u5230\u4e0b\u5206\u522b\u5bf9\u5e94\u4e86\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"ES6 + ES Module"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ES6 + CommonJS"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ES5 + ES Module")," \u8fd9\u4e09\u79cd\u6784\u5efa\u4ea7\u7269\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u5982\u679c\u53ef\u590d\u7528\u6a21\u5757\u662f\u7528\u4e8e\u5728 Node.js \u4e2d\u4f7f\u7528\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "node-lib",\n  "main": "./dist/js/node/index.js",\n  "exports": {\n    "node": {\n      "require": "dist/js/node/index.js",\n      "import": "dist/js/modern/index.js"\n    },\n    "default": "dist/js/treeshaking/index.js"\n  }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'\u5bf9\u4e8e\u5176\u4ed6\u73af\u5883\uff0c\u4f8b\u5982 webpack\u3002\u53ef\u80fd\u5b58\u5728\u4e0d\u5b8c\u5168\u652f\u6301 "exports"\u7684\u60c5\u51b5\uff0c\u56e0\u6b64\u5bf9\u4e8e\u5728\u975e Node.js \u73af\u5883\u8fd0\u884c\u7684\u53ef\u590d\u7528\u6a21\u5757\u8981\u8c28\u614e\u4f7f\u7528\u3002'))),(0,r.kt)("p",null,"\u9664\u4e86\u9ed8\u8ba4\u7684\u4e09\u79cd\u4ea7\u7269\u4ee5\u5916\uff0cModern.js \u8fd8\u63d0\u4f9b\u4e86\u591a\u4e2a\u9884\u8bbe\u914d\u7f6e\u4f9b\u4e0d\u540c\u573a\u666f\u53bb\u9009\u62e9\u4f7f\u7528\u3002\u5177\u4f53\u5982\u4f55\u4f7f\u7528\uff0c\u53ef\u4ee5\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/output/package-mode"},"output.packageMode")," \u4ee5\u53ca ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/output/pacakge-fields"},"output.packageFields"),"\u3002"))}u.isMDXComponent=!0}}]);