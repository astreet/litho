"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[799],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){return function(t){var n=d(t.components);return o.createElement(e,a({},t,{components:n}))}},d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,y=p["".concat(i,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7772:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(83117),r=n(67294),a=n(23746),i=n(7694),l=n(13618),s="0.44.0",c="0.45.0-SNAPSHOT",p="0.10.4",d="0.142.0",u=n(86668);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,d).trim(),m=(0,u.L)().isDarkTheme?l.Z:i.Z;return r.createElement(a.ZP,(0,o.Z)({},a.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,i=e.getTokenProps;return r.createElement("pre",{className:t,style:n},o.map((function(e,t){return r.createElement("div",a({line:e,key:t}),e.map((function(e,t){return r.createElement("span",i({token:e,key:t}))})))})))}))}},12824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=n(7772),l=n(86341),s=["components"],c={id:"use-live-data",title:"useLiveData",description:"How does Litho support LiveData",keywords:["LiveData","useLiveData"]},p=void 0,d={unversionedId:"mainconcepts/use-live-data",id:"mainconcepts/use-live-data",title:"useLiveData",description:"How does Litho support LiveData",source:"@site/../docs/mainconcepts/use-live-data.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/use-live-data",permalink:"/docs/mainconcepts/use-live-data",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/use-live-data.mdx",tags:[],version:"current",frontMatter:{id:"use-live-data",title:"useLiveData",description:"How does Litho support LiveData",keywords:["LiveData","useLiveData"]},sidebar:"mainSidebar",previous:{title:"useErrorBoundary",permalink:"/docs/mainconcepts/use-error-boundary"},next:{title:"Layout System with Flexbox",permalink:"/docs/mainconcepts/flexbox-yoga"}},u={},m=[{value:"Integrating Litho with the <code>LifecycleOwner</code>",id:"integrating-litho-with-the-lifecycleowner",level:3},{value:"Dependencies",id:"dependencies",level:3}],y={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.mdx)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"useLiveData")," hook provides support to observe ",(0,a.mdx)("inlineCode",{parentName:"p"},"LiveData")," updates inside a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Component"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/observability/UseLiveDataComponent.kt  start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/observability/UseLiveDataComponent.kt","":!0,start:"start_example",end:"end_example"},'internal class UseLiveDataComponent(private val viewModel: FakeViewModel = FakeViewModel()) :\n    KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    val viewState = useLiveData(viewModel.liveData) ?: error("should not be null")\n\n    return Column {\n      child(HeaderComponent(viewState.name))\n      child(\n          CounterComponent(\n              counter = viewState.counter,\n              onCounterClick = { viewModel.onIncrementCounterClick() }))\n    }\n  }\n}\n')),(0,a.mdx)("p",null,"This hook will start observing the given ",(0,a.mdx)("inlineCode",{parentName:"p"},"LiveData")," and return its latest value every time it changes. The values observed are internally represented as Litho's ",(0,a.mdx)("inlineCode",{parentName:"p"},"State"),", hence it will trigger a  new layout calculation for any ",(0,a.mdx)("inlineCode",{parentName:"p"},"LiveData")," value change."),(0,a.mdx)("h3",{id:"integrating-litho-with-the-lifecycleowner"},"Integrating Litho with the ",(0,a.mdx)("inlineCode",{parentName:"h3"},"LifecycleOwner")),(0,a.mdx)("p",null,"A core principle for ",(0,a.mdx)("inlineCode",{parentName:"p"},"LiveData")," observation is the ",(0,a.mdx)("inlineCode",{parentName:"p"},"LifecycleOwner"),", which defines at which points the Observer can listen to value changes. In order to use ",(0,a.mdx)("inlineCode",{parentName:"p"},"useLiveData"),", you ",(0,a.mdx)("strong",{parentName:"p"},"must")," create your ",(0,a.mdx)("inlineCode",{parentName:"p"},"LithoView")," with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"AOSPLithoLifecycleProvider")," and  pass the appropriate ",(0,a.mdx)("inlineCode",{parentName:"p"},"LifecycleOwner")," to it. This can be done as in the sample below:\n:::"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/LithoViewCreationFragment.kt  start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/LithoViewCreationFragment.kt","":!0,start:"start_example",end:"end_example"},"class LithoViewCreationFragment : Fragment() {\n\n  override fun onCreateView(\n      inflater: LayoutInflater,\n      container: ViewGroup?,\n      savedInstanceState: Bundle?\n  ): View? {\n    return LithoView.create(requireContext(), SampleComponent(), AOSPLithoLifecycleProvider(this))\n  }\n}\n")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"LiveData")," observation will respect the ",(0,a.mdx)("inlineCode",{parentName:"p"},"LifecycleOwner")," lifecycle. Therefore, it will not  consume updates if the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Lifecycle.State")," is not at least ",(0,a.mdx)("inlineCode",{parentName:"p"},"Lifecycle.State.STARTED"),", and it will\nautomatically stop being observed if the given ",(0,a.mdx)("inlineCode",{parentName:"p"},"LifecycleOwner")," moves to ",(0,a.mdx)("inlineCode",{parentName:"p"},"Lifecycle.State.DESTROYED"),"."),(0,a.mdx)("h3",{id:"dependencies"},"Dependencies"),(0,a.mdx)("p",null,"In gradle, you should add the following dependency to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.mdx)(i.Z,{language:"groovy",code:"\ndependencies {\n  implementation 'com.facebook.litho:litho-live-data:{{site.lithoVersion}}'\n}\n",mdxType:"VersionedCodeBlock"}),(0,a.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"In buck, you should add the following dependency to your BUCK file:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-buck"},"//fbandroid/libraries/components/litho-live-data/src/main/kotlin/com/facebook/litho:live-live-data\n"))))}v.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>y,lG:()=>i});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),i={Prism:o.Z,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},u=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?u(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?s({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=s({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?s({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),l(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,l=[],s=[l];i>-1;){for(;(a=o[i]++)<r[i];){var u=void 0,m=t[i],y=n[i][a];if("string"==typeof y?(m=i>0?m:["plain"],u=y):(m=d(m,y.type),y.alias&&(m=d(m,y.alias)),u=y.content),"string"==typeof u){var v=u.split(c),f=v.length;l.push({types:m,content:v[0]});for(var h=1;h<f;h++)p(l),s.push(l=[]),l.push({types:m,content:v[h]})}else i++,t.push(m),n.push(u),o.push(0),r.push(u.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return p(l),s}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);