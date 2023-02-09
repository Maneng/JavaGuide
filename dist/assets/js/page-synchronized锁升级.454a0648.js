(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{669:function(t,a,_){"use strict";_.r(a);var r=_(1),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596467333000.png",alt:"",loading:"lazy"}})]),t._v(" "),_("p",[_("strong",[t._v("作者")]),t._v(": 西魏陶渊明\n"),_("strong",[t._v("博客")]),t._v(": "),_("a",{attrs:{href:"https://blog.springlearn.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.springlearn.cn/"),_("OutboundLink")],1)]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("西魏陶渊明")]),t._v(" "),_("p",[t._v("莫笑少年江湖梦，谁不少年梦江湖")])]),t._v(" "),_("h2",{attrs:{id:"一、重量级锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、重量级锁"}},[t._v("#")]),t._v(" 一、重量级锁")]),t._v(" "),_("p",[t._v("什么叫重量级锁？")]),t._v(" "),_("p",[t._v("就是申请资源必须经过kernel(内核也叫操作系统)，调用。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596467437000.png",alt:"",loading:"lazy"}})]),t._v(" "),_("h2",{attrs:{id:"二、轻量级锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、轻量级锁"}},[t._v("#")]),t._v(" 二、轻量级锁")]),t._v(" "),_("p",[t._v("轻量级锁,是不经过操作系统。轻量级锁是相对于重量级锁来叫的,也可以叫乐观锁。")]),t._v(" "),_("p",[t._v("在Java中乐观锁就是cas操作(compare and swap)根据英文翻译就是比较和交换。\n底层都是调用的Unsafe里面的方法,可以看到这些方法是native方法。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596467628000.png",alt:"",loading:"lazy"}})]),t._v(" "),_("p",[t._v("通过看jvm源码,看到c++的代码有一个汇编语言支持cas")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596467784000.png",alt:"",loading:"lazy"}})]),t._v(" "),_("p",[t._v("但是，这条cmpchg1不具有原子性，点进lock_if_mp(%4)里")]),t._v(" "),_("p",[t._v("最终实现是lock cmpxchg 指令：表示在硬件在执行后面的指令会锁定一个北桥总线。（相当于锁定总线，但是比锁总线要轻量级）解决了下面的问题")]),t._v(" "),_("h2",{attrs:{id:"三、偏向锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、偏向锁"}},[t._v("#")]),t._v(" 三、偏向锁")]),t._v(" "),_("p",[t._v("顾名思义，它会偏向于第一个访问锁的线程，如果在运行过程中，同步锁只有一个线程访问，不存在多线程争用的情况，则线程是不需要触发同步的，这种情况下，就会给线程加一个偏向锁。\n说白了,没有竞争,还叫啥锁呀。就是加了一个标记。认为没有人给你竞争。")]),t._v(" "),_("h2",{attrs:{id:"四、锁升级步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、锁升级步骤"}},[t._v("#")]),t._v(" 四、锁升级步骤")]),t._v(" "),_("p",[t._v("偏向锁 -> 轻量级锁 -> 重量级锁")]),t._v(" "),_("p",[t._v("在jdk1.6之前synchronized直接就是一个重量级锁,一了百了。\njdk优化后出现了,锁升级的概念。")]),t._v(" "),_("p",[t._v("那么其实synchronized的执行过程:")]),t._v(" "),_("ol",[_("li",[t._v("检测Mark Word里面是不是当前线程的ID，如果是，表示当前线程处于偏向锁")]),t._v(" "),_("li",[t._v("如果不是，则使用CAS将当前线程的ID替换Mard Word，如果成功则表示当前线程获得偏向锁，置偏向标志位1(前面一个线程刚好释放的情况下,这个才能成功,否则看3)")]),t._v(" "),_("li",[t._v("如果失败，则说明发生竞争，撤销偏向锁，进而升级为轻量级锁。")]),t._v(" "),_("li",[t._v("当前线程使用CAS将对象头的Mark Word替换为锁记录指针，如果成功，当前线程获得锁")]),t._v(" "),_("li",[t._v("如果失败，表示其他线程竞争锁，当前线程便尝试使用自旋来获取锁。")]),t._v(" "),_("li",[t._v("如果自旋成功则依然处于轻量级状态。")]),t._v(" "),_("li",[t._v("如果自旋失败，则升级为重量级锁。")])]),t._v(" "),_("p",[t._v("翻译成白话问:")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("当没有人跟你竞争就是一个偏向锁,当cas失败了,说明有人跟你竞争了,这个时候锁就从偏向锁升级成了轻量级锁。")])]),t._v(" "),_("li",[_("p",[t._v("轻量级锁的状态下,仍然还有很多线程来竞争,那么此时cas就会比较严重从而浪费cpu执行。就升级为重量级锁。\n其次其他等待线程就进入了阻塞状态。")])])]),t._v(" "),_("p",[t._v("最后求关注,求订阅,谢谢你的阅读!")])])}),[],!1,null,null,null);a.default=v.exports}}]);