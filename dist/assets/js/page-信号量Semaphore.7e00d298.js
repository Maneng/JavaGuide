(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{592:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/learn_c87a079fcea0d7893b03d4d57478bca7.png",alt:"",loading:"lazy"}})]),s._v(" "),t("p",[t("strong",[s._v("作者")]),s._v(": 西魏陶渊明\n"),t("strong",[s._v("博客")]),s._v(": "),t("a",{attrs:{href:"https://blog.springlearn.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.springlearn.cn/"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("西魏陶渊明")]),s._v(" "),t("p",[s._v("莫笑少年江湖梦，谁不少年梦江湖")])]),s._v(" "),t("h2",{attrs:{id:"🚀-知识快读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🚀-知识快读"}},[s._v("#")]),s._v(" 🚀 知识快读")]),s._v(" "),t("p",[t("code",[s._v("Semaphore")]),s._v(" 翻译过来就是信号量, 其根本原理就是基于 "),t("code",[s._v("CAS")]),s._v(" 共享锁的一种实现。举一个例子。\n假设停车场只有三个车位，一开始三个车位都是空的。这时如果同时来了五辆车，看门人允许其中三辆不受阻碍的进入，然后放下车拦，剩下的车则必须在入口等待，此后来的车也都不得不在入口处等待。这时，有一辆车离开停车场，看门人得知后，打开车拦，放入一辆，如果又离开两辆，则又可以放入两辆，如此往复。")]),s._v(" "),t("p",[s._v("那么上面的这个例子可以这样理解，资源一共有3个, 即三个车位。如何来控制这5辆汽车，来合理的使用这3个资源呢?\n"),t("code",[s._v("Semaphore")]),s._v(" 可以这样来定义。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 定一个信号量,声明有3个资源。使用公平模式线程将会按到达的顺序（FIFO）执行(也就是等待时间最长的先执行),如果是非公平，则可以后请求的有可能排在队列的头部。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),s._v(" semp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 获取1个许可 - 最大允许3个进入，一但超过就让其等待,除非已经释放")]),s._v("\nsemp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("acquire")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. 释放1个许可 ")]),s._v("\nsemp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("release")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4. 获取1许可,失败就返回,不等待")]),s._v("\nsemp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tryAcquire")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 5. 获取2许可,失败就返回,不等待")]),s._v("\nsemp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tryAcquire")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 6. 不允许被中断")]),s._v("\nsemp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("acquireUninterruptibly")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"知识点1-fair-nofair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点1-fair-nofair"}},[s._v("#")]),s._v(" 知识点1: Fair & NoFair")]),s._v(" "),t("p",[t("code",[s._v("Semaphore")]),s._v(" 的模式配置,只是构造来定义。")]),s._v(" "),t("ul",[t("li",[s._v("默认构造不公平模式, 谁来申请资源,就先尝试获取资源。排队的要等到没有资源进来申请才能继续申请")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("permits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sync "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NonfairSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("permits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("permits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" fair"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sync "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fair "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FairSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("permits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NonfairSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("permits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1640531082000.png",alt:"",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"知识点2-申请资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点2-申请资源"}},[s._v("#")]),s._v(" 知识点2: 申请资源")]),s._v(" "),t("ul",[t("li",[s._v("acquire() 获取1个资源,获取不到就等待,如果线程中断,会直接中断。")]),s._v(" "),t("li",[s._v("acquire(2) 获取2个资源,获取不到就等待,如果线程中断,会直接中断。")]),s._v(" "),t("li",[s._v("tryAcquire() 获取1个资源,获取不到就返回 "),t("code",[s._v("false")]),s._v(",如果线程中断,会直接中断。")]),s._v(" "),t("li",[s._v("acquireUninterruptibly() 获取1个资源,获取不到就等待,不会关心线程中断。")])]),s._v(" "),t("h2",{attrs:{id:"知识点3-释放资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点3-释放资源"}},[s._v("#")]),s._v(" 知识点3: 释放资源")]),s._v(" "),t("ul",[t("li",[s._v("release() 释放一个资源")]),s._v(" "),t("li",[s._v("release(2) 释放两个资源")])]),s._v(" "),t("h2",{attrs:{id:"知识点4-其他api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点4-其他api"}},[s._v("#")]),s._v(" 知识点4: 其他API")]),s._v(" "),t("ul",[t("li",[s._v("availablePermits() 当前资源数量")]),s._v(" "),t("li",[s._v("drainPermits() 获取当前资源数量，并将剩余资源清零，直接赋值0")]),s._v(" "),t("li",[s._v("reducePermits(2) 将资源数量，扣减2个")]),s._v(" "),t("li",[s._v("isFair() 是否公平")]),s._v(" "),t("li",[s._v("hasQueuedThreads() 是否还有线程等待")]),s._v(" "),t("li",[s._v("getQueueLength() 还有多少线程等待")]),s._v(" "),t("li",[s._v("getQueuedThreads() 获取所有的线程集合")])])])}),[],!1,null,null,null);a.default=e.exports}}]);