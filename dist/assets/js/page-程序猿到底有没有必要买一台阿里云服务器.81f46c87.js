(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{716:function(t,a,s){"use strict";s.r(a);var _=s(1),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019122518192512.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}})]),t._v(" "),s("p",[s("strong",[t._v("做为一名程序猿多多少少每天都在跟服务器打交道,尤其是后端的小伙伴,那么你是否也有这样的想法呢 ?")])]),t._v(" "),s("h3",{attrs:{id:"一、个人服务器究竟能做什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、个人服务器究竟能做什么"}},[t._v("#")]),t._v(" 一、个人服务器究竟能做什么?")]),t._v(" "),s("h4",{attrs:{id:"_1-搭建个人博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-搭建个人博客"}},[t._v("#")]),t._v(" 1. 搭建个人博客")]),t._v(" "),s("p",[t._v("软件开发这个行业,知识技术日新月异,作为一名合格专注的程序猿每天都会浏览各种各样的技术网站,在这里我们排出一些大的技术博客网站,我们也经常会看到很多个人的技术博主。一般拥有个人博客网站的都是在某一个领域有很深认识的大牛,会经常把自己的学到的知识积累下来,分享给大家。那么如果要搭建自己的个人博客就必须要有一台个人服务器啦。 但是排出一种情况就是有些个人博主会把自己的博客部署在 "),s("code",[t._v("gitlab")]),t._v(" 或者"),s("code",[t._v("github")]),t._v("、"),s("code",[t._v("coding")]),t._v(" 的静态Pages上,然后通过域名"),s("code",[t._v("CNAME")]),t._v(" 的方式访问, 像小编我自己之前也是用后面这种情况,可以免费部署自己的个人博客。但是唯一缺点就是访问太慢了。")]),t._v(" "),s("p",[s("strong",[t._v("下面就是小编我自己的个人网站,主要做Java后端的知识分享(非营利性哦)")]),t._v(" "),s("a",{attrs:{href:"https://blog.springlearn.cn/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225183752474.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}}),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-搭建个人知识库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-搭建个人知识库"}},[t._v("#")]),t._v(" 2. 搭建个人知识库")]),t._v(" "),s("p",[t._v("做为技术人,我们每天都要处理各种各样的数据,有公司数据、有个人数据、或者碎片的知识点、API信息、备忘录信息等。相信每个开发者都会有这个需求吧，一般我们可以使用 "),s("code",[t._v("有道云笔记")]),t._v(" 、 "),s("code",[t._v("印象笔记")]),t._v("。 小编使用的是前者，但是突然有一段时间不能用了,原因当然不是有道云挂了, 而是很多公司为了信息安全禁止员工登陆这种网站,\n比如云盘类网站, 当然就包括上面的。这个时候当我们访问上面的网站时候就会被公司后台记录，或者是直接就访问不到。这个时候我们就要考虑搭建一个人知识库了。小编现在用的是 "),s("code",[t._v("showdoc")]),t._v("。 非常简单。")]),t._v(" "),s("p",[t._v("登陆服务器安装 "),s("code",[t._v("docker")]),t._v(" 运行下面命令即可")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull xd2idwf5.mirror.aliyuncs.com/star7th/showdoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" tag xd2idwf5.mirror.aliyuncs.com/star7th/showdoc:latest star7th/showdoc:latest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" showdoc_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" showdoc_data/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v("  -R "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" showdoc_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -d --name showdoc -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6666")]),t._v(":80 -v /root/showdoc_data/html:/var/www/html/      star7th/showdoc\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("strong",[t._v("下面是小编的个人知识库")])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://doc.springlearn.cn",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225184550675.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}}),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_3-搭建个人网盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-搭建个人网盘"}},[t._v("#")]),t._v(" 3. 搭建个人网盘")]),t._v(" "),s("p",[t._v("网盘的用处只有一个就是存储文件,市面上的产品之前有很多但是近两年很多都倒闭了,不过现在还有 "),s("code",[t._v("百度网盘")]),t._v("依然坚挺。但是(太...慢了)。 那么我们就自己来搭建一个吧。小编使用的网盘是 "),s("code",[t._v("Seafile")])]),t._v(" "),s("p",[t._v("Seafile是一个开源、专业、可靠的云存储平台；解决文件集中存储、共享和跨平台访问等问题，除了一般网盘所提供的云存储以及共享功能外，Seafile还提供消息通信。 具体安装也不难。\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225185205331.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}})]),t._v(" "),s("h4",{attrs:{id:"_4-部署个人应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署个人应用"}},[t._v("#")]),t._v(" 4. 部署个人应用")]),t._v(" "),s("p",[t._v("这个需求应该是购买服务器的最终目的，就是部署自己的服务, 小编就是部署的自己的博客应用。 使用nginx作为方向代理。不得不说使用自己服务器就是比免费的速度快。")]),t._v(" "),s("p",[t._v("http://blog.springlearn.cn/ 响应在5毫秒内\nhttp://www.hanframework.com/ 免费的响应在400毫秒内")]),t._v(" "),s("p",[t._v("虽然都不到1秒,但是具体使用时候用户体验差距还是很大的。可以自己体验下。\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225185514458.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"二、购买了服务器你还需要哪些知识储备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、购买了服务器你还需要哪些知识储备"}},[t._v("#")]),t._v(" 二、购买了服务器你还需要哪些知识储备")]),t._v(" "),s("h4",{attrs:{id:"_1-服务器ssh登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务器ssh登录"}},[t._v("#")]),t._v(" 1. 服务器ssh登录")]),t._v(" "),s("p",[t._v("当我们购买了服务器我们有两种登陆方式")]),t._v(" "),s("ol",[s("li",[t._v("用户名和密码登陆")]),t._v(" "),s("li",[t._v("秘钥登陆\n这两种登陆都离不开 "),s("code",[t._v("ssh")]),t._v(" 命令")])]),t._v(" "),s("p",[s("strong",[t._v("第一种")]),t._v(" "),s("code",[t._v("ssh root@127.32.32.122")]),t._v(" 然后输入用户密码")]),t._v(" "),s("p",[s("strong",[t._v("第二种")]),t._v(" "),s("code",[t._v("ssh aliyun")]),t._v("  直接就访问")]),t._v(" "),s("p",[t._v("对于如何配置小编就不说了,百度搜索就很多答案,如果不想搜索或者有问题，可以给小编私信。小编给你解决。")]),t._v(" "),s("h4",{attrs:{id:"_2-服务器器安全组配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务器器安全组配置"}},[t._v("#")]),t._v(" 2. 服务器器安全组配置")]),t._v(" "),s("p",[t._v("安全组这个概念,如果没有购买过服务器的应该不是很清楚,其实就是防火墙的意思。当我们购买了阿里/百度/腾讯/华为/七牛之类的服务器，在后台都有一个安全组管理的。一个入站,一个出站端端口配置。 这个要注意,如果不配置的话，你是访问不到你的端口的\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225190257549.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}})]),t._v(" "),s("h4",{attrs:{id:"_3-域名配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-域名配置"}},[t._v("#")]),t._v(" 3. 域名配置")]),t._v(" "),s("p",[t._v("我们可以选择一个自己心仪的域名, 一般域名很便宜一年"),s("code",[t._v("三十")]),t._v(" 左右。但是别钻牛角尖, 天价的域名也很多。")]),t._v(" "),s("p",[t._v("域名配置主要是域名转发之类的。")]),t._v(" "),s("ol",[s("li",[t._v("第一种情况: 如果要将域名配置到一台服务器上使用，那么这种情况域名必须要备案，备案一般服务商会帮我们备案，我们只要提供认证信息,一般一周内可以下来。")]),t._v(" "),s("li",[t._v("第二种情况: 如果我们没有服务器我们也可以购买一个域名,我们在配置域名转发的时候,可以不指定服务器,而是转发到一个CNAEM别名上也可以使用。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225191224799.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}})]),t._v(" "),s("h4",{attrs:{id:"_4-部署应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署应用"}},[t._v("#")]),t._v(" 4. 部署应用")]),t._v(" "),s("p",[t._v("不会做饭的老司机不是好的厨师,同样只会写代码,不会部署的程序猿不是合格的程序猿。😸。")]),t._v(" "),s("p",[t._v("部署应用我们可以使用 "),s("code",[t._v("docker")]),t._v(" + "),s("code",[t._v("nginx或apache")]),t._v(" 。 具体 "),s("code",[t._v("nginx")]),t._v(" 和 "),s("code",[t._v("docker")]),t._v(" 的使用网上很多就不细说了，如果你要购买服务器这些都是你要储备的知识点。")]),t._v(" "),s("h3",{attrs:{id:"三、购买服务器要注意什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、购买服务器要注意什么"}},[t._v("#")]),t._v(" 三、购买服务器要注意什么")]),t._v(" "),s("h4",{attrs:{id:"_1-价格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-价格"}},[t._v("#")]),t._v(" 1. 价格")]),t._v(" "),s("p",[t._v("作为软件开发者,能免费的东西绝对不花钱, 上面的各种场景,其实我们都可以使用免费的来替代。 除了部署应用。那么我们就研究下价格。 一般运营商的套路都是年底大甩卖。所以年中和年头不是购买服务器的时间, 一般都在 "),s("code",[t._v("双十一")]),t._v(" 、"),s("code",[t._v("双十二")]),t._v("期间会大降价。\n关于价格对比的我们就以"),s("code",[t._v("2核4G")]),t._v("的服务器作为对比, 因为这个配置就能满足我们的需求。 那么我们就看看运营商的价格，因为是双十二期间,所以阿里云最近在搞活动,所以阿里云目前我看是最低的，新用户3年只要799。【如果不是新用户可以用其他人账号买,小编就是用自己家人账号买的】")]),t._v(" "),s("ol",[s("li",[t._v("七牛云2核4g三年 ￥1767.61")]),t._v(" "),s("li",[t._v("腾讯云2核4g三年 ￥3897")]),t._v(" "),s("li",[t._v("华为云2核4g三年 ￥6,440.70")]),t._v(" "),s("li",[t._v("阿里云2核4g三年 ￥1807.2(常规价) ￥799(活动价格)")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.aliyun.com/minisite/goods?userCode=oab21mxz",target:"_blank",rel:"noopener noreferrer"}},[t._v("活动优惠券领取"),s("OutboundLink")],1),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225192246879.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}}),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225192305678.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}}),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225192332835.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}}),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019122519235837.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}})]),t._v(" "),s("h4",{attrs:{id:"_2-售后-本人真实体验不是喷子-不是职业黑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-售后-本人真实体验不是喷子-不是职业黑"}},[t._v("#")]),t._v(" 2. 售后(本人真实体验不是喷子,不是职业黑)")]),t._v(" "),s("p",[t._v("服务器一般什么情况下会有售后呢?\n当出现服务器 "),s("code",[t._v("cpu")]),t._v(" 飙高, 流量异常被恶意攻击的时候,就考验售后了。我们就看服务商的工单回复速度。因为小编就用过阿里云和七牛云所以就对比下两家的工单体验吧。")]),t._v(" "),s("ol",[s("li",[t._v("阿里云无论回复速度还是质量都满意。")]),t._v(" "),s("li",[t._v("七牛云回复慢就算了，一个问题给我转几个人,每次让我重新再问一遍(没地方吐槽,就在这里吧)")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225192754639.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191225192935155.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01lc3NhZ2VfbHg=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述",loading:"lazy"}})]),t._v(" "),s("p",[s("strong",[t._v("时间到,下班了... 喜欢小编的可以关注一下,持续为你分享干货知识")])])])}),[],!1,null,null,null);a.default=r.exports}}]);