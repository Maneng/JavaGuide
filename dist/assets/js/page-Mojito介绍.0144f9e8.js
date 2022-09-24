(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{737:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://img.springlearn.cn/blog/dd74eb95dc1ea6c3d0a5ea341f2f62cf.png",alt:"",loading:"lazy"}})]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mojito.springlearn.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mojito Framework"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("名字以周杰伦新专辑《Mojito》命名。")]),t._v(" "),a("h3",{attrs:{id:"一、为什么要写这个项目-🥳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么要写这个项目-🥳"}},[t._v("#")]),t._v(" 一、为什么要写这个项目？🥳")]),t._v(" "),a("h4",{attrs:{id:"原因1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因1"}},[t._v("#")]),t._v(" 原因1")]),t._v(" "),a("p",[t._v("其实小编个人,比较热衷于造轮子。在造轮子的过程中，设计到的通信一直都是一个问题，在SpringBoot的环境下，不得不引入"),a("code",[t._v("actuator")]),t._v("模块,进行端点构建。\n虽然SpringBoot升级到2版本之后"),a("a",{attrs:{href:"https://blog.springlearn.cn/posts/40046/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebEndpoint"),a("OutboundLink")],1),t._v("会更加方便,但是感觉还是比较复杂,以使我在关于业务逻辑的同时，还要去适配\nWebEndpoint的编程方式。于是就有了,构建一个简单方便的通信层框架。因为Java的Socket编程API不够友好,所以小编在Socket编程上选择Netty进行封装。")]),t._v(" "),a("h4",{attrs:{id:"原因2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因2"}},[t._v("#")]),t._v(" 原因2")]),t._v(" "),a("p",[t._v("作为开发者,无论我们写什么业务,最终都会通过web接口暴露进行通信。传统的方式是我们引入一个\nweb容器,比如tomcat、jboss等等。")]),t._v(" "),a("p",[t._v("在分布式环境下，我们使用到的通信框架，如dubbo、hsf、springcloud之类也离不开通信。这些是已经造好的轮子,但是我只需要轮子中的⛓链条,只要通信层。所以就将通信层\n给抽离出来，并提供更加简单的API.")]),t._v(" "),a("h3",{attrs:{id:"二、主要运用在什么地方-🚀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、主要运用在什么地方-🚀"}},[t._v("#")]),t._v(" 二、主要运用在什么地方？🚀")]),t._v(" "),a("p",[t._v("mojito的定位是通信层框架,其本质是基于Netty进行二次封装,提供更加简单的API,方便开发者进行调用。\n如果你要写一个通信类的组件，但是又不希望引入web容器，或者rpc之类的框架。此时mojito就是最佳选择,因为它提供非常简单API可以快速的构建通信模块,代码量缺只有一点点的样子。当然如果你对Netty比较熟悉,也可以直接使用Netty进行开发。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("serverTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mojito")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcUserRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcUserResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里接受客户端的请求,并返回一个相应")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("serverHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rpcRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcUserResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"服务端返回: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rpcRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);