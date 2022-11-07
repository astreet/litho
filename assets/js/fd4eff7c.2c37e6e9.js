"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6591],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),m=function(e){return function(n){var t=s(n.components);return a.createElement(e,i({},n,{components:t}))}},s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,h=m["".concat(r,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function x(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},84787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(83117),o=t(80102),i=(t(67294),t(3905)),r=["components"],l={id:"mount-specs",title:"Mount Specs"},d=void 0,p={unversionedId:"codegen/mount-specs",id:"codegen/mount-specs",title:"Mount Specs",description:"A mount spec defines a component that can render views or drawables; it should only be created when there is a need to integrate views/drawables with Litho.",source:"@site/../docs/codegen/mount-specs.md",sourceDirName:"codegen",slug:"/codegen/mount-specs",permalink:"/docs/codegen/mount-specs",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/codegen/mount-specs.md",tags:[],version:"current",frontMatter:{id:"mount-specs",title:"Mount Specs"},sidebar:"mainSidebar",previous:{title:"Layout Specs",permalink:"/docs/codegen/layout-specs"},next:{title:"Sections Basics",permalink:"/docs/sections/start"}},m={},s=[{value:"Mount spec Component lifecycle",id:"mount-spec-component-lifecycle",level:2},{value:"Mounting",id:"mounting",level:2},{value:"Inter-stage inputs and outputs",id:"inter-stage-inputs-and-outputs",level:2},{value:"Measurement",id:"measurement",level:2},{value:"ShouldUpdate",id:"shouldupdate",level:2},{value:"Pre-allocation",id:"pre-allocation",level:2}],u={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("admonition",{type:"info"},(0,i.mdx)("p",{parentName:"admonition"},"A ",(0,i.mdx)("em",{parentName:"p"},"mount spec")," defines a component that can render views or drawables; it should only be created when there is a need to integrate views/drawables with Litho.")),(0,i.mdx)("p",null,"Here, ",(0,i.mdx)("em",{parentName:"p"},"Mount")," refers to the operation performed by all components in a layout tree to extract their rendered state (a 'View' or a 'Drawable') to be displayed."),(0,i.mdx)("p",null,"Mount spec classes should be annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@MountSpec")," and implement at least an ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnCreateMountContent")," method. The other methods listed below are optional."),(0,i.mdx)("h2",{id:"mount-spec-component-lifecycle"},"Mount spec Component lifecycle"),(0,i.mdx)("p",null,"The following abbreviations are used in the lifecycle"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"BG")," - occurs on a background (BG) thread when possible. Do not modify the view hierarchy."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"UI")," - can occur on a UI thread."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"PC")," - performance critical; it's recommended to put in as little work as possible, use ",(0,i.mdx)("inlineCode",{parentName:"li"},"BG")," methods instead.")),(0,i.mdx)("p",null,"The lifecycle of mount spec components is as follows:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnPrepare")," once, before the layout calculation ","[BG/UI]","."),(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnMeasure")," during layout calculation ","[optional]",". This will ",(0,i.mdx)("strong",{parentName:"li"},"not")," be called if Yoga has already determined the component's bounds (for example, if a static width/height was set on the component) ","[BG/UI]","."),(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnBoundsDefined")," once, after layout calculation. This will be called whether or not ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnMeasure")," was called ","[BG/UI]","."),(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnCreateMountContent")," before the component is attached to a hosting view. This content may be reused for other instances of this component. ",(0,i.mdx)("strong",{parentName:"li"},"It must not return null")," ","[UI]","."),(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnMount")," before the component is attached to a hosting view. This will happen when the component is about to become visible when incremental mount is enabled (it is enabled by default) ","[UI/PC]","."),(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnBind")," after the component is attached to a hosting view ","[UI/PC]","."),(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnUnbind")," before the component is detached from a hosting view ","[UI/PC]","."),(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnUnmount")," optionally after the component is detached from a hosting view. See incremental mount notes on ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnMount"),": they apply in reverse here ","[UI/PC]",".")),(0,i.mdx)("h2",{id:"mounting"},"Mounting"),(0,i.mdx)("p",null,"The following code snippet starts with a simple ",(0,i.mdx)("inlineCode",{parentName:"p"},"ColorComponent")," that takes a color name as a prop and mounts its respective ",(0,i.mdx)("inlineCode",{parentName:"p"},"ColorDrawable"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@MountSpec\npublic class ColorComponentSpec {\n\n  @OnCreateMountContent\n  static ColorDrawable onCreateMountContent(Context context) {\n    return new ColorDrawable();\n  }\n\n  @OnMount\n  static void onMount(\n      ComponentContext c,\n      ColorDrawable colorDrawable,\n      @Prop String colorName) {\n    colorDrawable.setColor(Color.parseColor(colorName));\n  }\n}\n")),(0,i.mdx)("p",null,"Within the above code snippet:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The mount operation has an API very similar to Android's ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.android.com/reference/android/support/v7/widget/RecyclerView.Adapter.html"},"RecyclerView Adapters"),". It has a ",(0,i.mdx)("inlineCode",{parentName:"li"},"onCreateMountContent")," method to create and initialize the ",(0,i.mdx)("inlineCode",{parentName:"li"},"View"),"/",(0,i.mdx)("inlineCode",{parentName:"li"},"Drawable")," content if the recycling pool is empty, and an ",(0,i.mdx)("inlineCode",{parentName:"li"},"onMount")," method to update the recycled content with the current information."),(0,i.mdx)("li",{parentName:"ul"},"The return type from ",(0,i.mdx)("inlineCode",{parentName:"li"},"onCreateMountContent")," should always match the type of the second argument of ",(0,i.mdx)("inlineCode",{parentName:"li"},"onMount"),". They are required to be a ",(0,i.mdx)("inlineCode",{parentName:"li"},"View")," or a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Drawable")," subclass. This is validated by the annotation processor at build time."),(0,i.mdx)("li",{parentName:"ul"},"Mounting always happens in the main thread as it might have to deal with Android Views (which are bound to the main thread)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onCreateMountContent")," cannot take a ",(0,i.mdx)("inlineCode",{parentName:"li"},"@Prop")," or any other annotated parameter."),(0,i.mdx)("li",{parentName:"ul"},"Given that the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnMount")," method always runs in the UI thread, expensive operations should not be performed in it.")),(0,i.mdx)("h2",{id:"inter-stage-inputs-and-outputs"},"Inter-stage inputs and outputs"),(0,i.mdx)("p",null,"Heavy operations can be moved off the UI thread by performing them in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnPrepare")," method, which runs just once before the layout calculation is performed and can be executed in a background thread."),(0,i.mdx)("p",null,"To perform the color name parsing off the UI thread in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ColorComponent")," above, there needs to be a way to pass values generated in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnPrepare")," method to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnMount")," implementation: Litho provides a way with 'inter-stage inputs and outputs'."),(0,i.mdx)("p",null,"The following snippet uses a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ColorComponent")," with the described ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnPrepare")," method:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@MountSpec\npublic class ColorComponentSpec {\n\n  @OnPrepare\n  static void onPrepare(\n      ComponentContext c,\n      @Prop String colorName,\n      Output<Integer> color) {\n    color.set(Color.parseColor(colorName));\n  }\n\n  @OnCreateMountContent\n  static ColorDrawable onCreateMountContent(Context context) {\n    return new ColorDrawable();\n  }\n\n  @OnMount\n  static void onMount(\n      ComponentContext c,\n      ColorDrawable colorDrawable,\n      @FromPrepare int color) {\n    colorDrawable.setColor(color);\n  }\n}\n")),(0,i.mdx)("p",null,"Using ",(0,i.mdx)("inlineCode",{parentName:"p"},"Output<?>")," in any of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@MountSpec")," methods automatically creates an input for the following stages. In this case, an ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnPrepare")," output creates an input for ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnMount"),"."),(0,i.mdx)("p",null,"The annotation processor ensures inter-stage invariants are respected at build time. For example, outputs from ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnMeasure")," cannot be used in ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnPrepare")," because ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnPrepare")," always runs before ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnMeasure"),"."),(0,i.mdx)("h2",{id:"measurement"},"Measurement"),(0,i.mdx)("p",null,"Whenever there is a need to define how a component should be measured during the layout calculation, implement an ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnMeasure")," method."),(0,i.mdx)("p",null,"The following snippet assigns ",(0,i.mdx)("inlineCode",{parentName:"p"},"ColorComponent")," a default width and enforces a certain aspect ratio when its height is undefined."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@OnMeasure\nstatic void onMeasure(\n    ComponentContext c,\n    ComponentLayout layout,\n    int widthSpec,\n    int heightSpec,\n    Size size) {\n\n  // If width is undefined, set default size.\n  if (SizeSpec.getMode(widthSpec) == SizeSpec.UNSPECIFIED) {\n    size.width = 40;\n  } else {\n    size.width = SizeSpec.getSize(widthSpec);\n  }\n\n  // If height is undefined, use 1.5 aspect ratio.\n  if (SizeSpec.getMode(heightSpec) == SizeSpec.UNSPECIFIED) {\n    size.height = size.width * 1.5;\n  } else {\n    size.height = SizeSpec.getSize(heightSpec);\n  }\n}\n")),(0,i.mdx)("p",null,"Component props can be accessed with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@Prop")," annotation as usual in ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnMeasure"),". SizeSpec's API is analogous to Android's ",(0,i.mdx)("a",{parentName:"p",href:"http://developer.android.com/reference/android/view/View.MeasureSpec.html"},"MeasureSpec"),"."),(0,i.mdx)("p",null,"Just like ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnPrepare"),", the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnMeasure")," method can also generate inter-stage outputs (accessible via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@FromMeasure")," argument annotation) and may be performed in a background thread."),(0,i.mdx)("h2",{id:"shouldupdate"},"ShouldUpdate"),(0,i.mdx)("p",null,"A MountSpec can define a method annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@ShouldUpdate")," to avoid remeasuring and remounting upon updates."),(0,i.mdx)("p",null,"Invocations of ",(0,i.mdx)("inlineCode",{parentName:"p"},"@ShouldUpdate")," are dependent on whether a Component is a ",(0,i.mdx)("strong",{parentName:"p"},"pure render function"),". A Component is a pure render function if the result of the rendering only depends on its props and states. This means that the Component shouldn't be accessing any mutable global variable during ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnMount"),"."),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},"@MountSpec")," can be defined as pure render by using the pureRender parameter of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@MountSpec")," annotation."),(0,i.mdx)("p",null,"Only pure render components can assume that when props do not change remounting won't be needed. A ",(0,i.mdx)("inlineCode",{parentName:"p"},"@ShouldUpdate")," function can be defined as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@ShouldUpdate(onMount = true)\nstatic boolean shouldUpdate(@Prop Diff<String> someStringProp) {\n  return !someStringProp.getPrevious().equals(someStringProp.getNext());\n}\n")),(0,i.mdx)("p",null,"The parameters taken from ",(0,i.mdx)("inlineCode",{parentName:"p"},"shouldUpdate")," are ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Diff.html"},"Diffs")," of Props or State. A Diff is an object containing the value of a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@Prop")," or a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@State")," in the old component's hierarchy and the value of the same ",(0,i.mdx)("inlineCode",{parentName:"p"},"@Prop")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"@State")," in the new component's hierarchy."),(0,i.mdx)("p",null,"Within the above snippet:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The component defines ",(0,i.mdx)("strong",{parentName:"li"},"someStringProp")," as a String ",(0,i.mdx)("inlineCode",{parentName:"li"},"@Prop"),". ",(0,i.mdx)("inlineCode",{parentName:"li"},"shouldUpdate")," receives a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Diff<String>")," to be able to compare the old and new value of this ",(0,i.mdx)("inlineCode",{parentName:"li"},"@Prop"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"shouldUpdate")," has to take into consideration any prop and any states that are used at ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnMount")," time. It can safely ignore props and states that are only used at ",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnBind"),"/",(0,i.mdx)("inlineCode",{parentName:"li"},"@OnUnbind")," time as these two methods will be executed regardless."),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"onMount")," attribute on the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@ShouldUpdate")," annotation controls whether this ",(0,i.mdx)("inlineCode",{parentName:"li"},"shouldUpdate")," check can happen at mount time. By default, Litho will try to do this reconciliation at layout time, but if layout diffing is turned off it might be useful to set onMount to true in order to execute this check at mount time instead. The ",(0,i.mdx)("inlineCode",{parentName:"li"},"onMount")," attribute is set to false by default as the equality check might be heavy itself and make mount performances worse."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"ShouldUpdate")," annotated methods are currently only supported in ",(0,i.mdx)("inlineCode",{parentName:"li"},"@MountSpec"),". There are plans to expand the support to complex layouts in the future but at the moment a ",(0,i.mdx)("inlineCode",{parentName:"li"},"@ShouldUpdate")," annotated method in a ",(0,i.mdx)("inlineCode",{parentName:"li"},"@LayoutSpec")," would have no effect.")),(0,i.mdx)("h2",{id:"pre-allocation"},"Pre-allocation"),(0,i.mdx)("p",null,"When a MountSpec component is being mounted, its View/Drawable content needs to be either initialized or reused from the recycling pool. If the pool is empty, a new instance will be created at that time, which might keep the UI thread too busy and drop one or more frames. To mitigate that, Litho can pre-allocate a few instances and put in the recycling pool:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@MountSpec(poolSize = 3, canPreallocate = true)\npublic class ColorComponentSpec {\n  ...\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"canPreallocate")," enables pre-allocation for this MountSpec and ",(0,i.mdx)("inlineCode",{parentName:"p"},"poolSize")," defines the number of instances to pre-allocate. For this ",(0,i.mdx)("inlineCode",{parentName:"p"},"ColorComponent")," example, three instances of ",(0,i.mdx)("inlineCode",{parentName:"p"},"ColorDrawable")," will be created and put in the recycling pool. This option is recommended for MountSpec components that inflate a complex View."))}c.isMDXComponent=!0}}]);