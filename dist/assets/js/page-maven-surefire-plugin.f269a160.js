(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{626:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("maven-surefire-plugin Surefire 插件在test构建生命周期阶段用于执行应用程序的单元测试。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://maven.apache.org/images/maventxt_logo_200.gif",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[s("a",{attrs:{href:"https://maven.apache.org/surefire/maven-surefire-plugin/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("maven-surefire-plugin官网"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"一、介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍"}},[t._v("#")]),t._v(" 一、介绍")]),t._v(" "),s("p",[t._v("如果你执行过mvn test或者执行其他maven命令时跑了测试用例，你就已经用过maven-surefire-plugin了。\nmaven-surefire-plugin是maven里执行测试用例的插件，不显示配置就会用默认配置。\n这个插件的surefire:test命令会默认绑定maven执行的test阶段。")]),t._v(" "),s("p",[t._v("如果你自己声明了，那么可以指定自己的版本，并且可以配置自定义的参数。")]),t._v(" "),s("h2",{attrs:{id:"二、实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、实践"}},[t._v("#")]),t._v(" 二、实践")]),t._v(" "),s("h3",{attrs:{id:"_2-1-用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-用法"}},[t._v("#")]),t._v(" 2.1 用法")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" <build>\n    <pluginManagement>\n      <plugins>\n        <plugin>\n          <groupId>org.apache.maven.plugins</groupId>\n          <artifactId>maven-surefire-plugin</artifactId>\n          <version>3.0.0-M5</version>\n        </plugin>\n      </plugins>\n    </pluginManagement>\n  </build>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h3",{attrs:{id:"_2-2-使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用方法"}},[t._v("#")]),t._v(" 2.2 使用方法")]),t._v(" "),s("p",[s("code",[t._v("mvn test")])]),t._v(" "),s("h2",{attrs:{id:"三、源码分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、源码分析"}},[t._v("#")]),t._v(" 三、源码分析")]),t._v(" "),s("h3",{attrs:{id:"_3-1-学习目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-学习目标"}},[t._v("#")]),t._v(" 3.1 学习目标")]),t._v(" "),s("div",{staticClass:"custom-block info"},[s("p",{staticClass:"custom-block-title"},[t._v("相关信息")]),t._v(" "),s("p",[t._v("框架整体比较复杂，但是对于我们有学习价值的东西不多，我们没必要太深入研究。在此只提几个关键的知识点学习。")])]),t._v(" "),s("ol",[s("li",[t._v("maven-surefire-plugin的常用参数及作用")]),t._v(" "),s("li",[t._v("maven-surefire-plugin实现单测的原理")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-学习搭建环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-学习搭建环境"}},[t._v("#")]),t._v(" 3.2 学习搭建环境")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 先声明插件版本 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.maven.plugins"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven-surefire-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- JUnit 5 requires Surefire version 2.22.0 or higher --\x3e")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.22.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 然后引入依赖,方便debug跟进源码--\x3e")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.13.2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.maven.plugins"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven-surefire-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.0.0-M5"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.maven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven-core"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.8.4"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.maven.surefire"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("surefire-junit4"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.0.0-M5"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.maven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven-plugin-api"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${dep.maven-api.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.maven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven-model"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${dep.maven-api.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.maven.plugin-tools"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven-plugin-annotations"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${dep.maven-api.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.maven.plugins"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven-plugin-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${dep.maven-api.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br")])]),s("h3",{attrs:{id:"_3-3-找到插件入口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-找到插件入口"}},[t._v("#")]),t._v(" 3.3 找到插件入口")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1645113430000.png",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[t._v("前面通过学习知道Mojo是运行的核心类,而SurefirePlugin就是Mojo的子类。\n由此可知,如果要学习这个 "),s("code",[t._v("maven-surefire-plugin")]),t._v("，入口就是在SurefirePlugin类。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1644857307000.png",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1645114616000.png",alt:"",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"四、-带着问题来学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、-带着问题来学习"}},[t._v("#")]),t._v(" 四、 带着问题来学习")]),t._v(" "),s("h3",{attrs:{id:"_4-1-常用的参数都有那些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-常用的参数都有那些"}},[t._v("#")]),t._v(" 4.1 常用的参数都有那些")]),t._v(" "),s("p",[t._v("大多数为不常用的")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("是否常用")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("使用方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("解释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("skipTests")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用于跳过单测")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("maven.test.skip.exec")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用于跳过单测")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("maven.test.skip")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用于跳过单测")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("testClassesDirectory")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("指定测试模块目录编译后目录")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("maven.test.dependency.excludes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("要排除的依赖,格式:groupId:artifactId")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("maven.test.additionalClasspath")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("追加classpath")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("project.build.testSourceDirectory")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("指定测试模块目录源码目录")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("excludes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("xml配置")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("指定规则的类不需要被单测，eg: **/*Test.java")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("surefire.reportNameSuffix")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("test报表后缀")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("maven.test.redirectTestOutputToFile")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("运行的单侧输出重定向到report目录中")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("failIfNoTests")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("如果没有单测就报错")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("forkMode")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("运行模式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("jvm")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("指定jvm目录,如果不指定会读取系统")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("argLine")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Jvm运行参数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("threadCount")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("线程数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("forkCount")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("指定启用多少个vm,1.5C 以数字结尾,数字乘以cpu核心数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("reuseForks")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是否可重新使用forks进程")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("disableXmlReport")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("禁用xml报告")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("不常用")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("enableassertions")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-D,或者xml配置标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("启用断言assert语句")])])])]),t._v(" "),s("p",[s("strong",[t._v("forkMode 可设置值有 “never”， “once”， “always” 和 “pertest”。")])]),t._v(" "),s("ul",[s("li",[t._v("pretest： 每一个测试创建一个新进程，为每个测试创建新的JVM是单独测试的最彻底方式，但也是最慢的，不适合hudson上持续回归。")]),t._v(" "),s("li",[t._v("once：在一个进程中进行所有测试。once为默认设置，在Hudson上持续回归时建议使用默认设置。")]),t._v(" "),s("li",[t._v("always：在一个进程中并行的运行脚本，Junit4.7以上版本才可以使用，surefire的版本要在2.6以上提供这个功能，")])]),t._v(" "),s("h3",{attrs:{id:"_4-2-知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-知识点"}},[t._v("#")]),t._v(" 4.2 知识点")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// 大于等于2.0.0，小于2.1.2\nVersionRange range = VersionRange.createFromVersionSpec("[2.0.0,2.1.2)");\nSystem.out.println(range.containsVersion(new DefaultArtifactVersion("1.0")));\nSystem.out.println(range.containsVersion(new DefaultArtifactVersion("2.0.0")));\nSystem.out.println(range.containsVersion(new DefaultArtifactVersion("2.1.1")));\nSystem.out.println(range.containsVersion(new DefaultArtifactVersion("2.1.2")));\nSystem.out.println("------------");\nVersionRange range2 = VersionRange.createFromVersionSpec("[2.0.0-M1SN,2.1.2)");\nSystem.out.println(range2.containsVersion(new DefaultArtifactVersion("2.1.1-M2")));\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);