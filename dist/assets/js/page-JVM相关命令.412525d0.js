(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{656:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、启动arthas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、启动arthas"}},[t._v("#")]),t._v(" 一、启动Arthas")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -O https://arthas.aliyun.com/arthas-boot.jar\njava -jar arthas-boot.jar\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("启动命令 "),s("code",[t._v("java -jar arthas-boot.jar")])]),t._v(" "),s("h2",{attrs:{id:"二、选择进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、选择进程"}},[t._v("#")]),t._v(" 二、选择进程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1647178107000.png",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[t._v("直接选择我们要监控的进程，输入3进入")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[INFO] Attach process 28667 success.\n[INFO] arthas-client connect 127.0.0.1 3658\n  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.                           \n /  O  \\ |  .--. ''--.  .--'|  '--'  | /  O  \\ '   .-'                          \n|  .-.  ||  '--'.'   |  |   |  .--.  ||  .-.  |`.  `-.                          \n|  | |  ||  |\\  \\    |  |   |  |  |  ||  | |  |.-'    |                         \n`--' `--'`--' '--'   `--'   `--'  `--'`--' `--'`-----'                          \n\nwiki       https://arthas.aliyun.com/doc                                        \ntutorials  https://arthas.aliyun.com/doc/arthas-tutorials.html                  \nversion    3.5.6                                                                \nmain_class com.example.demo.DemoApplication                                     \npid        28667                                                                \ntime       2022-03-13 21:31:04   \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("提示已经连接上进程。")]),t._v(" "),s("h2",{attrs:{id:"三、基础信息查询命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、基础信息查询命令"}},[t._v("#")]),t._v(" 三、基础信息查询命令")]),t._v(" "),s("h3",{attrs:{id:"_3-1-dashboard-看板命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-dashboard-看板命令"}},[t._v("#")]),t._v(" 3.1 dashboard 看板命令")]),t._v(" "),s("p",[t._v("输入 "),s("code",[t._v("dashboard")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1647178404000.png",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[t._v("会定时将应用信息输出到控制台上。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-jad-反向编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-jad-反向编译"}},[t._v("#")]),t._v(" 3.2 jad 反向编译")]),t._v(" "),s("p",[s("code",[t._v("jad com.example.demo.DemoApplication")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1647178673000.png",alt:"",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"_3-3-watch-监控指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-watch-监控指令"}},[t._v("#")]),t._v(" 3.3 watch 监控指令")]),t._v(" "),s("p",[t._v("这个命令是比较常用的命令,可以用来分析系统性能。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseBody")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/get"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ResponseBody")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("监控这个类 "),s("code",[t._v("watch com.example.demo.WebController get returnObj")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("returnObj")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("params")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("入参")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("target")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("方法调用方")])])])]),t._v(" "),s("p",[s("code",[t._v("watch com.example.demo.WebController get {params,returnObj,target}")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[arthas@32818]$ watch com.example.demo.WebController get returnObj\nPress Q or Ctrl+C to abort.\nAffect(class count: 1 , method count: 1) cost in 120 ms, listenerId: 1\nmethod=com.example.demo.WebController.get location=AtExit\nts=2022-03-13 21:41:56; [cost=1.317166ms] result=@String[123]\nmethod=com.example.demo.WebController.get location=AtExit\nts=2022-03-13 21:42:03; [cost=0.051875ms] result=@String[测试]\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h1",{attrs:{id:"四、退出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、退出"}},[t._v("#")]),t._v(" 四、退出")]),t._v(" "),s("p",[t._v("输入 "),s("code",[t._v("q")])])])}),[],!1,null,null,null);a.default=e.exports}}]);