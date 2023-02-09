(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{743:function(e,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://img.springlearn.cn/blog/b8f74de10af99991e3fc73632eeeb190.png",alt:"",loading:"lazy"}})]),e._v(" "),a("p",[a("strong",[e._v("公众号")]),e._v(": 西魏陶渊明"),a("br"),e._v(" "),a("strong",[e._v("CSDN")]),e._v(": "),a("a",{attrs:{href:"https://springlearn.blog.csdn.net/?type=blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://springlearn.blog.csdn.net"),a("OutboundLink")],1),a("br")]),e._v(" "),a("blockquote",[a("p",[e._v("天下代码一大抄, 抄来抄去有提高, 看你会抄不会抄！")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img.springlearn.cn/blog/8f3392b9badb093f9e1a6472b4a98487.gif",alt:"",loading:"lazy"}})]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/lxchinesszz/pangu-plus",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitbub"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("h3",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),a("p",[e._v("现状1:  乱   同部门项目结构定义各自为战, 没有一个标准化的项目结构\n现状2: 繁    项目定义没有技术难度，且都是这种重复工作劳动, 感觉繁不胜繁")]),e._v(" "),a("p",[e._v("“删繁就简三秋树，领异标新二月花。”  删繁就简，开辟新路")]),e._v(" "),a("h3",{attrs:{id:"价值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#价值"}},[e._v("#")]),e._v(" 价值")]),e._v(" "),a("p",[e._v("提高生产效率  & 统一标准规范 & 基于标准规范提供通用能力 & 提高影响力")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img.springlearn.cn/blog/8a43d49b4e8c81c73d781ba427d23179.png",alt:"",loading:"lazy"}})]),e._v(" "),a("h2",{attrs:{id:"一、spring的设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、spring的设计思路"}},[e._v("#")]),e._v(" 一、Spring的设计思路")]),e._v(" "),a("h3",{attrs:{id:"_1-1-自动装箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-自动装箱"}},[e._v("#")]),e._v(" 1.1 自动装箱")]),e._v(" "),a("p",[e._v("只需要引入"),a("groupId",[e._v("io.spring.initializr")]),e._v("相关配置，就具备的脚手架的能力。看起来挺简单的。\n但是, 等等。Spring只提供单一模块的脚手架应用, 这显然不服务我们实际生产的项目结构。要深度定制化开发才能符合我们项目生产结构。\n既然如此我们为啥还要用Spring的框架呢? 两个原因。")],1),e._v(" "),a("ol",[a("li",[e._v("Spring脚手架提供了一个标准的api, 没办法,先入为主，除非美国说要制裁我们。")]),e._v(" "),a("li",[e._v("Spring的模板的操作提供了面向对象的编程方式，比如我们修改Maven的POM和依赖的信息, 都有面向对象的API方式调用。")])]),e._v(" "),a("h2",{attrs:{id:"二、-一个实际的构建流程是什么样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、-一个实际的构建流程是什么样的"}},[e._v("#")]),e._v(" 二、 一个实际的构建流程是什么样的?")]),e._v(" "),a("p",[e._v("https://start.spring.io/starter.zip?type=maven-project&language=java&bootVersion=2.5.2.RELEASE&baseDir=demo&groupId=com.example&artifactId=demo&name=demo&description=Demo%20project%20for%20Spring%20Boot&packageName=com.example.demo&packaging=jar&javaVersion=11&dependencies=session")]),e._v(" "),a("p",[e._v("依赖中只引入了一个Session。")]),e._v(" "),a("h3",{attrs:{id:"_2-1-构建的原信息来自哪里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-构建的原信息来自哪里"}},[e._v("#")]),e._v(" 2.1 构建的原信息来自哪里")]),e._v(" "),a("p",[e._v("先回答问题,来自于application.yml。这里你可以配置要支持的java版本, Language类型等等\n简单点你在页面看到的都是配置的。")]),e._v(" "),a("h3",{attrs:{id:"_2-2-spring如何接受到信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-spring如何接受到信息"}},[e._v("#")]),e._v(" 2.2 Spring如何接受到信息")]),e._v(" "),a("p",[e._v("Spring提供了一个抽象接口, 和一个限定反省类。"),a("code",[e._v("ProjectRequest")]),e._v(" 。 没错你想的没错，页面看到的配置信息都在ProjectRequest 有对应的字段来接受。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public abstract class ProjectGenerationController<R extends ProjectRequest>{}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("实现抽象类，然后注册成一个Bean。 那么就会自动的替换了系统本来已经提供的默认实现。实现原理就是@ConditionalOnMissingBean")]),e._v(" "),a("h3",{attrs:{id:"_2-3-配置信息如何最终被解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-配置信息如何最终被解析"}},[e._v("#")]),e._v(" 2.3 配置信息如何最终被解析")]),e._v(" "),a("p",[e._v("前面的请求最中会被转发到 ProjectGenerationInvoker 来代为处理，简单来说就是我们的业务Service。\n关键类来了，请注意:  ProjectDescription。\n这个类会被全局使用, 包含了项目创建的所有信息,包括依赖信息等。那这个时候问题就来了，前端关于依赖只传了一个session, 我们是如何知道这个session所对应的groupId等坐标信息的呢? 看这里\nProjectRequestToDescriptionConverter, 废话不多数，直接看代码。主要观察注释。自己思考。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 一个请求信息, 一个metadata，这一看就是所有的配置信息\npublic void convert(ProjectRequest request, MutableProjectDescription description, InitializrMetadata metadata) {\n   validate(request, metadata);\n   Version platformVersion = getPlatformVersion(request, metadata);\n   // 根据请求信息去搜索依赖，根据id->session 就找到 这个session所对应的坐标。\n   List<Dependency> resolvedDependencies = getResolvedDependencies(request, platformVersion, metadata);\n   validateDependencyRange(platformVersion, resolvedDependencies);\n\n   description.setApplicationName(request.getApplicationName());\n   description.setArtifactId(request.getArtifactId());\n   ...\n   resolvedDependencies.forEach((dependency) -> description.addDependency(dependency.getId(),\n         MetadataBuildItemMapper.toDependency(dependency)));\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("h3",{attrs:{id:"_2-4-如果构建maven的模块呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-如果构建maven的模块呢"}},[e._v("#")]),e._v(" 2.4 如果构建Maven的模块呢?")]),e._v(" "),a("p",[a("code",[e._v("ProjectAssetGenerator<T> projectAssetGenerator")]),e._v("。经过重重的信息添加, 最终到这里了，这里是我们要进行二次开发的严重地区。")]),e._v(" "),a("h4",{attrs:{id:"_2-4-1-先看下原始代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-先看下原始代码"}},[e._v("#")]),e._v(" 2.4.1 先看下原始代码")]),e._v(" "),a("p",[e._v("这里会构建一个单一的模块信息, 这里大家有没有发现点什么?")]),e._v(" "),a("ul",[a("li",[e._v("ProjectDescription 怎么变成了一个Bean ？")]),e._v(" "),a("li",[e._v("ProjectContributor 也是一个Bean？")]),e._v(" "),a("li",[e._v("系统提供了那些ProjectContributor，都是干什么的? 后面我们要基于这个扩展")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  public Path generate(ProjectGenerationContext context) throws IOException {\n      ProjectDescription description = context.getBean(ProjectDescription.class);\n      Path projectRoot = resolveProjectDirectoryFactory(context).createProjectDirectory(description);\n      Path projectDirectory = initializerProjectDirectory(projectRoot, description);\n      List<ProjectContributor> contributors = context.getBeanProvider(ProjectContributor.class).orderedStream()\n      .collect(Collectors.toList());\n      for (ProjectContributor contributor : contributors) {\n      contributor.contribute(projectDirectory);\n      }\n      return projectRoot;\n  }\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("问题解答:")]),e._v(" "),a("ol",[a("li",[e._v("ProjectDescription 怎么变成了一个Bean\nSpring会基于每次的请求,生成ProjectDescription。同时将其注册成为一个Bean。(可以自己去找)")]),e._v(" "),a("li",[e._v("ProjectContributor 也是一个Bean？\nProjectContributor是提供的一个扩展点, 只有一个方法就是一个目录文件, 由上代码可知,这个目录就是项目目录。 Eg: ascm目录。 (所以如果我们要扩展这里就不能在用根目录了)")])]),e._v(" "),a("p",[a("code",[e._v("void contribute(Path projectRoot) throws IOException;")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("系统提供了那些ProjectContributor。")]),e._v(" "),a("li",[e._v("MainSourceCodeCustomizer 看名字就是生成Spring引导类的扩展")]),e._v(" "),a("li",[e._v("TestSourceCodeProjectContributor  看名字就是生成Spring测试引导类的扩展")]),e._v(" "),a("li",[e._v("WebFoldersContributor 看名字就是生成web相关目录, 如果发现依赖中有web就...")]),e._v(" "),a("li",[e._v("ApplicationPropertiesContributor 看名字就是生成配置文件")]),e._v(" "),a("li",[e._v("HelpDocumentProjectContributor 看名字就是生成帮助文档")]),e._v(" "),a("li",[e._v("MavenBuildProjectContributor 看名字好像看不出来，其实就是生成pom文件")]),e._v(" "),a("li",[e._v("MavenWrapperContributor 看名字好像也看不出来，其实就是生成mvnw.cmd 这个没用的东西")]),e._v(" "),a("li",[e._v("GitIgnoreContributor  看名字 就是生成忽略的目录")])]),e._v(" "),a("p",[e._v("不展开了，代码非常简单。（这句话你别信, 流程很简单，但是细节很丰富, 字越少事越大）")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// 流程代码, 可以看到就是实现了MainSourceCodeCustomizer。就是填充启动类代码的代码。\nclass ServletInitializerContributor implements\n      MainSourceCodeCustomizer<TypeDeclaration, CompilationUnit<TypeDeclaration>, SourceCode<TypeDeclaration, CompilationUnit<TypeDeclaration>>> {\n\n \n   @Override\n   public void customize(SourceCode<TypeDeclaration, CompilationUnit<TypeDeclaration>> sourceCode) {\n      CompilationUnit<TypeDeclaration> compilationUnit = sourceCode.createCompilationUnit(this.packageName,\n            "ServletInitializer");\n      TypeDeclaration servletInitializer = compilationUnit.createTypeDeclaration("ServletInitializer");\n      servletInitializer.extend(this.initializerClassName);\n      customizeServletInitializer(servletInitializer);\n   }\n\n   @SuppressWarnings("unchecked")\n   private void customizeServletInitializer(TypeDeclaration servletInitializer) {\n      List<ServletInitializerCustomizer<?>> customizers = this.servletInitializerCustomizers.orderedStream()\n            .collect(Collectors.toList());\n      LambdaSafe.callbacks(ServletInitializerCustomizer.class, customizers, servletInitializer)\n            .invoke((customizer) -> customizer.customize(servletInitializer));\n   }\n\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br")])]),a("p",[e._v("细节代码，可以看到是面向对象的编程方式。我们不需要使用模板来自己写了。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Bean\nServletInitializerCustomizer<JavaTypeDeclaration> javaServletInitializerCustomizer(\n      ProjectDescription description) {\n   return (typeDeclaration) -> {\n      typeDeclaration.modifiers(Modifier.PUBLIC);\n      JavaMethodDeclaration configure = JavaMethodDeclaration.method("configure")\n            .modifiers(Modifier.PROTECTED)\n            .returning("org.springframework.boot.builder.SpringApplicationBuilder")\n            .parameters(new Parameter("org.springframework.boot.builder.SpringApplicationBuilder",\n                  "application"))\n            .body(new JavaReturnStatement(new JavaMethodInvocation("application", "sources",\n                  description.getApplicationName() + ".class")));\n      configure.annotate(Annotation.name("java.lang.Override"));\n      typeDeclaration.addMethodDeclaration(configure);\n   };\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("p",[e._v("但是从中我们学习到的知识是，对于多模块核心模块我们会使用到")]),e._v(" "),a("ul",[a("li",[e._v("MainSourceCodeCustomizer 看名字就是生成Spring引导类的扩展")]),e._v(" "),a("li",[e._v("TestSourceCodeProjectContributor  看名字就是生成Spring测试引导类的扩展")]),e._v(" "),a("li",[e._v("WebFoldersContributor 看名字就是生成web相关目录, 如果发现依赖中有web就...")]),e._v(" "),a("li",[e._v("ApplicationPropertiesContributor 看名字就是生成配置文件\n对于父目录")]),e._v(" "),a("li",[e._v("HelpDocumentProjectContributor 这里要替换成我们自己的模板要进行二次开发")]),e._v(" "),a("li",[e._v("MavenBuildProjectContributor 二次开发，不能用系统提供的Maven信息., 因为系统提供的是单模块的pom")]),e._v(" "),a("li",[e._v("MavenWrapperContributor 感觉没啥用")]),e._v(" "),a("li",[e._v("GitIgnoreContributor  改动比较小，不改也没关系")])]),e._v(" "),a("h4",{attrs:{id:"_2-4-2-改动后的代码-支持多模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-改动后的代码-支持多模块"}},[e._v("#")]),e._v(" 2.4.2 改动后的代码，支持多模块")]),e._v(" "),a("p",[e._v("MavenModuleFactory 将单一模块转换成多模块，并为每个模块生成一个执行方法。\n其实就是将原来的代码, 封装到每个Module里面，然后填充上自己的扩展信息。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public Path generate(ProjectGenerationContext context) throws IOException {\n    ProjectDescription description = context.getBean(ProjectDescription.class);\n    Path projectRoot = resolveProjectDirectoryFactory(context).createProjectDirectory(description);\n    // 1. 先创建项目根目录\n    Path projectDirectory = initializerProjectDirectory(projectRoot, description);\n    // 2. 构建依赖关系\n    MavenModuleFactory mavenModuleFactory = new MavenModuleFactory(context, projectDirectory);\n    List<ModuleGeneratorExecute> modules = mavenModuleFactory.getModule();\n    for (ModuleGeneratorExecute module : modules) {\n        module.generator();\n    }\n    return projectRoot;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[e._v("抽象出多模块的实体。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img.springlearn.cn/blog/45de2b1a0567e0f3a5c6aa872544a773.png",alt:"",loading:"lazy"}})]),e._v(" "),a("p",[e._v("Module和Module是关联关系, 所以看到Module和AbstractModuleTemplate直接由一个组合的虚线关系。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img.springlearn.cn/blog/3df53e4f6f20506c089010a357dc17ac.png",alt:"",loading:"lazy"}})]),e._v(" "),a("h3",{attrs:{id:"_2-5-文件生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-文件生成"}},[e._v("#")]),e._v(" 2.5 文件生成")]),e._v(" "),a("p",[e._v("到这里文件已经生成了，已经在服务端生成了一个具有Maven结构的项目。但这个时候他是在服务起的\n某个随机的目录下面的，就需要在将其转换成二进制数据, 传给前端。到此流程结束。")]),e._v(" "),a("h2",{attrs:{id:"三、二次开发提供的扩展点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、二次开发提供的扩展点"}},[e._v("#")]),e._v(" 三、二次开发提供的扩展点")]),e._v(" "),a("h3",{attrs:{id:"_3-1-为某个模块定制pom信息。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-为某个模块定制pom信息。"}},[e._v("#")]),e._v(" 3.1 为某个模块定制POM信息。")]),e._v(" "),a("p",[e._v("将用户选择的的依赖信息, 转移到具体某个Module上。具体要转移什么由你决定。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public interface MavenModuleBuildCustomizer {\n\n    /**\n     * 初始时候,moduleMavenBuild是没有任何信息的,需要开发者\n     * 自定义的将parentMavenBuild的信息,同步到parentMavenBuild\n     *\n     * @param parentMavenBuild 全局的maven配置信息\n     * @param moduleMavenBuild 每个module配置\n     */\n    void customize(MavenBuild parentMavenBuild, MavenBuild moduleMavenBuild);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h3",{attrs:{id:"_3-2-为某个模块创建目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-为某个模块创建目录"}},[e._v("#")]),e._v(" 3.2 为某个模块创建目录")]),e._v(" "),a("p",[e._v("可以参考 "),a("code",[e._v("MainSourceCodeCustomizer")]),e._v(" 的实现方案，如果用面向对象的方式生成代码，也可以参照\nGitIgnoreContributor的方式, 直接通过模板文件来生成文件。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public interface ProjectContributor extends Ordered {\n\n   /**\n    * Contribute additional resources to the project in the specified root directory.\n    * @param projectRoot the root directory of the project\n    * @throws IOException if contributing a resource failed\n    */\n   void contribute(Path projectRoot) throws IOException;\n\n   @Override\n   default int getOrder() {\n      return 0;\n   }\n\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("h2",{attrs:{id:"四、前端定制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、前端定制"}},[e._v("#")]),e._v(" 四、前端定制")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img.springlearn.cn/blog/49e9c4466a948891f6bc24d1909ce05d.png",alt:"",loading:"lazy"}})]),e._v(" "),a("h3",{attrs:{id:"_4-1-原数据信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-原数据信息"}},[e._v("#")]),e._v(" 4.1 原数据信息")]),e._v(" "),a("ul",[a("li",[e._v("Spring的版本信息和依赖等相关信息, 可以通过配置方式来解决")]),e._v(" "),a("li",[e._v("代码配置，供应链可以共建,  需要自己去开发需要往每个模块要写的内容。")])]),e._v(" "),a("h2",{attrs:{id:"五、扩展点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、扩展点"}},[e._v("#")]),e._v(" 五、扩展点")]),e._v(" "),a("p",[e._v("对Module进行扩展,可以往Module的pom文件中添加信息\n"),a("img",{attrs:{src:"https://img.springlearn.cn/blog/26ea572ed526229b3c14b73f6ffc7343.png",alt:"",loading:"lazy"}}),e._v("\n对Module进行扩展,可以向指定的包中添加信息")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img.springlearn.cn/blog/f44e44f2678ec2e5745996ee8691b794.png",alt:"",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);