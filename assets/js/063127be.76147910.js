"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8356],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){return function(t){var n=d(t.components);return a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(i,".").concat(u)]||p[u]||h[u]||o;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={id:"saving-state",title:"Saving state on rotation"},c=void 0,l={unversionedId:"saving-state",id:"saving-state",title:"Saving state on rotation",description:"Saving state on app configuration changes",source:"@site/../docs/saving-state.md",sourceDirName:".",slug:"/saving-state",permalink:"/docs/saving-state",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/saving-state.md",tags:[],version:"current",frontMatter:{id:"saving-state",title:"Saving state on rotation"}},p={},d=[{value:"Saving state on app configuration changes",id:"saving-state-on-app-configuration-changes",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"saving-state-on-app-configuration-changes"},"Saving state on app configuration changes"),(0,o.mdx)("p",null,"When the app goes through configuration changes, such as rotation, which cause the Activity to be torn down and recreated, the LithoView that the Activity was displaying will also be destroyed, along with the ComponentTree it was hosting.\nThis means that all the Component ",(0,o.mdx)("a",{parentName:"p",href:"/docs/codegen/state-for-specs"},"state")," values maintained by the ComponentTree will be reset when the Activity is recreated, unless we do explicitly save and restore these values."),(0,o.mdx)("p",null,"A full example on how to save and restore the state values when the Activity is destroyed can be found ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/codelabs/save-state-rotation"},"here"),"."),(0,o.mdx)("p",null,"The ComponentTree holds a StateHandler with the most recently updated Component state values.\nYou can obtain a copy of that state handler by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"acquireStateHandler")," on a ComponentTree instance.\nWhen the Activity is recreated and a new ComponentTree is created and associated with the LithoView, all you need to do to restore the previously known state values is to pass this StateHandler instance which we saved before the Activity was destroyed when the ComponentTree is created."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"ComponentTree.create(\n        componentContext,\n        RootComponent.create(componentContext).build())\n          .stateHandler(mStateHandlerViewModel.getStateHandler())\n          .build();\n")),(0,o.mdx)("admonition",{type:"warning"},(0,o.mdx)("p",{parentName:"admonition"},"It is not safe to do this if any of the components in your hierarchy were holding a reference to the Activity/Context or a View through a state value, because a configuration change will destroy the Activity and Views.")))}h.isMDXComponent=!0}}]);