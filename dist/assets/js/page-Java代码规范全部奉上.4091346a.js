(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{615:function(t,_,v){"use strict";v.r(_);var a=v(1),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1598165820000.png",alt:"",loading:"lazy"}})]),t._v(" "),v("blockquote",[v("p",[t._v("写代码就像写文章, 好的代码就像好的文章,结构严谨,构思清晰。写代码就像写文章, 一不留神就成流水账，为避免这种情况作为软件开发工程师，重要的是设计而不是实现。")])]),t._v(" "),v("p",[v("strong",[t._v("在一个团队中,由于不同经验的开发导致编程风格可能会出现非常混乱的情况,从而导致开发成本上升。难以维护。所以代码规范就显得异常重要了。")])]),t._v(" "),v("p",[t._v("本篇文章就是给出编程命名的建议,仅供参考,但是其目的是为了统一规范,提高编程能力,降低开发成本,减少代码维护成本。")]),t._v(" "),v("p",[t._v("契约精神: 做到有法可依，有章可循。")]),t._v(" "),v("h2",{attrs:{id:"一、类命名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、类命名"}},[t._v("#")]),t._v(" 一、类命名")]),t._v(" "),v("h3",{attrs:{id:"_1-抽象类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-抽象类"}},[t._v("#")]),t._v(" 1. 抽象类")]),t._v(" "),v("p",[t._v("适用的设计模式为模板模式。抽象是自下往上的设计。由具体实现推断出抽象方法。建议以Abstract开头。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("建议")]),t._v(" "),v("th",[t._v("示例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Abstract 或者 Base 开头")]),t._v(" "),v("td",[t._v("BaseUserService、AbstractUserService")])])])]),t._v(" "),v("h3",{attrs:{id:"_2-枚举类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-枚举类"}},[t._v("#")]),t._v(" 2. 枚举类")]),t._v(" "),v("ul",[v("li",[t._v("枚举是由JVM来保证的单例。可以用来做单例类。")]),t._v(" "),v("li",[t._v("枚举类常用作值判断,不建议每次进行循环判断得到实例。建议由内部维护一个map类型,当做cache。此方法建议放在static静态代码块中实现")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("建议")]),t._v(" "),v("th",[t._v("示例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Enum 作为后缀")]),t._v(" "),v("td",[t._v("GenderEnum")])])])]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("public enum ProtocolEnum {\n\n    /**\n     * ECHO协议\n     */\n    ECHO(1, null),\n\n    /**\n     * mojito协议\n     */\n    MOJITO(2, MojitoProtocol.class);\n\n    private byte type;\n\n    private Class<? extends Protocol> protocol;\n\n    private static Map<Byte, ProtocolEnum> cache = new HashMap<>();\n\n    static {\n        for (ProtocolEnum protocolEnum : values()) {\n            cache.put(protocolEnum.type, protocolEnum);\n        }\n    }\n\n    public static ProtocolEnum byType(byte type) {\n        return cache.get(type);\n    }\n}    \n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br"),v("span",{staticClass:"line-number"},[t._v("15")]),v("br"),v("span",{staticClass:"line-number"},[t._v("16")]),v("br"),v("span",{staticClass:"line-number"},[t._v("17")]),v("br"),v("span",{staticClass:"line-number"},[t._v("18")]),v("br"),v("span",{staticClass:"line-number"},[t._v("19")]),v("br"),v("span",{staticClass:"line-number"},[t._v("20")]),v("br"),v("span",{staticClass:"line-number"},[t._v("21")]),v("br"),v("span",{staticClass:"line-number"},[t._v("22")]),v("br"),v("span",{staticClass:"line-number"},[t._v("23")]),v("br"),v("span",{staticClass:"line-number"},[t._v("24")]),v("br"),v("span",{staticClass:"line-number"},[t._v("25")]),v("br"),v("span",{staticClass:"line-number"},[t._v("26")]),v("br"),v("span",{staticClass:"line-number"},[t._v("27")]),v("br"),v("span",{staticClass:"line-number"},[t._v("28")]),v("br")])]),v("h3",{attrs:{id:"_3-工具类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-工具类"}},[t._v("#")]),t._v(" 3. 工具类")]),t._v(" "),v("p",[t._v("工具类常为无状态对象,无状态对象都是线程安全对象,建议使用 "),v("code",[t._v("final")]),t._v(" 修饰。")]),t._v(" "),v("p",[t._v("工具类中避免出现业务属性, 如果出现业务属性,抽象出领域层")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("建议")]),t._v(" "),v("th",[t._v("示例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Utils作为后缀")]),t._v(" "),v("td",[t._v("StringUtils")])])])]),t._v(" "),v("h3",{attrs:{id:"_4-异常类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-异常类"}},[t._v("#")]),t._v(" 4. 异常类")]),t._v(" "),v("p",[t._v("建议保持异常链。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("建议")]),t._v(" "),v("th",[t._v("示例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Exception结尾")]),t._v(" "),v("td",[t._v("RuntimeException")])])])]),t._v(" "),v("h3",{attrs:{id:"_5-接口实现类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-接口实现类"}},[t._v("#")]),t._v(" 5. 接口实现类")]),t._v(" "),v("p",[t._v("众所周知")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("建议")]),t._v(" "),v("th",[t._v("示例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("接口名+ Impl")]),t._v(" "),v("td",[t._v("UserServiceImpl")])])])]),t._v(" "),v("h3",{attrs:{id:"_6-设计模式相关类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-设计模式相关类"}},[t._v("#")]),t._v(" 6. 设计模式相关类")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("建议")]),t._v(" "),v("th",[t._v("示例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Builder，Factory等")]),t._v(" "),v("td",[t._v("当使用到设计模式时，需要使用对应的设计模式作为后缀，如ThreadFactory")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.springlearn.cn/27c9d5187cd283f8d160ec1ed2b5ac89.jpg",alt:"",loading:"lazy"}})]),t._v(" "),v("h3",{attrs:{id:"_7-处理特定功能的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-处理特定功能的"}},[t._v("#")]),t._v(" 7. 处理特定功能的")]),t._v(" "),v("p",[t._v("其主要的目的是代码可重复使用。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("建议")]),t._v(" "),v("th",[t._v("示例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Handler，Predicate, Validator")]),t._v(" "),v("td",[t._v("表示处理器，校验器，断言，这些类工厂还有配套的方法名如handle，predicate，validate")])])])]),t._v(" "),v("h3",{attrs:{id:"_8-测试类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-测试类"}},[t._v("#")]),t._v(" 8. 测试类")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("建议")]),t._v(" "),v("th",[t._v("示例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Test结尾")]),t._v(" "),v("td",[t._v("UserServiceTest， 表示用来测试UserService类的")])])])]),t._v(" "),v("h3",{attrs:{id:"_9-领域模型载体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-领域模型载体"}},[t._v("#")]),t._v(" 9. 领域模型载体")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("建议")]),t._v(" "),v("th",[t._v("示例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("DTO/*Request")]),t._v(" "),v("td",[t._v("数据传输对象")])]),t._v(" "),v("tr",[v("td",[t._v("BO")]),t._v(" "),v("td",[t._v("业务对象")])]),t._v(" "),v("tr",[v("td",[t._v("VO")]),t._v(" "),v("td",[t._v("数据展示对象,用于承载页面数据")])]),t._v(" "),v("tr",[v("td",[t._v("DO")]),t._v(" "),v("td",[t._v("数据持久化对象")])])])]),t._v(" "),v("h2",{attrs:{id:"二、方法命名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、方法命名"}},[t._v("#")]),t._v(" 二、方法命名")]),t._v(" "),v("p",[t._v("参考于网络。")]),t._v(" "),v("h3",{attrs:{id:"_1-布尔判断方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-布尔判断方法"}},[t._v("#")]),t._v(" 1. 布尔判断方法")]),t._v(" "),v("p",[t._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("位置")])]),t._v(" "),v("th",[v("strong",[t._v("单词")])]),t._v(" "),v("th",[v("strong",[t._v("意义")])]),t._v(" "),v("th",[v("strong",[t._v("例")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("is")]),t._v(" "),v("td",[t._v("对象是否符合期待的状态")]),t._v(" "),v("td",[t._v("isValid")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("can")]),t._v(" "),v("td",[t._v("对象"),v("strong",[t._v("能否执行")]),t._v("所期待的动作")]),t._v(" "),v("td",[t._v("canRemove")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("should")]),t._v(" "),v("td",[t._v("调用方执行某个命令或方法是"),v("strong",[t._v("好还是不好")]),t._v(","),v("strong",[t._v("应不应该")]),t._v("，或者说"),v("strong",[t._v("推荐还是不推荐")])]),t._v(" "),v("td",[t._v("shouldMigrate")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("has")]),t._v(" "),v("td",[t._v("对象"),v("strong",[t._v("是否持有")]),t._v("所期待的数据和属性")]),t._v(" "),v("td",[t._v("hasObservers")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("needs")]),t._v(" "),v("td",[t._v("调用方"),v("strong",[t._v("是否需要")]),t._v("执行某个命令或方法")]),t._v(" "),v("td",[t._v("needsMigrate")])])])]),t._v(" "),v("h3",{attrs:{id:"_2-检查的方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-检查的方法"}},[t._v("#")]),t._v(" 2. 检查的方法")]),t._v(" "),v("p",[t._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("单词")])]),t._v(" "),v("th",[v("strong",[t._v("意义")])]),t._v(" "),v("th",[v("strong",[t._v("例")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ensure")]),t._v(" "),v("td",[t._v("检查是否为期待的状态，不是则抛出异常或返回error code")]),t._v(" "),v("td",[t._v("ensureCapacity")])]),t._v(" "),v("tr",[v("td",[t._v("validate")]),t._v(" "),v("td",[t._v("检查是否为正确的状态，不是则抛出异常或返回error code")]),t._v(" "),v("td",[t._v("validateInputs")])])])]),t._v(" "),v("h3",{attrs:{id:"_3-按需求才执行的方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-按需求才执行的方法"}},[t._v("#")]),t._v(" 3. 按需求才执行的方法")]),t._v(" "),v("p",[t._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("位置")])]),t._v(" "),v("th",[v("strong",[t._v("单词")])]),t._v(" "),v("th",[v("strong",[t._v("意义")])]),t._v(" "),v("th",[v("strong",[t._v("例")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Suffix")]),t._v(" "),v("td",[t._v("IfNeeded")]),t._v(" "),v("td",[t._v("需要的时候执行，不需要的时候什么都不做")]),t._v(" "),v("td",[t._v("drawIfNeeded")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("might")]),t._v(" "),v("td",[t._v("同上")]),t._v(" "),v("td",[t._v("mightCreate")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("try")]),t._v(" "),v("td",[t._v("尝试执行，失败时抛出异常或是返回errorcode")]),t._v(" "),v("td",[t._v("tryCreate")])]),t._v(" "),v("tr",[v("td",[t._v("Suffix")]),t._v(" "),v("td",[t._v("OrDefault")]),t._v(" "),v("td",[t._v("尝试执行，失败时返回默认值")]),t._v(" "),v("td",[t._v("getOrDefault")])]),t._v(" "),v("tr",[v("td",[t._v("Suffix")]),t._v(" "),v("td",[t._v("OrElse")]),t._v(" "),v("td",[t._v("尝试执行、失败时返回实际参数中指定的值")]),t._v(" "),v("td",[t._v("getOrElse")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("force")]),t._v(" "),v("td",[t._v("强制尝试执行。error抛出异常或是返回值")]),t._v(" "),v("td",[t._v("forceCreate, forceStop")])])])]),t._v(" "),v("h3",{attrs:{id:"_4-异步相关方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-异步相关方法"}},[t._v("#")]),t._v(" 4. 异步相关方法")]),t._v(" "),v("p",[t._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("位置")])]),t._v(" "),v("th",[v("strong",[t._v("单词")])]),t._v(" "),v("th",[v("strong",[t._v("意义")])]),t._v(" "),v("th",[v("strong",[t._v("例")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("blocking")]),t._v(" "),v("td",[t._v("线程阻塞方法")]),t._v(" "),v("td",[t._v("blockingGetUser")])]),t._v(" "),v("tr",[v("td",[t._v("Suffix")]),t._v(" "),v("td",[t._v("InBackground")]),t._v(" "),v("td",[t._v("执行在后台的线程")]),t._v(" "),v("td",[t._v("doInBackground")])]),t._v(" "),v("tr",[v("td",[t._v("Suffix")]),t._v(" "),v("td",[t._v("Async")]),t._v(" "),v("td",[t._v("异步方法")]),t._v(" "),v("td",[t._v("sendAsync")])]),t._v(" "),v("tr",[v("td",[t._v("Suffix")]),t._v(" "),v("td",[t._v("Sync")]),t._v(" "),v("td",[t._v("对应已有异步方法的同步方法")]),t._v(" "),v("td",[t._v("sendSync")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix or Alone")]),t._v(" "),v("td",[t._v("schedule")]),t._v(" "),v("td",[t._v("Job和Task放入队列")]),t._v(" "),v("td",[t._v("schedule, scheduleJob")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix or Alone")]),t._v(" "),v("td",[t._v("post")]),t._v(" "),v("td",[t._v("同上")]),t._v(" "),v("td",[t._v("postJob")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix or Alone")]),t._v(" "),v("td",[t._v("execute")]),t._v(" "),v("td",[t._v("执行异步方法（注：我一般拿这个做同步方法名）")]),t._v(" "),v("td",[t._v("execute, executeTask")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix or Alone")]),t._v(" "),v("td",[t._v("start")]),t._v(" "),v("td",[t._v("同上")]),t._v(" "),v("td",[t._v("start, startJob")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix or Alone")]),t._v(" "),v("td",[t._v("cancel")]),t._v(" "),v("td",[t._v("停止异步方法")]),t._v(" "),v("td",[t._v("cancel, cancelJob")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix or Alone")]),t._v(" "),v("td",[t._v("stop")]),t._v(" "),v("td",[t._v("同上")]),t._v(" "),v("td",[t._v("stop, stopJob")])])])]),t._v(" "),v("h3",{attrs:{id:"_5-回调方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-回调方法"}},[t._v("#")]),t._v(" 5. 回调方法")]),t._v(" "),v("p",[t._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("位置")])]),t._v(" "),v("th",[v("strong",[t._v("单词")])]),t._v(" "),v("th",[v("strong",[t._v("意义")])]),t._v(" "),v("th",[v("strong",[t._v("例")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("on")]),t._v(" "),v("td",[t._v("事件发生时执行")]),t._v(" "),v("td",[t._v("onCompleted")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("before")]),t._v(" "),v("td",[t._v("事件发生前执行")]),t._v(" "),v("td",[t._v("beforeUpdate")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("pre")]),t._v(" "),v("td",[t._v("同上")]),t._v(" "),v("td",[t._v("preUpdate")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("will")]),t._v(" "),v("td",[t._v("同上")]),t._v(" "),v("td",[t._v("willUpdate")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("after")]),t._v(" "),v("td",[t._v("事件发生后执行")]),t._v(" "),v("td",[t._v("afterUpdate")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("post")]),t._v(" "),v("td",[t._v("同上")]),t._v(" "),v("td",[t._v("postUpdate")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("did")]),t._v(" "),v("td",[t._v("同上")]),t._v(" "),v("td",[t._v("didUpdate")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("should")]),t._v(" "),v("td",[t._v("确认事件是否可以发生时执行")]),t._v(" "),v("td",[t._v("shouldUpdate")])])])]),t._v(" "),v("h3",{attrs:{id:"_6-操作对象生命周期的方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-操作对象生命周期的方法"}},[t._v("#")]),t._v(" 6. 操作对象生命周期的方法")]),t._v(" "),v("p",[t._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("单词")])]),t._v(" "),v("th",[v("strong",[t._v("意义")])]),t._v(" "),v("th",[v("strong",[t._v("例")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("initialize")]),t._v(" "),v("td",[t._v("初始化。也可作为延迟初始化使用")]),t._v(" "),v("td",[t._v("initialize")])]),t._v(" "),v("tr",[v("td",[t._v("pause")]),t._v(" "),v("td",[t._v("暂停")]),t._v(" "),v("td",[t._v("onPause ，pause")])]),t._v(" "),v("tr",[v("td",[t._v("stop")]),t._v(" "),v("td",[t._v("停止")]),t._v(" "),v("td",[t._v("onStop，stop")])]),t._v(" "),v("tr",[v("td",[t._v("abandon")]),t._v(" "),v("td",[t._v("销毁的替代")]),t._v(" "),v("td",[t._v("abandon")])]),t._v(" "),v("tr",[v("td",[t._v("destroy")]),t._v(" "),v("td",[t._v("同上")]),t._v(" "),v("td",[t._v("destroy")])]),t._v(" "),v("tr",[v("td",[t._v("dispose")]),t._v(" "),v("td",[t._v("同上")]),t._v(" "),v("td",[t._v("dispose")])])])]),t._v(" "),v("h3",{attrs:{id:"_7-与集合操作相关的方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-与集合操作相关的方法"}},[t._v("#")]),t._v(" 7. 与集合操作相关的方法")]),t._v(" "),v("p",[t._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("单词")])]),t._v(" "),v("th",[v("strong",[t._v("意义")])]),t._v(" "),v("th",[v("strong",[t._v("例")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("contains")]),t._v(" "),v("td",[t._v("是否持有与指定对象相同的对象")]),t._v(" "),v("td",[t._v("contains")])]),t._v(" "),v("tr",[v("td",[t._v("add")]),t._v(" "),v("td",[t._v("添加")]),t._v(" "),v("td",[t._v("addJob")])]),t._v(" "),v("tr",[v("td",[t._v("append")]),t._v(" "),v("td",[t._v("添加")]),t._v(" "),v("td",[t._v("appendJob")])]),t._v(" "),v("tr",[v("td",[t._v("insert")]),t._v(" "),v("td",[t._v("插入到下标n")]),t._v(" "),v("td",[t._v("insertJob")])]),t._v(" "),v("tr",[v("td",[t._v("put")]),t._v(" "),v("td",[t._v("添加与key对应的元素")]),t._v(" "),v("td",[t._v("putJob")])]),t._v(" "),v("tr",[v("td",[t._v("remove")]),t._v(" "),v("td",[t._v("移除元素")]),t._v(" "),v("td",[t._v("removeJob")])]),t._v(" "),v("tr",[v("td",[t._v("enqueue")]),t._v(" "),v("td",[t._v("添加到队列的最末位")]),t._v(" "),v("td",[t._v("enqueueJob")])]),t._v(" "),v("tr",[v("td",[t._v("dequeue")]),t._v(" "),v("td",[t._v("从队列中头部取出并移除")]),t._v(" "),v("td",[t._v("dequeueJob")])]),t._v(" "),v("tr",[v("td",[t._v("push")]),t._v(" "),v("td",[t._v("添加到栈头")]),t._v(" "),v("td",[t._v("pushJob")])]),t._v(" "),v("tr",[v("td",[t._v("pop")]),t._v(" "),v("td",[t._v("从栈头取出并移除")]),t._v(" "),v("td",[t._v("popJob")])]),t._v(" "),v("tr",[v("td",[t._v("peek")]),t._v(" "),v("td",[t._v("从栈头取出但不移除")]),t._v(" "),v("td",[t._v("peekJob")])]),t._v(" "),v("tr",[v("td",[t._v("find")]),t._v(" "),v("td",[t._v("寻找符合条件的某物")]),t._v(" "),v("td",[t._v("findById")])])])]),t._v(" "),v("h3",{attrs:{id:"_8-数据增删改查相关的方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-数据增删改查相关的方法"}},[t._v("#")]),t._v(" 8. 数据增删改查相关的方法")]),t._v(" "),v("p",[t._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("单词")])]),t._v(" "),v("th",[v("strong",[t._v("意义")])]),t._v(" "),v("th",[v("strong",[t._v("例")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("create")]),t._v(" "),v("td",[t._v("新创建")]),t._v(" "),v("td",[t._v("createAccount")])]),t._v(" "),v("tr",[v("td",[t._v("new")]),t._v(" "),v("td",[t._v("新创建")]),t._v(" "),v("td",[t._v("newAccount")])]),t._v(" "),v("tr",[v("td",[t._v("from")]),t._v(" "),v("td",[t._v("从既有的某物新建，或是从其他的数据新建")]),t._v(" "),v("td",[t._v("fromConfig")])]),t._v(" "),v("tr",[v("td",[t._v("to")]),t._v(" "),v("td",[t._v("转换")]),t._v(" "),v("td",[t._v("toString")])]),t._v(" "),v("tr",[v("td",[t._v("update")]),t._v(" "),v("td",[t._v("更新既有某物")]),t._v(" "),v("td",[t._v("updateAccount")])]),t._v(" "),v("tr",[v("td",[t._v("load")]),t._v(" "),v("td",[t._v("读取")]),t._v(" "),v("td",[t._v("loadAccount")])]),t._v(" "),v("tr",[v("td",[t._v("fetch")]),t._v(" "),v("td",[t._v("远程读取")]),t._v(" "),v("td",[t._v("fetchAccount")])]),t._v(" "),v("tr",[v("td",[t._v("delete")]),t._v(" "),v("td",[t._v("删除")]),t._v(" "),v("td",[t._v("deleteAccount")])]),t._v(" "),v("tr",[v("td",[t._v("remove")]),t._v(" "),v("td",[t._v("删除")]),t._v(" "),v("td",[t._v("removeAccount")])]),t._v(" "),v("tr",[v("td",[t._v("save")]),t._v(" "),v("td",[t._v("保存")]),t._v(" "),v("td",[t._v("saveAccount")])]),t._v(" "),v("tr",[v("td",[t._v("store")]),t._v(" "),v("td",[t._v("保存")]),t._v(" "),v("td",[t._v("storeAccount")])]),t._v(" "),v("tr",[v("td",[t._v("commit")]),t._v(" "),v("td",[t._v("保存")]),t._v(" "),v("td",[t._v("commitChange")])]),t._v(" "),v("tr",[v("td",[t._v("apply")]),t._v(" "),v("td",[t._v("保存或应用")]),t._v(" "),v("td",[t._v("applyChange")])]),t._v(" "),v("tr",[v("td",[t._v("clear")]),t._v(" "),v("td",[t._v("清除数据或是恢复到初始状态")]),t._v(" "),v("td",[t._v("clearAll")])]),t._v(" "),v("tr",[v("td",[t._v("reset")]),t._v(" "),v("td",[t._v("清除数据或是恢复到初始状态")]),t._v(" "),v("td",[t._v("resetAll")])])])]),t._v(" "),v("h3",{attrs:{id:"_9-成对出现的动词"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-成对出现的动词"}},[t._v("#")]),t._v(" 9. 成对出现的动词")]),t._v(" "),v("p",[t._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("单词")])]),t._v(" "),v("th",[v("strong",[t._v("意义")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("get获取")]),t._v(" "),v("td",[t._v("set 设置")])]),t._v(" "),v("tr",[v("td",[t._v("add 增加")]),t._v(" "),v("td",[t._v("remove 删除")])]),t._v(" "),v("tr",[v("td",[t._v("create 创建")]),t._v(" "),v("td",[t._v("destory 移除")])]),t._v(" "),v("tr",[v("td",[t._v("start 启动")]),t._v(" "),v("td",[t._v("stop 停止")])]),t._v(" "),v("tr",[v("td",[t._v("open 打开")]),t._v(" "),v("td",[t._v("close 关闭")])]),t._v(" "),v("tr",[v("td",[t._v("read 读取")]),t._v(" "),v("td",[t._v("write 写入")])]),t._v(" "),v("tr",[v("td",[t._v("load 载入")]),t._v(" "),v("td",[t._v("save 保存")])]),t._v(" "),v("tr",[v("td",[t._v("create 创建")]),t._v(" "),v("td",[t._v("destroy 销毁")])]),t._v(" "),v("tr",[v("td",[t._v("begin 开始")]),t._v(" "),v("td",[t._v("end 结束")])]),t._v(" "),v("tr",[v("td",[t._v("backup 备份")]),t._v(" "),v("td",[t._v("restore 恢复")])]),t._v(" "),v("tr",[v("td",[t._v("import 导入")]),t._v(" "),v("td",[t._v("export 导出")])]),t._v(" "),v("tr",[v("td",[t._v("split 分割")]),t._v(" "),v("td",[t._v("merge 合并")])]),t._v(" "),v("tr",[v("td",[t._v("inject 注入")]),t._v(" "),v("td",[t._v("extract 提取")])]),t._v(" "),v("tr",[v("td",[t._v("attach 附着")]),t._v(" "),v("td",[t._v("detach 脱离")])]),t._v(" "),v("tr",[v("td",[t._v("bind 绑定")]),t._v(" "),v("td",[t._v("separate 分离")])]),t._v(" "),v("tr",[v("td",[t._v("view 查看")]),t._v(" "),v("td",[t._v("browse 浏览")])]),t._v(" "),v("tr",[v("td",[t._v("edit 编辑")]),t._v(" "),v("td",[t._v("modify 修改")])]),t._v(" "),v("tr",[v("td",[t._v("select 选取")]),t._v(" "),v("td",[t._v("mark 标记")])]),t._v(" "),v("tr",[v("td",[t._v("copy 复制")]),t._v(" "),v("td",[t._v("paste 粘贴")])]),t._v(" "),v("tr",[v("td",[t._v("undo 撤销")]),t._v(" "),v("td",[t._v("redo 重做")])]),t._v(" "),v("tr",[v("td",[t._v("insert 插入")]),t._v(" "),v("td",[t._v("delete 移除")])]),t._v(" "),v("tr",[v("td",[t._v("add 加入")]),t._v(" "),v("td",[t._v("append 添加")])]),t._v(" "),v("tr",[v("td",[t._v("clean 清理")]),t._v(" "),v("td",[t._v("clear 清除")])]),t._v(" "),v("tr",[v("td",[t._v("index 索引")]),t._v(" "),v("td",[t._v("sort 排序")])]),t._v(" "),v("tr",[v("td",[t._v("find 查找")]),t._v(" "),v("td",[t._v("search 搜索")])]),t._v(" "),v("tr",[v("td",[t._v("increase 增加")]),t._v(" "),v("td",[t._v("decrease 减少")])]),t._v(" "),v("tr",[v("td",[t._v("play 播放")]),t._v(" "),v("td",[t._v("pause 暂停")])]),t._v(" "),v("tr",[v("td",[t._v("launch 启动")]),t._v(" "),v("td",[t._v("run 运行")])]),t._v(" "),v("tr",[v("td",[t._v("compile 编译")]),t._v(" "),v("td",[t._v("execute 执行")])]),t._v(" "),v("tr",[v("td",[t._v("debug 调试")]),t._v(" "),v("td",[t._v("trace 跟踪")])]),t._v(" "),v("tr",[v("td",[t._v("observe 观察")]),t._v(" "),v("td",[t._v("listen 监听")])]),t._v(" "),v("tr",[v("td",[t._v("build 构建")]),t._v(" "),v("td",[t._v("publish 发布")])]),t._v(" "),v("tr",[v("td",[t._v("input 输入")]),t._v(" "),v("td",[t._v("output 输出")])]),t._v(" "),v("tr",[v("td",[t._v("encode 编码")]),t._v(" "),v("td",[t._v("decode 解码")])]),t._v(" "),v("tr",[v("td",[t._v("encrypt 加密")]),t._v(" "),v("td",[t._v("decrypt 解密")])]),t._v(" "),v("tr",[v("td",[t._v("compress 压缩")]),t._v(" "),v("td",[t._v("decompress 解压缩")])]),t._v(" "),v("tr",[v("td",[t._v("pack 打包")]),t._v(" "),v("td",[t._v("unpack 解包")])]),t._v(" "),v("tr",[v("td",[t._v("parse 解析")]),t._v(" "),v("td",[t._v("emit 生成")])]),t._v(" "),v("tr",[v("td",[t._v("connect 连接")]),t._v(" "),v("td",[t._v("disconnect 断开")])]),t._v(" "),v("tr",[v("td",[t._v("send 发送")]),t._v(" "),v("td",[t._v("receive 接收")])]),t._v(" "),v("tr",[v("td",[t._v("download 下载")]),t._v(" "),v("td",[t._v("upload 上传")])]),t._v(" "),v("tr",[v("td",[t._v("refresh 刷新")]),t._v(" "),v("td",[t._v("synchronize 同步")])]),t._v(" "),v("tr",[v("td",[t._v("update 更新")]),t._v(" "),v("td",[t._v("revert 复原")])]),t._v(" "),v("tr",[v("td",[t._v("lock 锁定")]),t._v(" "),v("td",[t._v("unlock 解锁")])]),t._v(" "),v("tr",[v("td",[t._v("check out 签出")]),t._v(" "),v("td",[t._v("check in 签入")])]),t._v(" "),v("tr",[v("td",[t._v("submit 提交")]),t._v(" "),v("td",[t._v("commit 交付")])]),t._v(" "),v("tr",[v("td",[t._v("push 推")]),t._v(" "),v("td",[t._v("pull 拉")])]),t._v(" "),v("tr",[v("td",[t._v("expand 展开")]),t._v(" "),v("td",[t._v("collapse 折叠")])]),t._v(" "),v("tr",[v("td",[t._v("begin 起始")]),t._v(" "),v("td",[t._v("end 结束")])]),t._v(" "),v("tr",[v("td",[t._v("start 开始")]),t._v(" "),v("td",[t._v("finish 完成")])]),t._v(" "),v("tr",[v("td",[t._v("enter 进入")]),t._v(" "),v("td",[t._v("exit 退出")])]),t._v(" "),v("tr",[v("td",[t._v("abort 放弃")]),t._v(" "),v("td",[t._v("quit 离开")])]),t._v(" "),v("tr",[v("td",[t._v("obsolete 废弃")]),t._v(" "),v("td",[t._v("depreciate 废旧")])]),t._v(" "),v("tr",[v("td",[t._v("collect 收集")]),t._v(" "),v("td",[t._v("aggregate 聚集")])])])]),t._v(" "),v("h3",{attrs:{id:"_10-获取必须的参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-获取必须的参数"}},[t._v("#")]),t._v(" 10. 获取必须的参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("getRequiredProperty")]),t._v(" "),v("th",[t._v("获取必须的参数,否则报错,该方法一般都要抛出异常")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("getProperty")]),t._v(" "),v("td",[t._v("非必须参数,可以返回null，不报错，调用方自行判断处理逻辑")])])])]),t._v(" "),v("h3",{attrs:{id:"_11-获取数据并对数据进行某种处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-获取数据并对数据进行某种处理"}},[t._v("#")]),t._v(" 11. 获取数据并对数据进行某种处理")]),t._v(" "),v("p",[t._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("位置")]),t._v(" "),v("th",[t._v("单词")]),t._v(" "),v("th",[t._v("意义")]),t._v(" "),v("th",[t._v("例子")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("resolve")]),t._v(" "),v("td",[t._v("解决某些问题,比如对文本占位符进行填充,并获取到填充后的值")]),t._v(" "),v("td",[t._v("resolvePlaceholders")])]),t._v(" "),v("tr",[v("td",[t._v("Suffix")]),t._v(" "),v("td",[t._v("Placeholders")]),t._v(" "),v("td",[t._v("占位符相关命名")]),t._v(" "),v("td",[t._v("resolvePlaceholders")])])])]),t._v(" "),v("h2",{attrs:{id:"三、方法编程建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、方法编程建议"}},[t._v("#")]),t._v(" 三、方法编程建议")]),t._v(" "),v("h3",{attrs:{id:"_1-方法复杂度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-方法复杂度"}},[t._v("#")]),t._v(" 1. 方法复杂度")]),t._v(" "),v("p",[t._v("凡是逻辑判断语句均为复杂度。当一个方法中出现了大于等于10个复杂度。建议根据")]),t._v(" "),v("p",[t._v("方法实现进行业务抽离。两个建议点(1. 方法单一职责 2. 方法可重复利用 3. 是否能用策略模式或者命令模式)")]),t._v(" "),v("h3",{attrs:{id:"_2-方法长度及宽度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-方法长度及宽度"}},[t._v("#")]),t._v(" 2.方法长度及宽度")]),t._v(" "),v("p",[t._v("长度: 方法的长度建议控制在80-120行以内。满足一屏可以放下。\n宽度: 当方法超过3个及以上入参,建议使用对象封装(对象容易后期扩展,且不会出现眼花缭乱现象)")]),t._v(" "),v("h3",{attrs:{id:"_3-关注方法优化编辑器提示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-关注方法优化编辑器提示"}},[t._v("#")]),t._v(" 3.关注方法优化编辑器提示")]),t._v(" "),v("p",[t._v("减少出现黄色警告⚠️, 最好不要出现警告。编辑器的警告都是优化点,需要在编程时候考虑进去。")]),t._v(" "),v("p",[t._v("eg: 性能优化、命名不规范、重复代码")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/21643544635/2678603850/7fbfc8ab-22ca-4f92-be04-31c4d1b704e3.png",alt:"img",loading:"lazy"}})]),t._v(" "),v("h3",{attrs:{id:"_4-方法重复代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-方法重复代码"}},[t._v("#")]),t._v(" 4.方法重复代码")]),t._v(" "),v("p",[t._v("贫血模型的标志性问题")]),t._v(" "),v("p",[t._v("重复代码编辑器会提出警告,此种现象,强烈建议不要出现")]),t._v(" "),v("h3",{attrs:{id:"_5-方法注释"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-方法注释"}},[t._v("#")]),t._v(" 5. 方法注释")]),t._v(" "),v("p",[t._v("注释是必须要做的(先写注释在做实现)，重在设计。")]),t._v(" "),v("p",[t._v("代码是公司财产, 要对自己对公司对后人负责,先写注释再做实现。")]),t._v(" "),v("h2",{attrs:{id:"四、项目依赖模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、项目依赖模型"}},[t._v("#")]),t._v(" 四、项目依赖模型")]),t._v(" "),v("h3",{attrs:{id:"_1-领域设计的认识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-领域设计的认识"}},[t._v("#")]),t._v(" 1. 领域设计的认识")]),t._v(" "),v("p",[t._v("领域划分,用另外一个词形容也非常的合适,就是业务模块化。所有能力都进行能力化抽象,形成模块,形成领域。 当遇到新的业务逻辑,底层的数据结构和数据关系肯定也是一样的。那么就可以像堆积木一样,根据这些模块快速的组装成新的业务逻辑。快速的实现业务的迭代和升级。")]),t._v(" "),v("p",[t._v("关于这个问题,需要结合自己的业务系统来进行抽象和设计。")]),t._v(" "),v("p",[t._v("设计核心: 用面向对象的设计思想对业务进行解耦来做到领域划分。")]),t._v(" "),v("h3",{attrs:{id:"_2-层次划分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-层次划分"}},[t._v("#")]),t._v(" 2. 层次划分")]),t._v(" "),v("h4",{attrs:{id:"基础层-外部调用-db操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础层-外部调用-db操作"}},[t._v("#")]),t._v(" 基础层(外部调用,db操作)")]),t._v(" "),v("p",[t._v("注意: 基础层只做适配不做业务")]),t._v(" "),v("ul",[v("li",[t._v("db操作以dao结尾")]),t._v(" "),v("li",[t._v("外部调用以Client(Http协议)/Instruction(Rpc协议)\n"),v("ul",[v("li",[t._v("改层仅仅做数据适配,不做业务处理。")])])])]),t._v(" "),v("h4",{attrs:{id:"领域层-偏向领域的业务逻辑"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#领域层-偏向领域的业务逻辑"}},[t._v("#")]),t._v(" 领域层(偏向领域的业务逻辑)")]),t._v(" "),v("p",[t._v("以Manager")]),t._v(" "),v("h4",{attrs:{id:"业务层-对领域层的业务编排"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#业务层-对领域层的业务编排"}},[t._v("#")]),t._v(" 业务层(对领域层的业务编排)")]),t._v(" "),v("p",[t._v("以Service结尾")]),t._v(" "),v("h4",{attrs:{id:"外观层-可以提供能力-可以提供视图-。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#外观层-可以提供能力-可以提供视图-。"}},[t._v("#")]),t._v(" 外观层(可以提供能力,可以提供视图)。")]),t._v(" "),v("p",[t._v("以Resource、Facade结尾")]),t._v(" "),v("p",[t._v("有一个完善的领域层,可以方便快速便捷的对业务进行扩展。与其对立的就是贫血模型。没有领域层只有业务层,业务逻辑都堆积在业务层。典型的面向过程设计。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/21643544635/2678603850/8be6e99c-f5e9-4a8a-bce4-85f5aa3717e7.png",alt:"img",loading:"lazy"}})]),t._v(" "),v("h3",{attrs:{id:"_3-层次依赖模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-层次依赖模型"}},[t._v("#")]),t._v(" 3. 层次依赖模型")]),t._v(" "),v("p",[t._v("maven多模块应用和单模块应用通用。")]),t._v(" "),v("p",[t._v("一定要控制项目的依赖情况。")]),t._v(" "),v("p",[t._v("①service只能出现领域层的依赖, 领域层只能存在dao层和第三方服务层。")]),t._v(" "),v("p",[t._v("②各个层代码不能平行调用(出现平行调用逻辑,要抽象出领域层来封装)。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/21643544635/2678603850/c08a058d-8c81-45c4-bdc4-82d666a304f7.png",alt:"img",loading:"lazy"}})]),t._v(" "),v("p",[t._v("具体代码体现就是")]),t._v(" "),v("ul",[v("li",[t._v("以Service命名的类,里面只能存在Manager")]),t._v(" "),v("li",[t._v("以Manager命名的类,里面只能存在Dao和Client(Http协议)/Instruction(Rpc协议)封装的第三方调用")]),t._v(" "),v("li",[t._v("以Dao命名的类是对数据库的操作")]),t._v(" "),v("li",[t._v("以Client(Http协议)/Instruction(Rpc协议)命名的类,作为适配层与第三方API进行交互封装")])]),t._v(" "),v("h2",{attrs:{id:"五、设计模式六大原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、设计模式六大原则"}},[t._v("#")]),t._v(" 五、设计模式六大原则")]),t._v(" "),v("p",[t._v("代码编程时候要向以下这6大原则,进行向其靠拢。")]),t._v(" "),v("h3",{attrs:{id:"_1-开闭原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-开闭原则"}},[t._v("#")]),t._v(" 1. 开闭原则")]),t._v(" "),v("p",[t._v("一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。")]),t._v(" "),v("p",[v("strong",[t._v("代码设计建议")])]),t._v(" "),v("p",[t._v("用抽象构建框架，用实现扩展细节因为抽象灵活性好，适应性广，只要抽象的合理，可以基本保持软件架构的稳定。")]),t._v(" "),v("h3",{attrs:{id:"_2-单一职责"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-单一职责"}},[t._v("#")]),t._v(" 2. 单一职责")]),t._v(" "),v("p",[t._v("不要存在多于一个导致类变更的原因通俗的说，即一个类只负责一项职责。")]),t._v(" "),v("p",[v("strong",[t._v("代码设计建议")])]),t._v(" "),v("p",[t._v("在具体方法编写或者类编写时候,类编写时候业务要单一,方法编写时候实现要单一")]),t._v(" "),v("p",[t._v("反例:")]),t._v(" "),v("p",[t._v("UserService 类中提供了获取商品信息的接口")]),t._v(" "),v("p",[t._v("setUserName(String name)方法的时候,对name的值进行了二次处理。")]),t._v(" "),v("h3",{attrs:{id:"_3-里氏替换原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-里氏替换原则"}},[t._v("#")]),t._v(" 3. "),v("strong",[t._v("里氏替换原则")])]),t._v(" "),v("p",[t._v("所有引用基类的地方必须能透明地使用其子类的对象。")]),t._v(" "),v("p",[v("strong",[t._v("代码设计建议")])]),t._v(" "),v("p",[t._v("面向接口编程, 子类能透明替换父类。")]),t._v(" "),v("h3",{attrs:{id:"_4-依赖倒置原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-依赖倒置原则"}},[t._v("#")]),t._v(" 4. "),v("strong",[t._v("依赖倒置原则")])]),t._v(" "),v("p",[t._v("高层模块不应该依赖低层模块，二者都应该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象。")]),t._v(" "),v("p",[v("strong",[t._v("代码设计建议")])]),t._v(" "),v("p",[t._v("要根据接口或者抽象去设计,不要依赖于细节,eg.项目中要换数据库,不用重新写底层的数据库代码. 就是使用了hibernate一样,替换方言就好了,因为hibernate是根据接口设计的,不同数据库有不同的实现,可以直接使用. eg2: 我生病了要去买药,如果A药铺,没有我就用B药铺买. 因为他们都是药铺,都有一样的功能,可以友好的替换")]),t._v(" "),v("h3",{attrs:{id:"_5-接口隔离原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-接口隔离原则"}},[t._v("#")]),t._v(" "),v("strong",[t._v("5. 接口隔离原则")])]),t._v(" "),v("p",[t._v("客户端不应该依赖它不需要的接口；一个类对另一个类的依赖应该建立在最小的接口上。")]),t._v(" "),v("p",[v("strong",[t._v("代码设计建议")])]),t._v(" "),v("p",[t._v("保持最小的责任。")]),t._v(" "),v("p",[t._v("eg: 接口ConfigurableApplicationContext实现了Lifecycle和Closeable接口。他们其中每个里面定义的接口都很少,为什么不定义到一起呢?")]),t._v(" "),v("p",[t._v("首先第一责任清晰单一,第二做到接口隔离。")]),t._v(" "),v("p",[t._v("当某一个方法只用到生命周期的方法,那么方法就可以写成。")]),t._v(" "),v("p",[t._v("public void stop(Lifecycle lifecycle); 调用时候用->public void stop(new ConfigurableApplicationContext());")]),t._v(" "),v("p",[t._v("public void close(Closeable closeable); 调用时候用->public void close(new ConfigurableApplicationContext());")]),t._v(" "),v("p",[t._v("stop里面的实现就只能调用Lifecycle里面的方法,而不能调用ConfigurableApplicationContext里面的方法。从而来达到接口隔离原则")]),t._v(" "),v("h3",{attrs:{id:"_6-迪米特法则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-迪米特法则"}},[t._v("#")]),t._v(" 6. "),v("strong",[t._v("迪米特法则")])]),t._v(" "),v("p",[t._v("一个对象应该对其他对象保持最少的了解。")]),t._v(" "),v("p",[v("strong",[t._v("代码设计建议")])]),t._v(" "),v("p",[t._v("减少类与类之间的关系,接口隔离也可以做到。")]),t._v(" "),v("h2",{attrs:{id:"六、版本迭代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六、版本迭代"}},[t._v("#")]),t._v(" 六、版本迭代")]),t._v(" "),v("p",[t._v("master分支版本后缀 "),v("span",{staticClass:"katex"},[v("span",{staticClass:"katex-mathml"},[v("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[v("semantics",[v("mrow",[v("mtext",[t._v("大版本号")]),v("mi",{attrs:{mathvariant:"normal"}},[t._v(".")])],1),v("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("{大版本号}.")])],1)],1)],1),v("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[v("span",{staticClass:"base"},[v("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),v("span",{staticClass:"mord"},[v("span",{staticClass:"mord cjk_fallback"},[t._v("大版本号")])]),v("span",{staticClass:"mord"},[t._v(".")])])])]),t._v("{0进位}.${迭代版本号}.RELEASE")]),t._v(" "),v("p",[t._v("test分支版本号 "),v("span",{staticClass:"katex"},[v("span",{staticClass:"katex-mathml"},[v("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[v("semantics",[v("mrow",[v("mtext",[t._v("大版本号")]),v("mi",{attrs:{mathvariant:"normal"}},[t._v(".")])],1),v("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("{大版本号}.")])],1)],1)],1),v("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[v("span",{staticClass:"base"},[v("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),v("span",{staticClass:"mord"},[v("span",{staticClass:"mord cjk_fallback"},[t._v("大版本号")])]),v("span",{staticClass:"mord"},[t._v(".")])])])]),t._v("{0进位}.${迭代版本号}.SNAPSHOP")]),t._v(" "),v("p",[t._v("迭代版本可追踪，避免出现jar包覆盖无法追踪")]),t._v(" "),v("p",[t._v("迭代版本升级,必须升级迭代版本号。避免出现jar包覆盖无法追踪")]),t._v(" "),v("h3",{attrs:{id:"_1-大版本定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-大版本定义"}},[t._v("#")]),t._v(" 1. 大版本定义")]),t._v(" "),v("p",[t._v("APP1.0  APP2.0 APP3.0")]),t._v(" "),v("h3",{attrs:{id:"_2-迭代版本号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-迭代版本号"}},[t._v("#")]),t._v(" 2. 迭代版本号")]),t._v(" "),v("p",[t._v("APP1.0.1  APP1.0版本的第一个迭代")]),t._v(" "),v("p",[t._v("APP1.1.0  APP1.0版本的第十个迭代")]),t._v(" "),v("p",[t._v("APP2.0.2  APP2.0版本的第二个迭代")]),t._v(" "),v("p",[t._v("APP2.1.0  APP2.0版本的第十个迭代")]),t._v(" "),v("h2",{attrs:{id:"七、代码格式化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#七、代码格式化"}},[t._v("#")]),t._v(" 七、代码格式化")]),t._v(" "),v("p",[t._v("统一格式化模板,解决多人共同开发场景,代码格式化导致的git提交冲突问题")]),t._v(" "),v("p",[t._v("最后求关注,求订阅,谢谢你的阅读!")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589360371000.png",alt:"",loading:"lazy"}})])])}),[],!1,null,null,null);_.default=r.exports}}]);