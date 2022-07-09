(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{710:function(t,v,l){"use strict";l.r(v);var a=l(1),_=Object(a.a)({},(function(){var t=this,v=t.$createElement,l=t._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("p",[l("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1654432506000.png",alt:"",loading:"lazy"}})]),t._v(" "),l("p",[t._v("我们在学习JVM的内存管理的时候,我们的思维要跳出Java的局限。我们要这么理解。我们写的Java代码，是运行在JVM上的。\n如果让你来实现JVM那么。你会怎么处理呢?")]),t._v(" "),l("ol",[l("li",[t._v("什么是公共部分,什么是私有部分?")])]),t._v(" "),l("ul",[l("li",[t._v("公共部分(堆heap)\n"),l("ul",[l("li",[t._v("Class字节码是公共的,是共享的,所有线程都要认识字节码。")]),t._v(" "),l("li",[t._v("new的对象是公共的,也是共享的,所有线程要都能认识这些实例对象,能读取到实例的数据。")])])]),t._v(" "),l("li",[t._v("私有部分 (栈stock)\n"),l("ul",[l("li",[t._v("Java中每个线程的执行中的代码，及代码中的局部变量等信息是私有的。每个线程之间都要维护一份。")]),t._v(" "),l("li",[t._v("JVM虚拟栈和本地方法栈。")]),t._v(" "),l("li",[t._v("代码是怎么执行的,当然是一行一行执行。那么这一行一行的代码是放在哪里的呢? 是放在栈里面的。Java代码是在JVM来执行的。\n所以这个栈，我们称为JVM虚拟栈。")]),t._v(" "),l("li",[t._v("JVM中有些方法是调用其他语言实现的, 会使用本地方法栈。")]),t._v(" "),l("li",[t._v("那么谁来读取栈里面的数据,来出栈执行呢? 这叫做PC寄存区。")])])])]),t._v(" "),l("ol",{attrs:{start:"2"}},[l("li",[l("p",[t._v("这些区域的内存是如何划分的呢?")])]),t._v(" "),l("li",[l("p",[t._v("传说中的GC的内存回收策略?")])])]),t._v(" "),l("p",[t._v("https://arthas.gitee.io/jad.html jad命令")]),t._v(" "),l("p",[t._v("打开arthas 找到类 "),l("code",[t._v("[arthas@87476]$ sc sun.reflect.GeneratedMethodAccessor*")]),t._v(" 扫描动态生成的类。")]),t._v(" "),l("p",[t._v("反编译看下反射类中的代码")]),t._v(" "),l("p",[t._v("元空间使用 https://xiaogenban1993.github.io/20.04/%E7%BB%BC%E8%BF%B0_%E5%86%85%E5%AD%98.html")])])}),[],!1,null,null,null);v.default=_.exports}}]);