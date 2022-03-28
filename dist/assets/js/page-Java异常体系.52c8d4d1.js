(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{588:function(n,a,t){"use strict";t.r(a);var s=t(1),e=Object(s.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589293715000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[t("strong",[n._v("作者")]),n._v(": 西魏陶渊明\n"),t("strong",[n._v("博客")]),n._v(": "),t("a",{attrs:{href:"https://blog.springlearn.cn/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://blog.springlearn.cn/"),t("OutboundLink")],1)]),n._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[n._v("西魏陶渊明")]),n._v(" "),t("p",[n._v("莫笑少年江湖梦，谁不少年梦江湖")])]),n._v(" "),t("p",[n._v("知己知彼方能百战不殆,在小编初学Java时候特别怕程序报异常,经常会因为异常不知所措,相信这个问题应该是所有\n初学者都会有的心理感受;如果你也有这种感受,那么只有一种解决方法:\n迎难而上,攻克Java异常体系,长痛不如短痛,只要清楚了Java的异常体系,就不会再有这种感受了。下面跟着小编来窥探Java的异常体系吧。")]),n._v(" "),t("h1",{attrs:{id:"一、java异常体系其实很简单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、java异常体系其实很简单"}},[n._v("#")]),n._v(" 一、Java异常体系其实很简单")]),n._v(" "),t("p",[n._v("其实Java的异常体系是非常简单的,简单到只要你看过本文就能明白百分之八九十的样子。当你清楚了Java的异常体系\n那么在遇到项目执行异常的时候,基本看报错的异常就大概明白问题出在哪里,遇到的错误多了,就成长了,处理的问题就是\n你未来在技术路上所积累的财富。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589294764000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[n._v("在Java的异常体系中 "),t("code",[n._v("Throwable")]),n._v(" 我们可以理解为是一个根异常,即所有的异常都是它的子类")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589295509000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("h1",{attrs:{id:"二、error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、error"}},[n._v("#")]),n._v(" 二、Error")]),n._v(" "),t("p",[n._v("前面我们说了Java的异常体系中 "),t("code",[n._v("Throwable")]),n._v(" 可以理解是一个根异常,那么 "),t("code",[n._v("Error")]),n._v(" 就是这个根节点的一个子节点。\n"),t("code",[n._v("Error")]),n._v(" 类对象由 "),t("code",[n._v("Java")]),n._v(" 虚拟机生成并抛出，大多数错误与代码编写者所执行的操作无关。程序无法处理的异常，一般伴随者jvm虚拟机停止，或者断电之类\n这种问题，是无法通过程序来解决的。")]),n._v(" "),t("p",[t("strong",[n._v("这种异常基本很少,如果遇到也不要慌,跟你的业务逻辑没有关系,顶多是Java代码写的有问题,只要不是业务问题其实大多都能先通过重启解决;\n但是假如项目还未上线,只是在开发过程中出现这种问题一定要弄清楚原因,是那一部分代码编写异常导致的,否则上线可能有重大隐患")])]),n._v(" "),t("p",[t("strong",[n._v("经验教学:")])]),n._v(" "),t("ol",[t("li",[n._v("如果是在项目系统过程中遇到这种问题,可能是因为Jar包冲突导致的。")]),n._v(" "),t("li",[n._v("如果是在项目运行过程中遇到这种问题,可能是因为对象创建过多没有释放,导致堆栈溢出。这个时候就要看GC是否频繁,然后对堆栈日志进行分析,看存在最多的对象是哪一个,然后分析代码解决。")])]),n._v(" "),t("h1",{attrs:{id:"三、exception"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、exception"}},[n._v("#")]),n._v(" 三、Exception")]),n._v(" "),t("p",[t("code",[n._v("Exception")]),n._v(" 异常时我们平时在开发中遇到最多，其实 "),t("code",[n._v("Exception")]),n._v(" 也分为两种即:")]),n._v(" "),t("ol",[t("li",[t("code",[n._v("checkException")]),n._v(" 编译异常，这种异常，是哪些没有遵守java语言规则，容易看出和解决的")]),n._v(" "),t("li",[t("code",[n._v("uncheckException")]),n._v(" 运行异常，运行异常，具有不确定性，往往难以排查，包括处理逻辑问题。")])]),n._v(" "),t("p",[n._v("然而 "),t("code",[n._v("checkException")]),n._v(" 和 "),t("code",[n._v("uncheckException")]),n._v(" 其实只是一个概念,并没有对应的 "),t("code",[n._v("Java异常类")]),n._v("。我们基本可以忽略\n"),t("code",[n._v("checkException")]),n._v(" 因为这种异常基本现在的编译器都会给我们做了，我们在写代码时候就会实时的给我提示错误了。我们\n只用关心 "),t("code",[n._v("uncheckException")]),n._v("即可。")]),n._v(" "),t("p",[t("strong",[n._v("uncheckException")])]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589297073000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[t("code",[n._v("RuntimeException")]),n._v(" + "),t("code",[n._v("Error")]),n._v(" 和其子类都是属于 "),t("code",[n._v("uncheckException")])]),n._v(" "),t("p",[n._v("前面我们已经对 "),t("code",[n._v("Error")]),n._v(" 做了说明，现在就主要来看下 "),t("code",[n._v("RuntimeException")]),n._v("。 "),t("code",[n._v("RuntimeException")]),n._v(" 从名字来看就是\n运行异常,所谓运行异常就是可能在程序运行过程中发生的异常,这种异常一般是可以通过代码逻辑进行处理的。\n我们举例一个例子,我们都知道0不能作为除数。但是假如在下面这个代码中")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('public class Tester {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("请输入被除数a:");\n        int a = sc.nextInt();\n        System.out.print("请输入除数b:");\n        int b = sc.nextInt();\n        System.out.println("a/b=" + a / b);\n    }\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br")])]),t("p",[n._v("当输入a=8,b=2,那么结果就是4。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://i02piccdn.sogoucdn.com/8206a4441e0386c3",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[t("strong",[n._v("假如我们输入b=0呢?")])]),n._v(" "),t("p",[n._v("学过数学都知道0不能做除数,程序也不运行你这么输入,但是却不能阻止你,只能通过报错的方式来告诉你。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589298143000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[n._v("那么我们就要对这个异常进行处理,当发现有这个异常就在控制台来提醒用户。那么代码就会变成这样")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('public class Tester {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("请输入被除数a:");\n        int a = sc.nextInt();\n        System.out.print("请输入除数b:");\n        int b = sc.nextInt();\n        try {\n            System.out.println("a/b=" + a / b);\n        } catch (ArithmeticException ate) {\n            //对算术异常进行捕捉\n            System.err.println("0不能作为除数,请输入不为0的任意数");\n        }\n    }\n}\n\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br")])]),t("p",[n._v('当出现算术异常直接提示: "0不能作为除数,请输入不为0的任意数"\n'),t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589298261000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[n._v("那么像这种程序中无可避免会出现,且又能通过逻辑来处理的异常就是运行异常。运行异常一般都可以正常运行,只是在特定情况下会导致异常发生。\n像这面这个例子,我们只要看到 "),t("code",[n._v("ArithmeticException")]),n._v(" 就知道是算术异常。所以只要我们对运行异常类有一个认识，其实就能解决大多数的程序问题了。\n下面我们来看下运行异常都要有哪些类把。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://i03piccdn.sogoucdn.com/f960e6a461d218d2",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[t("strong",[n._v("只要对下面运行异常类进行熟悉了,基本就清楚掌握了Java的异常体系了")])]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589299119000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589299523000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[n._v("以上就是常见的运行异常类,当然Java中还有很多不常见的异常类。剩下的我们就可以在日常工作中去学习了。")])])}),[],!1,null,null,null);a.default=e.exports},606:function(n,a,t){"use strict";t.r(a);var s=t(1),e=Object(s.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589293715000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[n._v("知己知彼方能百战不殆,在小编初学Java时候特别怕程序报异常,经常会因为异常不知所措,相信这个问题应该是所有\n初学者都会有的心理感受;如果你也有这种感受,那么只有一种解决方法:\n迎难而上,攻克Java异常体系,长痛不如短痛,只要清楚了Java的异常体系,就不会再有这种感受了。下面跟着小编来窥探Java的异常体系吧。")]),n._v(" "),t("h1",{attrs:{id:"一、java异常体系其实很简单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、java异常体系其实很简单"}},[n._v("#")]),n._v(" 一、Java异常体系其实很简单")]),n._v(" "),t("p",[n._v("其实Java的异常体系是非常简单的,简单到只要你看过本文就能明白百分之八九十的样子。当你清楚了Java的异常体系\n那么在遇到项目执行异常的时候,基本看报错的异常就大概明白问题出在哪里,遇到的错误多了,就成长了,处理的问题就是\n你未来在技术路上所积累的财富。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589294764000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[n._v("在Java的异常体系中 "),t("code",[n._v("Throwable")]),n._v(" 我们可以理解为是一个根异常,即所有的异常都是它的子类")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589295509000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("h1",{attrs:{id:"二、error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、error"}},[n._v("#")]),n._v(" 二、Error")]),n._v(" "),t("p",[n._v("前面我们说了Java的异常体系中 "),t("code",[n._v("Throwable")]),n._v(" 可以理解是一个根异常,那么 "),t("code",[n._v("Error")]),n._v(" 就是这个根节点的一个子节点。\n"),t("code",[n._v("Error")]),n._v(" 类对象由 "),t("code",[n._v("Java")]),n._v(" 虚拟机生成并抛出，大多数错误与代码编写者所执行的操作无关。程序无法处理的异常，一般伴随者jvm虚拟机停止，或者断电之类\n这种问题，是无法通过程序来解决的。")]),n._v(" "),t("p",[t("strong",[n._v("这种异常基本很少,如果遇到也不要慌,跟你的业务逻辑没有关系,顶多是Java代码写的有问题,只要不是业务问题其实大多都能先通过重启解决;\n但是假如项目还未上线,只是在开发过程中出现这种问题一定要弄清楚原因,是那一部分代码编写异常导致的,否则上线可能有重大隐患")])]),n._v(" "),t("p",[t("strong",[n._v("经验教学:")])]),n._v(" "),t("ol",[t("li",[n._v("如果是在项目系统过程中遇到这种问题,可能是因为Jar包冲突导致的。")]),n._v(" "),t("li",[n._v("如果是在项目运行过程中遇到这种问题,可能是因为对象创建过多没有释放,导致堆栈溢出。这个时候就要看GC是否频繁,然后对堆栈日志进行分析,看存在最多的对象是哪一个,然后分析代码解决。")])]),n._v(" "),t("h1",{attrs:{id:"三、exception"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、exception"}},[n._v("#")]),n._v(" 三、Exception")]),n._v(" "),t("p",[t("code",[n._v("Exception")]),n._v(" 异常时我们平时在开发中遇到最多，其实 "),t("code",[n._v("Exception")]),n._v(" 也分为两种即:")]),n._v(" "),t("ol",[t("li",[t("code",[n._v("checkException")]),n._v(" 编译异常，这种异常，是哪些没有遵守java语言规则，容易看出和解决的")]),n._v(" "),t("li",[t("code",[n._v("uncheckException")]),n._v(" 运行异常，运行异常，具有不确定性，往往难以排查，包括处理逻辑问题。")])]),n._v(" "),t("p",[n._v("然而 "),t("code",[n._v("checkException")]),n._v(" 和 "),t("code",[n._v("uncheckException")]),n._v(" 其实只是一个概念,并没有对应的 "),t("code",[n._v("Java异常类")]),n._v("。我们基本可以忽略\n"),t("code",[n._v("checkException")]),n._v(" 因为这种异常基本现在的编译器都会给我们做了，我们在写代码时候就会实时的给我提示错误了。我们\n只用关心 "),t("code",[n._v("uncheckException")]),n._v("即可。")]),n._v(" "),t("p",[t("strong",[n._v("uncheckException")])]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589297073000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[t("code",[n._v("RuntimeException")]),n._v(" + "),t("code",[n._v("Error")]),n._v(" 和其子类都是属于 "),t("code",[n._v("uncheckException")])]),n._v(" "),t("p",[n._v("前面我们已经对 "),t("code",[n._v("Error")]),n._v(" 做了说明，现在就主要来看下 "),t("code",[n._v("RuntimeException")]),n._v("。 "),t("code",[n._v("RuntimeException")]),n._v(" 从名字来看就是\n运行异常,所谓运行异常就是可能在程序运行过程中发生的异常,这种异常一般是可以通过代码逻辑进行处理的。\n我们举例一个例子,我们都知道0不能作为除数。但是假如在下面这个代码中")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('public class Tester {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("请输入被除数a:");\n        int a = sc.nextInt();\n        System.out.print("请输入除数b:");\n        int b = sc.nextInt();\n        System.out.println("a/b=" + a / b);\n    }\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br")])]),t("p",[n._v("当输入a=8,b=2,那么结果就是4。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://i02piccdn.sogoucdn.com/8206a4441e0386c3",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[t("strong",[n._v("假如我们输入b=0呢?")])]),n._v(" "),t("p",[n._v("学过数学都知道0不能做除数,程序也不运行你这么输入,但是却不能阻止你,只能通过报错的方式来告诉你。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589298143000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[n._v("那么我们就要对这个异常进行处理,当发现有这个异常就在控制台来提醒用户。那么代码就会变成这样")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('public class Tester {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("请输入被除数a:");\n        int a = sc.nextInt();\n        System.out.print("请输入除数b:");\n        int b = sc.nextInt();\n        try {\n            System.out.println("a/b=" + a / b);\n        } catch (ArithmeticException ate) {\n            //对算术异常进行捕捉\n            System.err.println("0不能作为除数,请输入不为0的任意数");\n        }\n    }\n}\n\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br")])]),t("p",[n._v('当出现算术异常直接提示: "0不能作为除数,请输入不为0的任意数"\n'),t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589298261000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[n._v("那么像这种程序中无可避免会出现,且又能通过逻辑来处理的异常就是运行异常。运行异常一般都可以正常运行,只是在特定情况下会导致异常发生。\n像这面这个例子,我们只要看到 "),t("code",[n._v("ArithmeticException")]),n._v(" 就知道是算术异常。所以只要我们对运行异常类有一个认识，其实就能解决大多数的程序问题了。\n下面我们来看下运行异常都要有哪些类把。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://i03piccdn.sogoucdn.com/f960e6a461d218d2",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[t("strong",[n._v("只要对下面运行异常类进行熟悉了,基本就清楚掌握了Java的异常体系了")])]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589299119000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589299523000.png",alt:"",loading:"lazy"}})]),n._v(" "),t("p",[n._v("以上就是常见的运行异常类,当然Java中还有很多不常见的异常类。剩下的我们就可以在日常工作中去学习了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);