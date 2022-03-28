(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{593:function(s,n,e){"use strict";e.r(n);var a=e(1),r=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596467333000.png",alt:"",loading:"lazy"}})]),s._v(" "),e("p",[e("strong",[s._v("作者")]),s._v(": 西魏陶渊明\n"),e("strong",[s._v("博客")]),s._v(": "),e("a",{attrs:{href:"https://blog.springlearn.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.springlearn.cn/"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("西魏陶渊明")]),s._v(" "),e("p",[s._v("在单机环境下多线程操作共享数据时候回用到锁的概念,因为是单机可以直接使用jdk提供的锁机制就可以满足。\n但是在微服务场景下,因为是多服务共享数据,此时jdk提供的锁就不能再使用了。于是乎就有了分布式锁。\n本文介绍常见的几种可以使用的生产的分布式锁")])]),s._v(" "),e("p",[e("strong",[s._v("本文面向有开发经验的同学,所以场景就不赘述,直接上干货")])]),s._v(" "),e("h2",{attrs:{id:"一、分布式锁具有的品格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、分布式锁具有的品格"}},[s._v("#")]),s._v(" 一、分布式锁具有的品格")]),s._v(" "),e("ul",[e("li",[s._v("基本的加锁和释放锁")]),s._v(" "),e("li",[s._v("具备锁失效机制,防止死锁")]),s._v(" "),e("li",[s._v("非阻塞机制")]),s._v(" "),e("li",[s._v("高性能和高可用")])]),s._v(" "),e("h2",{attrs:{id:"二、思考一下如何自己实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、思考一下如何自己实现"}},[s._v("#")]),s._v(" 二、思考一下如何自己实现?")]),s._v(" "),e("h3",{attrs:{id:"_1-db"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-db"}},[s._v("#")]),s._v(" 1. db")]),s._v(" "),e("p",[s._v("根据上面提出的要求,发现只要能满足多服务之前通信就能实现。\n比如我们可以用mysql就能实现,比如A服务对一个表加锁和释放锁。B服务就会发现表加了锁。此时B就阻塞了。")]),s._v(" "),e("p",[s._v("当然这明显不满足,非阻塞的机制。另外如果要用一个数据库来做锁的场景也太浪费性能了。")]),s._v(" "),e("h3",{attrs:{id:"_2-redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis"}},[s._v("#")]),s._v(" 2. redis")]),s._v(" "),e("p",[s._v("利用redis命令来实现,如果返回ok说明获取锁。返回nil说明没有获取到锁。")]),s._v(" "),e("p",[s._v("不阻塞,防止死锁,高性能,都满足")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set key value [EX seconds] [PX milliseconds] [NX|XX]\nEX seconds：设置失效时长，单位秒\nPX milliseconds：设置失效时长，单位毫秒\nNX：key不存在时设置value，成功返回OK，失败返回(nil)\nXX：key存在时设置value，成功返回OK，失败返回(nil)\n//对资源加一个锁 key为资源名 value可以为任意 ex为秒 1为过期时间 nx为\n127.0.0.1:6379> set ziyuanming 1 ex 1 nx\nOK\n127.0.0.1:6379> set ziyuanming 1 ex 1 nx\n(nil)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"_3-zookeeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-zookeeper"}},[s._v("#")]),s._v(" 3. zookeeper")]),s._v(" "),e("h4",{attrs:{id:"获取锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取锁"}},[s._v("#")]),s._v(" 获取锁")]),s._v(" "),e("ol",[e("li",[s._v("在Zookeeper当中创建一个持久节点ParentLock。当第一个客户端想要获得锁时，需要在ParentLock这个节点下面创建一个临时顺序节点 Lock1。")]),s._v(" "),e("li",[s._v("Client1查找ParentLock下面所有的临时顺序节点并排序，判断自己所创建的节点Lock1是不是顺序最靠前的一个。如果是第一个节点，则成功获得锁。")]),s._v(" "),e("li",[s._v("如果再有一个客户端 Client2 前来获取锁，则在ParentLock下载再创建一个临时顺序节点Lock2。\n此时Client2发现自己并不是最靠前的就像Lock1注册了一个Watcher,用于监听Lock1节点释放。此时Client2就进入等待状态")]),s._v(" "),e("li",[s._v("Client3,4以此类推")])]),s._v(" "),e("h4",{attrs:{id:"释放锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#释放锁"}},[s._v("#")]),s._v(" 释放锁")]),s._v(" "),e("ol",[e("li",[s._v("Client1释放了锁,此时Zookeeper就讲Lock1移出,并触发了Lock1的Watcher。")]),s._v(" "),e("li",[s._v("Client2一直在监听Lock1的状态,当Lock1节点被删除,Client2里面收到通知获得了锁。")])]),s._v(" "),e("h2",{attrs:{id:"三、现成的解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、现成的解决方案"}},[s._v("#")]),s._v(" 三、现成的解决方案")]),s._v(" "),e("h3",{attrs:{id:"_1-db的方式就不考虑了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-db的方式就不考虑了"}},[s._v("#")]),s._v(" 1. db的方式就不考虑了")]),s._v(" "),e("p",[s._v("实现简单,但是不划算,性能也不是最好的。")]),s._v(" "),e("h3",{attrs:{id:"_2-redis-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis-2"}},[s._v("#")]),s._v(" 2. redis")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<dependency>\n    <groupId>org.redisson</groupId>\n    <artifactId>redisson</artifactId>\n    <version>3.11.0</version>\n</dependency>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\npublic class RedLockTester {\n    public static void main(String[] args) {\n        //连接redis\n        Config config = new Config();\n        config.useSingleServer().setAddress("redis://127.0.0.1:6379");\n        RedissonClient redisson = Redisson.create(config);\n        log.info("连接Redis");\n\n        //1.定义锁\n        RLock lock = redisson.getLock("myTest001");\n\n        try {\n            //尝试加锁的超时时间\n            Long timeout = 300L;\n            //锁过期时间\n            Long expire = 30L;\n            //2.获取锁\n            if (lock.tryLock(timeout, expire, TimeUnit.MILLISECONDS)) {\n                //2.1.获取锁成功的处理\n                log.info("加锁成功");\n                //...do something\n                log.info("使用完毕");\n            } else {\n                //2.2.获取锁失败的处理\n                log.info("加锁失败");\n                log.info("其他处理");\n            }\n        } catch (InterruptedException e) {\n            log.error("尝试获取分布式锁失败", e);\n        } finally {\n            //3.释放锁\n            try {\n                lock.unlock();\n                log.info("锁释放成功");\n            } catch (Exception e) {\n                //do nothing...\n            }\n        }\n\n        //关闭连接\n        redisson.shutdown();\n        log.info("关闭redis连接");\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br")])]),e("p",[s._v("通过官方文档能找到实现第三方工具")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596471713000.png",alt:"",loading:"lazy"}})]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/rgcLOVEyaya/p/RGC_LOVE_YAYA_1003days.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"_3-zookeeper-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-zookeeper-2"}},[s._v("#")]),s._v(" 3. zookeeper")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://curator.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Curator"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\x3c!-- 对zookeeper的底层api的一些封装 --\x3e\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-framework</artifactId>\n            <version>2.12.0</version>\n        </dependency>\n        \x3c!-- 封装了一些高级特性，如：Cache事件监听、选举、分布式锁、分布式Barrier --\x3e\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-recipes</artifactId>\n            <version>2.12.0</version>\n        </dependency>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("几乎对所有的JDK锁都实现了,基于Zookeeper的分布式锁。具体使用方法可以自行百度。")]),s._v(" "),e("ul",[e("li",[s._v("InterProcessMutex：分布式可重入排它锁")]),s._v(" "),e("li",[s._v("InterProcessSemaphoreMutex：分布式排它锁")]),s._v(" "),e("li",[s._v("InterProcessReadWriteLock：分布式读写锁")]),s._v(" "),e("li",[s._v("InterProcessMultiLock：将多个锁作为单个实体管理的容器")]),s._v(" "),e("li",[s._v("InterProcessSemaphoreV2 信号量")]),s._v(" "),e("li",[s._v("DistributedBarrier 分布式栅栏")]),s._v(" "),e("li",[s._v("DistributedDoubleBarrier 分布式栅栏")])]),s._v(" "),e("p",[s._v("最后求关注,求订阅,谢谢你的阅读!")])])}),[],!1,null,null,null);n.default=r.exports}}]);