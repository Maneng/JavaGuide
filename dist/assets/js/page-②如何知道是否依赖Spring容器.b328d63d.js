(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{744:function(t,n,s){"use strict";s.r(n);var a=s(1),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("默认使用 "),s("code",[t._v("BlockJUnit4ClassRunner")]),t._v(" 来进行运行。即不依赖容器。\n假如说如果需要容器怎么办呢 ? "),s("Version",[t._v("基于SpringBoot 2.1.x版本分析")])],1),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RunWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringRunner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("classes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定启动类")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseApplicationTest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ul",[s("li",[t._v("SpringRunner告诉JUnit要使用Spring容器")]),t._v(" "),s("li",[t._v("SpringBootTest告诉JUnit容器的引导类是这个")])]),t._v(" "),s("p",[t._v("JUnit是如何实现的呢?")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1617791013000.png",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[t._v("前面启动类中我们使用的注解是 "),s("code",[t._v("@RunWith")]),t._v(" 和 "),s("code",[t._v("@SpringBootTest")]),t._v(" 那么哪里来解析这个的呢?")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1617791209000.png",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[t._v("由此 "),s("code",[t._v("JUnit")]),t._v(" 知道要使用 "),s("code",[t._v("SpringRunner")]),t._v(" 进行引导。")]),t._v(" "),s("p",[t._v("由上图我们知道 "),s("code",[t._v("SpringRunner")]),t._v(" 实例化的入参就是当前的测试类。那么后续所有的奥妙就在这里了。\n我们跟进构造往下追究。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1617795279000.png",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[s("code",[t._v("BootstrapUtils#resolveTestContextBootstrapper")]),t._v("\n拿到SpringBoot的测试引导类 "),s("code",[t._v("SpringBootTestContextBootstrapper")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1617795346000.png",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[t._v("拿到SpringBoot容器的启动 "),s("code",[t._v("Main")]),t._v(" 函数。")]),t._v(" "),s("p",[t._v("到此已经拿到了所有的SpringBoot容器启动参数了。")])])}),[],!1,null,null,null);n.default=e.exports}}]);