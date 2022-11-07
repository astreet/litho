"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3793],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>s});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=o.createContext({}),s=function(e){return function(n){var t=m(n.components);return o.createElement(e,a({},n,{components:t}))}},m=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=m(t),p=i,h=s["".concat(l,".").concat(p)]||s[p]||u[p]||a;return t?o.createElement(h,r(r({ref:n},d),{},{components:t})):o.createElement(h,r({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=h;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<a;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},85800:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var o=t(83117),i=t(80102),a=(t(67294),t(3905)),l=["components"],r={id:"lazycollections",title:"Introduction"},c=void 0,d={unversionedId:"kotlin/lazycollections/lazycollections",id:"kotlin/lazycollections/lazycollections",title:"Introduction",description:"Lazy Collections are a Kotlin-only API. Within Litho, lists are implemented using the Lazy Collection API.",source:"@site/../docs/kotlin/lazycollections/lazycollections.mdx",sourceDirName:"kotlin/lazycollections",slug:"/kotlin/lazycollections/",permalink:"/docs/kotlin/lazycollections/",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/lazycollections/lazycollections.mdx",tags:[],version:"current",frontMatter:{id:"lazycollections",title:"Introduction"},sidebar:"mainSidebar",previous:{title:"Keys and Component Identity",permalink:"/docs/mainconcepts/coordinate-state-actions/keys-and-identity"},next:{title:"Layout and Styling",permalink:"/docs/kotlin/lazycollections/lazycollections-layout"}},s={},m=[{value:"Lazy Collection basics",id:"lazy-collection-basics",level:2},{value:"Adding children",id:"adding-children",level:3},{value:"Why not just use <code>Column</code> or <code>Row</code>?",id:"why-not-just-use-column-or-row",level:2},{value:"Documentation content",id:"documentation-content",level:2}],p={toc:m};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"Lazy Collections are a Kotlin-only API. Within Litho, lists are implemented using the Lazy Collection API."),(0,a.mdx)("p",{parentName:"admonition"},"For Java use, or docs on the older Java codegen-based Sections API, see ",(0,a.mdx)("a",{parentName:"p",href:"/docs/sections/start"},"Sections Basics")," in the 'Codegen APIs' section.")),(0,a.mdx)("h2",{id:"lazy-collection-basics"},"Lazy Collection basics"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Lazy Collections")," are components that can efficiently render a scrollable list of child components using Android's ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerView"),". The 'lazy' in the name refers to the fact that not all children need to be immediately resolved to put content on the screen. Instead, a Lazy Collection maintains a window of resolved children, which is dynamically updated while scrolling."),(0,a.mdx)("p",null,"Lazy Collections are available as follows:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/master/litho-widget-kotlin/src/main/kotlin/com/facebook/litho/widget/collection/LazyList.kt"},"LazyList")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/master/litho-widget-kotlin/src/main/kotlin/com/facebook/litho/widget/collection/LazyGrid.kt"},"LazyGrid")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/master/litho-widget-kotlin/src/main/kotlin/com/facebook/litho/widget/collection/LazyStaggeredGrid.kt"},"LazyStaggeredGrid"))),(0,a.mdx)("p",null,"The following code creates a ",(0,a.mdx)("inlineCode",{parentName:"p"},"LazyList")," and adds a child ",(0,a.mdx)("inlineCode",{parentName:"p"},"Text")," component for each list item."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/FriendsCollectionKComponent.kt start=start_lazy_list_example end=end_lazy_list_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/FriendsCollectionKComponent.kt",start:"start_lazy_list_example",end:"end_lazy_list_example"},"class FriendLazyList(private val friends: List<Person>) : KComponent() {\n  override fun ComponentScope.render(): Component = LazyList {\n    children(friends, id = { it.id }) { Text(it.name) }\n  }\n}\n")),(0,a.mdx)("h3",{id:"adding-children"},"Adding children"),(0,a.mdx)("p",null,"An important difference from adding children in a normal container like ",(0,a.mdx)("inlineCode",{parentName:"p"},"Column")," is that each child needs a consistent and unique id. This id is used to detect moves, insertions, deletions, and updates across render passes."),(0,a.mdx)("p",null,"There are two primary ways to add children to a Lazy Collection:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"child")," - takes a component and an ",(0,a.mdx)("em",{parentName:"li"},"optional")," ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," parameter - if ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," is null or not provided, an id will be generated based on the sequence and type of this child in the list (i.e. 'third Text'). This auto-generated id may be fine, but an explicit one is safer!"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"children")," - takes a lambda mapping a list of data to a list of components and a ",(0,a.mdx)("em",{parentName:"li"},"mandataory")," ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," function that maps data to an id for that component.")),(0,a.mdx)("p",null,"For more information on how to make sure updates are applied to your Lazy List correctly and efficiently, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-working-with-updates"},"Working with Updates docs"),"."),(0,a.mdx)("h2",{id:"why-not-just-use-column-or-row"},"Why not just use ",(0,a.mdx)("inlineCode",{parentName:"h2"},"Column")," or ",(0,a.mdx)("inlineCode",{parentName:"h2"},"Row"),"?"),(0,a.mdx)("p",null,"A simple, but non-scalable approach to render a list of components is to use a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Column")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"Row")," container:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/FriendsCollectionKComponent.kt start=start_column_example end=end_column_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/FriendsCollectionKComponent.kt",start:"start_column_example",end:"end_column_example"},"class FriendsColumn(private val friends: List<Person>) : KComponent() {\n  override fun ComponentScope.render(): Component = VerticalScroll {\n    Column { friends.forEach { friend -> child(Text(friend.name)) } }\n  }\n}\n")),(0,a.mdx)("p",null,"The above component creates a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Column")," and adds a child ",(0,a.mdx)("inlineCode",{parentName:"p"},"Text")," component for each friend: it's made scrollable by wrapping it in a ",(0,a.mdx)("inlineCode",{parentName:"p"},"VerticalScroll"),"."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"This approach is inefficient and inflexible when dealing with many items.")),(0,a.mdx)("p",null,"Consider a user with 100 friends. During the resolution of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Column"),", the associated 100 ",(0,a.mdx)("inlineCode",{parentName:"p"},"Text")," components would also be resolved despite only a few being visible on the screen initially. Additionally, if one of the names was updated or changed position, all 100 ",(0,a.mdx)("inlineCode",{parentName:"p"},"Text")," components would be resolved again."),(0,a.mdx)("p",null,"A more efficient and flexible approach is to use Lazy Collections."),(0,a.mdx)("h2",{id:"documentation-content"},"Documentation content"),(0,a.mdx)("p",null,"The documentation for lists includes the following pages:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/kotlin/lazycollections/lazycollections-layout"},"Layout and Styling")," - how to customize the rendering of a list."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/kotlin/lazycollections/lazycollections-interactions"},"Interactions")," - how to interact with and listen to events on a list."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/kotlin/lazycollections/lazycollections-working-with-updates"},"Working with Updates")," - how to ensure a list handles updates efficiently."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/kotlin/lazycollections/lazycollections-sections-migration"},"Sections Migration Guide")," - guidance for migrating an existing list rendered with Sections to Lazy Collections.")))}u.isMDXComponent=!0}}]);