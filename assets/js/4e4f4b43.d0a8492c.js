"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9519],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>s});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){return function(t){var n=c(t.components);return o.createElement(e,a({},t,{components:n}))}},c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,h=s["".concat(r,".").concat(d)]||s[d]||u[d]||a;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=n(83117),i=n(80102),a=(n(67294),n(3905)),r=["components"],l={id:"first-components",title:"Components and Props"},m=void 0,p={unversionedId:"tutorial/first-components",id:"tutorial/first-components",title:"Components and Props",description:"In this section of the tutorial, you'll learn the basic Litho building blocks then create your first component that uses props.",source:"@site/../docs/tutorial/first-components.md",sourceDirName:"tutorial",slug:"/tutorial/first-components",permalink:"/docs/tutorial/first-components",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial/first-components.md",tags:[],version:"current",frontMatter:{id:"first-components",title:"Components and Props"},sidebar:"mainSidebar",previous:{title:"Setting up the Project",permalink:"/docs/tutorial/project-setup"},next:{title:"Introducing Layout",permalink:"/docs/tutorial/introducing-layout"}},s={},c=[{value:"Basic Litho building blocks",id:"basic-litho-building-blocks",level:2},{value:"Key Points in MyActivity.kt",id:"key-points-in-myactivitykt",level:3},{value:"Create your first component",id:"create-your-first-component",level:2},{value:"Key Points in HelloComponent.kt",id:"key-points-in-hellocomponentkt",level:3},{value:"Use you first component",id:"use-you-first-component",level:3},{value:"What next?",id:"what-next",level:2}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.mdx)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"In this section of the tutorial, you'll learn the basic Litho building blocks then create your first component that uses ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/props"},"props"),"."),(0,a.mdx)("h2",{id:"basic-litho-building-blocks"},"Basic Litho building blocks"),(0,a.mdx)("admonition",{title:"Basic Terminology",type:"info"},(0,a.mdx)("ul",{parentName:"admonition"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Component")," - all user-interactable elements in the UI (such as buttons, checkboxes, scrollbars, lists, menus, and text fields) that you see in the application are components. To be used, a component must be placed in a container.  For more information, see the ",(0,a.mdx)("a",{parentName:"li",href:"/docs/mainconcepts/components-basics"},"Components")," page in the 'Main Concepts' section."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Container component")," - arranges groups of components in a ",(0,a.mdx)("a",{parentName:"li",href:"/docs/tutorial/introducing-layout"},"layout"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Prop")," - an item of data that cannot be changed (making it 'immutable') during the associated component's lifecycle. For more information, see the ",(0,a.mdx)("a",{parentName:"li",href:"/docs/mainconcepts/props"},"Types of Props")," page in the 'Main Concepts' section."))),(0,a.mdx)("p",null,'To display the classic "Hello, World!" text on the screen with Litho, you need to integrate the Litho component hierarchy into your View hierarchy.\nTo illustrate this, the "Hello, World" code (',(0,a.mdx)("inlineCode",{parentName:"p"},"MyActivity.kt"),"), from the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/tutorial/project-setup"},"Setting up the Project")," section of the tutorial, is shown below:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/MyActivity.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/MyActivity.kt",start:"start_example",end:"end_example"},'import android.os.Bundle\nimport androidx.appcompat.app.AppCompatActivity\nimport com.facebook.litho.Component\nimport com.facebook.litho.ComponentScope\nimport com.facebook.litho.KComponent\nimport com.facebook.litho.LithoView\nimport com.facebook.litho.dp\nimport com.facebook.litho.kotlin.widget.Text\n\nclass MyActivity : AppCompatActivity() {\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n\n    val lithoView = LithoView.create(this /* context */, MyComponent())\n    setContentView(lithoView)\n  }\n}\n\nclass MyComponent() : KComponent() {\n  override fun ComponentScope.render(): Component = Text(text = "Hello, World!", textSize = 50.dp)\n}\n')),(0,a.mdx)("h3",{id:"key-points-in-myactivitykt"},"Key Points in MyActivity.kt"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"LithoView")," - a hierarchy of Litho components is rendered using a LithoView."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"val")," - holds an immutable object that cannot be changed during the lifecycle of the component."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Text(...)")," - the 'Text' component (this is how you create an instance of a component (both built-in and those you define yourself)."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Text(...)")," - assigns values to the props ",(0,a.mdx)("inlineCode",{parentName:"li"},"text")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"textsize"),".")),(0,a.mdx)("h2",{id:"create-your-first-component"},"Create your first component"),(0,a.mdx)("p",null,"Previously, you used a built-in ",(0,a.mdx)("inlineCode",{parentName:"p"},"Text")," component. Now, you'll define your own using the following 'HelloComponent.kt' code. As with the above, your 'first' component can also declare ",(0,a.mdx)("strong",{parentName:"p"},"props"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/HelloComponent.kt start=start_simple_example end=end_simple_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/HelloComponent.kt",start:"start_simple_example",end:"end_simple_example"},'class HelloComponent(private val name: String) : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    return Text(text = "Hello $name!")\n  }\n}\n')),(0,a.mdx)("h3",{id:"key-points-in-hellocomponentkt"},"Key Points in HelloComponent.kt"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"KComponent")," - a class needed to extend in order to create components."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"name")," - a ",(0,a.mdx)("inlineCode",{parentName:"li"},"String")," prop named ",(0,a.mdx)("inlineCode",{parentName:"li"},"name"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"render")," - function override that returns what your component should render."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Text(...)")," - returns an instance of the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Text")," component with its ",(0,a.mdx)("inlineCode",{parentName:"li"},"text")," prop set to the String \"Hello $name'.")),(0,a.mdx)("admonition",{type:"tip"},(0,a.mdx)("p",{parentName:"admonition"},"Lots of code autocompletion and class templates can be found in the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/devtools/android-studio-plugin"},"Litho Android Studio plugin"),"!")),(0,a.mdx)("h3",{id:"use-you-first-component"},"Use you first component"),(0,a.mdx)("p",null,'To use your component, just replace the Text component in the "Hello, World!" example with an instance of your ',(0,a.mdx)("inlineCode",{parentName:"p"},"HelloComponent"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentActivity.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentActivity.kt",start:"start_example",end:"end_example"},'setContentView(LithoView.create(this, HelloComponent(name = "Linda")))\n')),(0,a.mdx)("h2",{id:"what-next"},"What next?"),(0,a.mdx)("p",null,"The next section of the tutorial ",(0,a.mdx)("a",{parentName:"p",href:"/docs/tutorial/introducing-layout"},"Introducing Layout")," helps you become familiar with building layouts using Flexbox."),(0,a.mdx)("p",null,"For more information, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/components-basics"},"Components")," and ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/props"},"Props")," pages of the 'Main Concepts' section."))}u.isMDXComponent=!0}}]);