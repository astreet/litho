"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6381],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),m=function(e){return function(t){var n=c(t.components);return o.createElement(e,r({},t,{components:n}))}},c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,h=m["".concat(a,".").concat(p)]||m[p]||u[p]||r;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=n(83117),i=n(80102),r=(n(67294),n(3905)),a=["components"],l={id:"repo-structure",title:"Repository Structure"},s=void 0,d={unversionedId:"repo-structure",id:"repo-structure",title:"Repository Structure",description:"This is a quick breakdown of what is where in the repository.",source:"@site/../docs/repo-structure.md",sourceDirName:".",slug:"/repo-structure",permalink:"/docs/repo-structure",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/repo-structure.md",tags:[],version:"current",frontMatter:{id:"repo-structure",title:"Repository Structure"}},m={},c=[{value:"<code>/docs/</code>",id:"docs",level:3},{value:"<code>/lib/</code>",id:"lib",level:3},{value:"<code>/sample-barebones/</code>",id:"sample-barebones",level:3},{value:"<code>/sample-barebones-kotlin/</code>",id:"sample-barebones-kotlin",level:3},{value:"<code>/sample-codelab/</code>",id:"sample-codelab",level:3},{value:"<code>/sample/</code>",id:"sample",level:3},{value:"<code>/sample-kotlin/</code>",id:"sample-kotlin",level:3},{value:"<code>/litho-*/</code>",id:"litho-",level:3},{value:"<code>/LITHO_DEFS</code> and <code>/BUCK</code>",id:"litho_defs-and-buck",level:3}],p={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.mdx)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"This is a quick breakdown of what is where in the repository."),(0,r.mdx)("h3",{id:"docs"},(0,r.mdx)("inlineCode",{parentName:"h3"},"/docs/")),(0,r.mdx)("p",null,"This directory holds the Jekyll files for the GitHub pages you are now reading."),(0,r.mdx)("h3",{id:"lib"},(0,r.mdx)("inlineCode",{parentName:"h3"},"/lib/")),(0,r.mdx)("p",null,"A number of external libraries can be found in this sub-folder.  Roughly, they can be split into two categories"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Fetched libraries"),":  These libraries are hosted on jCenter.  The corresponding sub-folder of ",(0,r.mdx)("inlineCode",{parentName:"li"},"/lib/")," will only contain a ",(0,r.mdx)("inlineCode",{parentName:"li"},"BUCK")," file, with the command to fetch the library."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Bundled libraries"),":  These libraries are included in their completeness.  This is the ",(0,r.mdx)("a",{parentName:"li",href:"https://buckbuild.com/command/fetch"},"proper buck way of doing things"),".  However, they vastly increase the size of the repository and are thus only included when absolutely necessary.")),(0,r.mdx)("h3",{id:"sample-barebones"},(0,r.mdx)("inlineCode",{parentName:"h3"},"/sample-barebones/")),(0,r.mdx)("p",null,"The source for the finished product of the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/tutorial"},"barebones tutorial")," is found here.  If you change the tutorial, you must update the code here."),(0,r.mdx)("h3",{id:"sample-barebones-kotlin"},(0,r.mdx)("inlineCode",{parentName:"h3"},"/sample-barebones-kotlin/")),(0,r.mdx)("p",null,"This folder contains - you guess it! - a Kotlin version of the previous barebones sample to demonstrate how to use Litho and Kotlin together."),(0,r.mdx)("h3",{id:"sample-codelab"},(0,r.mdx)("inlineCode",{parentName:"h3"},"/sample-codelab/")),(0,r.mdx)("p",null,"The source for the codelab tutorial is found here. The codelab has 3 parts:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"/examples/"),": This has an Activity with a step-by-step introduction to the features of Litho. Each element points to a ComponentSpec which builds on the last and uses new features."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"/ (root)"),': This is a "Hello world" Activity, rendered using Components. This can be used in presentations or labs to learn Litho.'),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"/end/"),": This is an approximate end state for the lab built from the root.")),(0,r.mdx)("h3",{id:"sample"},(0,r.mdx)("inlineCode",{parentName:"h3"},"/sample/")),(0,r.mdx)("p",null,"Under this directory is found code for the Litho sample app.  This includes the playground, which you should use for all testing/bug reporting."),(0,r.mdx)("h3",{id:"sample-kotlin"},(0,r.mdx)("inlineCode",{parentName:"h3"},"/sample-kotlin/")),(0,r.mdx)("p",null,"This directory contains a Kotlin version of the previous sample project."),(0,r.mdx)("h3",{id:"litho-"},(0,r.mdx)("inlineCode",{parentName:"h3"},"/litho-*/")),(0,r.mdx)("p",null,"Litho is split into several sub-project so end users can pick and choose the\nparts of the framework they want to use. The available projects are as follows:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-annotations")," is a pure Java library containing the annotations necessary to use the processor with."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-core")," contains the core framework code."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-fresco")," contains components for the use with the Fresco image library."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-it")," contains integration tests for the framework. It is necessary to have a separate project for this as it to avoid circular dependencies."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-it-powermock")," contains integration tests for the framework that utilize PowerMock. Check out the README inside to learn more."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-instrumentation-tests")," contains ",(0,r.mdx)("em",{parentName:"li"},"instrumentation")," tests for the framework. They require a device (or emulator) to run."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-processor")," contains the stand-alone annotation processor."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-testing")," contains utilities to test Litho components."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-widget")," contains several mount specs for commonly used Android widgets."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-sections-core")," contains the Java code for the Sections framework,\nincluding the ",(0,r.mdx)("inlineCode",{parentName:"li"},"com.facebook.litho.sections.common")," namespace."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-sections-annotations")," has annotations for use with the Sections\nprocessor."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-sections-processor")," is a pure Java library containing the annotation necessary to use processor for Sections with."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"litho-sections-widget")," contains Sections-specific widgets like the\n",(0,r.mdx)("inlineCode",{parentName:"li"},"RecyclerCollectionComponentSpec"),".")),(0,r.mdx)("h3",{id:"litho_defs-and-buck"},(0,r.mdx)("inlineCode",{parentName:"h3"},"/LITHO_DEFS")," and ",(0,r.mdx)("inlineCode",{parentName:"h3"},"/BUCK")),(0,r.mdx)("p",null,"These files define how to build Litho.  The ",(0,r.mdx)("inlineCode",{parentName:"p"},"BUCK")," file is the input to ",(0,r.mdx)("a",{parentName:"p",href:"https://buckbuild.com"},"buck"),", and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"/LITHO_DEFS")," file contains some constants needed for buck to find targets inside the repository.  It is imported in ",(0,r.mdx)("inlineCode",{parentName:"p"},"/BUCK"),"."))}u.isMDXComponent=!0}}]);