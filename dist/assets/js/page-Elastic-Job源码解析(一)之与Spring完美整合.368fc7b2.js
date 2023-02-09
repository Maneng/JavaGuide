(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{686:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("看过小编写SpringFramework源码解析的同学应该对Spring支持自定义标签还有点印象吧，没有的话我们回顾下，然后看看Elastic-Job是如何巧妙的利用自定义标签生成Job任务的吧。请注意这里用了一个巧妙关键字。我们看它如何巧妙的吧。")])]),s._v(" "),t("h2",{attrs:{id:"elastic-job-自定义标签原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elastic-job-自定义标签原理"}},[s._v("#")]),s._v(" Elastic Job 自定义标签原理")]),s._v(" "),t("p",[s._v("在Spring中实现自定义标签只用继承NamespaceHandlerSupport类，然后定义自己的BeanDefinitionParse来生成BeanDefinition就可以了。就会被Spring的IOC容器加载到了。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 分布式作业的命名空间处理器\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JobNamespaceHandler")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NamespaceHandlerSupport")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JobNamespaceHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerBeanDefinitionParser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"simple"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SimpleJobBeanDefinitionParser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerBeanDefinitionParser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dataflow"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataflowJobBeanDefinitionParser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerBeanDefinitionParser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"script"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ScriptJobBeanDefinitionParser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("解析器")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("simple")]),s._v(" "),t("td",[s._v("SimpleJobBeanDefinitionParser")]),s._v(" "),t("td",[s._v("一般任务")])]),s._v(" "),t("tr",[t("td",[s._v("dataflow")]),s._v(" "),t("td",[s._v("DataflowJobBeanDefinitionParser")]),s._v(" "),t("td",[s._v("数据流任务")])]),s._v(" "),t("tr",[t("td",[s._v("script")]),s._v(" "),t("td",[s._v("ScriptJobBeanDefinitionParser")]),s._v(" "),t("td",[s._v("脚本任务")])])])]),s._v(" "),t("p",[s._v("注册中心解析器")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegNamespaceHandler")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NamespaceHandlerSupport")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegNamespaceHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerBeanDefinitionParser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zookeeper"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ZookeeperBeanDefinitionParser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[s._v("在jar中添加 "),t("code",[s._v("/META-INF/spring.handler")]),s._v(" 指定文件的解析器")]),s._v(" "),t("li",[s._v("在jar中添加 "),t("code",[s._v("/META-INF/spring.schemas")]),s._v(" 指定文件的xml约束信息")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/ded053e68c5fbedda0c82581c80fba2c.png",alt:"",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"elastic-job如何巧妙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elastic-job如何巧妙"}},[s._v("#")]),s._v(" Elastic-Job如何巧妙?")]),s._v(" "),t("p",[s._v("注意: 定时任务 = 定时器 + 任务\nElastic Job只给我们提供了任务标签，所以我们平时用Elastic-Job写的只是一个任务，而不是一个Bean。另外关于标签的属性，即: 定时的信息,是以属性配置的形式放在xml中的,我们可以看xsd文件约束中找到，都有哪些属性可以用，下图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/297f09f2a289942949fb4bfe30722dc0.png",alt:"",loading:"lazy"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/c426616c1337a7ba39da1d2171cb07fd.png",alt:"",loading:"lazy"}})]),s._v(" "),t("p",[s._v("Elastic-Job会解析我们的xml任务信息,并通过定时的相关参数，生成SpringJobScheduler对象,在哪里进行着一操作呢？\n感觉很怪异，找了很久才找到，竟然在每个任务的解析器中。为什么这么说呢? 因为实现都在抽象类中生成。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/d046d029692e7b204f56dc023609ca39.png",alt:"",loading:"lazy"}})]),s._v(" "),t("p",[s._v("所有的任务解析器都实现了一个抽象方法AbstractJobBeanDefinitionParser。而在这里面对我们写的job标签进行了解析生成job对象，作为属性注入到SpringJobScheduler中，在init方法中，开始执行定时 任务(quartz)。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/7c71ed058225816bcd38f1de71836f5f.png",alt:"",loading:"lazy"}})]),s._v(" "),t("p",[s._v("其实BeanDefinitionParse的主要职责是解析Bean对象的，而Elastic-Job巧妙的用来生成SpringJobScheduler。\n由此联想到Es Job的标签都是 job:{taskType}开头的，看来命名真的很有技巧，"),t("code",[s._v("注意他不是一个bean而是SpringJobSchedulerBean的一个参数声明 !")]),s._v(" 还能这么用! get 到一个新技能。")]),s._v(" "),t("p",[t("strong",[s._v("另外注意")])]),s._v(" "),t("ul",[t("li",[s._v("①: init初始化方法中完成定时任务的初始化操作，即开始定时，底层还是使用的quartz的一个封装")]),s._v(" "),t("li",[s._v("②: shutdown回收资源,关闭线程池")])])])}),[],!1,null,null,null);a.default=e.exports}}]);