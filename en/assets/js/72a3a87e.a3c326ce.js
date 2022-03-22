"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8698],{54852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64330:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(26260),i=n(23157),r=(n(49231),n(54852)),l=["components"],o={title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",sidebar_position:3},s=void 0,p={unversionedId:"guides/usages/basic-configuration/compatibility",id:"guides/usages/basic-configuration/compatibility",isDocsHomePage:!1,title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",description:"Polyfill \u6a21\u5f0f",source:"@site/docs/guides/usages/basic-configuration/compatibility.md",sourceDirName:"guides/usages/basic-configuration",slug:"/guides/usages/basic-configuration/compatibility",permalink:"/en/docs/guides/usages/basic-configuration/compatibility",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"\u81ea\u5b9a\u4e49 HTML \u6a21\u677f",permalink:"/en/docs/guides/usages/basic-configuration/html"},next:{title:"\u81ea\u5b9a\u4e49\u5165\u53e3\u548c\u670d\u52a1\u5668\u7aef\u8def\u7531",permalink:"/en/docs/guides/usages/advanced-configuration/entries"}},c=[{value:"Polyfill \u6a21\u5f0f",id:"polyfill-\u6a21\u5f0f",children:[{value:"\u7f16\u8bd1\u65f6 Polyfill",id:"\u7f16\u8bd1\u65f6-polyfill",children:[]},{value:"\u8fd0\u884c\u65f6\u6309\u9700 Polyfill",id:"\u8fd0\u884c\u65f6\u6309\u9700-polyfill",children:[]}]},{value:"\u5dee\u5f02\u5316\u5206\u53d1",id:"\u5dee\u5f02\u5316\u5206\u53d1",children:[]},{value:"Browserslist \u914d\u7f6e",id:"browserslist-\u914d\u7f6e",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"polyfill-\u6a21\u5f0f"},"Polyfill \u6a21\u5f0f"),(0,r.kt)("h3",{id:"\u7f16\u8bd1\u65f6-polyfill"},"\u7f16\u8bd1\u65f6 Polyfill"),(0,r.kt)("p",null,"Modern.js \u5728\u7f16\u8bd1\u65f6\u9ed8\u8ba4\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," \u5f15\u5165\u5bf9\u5e94\u7684 Polyfill \u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u6839\u636e\u9879\u76ee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist"},"Browserslist")," \u7684\u8bbe\u7f6e\u60c5\u51b5\u5f15\u5165\u6240\u9700\u7684 Polyfill \u4ee3\u7801\uff0c \u8fd9\u6837\u57fa\u672c\u4e0d\u7528\u518d\u62c5\u5fc3\u9879\u76ee\u6e90\u7801\u548c\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684 Polyfill \u95ee\u9898\u4e86\uff0c\u4f46\u662f\u56e0\u4e3a\u5305\u542b\u4e86\u4e00\u4e9b\u6ca1\u6709\u7528\u5230\u7684 Polyfill \u4ee3\u7801\uff0c\u6240\u4ee5\u6700\u7ec8\u7684\u5305\u5927\u5c0f\u53ef\u80fd\u4f1a\u6709\u6240\u589e\u52a0\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u660e\u786e\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4e0d\u9700\u8981 Polyfill \u7684\u573a\u666f, \u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/output/polyfill"},(0,r.kt)("inlineCode",{parentName:"a"},"output.polyfill"))," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"usage"),", \u8fd9\u6837 Babel \u7f16\u8bd1\u65f6\u53ea\u4f1a\u6839\u636e\u4ee3\u7801\u4e2d\u4f7f\u7528\u5230\u7684\u8bed\u6cd5\u5f15\u5165 Polyfill \u4ee3\u7801\u3002"))),(0,r.kt)("h3",{id:"\u8fd0\u884c\u65f6\u6309\u9700-polyfill"},"\u8fd0\u884c\u65f6\u6309\u9700 Polyfill"),(0,r.kt)("p",null,"Modern.js \u4e2d\u8fd8\u63d0\u4f9b\u4e86\u57fa\u4e8e\u6d4f\u89c8\u5668 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent"},"UA")," \u4fe1\u606f\u7684\u8fd0\u884c\u65f6\u6309\u9700 Polyfill \u65b9\u6848\uff0c\u76f8\u6bd4\u4e8e Babel \u4f18\u52bf\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u63d2\u5165\u5230\u4ee3\u7801\u4e2d\uff0c\u53ea\u6839\u636e\u8bbf\u95ee\u9875\u9762\u7684\u8bbe\u5907\uff0c\u6309\u9700\u4e0b\u53d1 Polyfill \u4ee3\u7801 \uff0c\u51cf\u5c11\u6574\u4f53\u4ee3\u7801\u4f53\u79ef\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u540c\u6d4f\u89c8\u5668\u4f1a\u516c\u7528\u4e00\u4efd Polyfill \u4ee3\u7801\u3002\u56e0\u6b64\uff0c\u968f\u7740\u9879\u76ee\u8d8a\u6765\u8d8a\u591a\uff0c\u57fa\u4e8e UA \u7684 Polyfill \u4ee3\u7801\u4e0b\u53d1\u901f\u5ea6\u4f1a\u8d8a\u6765\u8d8a\u5feb\uff0c\u7efc\u5408\u901f\u5ea6\u8d85\u8fc7\u5e38\u89c4\u65b9\u6848\u3002")),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5fae\u751f\u6210\u5668\u5f00\u542f\u8be5\u529f\u80fd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\uff1a\u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd\uff1a\u542f\u7528\u300c\u57fa\u4e8e UA \u7684 Polyfill\u300d\u529f\u80fd\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\u540e\uff0c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"output.polyfill")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ua")," \u5e76\u4e14\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run build && pnpm run start")," \u542f\u52a8\u670d\u52a1\u5668\u540e\uff0c\u8bbf\u95ee\u9875\u9762\u53ef\u4ee5\u770b\u5230 HTML \u4ea7\u7269\u4e2d\u5305\u542b\u5982\u4e0b\u811a\u672c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<script src="/__polyfill__" crossorigin><\/script>\n')),(0,r.kt)("p",null,"\u5728 Chrome 51 \u4e0b\u8bbf\u95ee\u9875\u9762\u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/__polyfill__")," \u8fd4\u56de\u5185\u5bb9\u5982\u4e0b:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/ua-polyfill.png",alt:"ua-polyfill"})),(0,r.kt)("h2",{id:"\u5dee\u5f02\u5316\u5206\u53d1"},"\u5dee\u5f02\u5316\u5206\u53d1"),(0,r.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86\u8fd0\u884c\u65f6\u57fa\u4e8e\u6d4f\u89c8\u5668 User Agent \u7684\u5dee\u5f02\u5316\u5206\u53d1\u65b9\u6848, \u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/output/enable-modern-mode"},(0,r.kt)("inlineCode",{parentName:"a"},"output.enableModernMode"))," \u540e\uff0c \u751f\u4ea7\u73af\u5883\u4f1a\u81ea\u52a8\u6784\u5efa\u51fa\u9488\u5bf9\u73b0\u4ee3\u6d4f\u89c8\u5668\u8bed\u6cd5\u672a\u964d\u7ea7\u7684 JS \u4ea7\u7269\u548c\u9488\u5bf9\u65e7\u7248\u672c\u6d4f\u89c8\u5668\u5e26\u6709 Polyfill \u7684 JS \u4ea7\u7269:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="dist/static/js"',title:'"dist/static/js"'},"\u251c\u2500\u2500 370.95db0e84-es6.js\n\u251c\u2500\u2500 370.95db0e84-es6.js.map\n\u251c\u2500\u2500 370.ace5d8a0.js\n\u251c\u2500\u2500 370.ace5d8a0.js.map\n\u251c\u2500\u2500 main.64eb3bc7-es6.js\n\u251c\u2500\u2500 main.64eb3bc7-es6.js.map\n\u251c\u2500\u2500 main.c8aab430.js\n\u251c\u2500\u2500 main.c8aab430.js.map\n\u251c\u2500\u2500 runtime-main.9ad9a46b-es6.js\n\u251c\u2500\u2500 runtime-main.9ad9a46b-es6.js.map\n\u251c\u2500\u2500 runtime-main.dccca6e0.js\n\u2514\u2500\u2500 runtime-main.dccca6e0.js.map\n")),(0,r.kt)("p",null,"\u540c\u65f6 HTML \u4e5f\u4f1a\u6784\u5efa\u51fa\u5bf9\u5e94\u7684 ES6 \u7248\u672c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dist/html/main/index-es6.html"',title:'"dist/html/main/index-es6.html"'},'<script defer="defer" src="/static/js/370.95db0e84-es6.js"><\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dist/html/main/index.html"',title:'"dist/html/main/index.html"'},'<script defer="defer" src="/static/js/370.ace5d8a0.js"><\/script>\n')),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run build && pnpm run start")," \u542f\u52a8\u670d\u52a1\u5668, \u8bbf\u95ee\u9875\u9762\u65f6\uff0c\u4f1a\u6839\u636e\u6d4f\u89c8\u5668\u4fe1\u606f\u51b3\u5b9a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"index-es6.html")," \u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5185\u90e8\u76ee\u524d\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/blob/main/packages/babel-compat-data/data/native-modules.json"},"@babel/compat-data")," \u6765\u5224\u65ad\u5177\u4f53\u6d4f\u89c8\u5668\u662f\u5426\u652f\u6301 es6 \u8bed\u6cd5\u3002"))),(0,r.kt)("h2",{id:"browserslist-\u914d\u7f6e"},"Browserslist \u914d\u7f6e"),(0,r.kt)("p",null,"Modern.js \u652f\u6301\u5728\u9879\u76ee\u6839\u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"browserslist")," \u5b57\u6bb5\uff08\u6216\u5355\u72ec\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".browserslistrc")," \u6587\u4ef6\uff09\u6307\u5b9a\u9879\u76ee\u8986\u76d6\u7684\u76ee\u6807\u6d4f\u89c8\u5668\u8303\u56f4\u3002\u8be5\u503c\u4f1a\u88ab ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},(0,r.kt)("inlineCode",{parentName:"a"},"@babel/preset-env"))," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},(0,r.kt)("inlineCode",{parentName:"a"},"autoprefixer"))," \u7528\u6765\u786e\u5b9a\u9700\u8981\u8f6c\u6362\u7684 JavaScript \u8bed\u6cd5\u7279\u6027\u548c\u9700\u8981\u6dfb\u52a0\u7684 CSS \u6d4f\u89c8\u5668\u524d\u7f00\u3002"),(0,r.kt)("p",null,"Modern.js \u4e2d\u9ed8\u8ba4\u503c\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"['> 0.01%', 'not dead', 'not op_mini all']\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist"},"\u8fd9\u91cc"),"\u4e86\u89e3\u5982\u4f55\u81ea\u5b9a\u4e49\u6d4f\u89c8\u5668\u8303\u56f4\u3002"))}m.isMDXComponent=!0}}]);