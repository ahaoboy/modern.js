"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7920],{51423:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(34443),a=n(77171),o=n.n(a),c=n(49231),l=n(25396),s=n(63203),u=n(18161),i=n(81527),m=n(82261),f=n(4320);var h=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,l.Z)().siteConfig.baseUrl;return{searchValue:f.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},_=n(30328),d=n(51604),p=n(27617),E=n(42983),v=n(91474),g=n(26913),k=n(13188);function I(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var y="searchQueryInput_X7jP",w="searchResultItem_5FW4",N="searchResultItemPath_9Gzh",Z="searchResultItemSummary_Dneg";function S(e){var t=e.searchResult,n=t.document,r=t.type,a=t.page,o=t.tokens,l=t.metadata,s=0===r,u=2===r,m=(s?n.b:a.b).slice(),f=u?n.s:n.t;return s||m.push(a.t),c.createElement("article",{className:w},c.createElement("h2",null,c.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:u?(0,p.C)(f,o):(0,E.o)(f,(0,v.m)(l,"t"),o,100)}})),m.length>0&&c.createElement("p",{className:N},m.join(" \u203a ")),u&&c.createElement("p",{className:Z,dangerouslySetInnerHTML:{__html:(0,E.o)(n.t,(0,v.m)(l,"t"),o,100)}}))}var b=function(){var e=(0,l.Z)().siteConfig.baseUrl,t=h(),n=t.searchValue,a=t.updateSearchPath,i=(0,c.useState)(n),m=i[0],f=i[1],p=(0,c.useState)(),E=p[0],v=p[1],w=(0,c.useState)(),N=w[0],Z=w[1],b=(0,c.useMemo)((function(){return m?I(k.Iz.search_results_for,{keyword:m}):k.Iz.search_the_documentation}),[m]);(0,c.useEffect)((function(){a(m),E&&(m?E(m,(function(e){Z(e)})):Z(void 0))}),[m,E]);var L=(0,c.useCallback)((function(e){f(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==m&&f(n)}),[n]),(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(o().mark((function t(){var n,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,_.w)(e);case 2:n=t.sent,r=n.wrappedIndexes,a=n.zhDictionary,v((function(){return(0,d.v)(r,a,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.createElement(s.Z,{title:b},c.createElement(u.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"})),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,b),c.createElement("input",{type:"search",name:"q",className:y,"aria-label":"Search",onChange:L,value:m,autoComplete:"off",autoFocus:!0}),!E&&m&&c.createElement("div",null,c.createElement(g.Z,null)),N&&(N.length>0?c.createElement("p",null,I(1===N.length?k.Iz.count_documents_found:k.Iz.count_documents_found_plural,{count:N.length})):c.createElement("p",null,k.Iz.no_documents_were_found)),c.createElement("section",null,N&&N.map((function(e){return c.createElement(S,{key:e.document.i,searchResult:e})})))))}},96693:function(e,t,n){n.d(t,{dK:function(){return o},_k:function(){return c},vc:function(){return l},rx:function(){return s},qo:function(){return u},Hk:function(){return i},Iz:function(){return m}});var r=n(28901),a=n.n(r);n(78141)(a()),n(55357).w(a()),n(60884)(a());var o=["en","zh"],c=!1,l=null,s="24676ce0",u=8,i=50,m={search_placeholder:"\u641c\u7d22",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},25595:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(26260),a=n(23157),o=n(49231),c=n(1506),l=n(81527),s=n(65442),u=n(57502),i=n(19657),m=n(26622),f=n(97789),h={footerLogoLink:"footerLogoLink_94kH",footerItemIcons:"footerItemIcons_L3RU",footerItemIcon:"footerItemIcon_9u-Q",active:"active_P7Wi",qrcodeWrap:"qrcodeWrap_pGOd"},_=["to","href","label","prependBaseUrlToHref"];function d(e){var t=e.to,n=e.href,c=e.label,s=e.prependBaseUrlToHref,m=(0,a.Z)(e,_),h=(0,u.Z)(t),d=(0,u.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(l.Z,(0,r.Z)({className:"footer__link-item"},n?{href:s?d:n}:{to:h},m),n&&!(0,i.Z)(n)?o.createElement("span",null,c,o.createElement(f.Z,null)):c)}function p(e){var t=(0,o.useState)(!1),n=t[0],r=t[1];if(e.html)return o.createElement("li",{className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}});if(e.icon){if(e.qrcode){var a=["footer__item",h.footerItemIcon,n?h.active:""];return o.createElement("a",{onClick:function(){return r(!n)},onMouseEnter:function(e){return function(e){e.preventDefault(),window.innerWidth>966&&r(!0)}(e)},onMouseLeave:function(e){return function(e){e.preventDefault(),window.innerWidth>966&&r(!1)}(e)},className:a.join(" ")},o.createElement("img",{width:"32",height:"32",src:e.icon,alt:e.alt}),o.createElement("span",{className:h.qrcodeWrap,style:{display:n?"flex":"none"}},o.createElement("img",{width:"108",height:"108",className:h.qrcode,src:e.qrcode,alt:e.label})))}return o.createElement("a",{href:e.to,className:"footer__item "+h.footerItemIcon},o.createElement("img",{width:"32",height:"32",src:e.icon,alt:e.alt}))}return o.createElement("li",{className:"footer__item"},o.createElement(d,e))}var E=function(e){var t=e.sources,n=e.alt;return o.createElement(m.Z,{className:"footer__logo",alt:n,sources:t})};var v=function(){var e=(0,s.LU)().footer,t=e||{},n=t.copyright,a=t.links,i=void 0===a?[]:a,m=t.logo,f=void 0===m?{}:m,_={light:(0,u.Z)(f.src),dark:(0,u.Z)(f.srcDark||f.src)};return e?o.createElement("footer",{className:(0,c.Z)("footer",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},i&&i.length>0&&o.createElement("div",{className:"row footer__links"},i.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},null!=(n=e.items)&&Array.isArray(n)&&n.length>0?n[0].icon?o.createElement("ul",{className:"footer__items "+h.footerItemIcons},n.map((function(e,t){return o.createElement(p,(0,r.Z)({},e,{key:e.icon||e.href||e.to||t}))}))):o.createElement("ul",{className:"footer__items"},n.map((function(e,t){return o.createElement(p,(0,r.Z)({},e,{key:e.icon||e.href||e.to||t}))}))):null):null);var n}))),(f||n)&&o.createElement("div",{className:"footer__bottom text--center"},f&&(f.src||f.srcDark)&&o.createElement("div",{className:"margin-bottom--sm"},f.href?o.createElement(l.Z,{href:f.href,className:h.footerLogoLink},o.createElement(E,{alt:f.alt,sources:_})):o.createElement(E,{alt:f.alt,sources:_})),n?o.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null}}}]);