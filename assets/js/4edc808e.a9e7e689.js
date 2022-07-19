"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4173],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=s(n),d=r,m=v["".concat(c,".").concat(d)]||v[d]||p[d]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=v;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},7551:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return q},default:function(){return _},frontMatter:function(){return B},metadata:function(){return R},toc:function(){return J}});var a=n(9624),r=n(42),l=n(9496),i=n(9613),o=n(9218),c=n(7818);var s=function(){var e=(0,l.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3268),p=n(1626),v="tabItem_V3sn";function d(e){var t,n,r,i=e.lazy,o=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),w=k.tabGroupChoices,E=k.setTabGroupChoices,x=(0,l.useState)(y),O=x[0],N=x[1],T=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=w[m];null!=j&&j!==O&&g.some((function(e){return e.value===j}))&&N(j)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==O&&(Z(t),N(a),null!=m&&E(m,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},h)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:S,onClick:S},r,{className:(0,p.Z)("tabs__item",v,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}var h,f,g,b,y,k,w,E,x,O,N,T,Z,j,S,C,M,D=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},V=["title","titleId"];function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=function(e){var t=e.title,n=e.titleId,a=I(e,V);return l.createElement("svg",P({width:256,height:256,viewBox:"0 0 256 256",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,h||(h=l.createElement("rect",{width:256,height:256,rx:128,fill:"#fff"})),f||(f=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M128 210c-45.287 0-82-36.713-82-82s36.713-82 82-82v46.922a35.648 35.648 0 0 0-2.146-.065c-19.409 0-35.143 15.734-35.143 35.143s15.734 35.143 35.143 35.143c.721 0 1.436-.022 2.146-.065V210Z",fill:"#141446"})),g||(g=l.createElement("path",{d:"M174 186h-23v24h23v-24Z",fill:"#D5D5E2"})),b||(b=l.createElement("path",{d:"M151 186h-23v24h23v-24ZM198 163h-24v23h24v-23Z",fill:"#A1A1B5"})),y||(y=l.createElement("path",{d:"M174 163h-23v23h23v-23Z",fill:"#141446"})),k||(k=l.createElement("path",{d:"M151 163h-23v23h23v-23Z",fill:"#43436B"})),w||(w=l.createElement("path",{d:"M221 140h-23v23h23v-23Z",fill:"#D5D5E2"})),E||(E=l.createElement("path",{d:"M198 140h-24v23h24v-23Z",fill:"#141446"})),x||(x=l.createElement("path",{d:"M174 140h-23v23h23v-23ZM221 116h-23v24h23v-24Z",fill:"#A1A1B5"})),O||(O=l.createElement("path",{d:"M198 116h-24v24h24v-24Z",fill:"#43436B"})),N||(N=l.createElement("path",{d:"M221 93h-23v23h23V93Z",fill:"#D5D5E2"})),T||(T=l.createElement("path",{d:"M198 93h-24v23h24V93Z",fill:"#141446"})),Z||(Z=l.createElement("path",{d:"M174 93h-23v23h23V93ZM198 70h-24v23h24V70Z",fill:"#A1A1B5"})),j||(j=l.createElement("path",{d:"M174 70h-23v23h23V70Z",fill:"#141446"})),S||(S=l.createElement("path",{d:"M151 70h-23v23h23V70Z",fill:"#43436B"})),C||(C=l.createElement("path",{d:"M174 46h-23v24h23V46Z",fill:"#D5D5E2"})),M||(M=l.createElement("path",{d:"M151 46h-23v24h23V46Z",fill:"#A1A1B5"})))},G=["components"],B={slug:"/",description:"JavaScript SVG parser and renderer on Canvas"},q="canvg",R={unversionedId:"index",id:"index",title:"canvg",description:"JavaScript SVG parser and renderer on Canvas",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/canvg/canvg/edit/master/website/docs/index.mdx",tags:[],version:"current",frontMatter:{slug:"/",description:"JavaScript SVG parser and renderer on Canvas"},sidebar:"docsSidebar",next:{title:"Migration to v4",permalink:"/docs/migration-to-v4"}},J=[{value:"Quickstart",id:"quickstart",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Getting Help",id:"getting-help",children:[],level:2}],L={toc:J};function _(e){var t=e.components,n=(0,r.Z)(e,G);return(0,i.kt)("wrapper",(0,a.Z)({},L,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"canvg"},"canvg"),(0,i.kt)(A,{className:"logo",width:150,height:150,mdxType:"Logo"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://npmjs.com/package/canvg"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/canvg.svg",alt:"NPM version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://libraries.io/npm/canvg/tree"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/librariesio/release/npm/canvg",alt:"Dependencies status"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/canvg/canvg/actions"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/canvg/canvg/CI.svg",alt:"Build status"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://app.codecov.io/gh/canvg/canvg"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/codecov/c/github/canvg/canvg.svg",alt:"Coverage status"}))),(0,i.kt)("p",null,"JavaScript SVG parser and renderer on Canvas. It takes the URL to the SVG file or the text of the SVG file, parses it in JavaScript and renders the result on Canvas. It also can be used to rasterize SVG images."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"Install this library using your favorite package manager:"),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(D,{value:"pnpm",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add canvg\n"))),(0,i.kt)(D,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add canvg\n"))),(0,i.kt)(D,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save canvg\n")))),(0,i.kt)("p",null,"Then, just import ",(0,i.kt)("inlineCode",{parentName:"p"},"Canvg")," and use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Canvg } from 'canvg';\n\nlet v = null;\n\nwindow.onload = async () => {\n  const canvas = document.querySelector('canvas');\n  const ctx = canvas.getContext('2d');\n\n  v = await Canvg.from(ctx, './svgs/1.svg');\n\n  // Start SVG rendering with animations and mouse handling.\n  v.start();\n};\n\nwindow.onbeforeunload = () => {\n  v.stop();\n};\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cube.dev/?ref=eco-canvg"},(0,i.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/986756/154330861-d79ab8ec-aacb-4af8-9e17-1b28f1eccb01.svg",alt:"supported by Cube"}))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"/examples"},"live examples"),"."),(0,i.kt)("h2",{id:"getting-help"},"Getting Help"),(0,i.kt)("p",null,"Need help? Ask your question on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.cube.dev/?ref=eco-canvg"},"Slack")," or ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/canvg"},"Stack Overflow"),"."),(0,i.kt)("p",null,"If you've encountered an issue, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/canvg/canvg/issues"},"file it on GitHub"),"."))}_.isMDXComponent=!0}}]);