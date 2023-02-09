(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{631:function(e,a,s){"use strict";s.r(a);var n=s(1),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("blockquote",[s("p",[e._v("本项目是基于小编的开发经验与心得,分享小编关于领域模型的理解, 个人愚见仅供参考,希望能为渴望进步的你提供帮助。如果你感到有用对你有帮助,请不要吝啬你的关注,求关注,求转发。\n文章有三个议题，什么是领域模型,为什么需要领域模型设计,以及领域驱动的项目结构是什么样的?")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1594392162000.png",alt:"",loading:"lazy"}})]),e._v(" "),s("h2",{attrs:{id:"一、领域驱动模型是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、领域驱动模型是什么"}},[e._v("#")]),e._v(" 一、领域驱动模型是什么？")]),e._v(" "),s("p",[e._v("如果你是第一次听到这个词,嗯,多么恐怖的一件事情呀! 什么是领域模型,一种新的技术吗? 领域模型到底有什么用呢?\n为什么那么多大佬都在讲领域模型。网络上充斥着着各种高端的解释,各种高大上的名字,各种复杂的系统设计图。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1595078884000.png",alt:"",loading:"lazy"}})]),e._v(" "),s("p",[e._v("fuck !\n身边总是有这样一群人的出现。总喜欢中文里加载者英文,英文中夹杂着中文,仿佛这样能使他们更加自信一样。把你讲懵了,他就自信了。 very fuck !")]),e._v(" "),s("p",[e._v("身为技术人,尽量想把一种事情给将清楚,说明白。而不是用各种抽象的晦涩难懂但看上去高大上的名词给解释。千万不要怕,下面我们通过先做一点小小的铺垫。最后在总结领域模型的理解。")]),e._v(" "),s("h3",{attrs:{id:"_1-贫血模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-贫血模型"}},[e._v("#")]),e._v(" 1. 贫血模型")]),e._v(" "),s("p",[e._v("在讲清楚领域模型之前我们先来看引入一个词汇 "),s("strong",[e._v("“贫血模型”")]),e._v(" ，读到这里不要怕。只是一个词汇而已。是对我们平时的项目代码结构的一个形容词。相信无论面前的你\n是一个大牛，还是一个刚入行的小菜鸟。你都一定写过这样的代码:")]),e._v(" "),s("ul",[s("li",[e._v("dao层: 负责持久化")]),e._v(" "),s("li",[e._v("model层: 数据模型")]),e._v(" "),s("li",[e._v("service层: 服务层")]),e._v(" "),s("li",[e._v("web层: 提供对UI层的访问")])]),e._v(" "),s("p",[e._v("嗯。这就是一个典型的贫血模型, 哇,真的好形象,这是谁想出来的词汇,真想给他说一句 fuck you!  但是，但是，你还有更好的词汇来形容这种项目结构吗?\n所谓贫血模型是指使用的领域对象中只有 "),s("code",[e._v("setter")]),e._v(" 和 "),s("code",[e._v("getter")]),e._v(" 方法（POJO），所有的业务逻辑都不包含在领域对象中而是放在业务逻辑层。")]),e._v(" "),s("p",[e._v("往往我们入行的初期我们都是在这样的项目结构中进行编程的,那个时候我们的业务往往都是简单的,对于那个时候的我们来说,这样的代码结构真是太好用了。清晰易懂。甚至想说一声 i love code !!!")]),e._v(" "),s("p",[e._v("这个时期,我们的关注点往往不是业务的复杂度,而是技术的使用,语法的使用。以及代码是否能编译通过。所以下面我们来总结一下贫血模型的优点。")]),e._v(" "),s("h3",{attrs:{id:"_2-贫血模型优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-贫血模型优点"}},[e._v("#")]),e._v(" 2. 贫血模型优点")]),e._v(" "),s("ol",[s("li",[e._v("被许多程序员所掌握，对于刚入行的同学来说，这种模型很自然很舒服，典型的MVC结构")]),e._v(" "),s("li",[e._v("它非常简单，对于并不复杂的业务，它工作得很好，开发起来非常迅速。它似乎也不需要对领域的充分了解，只要给出要实现功能的每一个步骤，就能实现它。")]),e._v(" "),s("li",[e._v("事务边界相当清楚，一般来说service的每个方法都可以看成一个事务。")])]),e._v(" "),s("h3",{attrs:{id:"_3-贫血模型缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-贫血模型缺点"}},[e._v("#")]),e._v(" 3. 贫血模型缺点")]),e._v(" "),s("p",[e._v("随着发际线推移,随着历史的变迁,随着候鸟的迁徙。不知不觉我们的业务越来越复杂了。万恶的资本家,总想让我们一夜之间开发一个淘宝,一夜之间开发一个百度,一夜之间开发一个QQ。于是我们的service层,不断的\n不断的增加。代码量从100行,200行,300行,10000行刹不住车了。终于小张忍不住了,辞职走了。留下了孤独的你独自承受这忧伤。\n"),s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1594392402000.png",alt:"",loading:"lazy"}})]),e._v(" "),s("p",[e._v("这样代码是什么意思？ 这样代码能不能删？这行代码怎么没有走？这样代码能不能拆出去? 这样改万一项目上线崩溃了怎么办? 想一想老婆,望一望孩子。哎,算了吧。于是乎service复杂度指数般的递增。这就是贫血模型的缺点。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1594392441000.png",alt:"",loading:"lazy"}})]),e._v(" "),s("p",[s("strong",[e._v("缺点")])]),e._v(" "),s("ol",[s("li",[e._v("所有的业务都在service中处理，当业越来越复杂时，service会变得越来越庞大，最终难以理解和维护，轻则项目组解散，重则妻离子散。")]),e._v(" "),s("li",[e._v("将所有的业务放在无状态的service中实际上是一个过程化的设计,这与面向对象的编程风格,相向而行。(你转身离开分手说不出来,海鸟跟鱼相爱只是一场意外)")]),e._v(" "),s("li",[e._v("项目代码写的不少,重用的不多。(fuck and fuck = double kill)")])]),e._v(" "),s("h3",{attrs:{id:"_4-充血模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-充血模型"}},[e._v("#")]),e._v(" 4. 充血模型")]),e._v(" "),s("p",[e._v("前面说我说了贫血模型,这里顺便提一下充血模型,也不要怕,也只是一个吓人的词汇。前面我们理解了贫血模型，那么充血模型，很容易就能理解。\n前面我们说贫血模型实体类只有SET GET方法，逻辑基本在服务层实现。而**充血模型它的实体类里不但有状态，还有行为，即属性和方法都有。它的Service层很薄。**显然者不符合MVC的思想,因为充血模型中model中不仅有数据,还有状态。维护起来非常麻烦。")]),e._v(" "),s("h3",{attrs:{id:"_5-领域驱动总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-领域驱动总结"}},[e._v("#")]),e._v(" 5. 领域驱动总结")]),e._v(" "),s("p",[e._v("针对贫血模型的service层非常复杂臃肿的缺点,领域模型的概念越来越流行起来,至少在一些很多的大公司中,非常盛行。领域模型的概念不仅可以重新去设计service,同时也在微服务设计中有重要的意义。\n所以说领域模型其实就是要解决service越来越臃肿的一种设计思想。主要就是对service中的复杂的业务逻辑进行拆分,根据领域来进行拆分。用面向对象的思想去重新设计service。\n有人给他起了一个高大上的词汇: 领域模型。")]),e._v(" "),s("p",[e._v("所以最后小编想用一大白话来总结一下领域模型。")]),e._v(" "),s("p",[s("strong",[e._v("领域模型就是要用面向对象的思想去重新设计充斥着复杂业务逻辑的service层。")])]),e._v(" "),s("h2",{attrs:{id:"二、为什么要进行领域模型设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么要进行领域模型设计"}},[e._v("#")]),e._v(" 二、为什么要进行领域模型设计?")]),e._v(" "),s("p",[e._v("相信看到这里的你,一定对领域模型有一个自己的认识。为什么要进行领域模型设计? 相信自己心里一定有一个自己的判断了。贫血模型的项目结构, service层无可避免的非常的臃肿，臃肿到一个方法可能深不见底。对于业务老油条，可能还凑合能看成，"),s("br"),e._v("\n假如你是一个新的同学,当你看到这样的代码一定是崩溃的，假如说注释也没有,那你内心更是崩溃的。假如说这是一个很庞大的系统,很复杂的业务流程,这就更不用说了。\n"),s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1594478376000.png",alt:"",loading:"lazy"}})]),e._v(" "),s("p",[e._v("如果读到这里,你还是对领域驱动设计感到迷茫，那么就其实这个标题也可以这样讲: "),s("strong",[e._v("我们如何对臃肿的service进行面向对象的设计。设计的过程就是对service层的代码进行领域设计。")]),s("br"),e._v("\n而我们之所以这样做的目的。")]),e._v(" "),s("ol",[s("li",[e._v("为了快乐的coding")]),e._v(" "),s("li",[e._v("为了业务系统的稳定")]),e._v(" "),s("li",[e._v("为了业务更快的迭代升级。")])]),e._v(" "),s("p",[e._v("当然这一切的前提是你对业务有一个全局的认识,有一个前瞻性的判断,否则也设计不出来,真正适合自身系统的领域驱动模型。")]),e._v(" "),s("h2",{attrs:{id:"三、领域驱动的项目结构是什么样的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、领域驱动的项目结构是什么样的"}},[e._v("#")]),e._v(" 三、领域驱动的项目结构是什么样的?")]),e._v(" "),s("p",[e._v("**一千个人眼里有一千个哈姆雷特,没有最好的项目结构,只有最适合自己的业务系统。**本文只是小编对领域驱动的模块的思考和认识。\n仅供参考,希望对你有所启示和引导。")]),e._v(" "),s("h3",{attrs:{id:"_1-领域划分-模块化建造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-领域划分-模块化建造"}},[e._v("#")]),e._v(" 1. 领域划分|模块化建造")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1594574191000.png",alt:"",loading:"lazy"}})]),e._v(" "),s("p",[e._v("领域划分,小编感觉用另外一个词形容也非常的合适,就是业务模块化。所有能力都进行能力化抽象,形成模块,形成领域。 当遇到新的业务逻辑,底层的数据结构和数据关系肯定也是一样的。那么就可以像堆积木一样,根据这些模块快速的组装成新的业务逻辑。快速的实现业务的迭代和升级。\n关于这个问题,需要结合自己的业务系统来进行抽象和设计。而小编的能做的就是,提醒你"),s("strong",[e._v("模块化设计,领域化设计的重要意义。")])]),e._v(" "),s("h3",{attrs:{id:"_2-项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目结构"}},[e._v("#")]),e._v(" 2. 项目结构")]),e._v(" "),s("p",[e._v("基础层(外部调用,db操作) + 领域层(偏向领域的业务逻辑) + 业务层(对领域层的业务编排) + 外观层(可以提供能力,可以提供视图)。\n有一个完善的领域层,可以方便快速便捷的对业务进行扩展。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1595074590000.png",alt:"",loading:"lazy"}})]),e._v(" "),s("p",[e._v("领域层就是模块化设计的积木。丰富的模块化有助于业务扩展。")]),e._v(" "),s("p",[e._v("一定要控制项目的依赖情况。service只能出现领域层的依赖, 领域层只能存在dao层和第三方服务层。各个层代码不能平行调用。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1595069641000.png",alt:"",loading:"lazy"}})]),e._v(" "),s("h3",{attrs:{id:"_3-编程规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-编程规范"}},[e._v("#")]),e._v(" 3. 编程规范")]),e._v(" "),s("p",[e._v("关于项目提出6个注意的点。如果把做项目比作是前线打仗,那么打仗最重要的是战斗成员目标要一致。在目标不一致的情况下一定要进行\n充分讨论(项目负责人要做的),说明情况互相妥协指定出统一的项目编程规范。去进行执行。一旦指定不能违背。否则项目质量不保。")]),e._v(" "),s("p",[s("strong",[e._v("项目固然重要,但是作为软件开发工程师,首先要对代码质量做保障。")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1595078292000.png",alt:"",loading:"lazy"}})]),e._v(" "),s("h3",{attrs:{id:"_4-日志设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-日志设计"}},[e._v("#")]),e._v(" 4. 日志设计")]),e._v(" "),s("p",[e._v("天下没有完美的项目,任何系统不存在bug是不可能的。想要发现bug并快速定位问题,日志系统的不能缺少的。")]),e._v(" "),s("p",[e._v("日志系统是非常重要的系统, 对系统的监控, 在设计日志系统中,我们需要关注的点")]),e._v(" "),s("ol",[s("li",[e._v("日志结构(目的是按照结构解析到日志引擎中)\n如果想做日志的搜索平台,一定要进行日志结构化设计,方便被搜索平台的解析。如ELK日志搜索系统。")]),e._v(" "),s("li",[e._v("日志打印降级能力\n在遇到大促时候,可以减少不必要的日志打印,要对日志打印做降级的设计")]),e._v(" "),s("li",[e._v("异步输入日志")]),e._v(" "),s("li",[e._v("日志归档")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n    \x3c!-- 系统日志打印 --\x3e\n    <appender name="logfile" class="ch.qos.logback.core.rolling.RollingFileAppender">\n        <File>${logger.logback.logpath}mbp-game-service.log</File>\n        <encoder>\n            <Pattern>[%date] [%-5level] %c{40} %line --%mdc{client} [%X{TRACE_LOG_ID}] [%X{dstTraceId}] %msg%n</Pattern>\n            <charset>UTF-8</charset>\n        </encoder>\n        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">\n            <fileNamePattern>${logger.logback.logpath}mbp-game-service.%d{yyyy-MM-dd}.%i.log</fileNamePattern>\n            <maxHistory>30</maxHistory>\n            <TimeBasedFileNamingAndTriggeringPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">\n                <maxFileSize>512MB</maxFileSize>\n            </TimeBasedFileNamingAndTriggeringPolicy>\n        </rollingPolicy>\n    </appender>\n\n    \x3c!-- 异步输出 --\x3e\n    <appender name="asyncAppender" class="ch.qos.logback.classic.AsyncAppender">\n        \x3c!-- 不丢失日志.默认的,如果队列的80%已满,则会丢弃TRACT、DEBUG、INFO级别的日志 --\x3e\n        <discardingThreshold>0</discardingThreshold>\n        \x3c!-- 更改默认的队列的深度,该值会影响性能.默认值为256 --\x3e\n        <queueSize>1024</queueSize>\n        \x3c!-- 添加附加的appender,最多只能添加一个 --\x3e\n        <appender-ref ref="logfile"/>\n    </appender>\n\n\n    \x3c!-- 外部jar包 日志级别设置 --\x3e\n    <logger level="${logger.outside.logLevel}" name="com.ibatis"/>\n    <logger level="${logger.outside.logLevel}" name="org.springframework"/>\n    <logger level="${logger.outside.logLevel}" name="java.sql"/>\n    <logger level="${logger.outside.logLevel}" name="org.apache"/>\n    <logger level="${logger.outside.logLevel}" name="com.alibaba.dubbo"/>\n    <logger level="${logger.outside.logLevel}" name="org.I0Itec"/>\n    <logger level="${logger.outside.logLevel}" name="org.dozer"/>\n    <logger level="${logger.outside.logLevel}" name="kafka.producer.SyncProducer"/>\n    <logger level="${logger.kafka.outside.logLevel}" name="org.apache.kafka"/>\n    <logger level="${logger.kafka.outside.logLevel}" name="org.springframework.kafka"/>\n\n    \x3c!-- 输出到文件，可定义更多的 Appender --\x3e\n    <root level="${logger.logLevel}">\n        <appender-ref ref="asyncAppender"/>\n    </root>\n\n</configuration>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br")])]),s("p",[e._v("最后求关注,求订阅,谢谢你的阅读!")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1589360371000.png",alt:"",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);