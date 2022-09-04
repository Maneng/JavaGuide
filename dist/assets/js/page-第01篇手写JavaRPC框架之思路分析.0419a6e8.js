(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{739:function(t,a,_){"use strict";_.r(a);var v=_(1),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("img",{attrs:{src:"https://img.springlearn.cn/blog/8d93a4aaf770ccc367e4bcc40513ff1b.png",alt:"",loading:"lazy"}})]),t._v(" "),_("p",[_("strong",[t._v("作者")]),t._v(": 西魏陶渊明")]),t._v(" "),_("p",[_("strong",[t._v("博客")]),t._v(": "),_("a",{attrs:{href:"https://blog.springlearn.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.springlearn.cn/"),_("OutboundLink")],1)]),t._v(" "),_("blockquote",[_("p",[t._v("天下代码一大抄, 抄来抄去有提高, 看你会抄不会抄！")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/10e3b1ba78ed2cd6afb33928df91a52f.gif",alt:"",loading:"lazy"}})]),t._v(" "),_("h2",{attrs:{id:"一、前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),_("p",[t._v("如果不是因为热爱，我不会这样；如果不是为了，涨点粉丝，我不会这样；\n如果不是为了几两散碎银子，我更不会这样。")]),t._v(" "),_("p",[t._v("以前的文章开场太过严肃，太过专业。就像大学老师上课，只知道讲课。不知道互动。这样\n效果太差，写的没意思，读者更是没意思。大数据分析还以为你是抄的，还不给你推荐热门 😭。")]),t._v(" "),_("p",[t._v("不然就改变一下风格吧，从本系列文章开始，小编就要放飞 ✈️ 自我，随心 ❤️ 而动。希望在分享，总结自己掌握的知识点的同时，能给各位客官带来一点小小的收获。小编尽量全力输出干货，如果看完感觉还行的话，希望能多多关注。你的关注，就是我进步的最大动力。如果看完，感觉就这? 可以留言讨论。接受各位看官的批评和意见。共同学习共同进步。")]),t._v(" "),_("h2",{attrs:{id:"二、目标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),_("p",[t._v("本系列文章的总体目标是从零实现一个RPC框架，我们将从TCP通信协议开始，\n一步一步实操，将socket 二进制数据流一步一步变成Java可以认识的数据类型，\n从而最终实现RPC远程通信，并可以集成在Spring中,同时也可以支持SpringBoot的自动化配置。最终我们会将项目发布到全球Maven仓库, 让大家都可以下载学习。")]),t._v(" "),_("p",[t._v("本系列文章主要知识点以思维导图的方式，展示在下图=面，内容只会多不会少。干货较多，对于初级的同学可以收藏起来慢慢看。毕竟一口也吃不了一个胖子。但是不能没有信心。")]),t._v(" "),_("p",[t._v("正如小编的口头禅: 写代码和写文章是一样一样的。")]),t._v(" "),_("p",[_("strong",[t._v("天下代码一大抄，抄来抄去有提高，看你会抄不会抄。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.springlearn.cn/blog/7bdbd93d0e2d1b9bd0c150e119ae665a.png",alt:"",loading:"lazy"}})]),t._v(" "),_("h2",{attrs:{id:"三、思路分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、思路分析"}},[t._v("#")]),t._v(" 三、思路分析")]),t._v(" "),_("h2",{attrs:{id:"_3-1-什么是rpc框架"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-什么是rpc框架"}},[t._v("#")]),t._v(" 3.1 什么是RPC框架")]),t._v(" "),_("p",[t._v("我们在要写RPC框架，我们先思考下RPC是什么? 白话点就是一个远程通信的工具而已。\n他可以让开发者像调用本地方法一样，方便的调用远程的方法。")]),t._v(" "),_("p",[t._v("目前市面上的RPC框架主要有下面这些")]),t._v(" "),_("ul",[_("li",[t._v("dubbo")]),t._v(" "),_("li",[t._v("grpc")]),t._v(" "),_("li",[t._v("feign")])]),t._v(" "),_("p",[t._v("可能对于银行和传统国企可能偏爱国产的dubbo框架，可能会涉及到国家安全吧，而对于互联网公司更多的会使用SpringCloud的全家桶。那么不管他们使用的其中的哪一款，其实这些框架都是能做到，让开发者像调用本地方法一样实现远程方法的调用的。")]),t._v(" "),_("p",[t._v("可以实现远程调用的呢? 答案当然就是利用socket通信了。而socket底层通信\n都是基于tcp/ip协议实现的。所以以上这三款的")]),t._v(" "),_("h2",{attrs:{id:"_3-2-通信框架的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-通信框架的区别"}},[t._v("#")]),t._v(" 3.2  通信框架的区别")]),t._v(" "),_("ul",[_("li",[t._v("dubbo")]),t._v(" "),_("li",[t._v("grpc")]),t._v(" "),_("li",[t._v("feign")])]),t._v(" "),_("p",[_("strong",[t._v("共同点:")])]),t._v(" "),_("ul",[_("li",[t._v("都是基于tcp/ip协议来实现通信")]),t._v(" "),_("li",[t._v("都屏蔽底层通信细节，使开发者只用关心自己的业务即可")])]),t._v(" "),_("p",[_("strong",[t._v("不同点:")])]),t._v(" "),_("ul",[_("li",[t._v("grpc和feign都是基于tcp协议更上层的http协议来实现的")]),t._v(" "),_("li",[t._v("dubbo是基于tcp协议上自己重新实现了一套自己的规则，而这个规则就是dubbo协议。")])]),t._v(" "),_("p",[t._v("dubbo协议因为是直接基于tcp协议定制的，所以可能性能会更加的好。能实现更多的底层的特性，比如说长连接。而其他两款是基于http协议来进行封装的，正因为它的这个特性，所以只是http客户端都可以进行调用，更适合跨平台，跨语言。因为不管是什么语言，都支持http协议。但是他的性能可能就相对没有dubbo好，综上所述他们各有胜负。现在主要比的就是看谁的生态比较好，谁的周边扩展更加丰富。")]),t._v(" "),_("h2",{attrs:{id:"_3-3-rpc底层实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-rpc底层实现"}},[t._v("#")]),t._v(" 3.3 RPC底层实现")]),t._v(" "),_("p",[t._v("前面我们说了，RPC框架是一个，可以让程序猿像调用本地方法一样实现远程方法调用的一个工具。其实这句话就说出了主要的答案。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.springlearn.cn/blog/7f72d53f64e4181913a662abc2b37143.png",alt:"远程调用 = 计算机通信屏蔽细节 = 动态代理",loading:"lazy"}})]),t._v(" "),_("p",[t._v("既然知道了他的大概实现，那么其实思路就有了。我们第一步就是使用Java语言来实现底层\n的通信能力建设，然后在这个基础上进行二次封装，最终通过动态代理的形式，将底层通信的细节给屏蔽起来。如此就能实现一个RPC协议了。")]),t._v(" "),_("p",[t._v("思路就是这个思路。\n"),_("img",{attrs:{src:"https://img.springlearn.cn/blog/e9c48572c567ba6fdd6a5a3fbe603f24.png",alt:"",loading:"lazy"}})]),t._v(" "),_("p",[t._v("所以本系列文章的第一部分，就是先完成通信层的建设，使用Java实现一个通用的底层协议，实现通信能力。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.springlearn.cn/blog/07fa03c0a8f866bb365cb43e85b05317.png",alt:"",loading:"lazy"}})]),t._v(" "),_("p",[t._v("说着很简单，但是实现通信可没有那么简单哦。接下来我们面临一系列网络通信中的难题。比如说Java的通信API表难用，网络通信中还有黏包拆包等问题。但是没关系，这些坑小编已经踩过了，跟着小编的思路一步一步做。相信事半必能功倍。")])])}),[],!1,null,null,null);a.default=r.exports}}]);