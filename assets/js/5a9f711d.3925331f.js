"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8694],{7772:(e,n,a)=>{a.d(n,{Z:()=>u});var t=a(83117),o=a(67294),r=a(23746),i=a(7694),s=a(13618),l="0.44.0",d="0.45.0-SNAPSHOT",p="0.10.4",m="0.142.0",c=a(86668);const u=function(e){var n=e.language,a=e.code.replace(/{{site.lithoVersion}}/g,l).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,d).replace(/{{site.flipperVersion}}/g,m).trim(),u=(0,c.L)().isDarkTheme?s.Z:i.Z;return o.createElement(r.ZP,(0,t.Z)({},r.lG,{code:a,language:n,theme:u}),(function(e){var n=e.className,a=e.style,t=e.tokens,r=e.getLineProps,i=e.getTokenProps;return o.createElement("pre",{className:n,style:a},t.map((function(e,n){return o.createElement("div",r({line:e,key:n}),e.map((function(e,n){return o.createElement("span",i({token:e,key:n}))})))})))}))}},63860:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var t=a(83117),o=a(80102),r=(a(67294),a(3905)),i=a(65488),s=a(85162),l=(a(7772),["components"]),d={id:"hooks-for-spec-developers",title:"Introducing Hooks for State"},p=void 0,m={unversionedId:"kotlin/hooks-for-spec-developers",id:"kotlin/hooks-for-spec-developers",title:"Introducing Hooks for State",description:"This page covers how to convert existing code from lifecycle methods in the Java Specs API to hooks in the Kotlin API.",source:"@site/../docs/kotlin/hooks-for-spec-developers.mdx",sourceDirName:"kotlin",slug:"/kotlin/hooks-for-spec-developers",permalink:"/docs/kotlin/hooks-for-spec-developers",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/hooks-for-spec-developers.mdx",tags:[],version:"current",frontMatter:{id:"hooks-for-spec-developers",title:"Introducing Hooks for State"},sidebar:"mainSidebar",previous:{title:"KComponent and Props",permalink:"/docs/kotlin/kotlin-api-basics"},next:{title:"Flexbox Containers",permalink:"/docs/kotlin/kotlin-flexbox-containers"}},c={},u=[{value:"useState",id:"usestate",level:2},{value:"Side Effects in <code>@OnCreateInitialState</code>",id:"side-effects-in-oncreateinitialstate",level:3},{value:"useEffect",id:"useeffect",level:2},{value:"Changes to Attach/Detach Contract",id:"changes-to-attachdetach-contract",level:3},{value:"Listening to Prop/State Changes",id:"listening-to-propstate-changes",level:3},{value:"useRef",id:"useref",level:2},{value:"Example: logging &#39;seen&#39; state",id:"example-logging-seen-state",level:3},{value:"useErrorBoundary",id:"useerrorboundary",level:2},{value:"Example: providing an &#39;error&#39; state in the UI",id:"example-providing-an-error-state-in-the-ui",level:3},{value:"useTransition",id:"usetransition",level:2}],h={toc:u};function f(e){var n=e.components,a=(0,o.Z)(e,l);return(0,r.mdx)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"This page covers how to convert existing code from lifecycle methods in the Java Specs API to hooks in the Kotlin API."),(0,r.mdx)("p",{parentName:"admonition"},"For information on the concept and rules for Hooks, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/hooks-intro"},"Introduction to Hooks")," page.")),(0,r.mdx)("p",null,"One of the biggest changes in the Litho Kotlin API is the introduction of hooks: most of the APIs implemented with lifecycle methods in the Java Specs API (such as @OnCreateInitialState and @OnAttached) have hooks equivalents in the Kotlin API."),(0,r.mdx)("h2",{id:"usestate"},"useState"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"useState")," enables a component to persist a variable across renders and replaces the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@State"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateInitialState"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnUpdateState")," APIs. The following code shows a comparison of Spec API and Kotlin API code for the same component:"),(0,r.mdx)(i.default,{groupId:"state",defaultValue:"kotlin_state",values:[{label:"Kotlin",value:"kotlin_state"},{label:"Java",value:"java_state"}],mdxType:"Tabs"},(0,r.mdx)(s.default,{value:"kotlin_state",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/CheckboxComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/CheckboxComponent.kt",start:"start_example",end:"end_example"},"class CheckboxComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val isChecked = useState { false }\n\n    return Column(style = Style.onClick { isChecked.update { currValue -> !currValue } }) {\n      child(\n          Image(\n              drawable =\n                  drawableRes(\n                      if (isChecked.value) {\n                        android.R.drawable.checkbox_on_background\n                      } else {\n                        android.R.drawable.checkbox_off_background\n                      })))\n    }\n  }\n}\n"))),(0,r.mdx)(s.default,{value:"java_state",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/onboarding/CheckboxComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/onboarding/CheckboxComponentSpec.java",start:"start_example",end:"end_example"},"@LayoutSpec\npublic class CheckboxComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean isChecked) {\n\n    return Column.create(c)\n        .child(\n            Image.create(c)\n                .drawableRes(\n                    isChecked\n                        ? android.R.drawable.checkbox_on_background\n                        : android.R.drawable.checkbox_off_background))\n        .clickHandler(CheckboxComponent.onCheckboxClicked(c))\n        .build();\n  }\n\n  @OnUpdateState\n  static void updateCheckbox(StateValue<Boolean> isChecked) {\n    isChecked.set(!isChecked.get());\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onCheckboxClicked(ComponentContext c) {\n    CheckboxComponent.updateCheckbox(c);\n  }\n}\n")))),(0,r.mdx)("h3",{id:"side-effects-in-oncreateinitialstate"},"Side Effects in ",(0,r.mdx)("inlineCode",{parentName:"h3"},"@OnCreateInitialState")),(0,r.mdx)("p",null,"A common pattern in the Java Spec API was to perform side effects in ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateInitialState")," (such as attaching a listener). Instead, any side effects like this should now be done with the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-effect"},"useEffect Hook"),", which provides functionality to clean up and handle prop changes."),(0,r.mdx)("p",null,"For more information, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-state"},"useState")," page in the 'Main Concepts' section."),(0,r.mdx)("h2",{id:"useeffect"},"useEffect"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," hook gives the ability to safely perform side-effects from a component and corresponds to the Java Spec API's ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnAttached"),"/",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," lifecycle methods."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},'useEffect(username) {\n  println("I\'ve been attached with prop $username!")\n  onCleanup { println("I\'ve been detached with prop $username!") }\n}\n')),(0,r.mdx)("p",null,"In addition to the existing ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnAttached"),"/",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," functionality, it provides the ability to perform side-effects in response to changes in committed props or state. Both the effect lambda and the cleanup lambda are invoked on the main thread, meaning it's safe to perform UI-thread confined side effects."),(0,r.mdx)("h3",{id:"changes-to-attachdetach-contract"},"Changes to Attach/Detach Contract"),(0,r.mdx)("p",null,"In the Java Spec API, ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnAttached"),"/",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," would be called only once, when the component was first attached to/detached from the tree. This could lead to bugs where, for example, when a component subscribes to a data store using a userId prop, and then that prop changes."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," tries to solve this by taking a var-arg list of ",(0,r.mdx)("em",{parentName:"p"},"dependencies"),": any time any of these dependencies changes, the cleanup lambda (previously ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnDetached"),") will be called followed by the new effect lambda. If no dependencies are provided, the previous cleanup and new effect lambdas will be invoked again ",(0,r.mdx)("strong",{parentName:"p"},"every time a new layout is committed"),"."),(0,r.mdx)("h3",{id:"listening-to-propstate-changes"},"Listening to Prop/State Changes"),(0,r.mdx)("p",null,"An important functionality that ",(0,r.mdx)("inlineCode",{parentName:"p"},"useEffect")," adds over ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnAttached"),"/",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," is the ability to trigger code when props/state change. For example, this can be used to trigger an animation as a side-effect whenever a prop changes:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/animations/animatedcounter/AnimatedCounter.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/animations/animatedcounter/AnimatedCounter.kt",start:"start_example",end:"end_example"},'class AnimatingCounter(private val count: Int) : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val animation = useRef<AnimatedAnimation?> { null }\n    val translationY = useBinding(0f)\n\n    useEffect(count) {\n      // Animate the text to a Y-offset based on count\n      val newAnimation = Animated.spring(translationY, to = count * 10.dp.toPixels().toFloat())\n      newAnimation.start()\n      animation.value = newAnimation\n\n      onCleanup { animation.value?.cancel() }\n    }\n\n    return Text(style = Style.translationY(translationY), text = "$count", textSize = 24.sp)\n  }\n}\n')),(0,r.mdx)("p",null,"For more information, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-effect"},"useEffect")," page in the 'Main Concepts' section."),(0,r.mdx)("h2",{id:"useref"},"useRef"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"useRef")," hook allows a component to maintain a mutable reference that doesn't trigger a re-render when updated."),(0,r.mdx)("p",null,"It returns an instance of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Ref")," that has a single mutable ",(0,r.mdx)("inlineCode",{parentName:"p"},"value")," property, which should only be read/written on the UI thread. ",(0,r.mdx)("inlineCode",{parentName:"p"},"useRef")," can be used as a replacement for ",(0,r.mdx)("a",{parentName:"p",href:"/docs/codegen/state-for-specs#lazy-state-updates"},"lazy state")," from the Spec API, though it has additional uses."),(0,r.mdx)("h3",{id:"example-logging-seen-state"},"Example: logging 'seen' state"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/LogOnceComponent.kt start=start_useref_example end=end_useref_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/LogOnceComponent.kt",start:"start_useref_example",end:"end_useref_example"},"class LogOnceComponent : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val hasLoggedVisible = useRef<Boolean> { false }\n\n    return Text(\n        style =\n            Style.onVisible {\n              // onVisible executes on the main thread, so it's safe to read/write hasLoggedVisible\n              if (!hasLoggedVisible.value) {\n                doLogVisible(androidContext)\n                hasLoggedVisible.value = true\n              }\n            },\n        text = \"I'll let you know when I'm visible, but only once!\")\n  }\n}\n")),(0,r.mdx)("p",null,"For more information, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-ref"},"useRef")," page in the 'Main Concepts' section."),(0,r.mdx)("h2",{id:"useerrorboundary"},"useErrorBoundary"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"useErrorBoundary")," hook allows KComponents to catch and handle errors higher up in the tree and provide appropriate fallback, logging or retry mechanisms. It corresponds to the Java Spec API's ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnError")," functionality."),(0,r.mdx)("h3",{id:"example-providing-an-error-state-in-the-ui"},"Example: providing an 'error' state in the UI"),(0,r.mdx)("p",null,"A KComponent becomes an error boundary when it declares a ",(0,r.mdx)("inlineCode",{parentName:"p"},"useErrorBoundary")," hook. The example below shows how the implementation of a boundary that renders an error state compares between the Java Spec API and the Kotlin API:"),(0,r.mdx)(i.default,{groupId:"error_boundary",defaultValue:"kotlin_state",values:[{label:"Kotlin",value:"kotlin_state"},{label:"Java",value:"java_state"}],mdxType:"Tabs"},(0,r.mdx)(s.default,{value:"kotlin_state",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/errors/KErrorBoundary.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/errors/KErrorBoundary.kt",start:"start_example",end:"end_example"},'class KErrorBoundary(private val childComponent: Component) : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    val errorState = useState<Exception?> { null }\n    useErrorBoundary { exception: Exception -> errorState.update(exception) }\n\n    errorState.value?.let {\n      return Column(style = Style.margin(all = 16.dp)) {\n        child(KDebugComponent(message = "KComponent\'s Error Boundary", throwable = it))\n      }\n    }\n\n    return childComponent\n  }\n}\n'))),(0,r.mdx)(s.default,{value:"java_state",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/errors/ErrorBoundarySpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/errors/ErrorBoundarySpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class ErrorBoundarySpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c, @Prop Component child, @State @Nullable Exception error) {\n\n    if (error != null) {\n      return DebugErrorComponent.create(c).message("Error Boundary").throwable(error).build();\n    }\n\n    return child;\n  }\n\n  @OnUpdateState\n  static void updateError(StateValue<Exception> error, @Param Exception e) {\n    error.set(e);\n  }\n\n  @OnError\n  static void onError(ComponentContext c, Exception error) {\n    ErrorBoundary.updateErrorSync(c, error);\n  }\n}\n')))),(0,r.mdx)("p",null,"For more information, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-error-boundary"},"useErrorBoundary")," page in the 'Main Concepts' section."),(0,r.mdx)("h2",{id:"usetransition"},"useTransition"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"useTransition")," registers a transition to be applied when the current layout is committed. It corresponds to the Java Spec API's ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateTransition")," functionality."),(0,r.mdx)(i.default,{groupId:"transition",defaultValue:"kotlin_transition",values:[{label:"Kotlin",value:"kotlin_transition"},{label:"Java",value:"java_transition"}],mdxType:"Tabs"},(0,r.mdx)(s.default,{value:"kotlin_transition",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/TransitionComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/TransitionComponent.kt",start:"start_example",end:"end_example"},'class TransitionComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val isHalfAlpha = useState { false }\n    useTransition(Transition.create("square").animate(AnimatedProperties.ALPHA))\n\n    return Column(style = Style.onClick { isHalfAlpha.update(!isHalfAlpha.value) }) {\n      child(\n          Row(\n              style =\n                  Style.backgroundColor(Color.YELLOW)\n                      .width(80.dp)\n                      .height(80.dp)\n                      .alpha(\n                          if (isHalfAlpha.value) {\n                            0.5f\n                          } else {\n                            1.0f\n                          })\n                      .transitionKey(context, "square")))\n    }\n  }\n}\n'))),(0,r.mdx)(s.default,{value:"java_transition",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/onboarding/AlphaTransitionComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/onboarding/AlphaTransitionComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class AlphaTransitionComponentSpec {\n\n  private static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean isHalfAlpha) {\n    return Column.create(c)\n        .clickHandler(AlphaTransitionComponent.onClickEvent(c))\n        .child(\n            Row.create(c)\n                .backgroundColor(Color.YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .alpha(isHalfAlpha ? 0.5f : 1.0f)\n                .transitionKey(SQUARE_KEY))\n        .build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(SQUARE_KEY).animate(AnimatedProperties.ALPHA);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    AlphaTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> isHalfAlpha) {\n    isHalfAlpha.set(!isHalfAlpha.get());\n  }\n}\n')))))}f.isMDXComponent=!0}}]);