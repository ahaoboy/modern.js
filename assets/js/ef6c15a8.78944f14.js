"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8174],{54852:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(p,".").concat(d)]||m[d]||l[d]||i;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84356:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=t(14380),o=t(8240),i=(t(49231),t(54852)),a=["components"],s={sidebar_position:5},p="Context API",c={unversionedId:"apis/runtime/plugin/context-api",id:"apis/runtime/plugin/context-api",title:"Context API",description:"\u63d2\u4ef6\u4e2d\u57fa\u4e8e\u3010\u4e0a\u4e0b\u6587\u5171\u4eab\u673a\u5236\u3011\u63d0\u4f9b\u4e86\u7528\u4e8e\u83b7\u53d6\u914d\u7f6e\u548c\u5e94\u7528\u6267\u884c\u4e0a\u4e0b\u6587\u7684 API\u3002",source:"@site/docs/apis/runtime/plugin/context-api.md",sourceDirName:"apis/runtime/plugin",slug:"/apis/runtime/plugin/context-api",permalink:"/docs/apis/runtime/plugin/context-api",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"apisSidebar",previous:{title:"\u4e0a\u4e0b\u6587\u5171\u4eab\u673a\u5236",permalink:"/docs/apis/runtime/plugin/context"},next:{title:"Hook API",permalink:"/docs/apis/runtime/plugin/hook-api"}},u={},l=[{value:"API",id:"api",level:2},{value:"useConfigContext",id:"useconfigcontext",level:3},{value:"useAppContext",id:"useappcontext",level:3},{value:"useResolvedConfigContext",id:"useresolvedconfigcontext",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}],m={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"context-api"},"Context API"),(0,i.kt)("p",null,"\u63d2\u4ef6\u4e2d\u57fa\u4e8e\u3010",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/runtime/plugin/context"},"\u4e0a\u4e0b\u6587\u5171\u4eab\u673a\u5236"),"\u3011\u63d0\u4f9b\u4e86\u7528\u4e8e\u83b7\u53d6\u914d\u7f6e\u548c\u5e94\u7528\u6267\u884c\u4e0a\u4e0b\u6587\u7684 API\u3002"),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"useconfigcontext"},"useConfigContext"),(0,i.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u5e94\u7528\u539f\u59cb\u914d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const useConfigContext: () => UserConfig\n\ninterface UserConfig {\n  source?: SourceConfig;\n  output?: OutputConfig;\n  server?: ServerConfig;\n  dev?: DevConfig;\n  deploy?: DeployConfig;\n  tools?: ToolsConfig;\n  plugins?: PluginConfig;\n  runtime?: RuntimeConfig;\n  runtimeByEntries?: RuntimeByEntriesConfig;\n}\n")),(0,i.kt)("p",null,"\u5177\u4f53\u914d\u7f6e\u5b57\u6bb5\u7684\u610f\u4e49\u8bf7\u53c2\u8003\u3010",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/source/alias"},"\u914d\u7f6e"),"\u3011\u3002"),(0,i.kt)("h3",{id:"useappcontext"},"useAppContext"),(0,i.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u5e94\u7528\u8fd0\u884c\u4e0a\u4e0b\u6587\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const useAppContext: () => IAppContext\n\ninterface IAppContext {\n  appDirectory: string;\n  configFile: string | false;\n  ip?: string;\n  port?: number;\n  distDirectory: string;\n  packageName: string;\n  srcDirectory: string;\n  sharedDirectory: string;\n  nodeModulesDirectory: string;\n  internalDirectory: string;\n  plugins: {\n    cli?: any;\n    server?: any;\n  }[];\n  entrypoints: Entrypoint[];\n  serverRoutes: ServerRoute[];\n  htmlTemplates: HtmlTemplates;\n}\n")),(0,i.kt)("h3",{id:"useresolvedconfigcontext"},"useResolvedConfigContext"),(0,i.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u89e3\u6790\u4e4b\u540e\u7684\u6700\u7ec8\u914d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const useResolvedConfigContext: () => NormalizedConfig\n\ninterface NormalizedConfig {\n  source: NormalizedSourceConfig;\n  output: OutputConfig;\n  server: ServerConfig;\n  dev: DevConfig;\n  deploy: DeployConfig;\n  tools: NormalizedToolsConfig;\n  plugins: PluginConfig;\n  runtime: RuntimeConfig;\n  runtimeByEntries?: RuntimeByEntriesConfig;\n  _raw: UserConfig\n}\n")),(0,i.kt)("p",null,"\u5177\u4f53\u914d\u7f6e\u5b57\u6bb5\u7684\u610f\u4e49\u8bf7\u53c2\u8003\u3010",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/source/alias"},"\u914d\u7f6e"),"\u3011\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createPlugin, useAppContext, useResolvedConfigContext } from '@modern-js/core'\n\nexport default createPlugin(() => {\n  return {\n    prepare() {\n      const sourceConfig = useConfigContext()\n      const finalConfig = useResolvedConfigContext()\n      const context = useAppContext()\n\n      /** do something */\n    },\n  }\n})\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u3010",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/features/custom/framework-plugin/implement"},"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6"),"\u3011"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0a\u9762\u63d0\u5230\u7684\u51fd\u6570\u53ea\u80fd\u5728 Hook \u51fd\u6570\u4e2d\u4f7f\u7528\uff0c\u5373\u53ea\u80fd\u5728\u4e0b\u9762\u793a\u4f8b\u4e2d\u7684 ",(0,i.kt)("strong",{parentName:"p"},"C \u4f4d\u7f6e"),"\u4f7f\u7528\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/** A */\nexport default createPlugin(() => {\n  /** B */\n  return {\n    prepare() {\n      /** C */\n    },\n  }\n})\n")))))}d.isMDXComponent=!0}}]);