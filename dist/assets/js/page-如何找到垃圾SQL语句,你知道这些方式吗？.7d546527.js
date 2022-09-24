(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{625:function(_,t,s){"use strict";s.r(t);var v=s(1),a=Object(v.a)({},(function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/learn_c87a079fcea0d7893b03d4d57478bca7.png",alt:"",loading:"lazy"}})]),_._v(" "),s("p",[s("strong",[_._v("作者")]),_._v(": 西魏陶渊明\n"),s("strong",[_._v("博客")]),_._v(": "),s("a",{attrs:{href:"https://blog.springlearn.cn/",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://blog.springlearn.cn/"),s("OutboundLink")],1)]),_._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[_._v("西魏陶渊明")]),_._v(" "),s("p",[_._v("莫笑少年江湖梦，谁不少年梦江湖")])]),_._v(" "),s("blockquote",[s("p",[_._v("这篇文章主要是讲如何找到需要优化的SQL语句，即找到查询速度非常慢的SQL语句。")])]),_._v(" "),s("h1",{attrs:{id:"一、慢查询日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、慢查询日志"}},[_._v("#")]),_._v(" 一、慢查询日志")]),_._v(" "),s("h2",{attrs:{id:"_1-何为慢查询日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-何为慢查询日志"}},[_._v("#")]),_._v(" 1. 何为慢查询日志")]),_._v(" "),s("ul",[s("li",[_._v("慢查询日志是MySQL提供的一种日志记录，它用来记录查询响应时间超过阀值的SQL语句")]),_._v(" "),s("li",[_._v("这个时间阀值通过参数 "),s("code",[_._v("long_query_time")]),_._v(" 设置，如果SQL语句查询时间大于这个值，则会被记录到慢查询日志中，这个值默认是10秒")]),_._v(" "),s("li",[_._v("MySQL默认不开启慢查询日志，在需要调优的时候可以手动开启，但是多少会对数据库性能有点影响")])]),_._v(" "),s("h2",{attrs:{id:"_2-如何开启慢查询日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何开启慢查询日志"}},[_._v("#")]),_._v(" 2. 如何开启慢查询日志")]),_._v(" "),s("p",[_._v("查看是否开启了慢查询日志")]),_._v(" "),s("p",[s("code",[_._v("SHOW VARIABLES LIKE '%slow_query_log%'")])]),_._v(" "),s("p",[_._v("用命令方式开启慢查询日志，但是重启MySQL后此设置会失效")]),_._v(" "),s("p",[s("code",[_._v("set global slow_query_log = 1")])]),_._v(" "),s("p",[_._v("永久生效开启方式可以在my.cnf里进行配置，在"),s("code",[_._v("mysqld")]),_._v("下新增以下两个参数，重启MySQL即可生效")]),_._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[_._v("slow_query_log=1\nslow_query_log_file=日志文件存储路径\n")])]),_._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[_._v("1")]),s("br"),s("span",{staticClass:"line-number"},[_._v("2")]),s("br")])]),s("h2",{attrs:{id:"_3-慢查询时间阀值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-慢查询时间阀值"}},[_._v("#")]),_._v(" 3. 慢查询时间阀值")]),_._v(" "),s("p",[_._v("查看慢查询时间阀值")]),_._v(" "),s("p",[s("code",[_._v("SHOW VARIABLES LIKE 'long_query_time%';")])]),_._v(" "),s("p",[_._v("修改慢查询时间阀值")]),_._v(" "),s("p",[s("code",[_._v("set global long_query_time=3;")])]),_._v(" "),s("p",[_._v("修改后的时间阀值生效")]),_._v(" "),s("p",[s("code",[_._v("需要重新连接或者新开一个回话才能看到修改值。")])]),_._v(" "),s("p",[_._v("在MySQL配置文件中修改时间阀值")]),_._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[_._v("[mysqld]下配置\nslow_query_log=1\nslow_query_log_file=日志文件存储路径\nlong_query_time=3\nlog_output=FILE\n")])]),_._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[_._v("1")]),s("br"),s("span",{staticClass:"line-number"},[_._v("2")]),s("br"),s("span",{staticClass:"line-number"},[_._v("3")]),s("br"),s("span",{staticClass:"line-number"},[_._v("4")]),s("br"),s("span",{staticClass:"line-number"},[_._v("5")]),s("br")])]),s("h1",{attrs:{id:"二、慢查询日志分析工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、慢查询日志分析工具"}},[_._v("#")]),_._v(" 二、慢查询日志分析工具")]),_._v(" "),s("p",[_._v("慢查询日志可能会数据量非常大，那么我们如何快速找到需要优化的SQL语句呢，这个神奇诞生了，它就是mysqldumpshow。")]),_._v(" "),s("h2",{attrs:{id:"_1-mysqldumpslow-help语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysqldumpslow-help语法"}},[_._v("#")]),_._v(" 1. mysqldumpslow --help语法")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596350361000.png",alt:"",loading:"lazy"}})]),_._v(" "),s("p",[_._v("通过mysqldumpslow --help可知这个命令是由三部分组成：mysqldumpslow "),s("code",[_._v("[日志查找选项] [日志文件存储位置]")]),_._v("。")]),_._v(" "),s("h2",{attrs:{id:"_2-日志查找选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-日志查找选项"}},[_._v("#")]),_._v(" 2. 日志查找选项")]),_._v(" "),s("ul",[s("li",[_._v("s：是表示按何种方式排序")])]),_._v(" "),s("table",[s("thead",[s("tr",[s("th",[_._v("选项")]),_._v(" "),s("th",[_._v("说明")])])]),_._v(" "),s("tbody",[s("tr",[s("td",[_._v("c")]),_._v(" "),s("td",[_._v("访问次数")])]),_._v(" "),s("tr",[s("td",[_._v("i")]),_._v(" "),s("td",[_._v("锁定时间")])]),_._v(" "),s("tr",[s("td",[_._v("r")]),_._v(" "),s("td",[_._v("返回记录")])]),_._v(" "),s("tr",[s("td",[_._v("t")]),_._v(" "),s("td",[_._v("查询时间")])]),_._v(" "),s("tr",[s("td",[_._v("al")]),_._v(" "),s("td",[_._v("平均锁定时间")])]),_._v(" "),s("tr",[s("td",[_._v("ar")]),_._v(" "),s("td",[_._v("平均返回记录数")])]),_._v(" "),s("tr",[s("td",[_._v("at")]),_._v(" "),s("td",[_._v("平均查询时间")])])])]),_._v(" "),s("ul",[s("li",[_._v("t：即为返回前面多少条的数据")]),_._v(" "),s("li",[_._v("g：后边搭配一个正则匹配模式，大小写不敏感的")])]),_._v(" "),s("h2",{attrs:{id:"_3-常用分析语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用分析语法"}},[_._v("#")]),_._v(" 3. 常用分析语法")]),_._v(" "),s("p",[_._v("查找返回记录做多的10条SQL")]),_._v(" "),s("p",[s("code",[_._v("mysqldumpslow -s r -t 10 日志路径")])]),_._v(" "),s("p",[_._v("查找使用频率最高的10条SQL")]),_._v(" "),s("p",[s("code",[_._v("mysqldumpslow -s c -t 10 日志路径")])]),_._v(" "),s("p",[_._v("查找按照时间排序的前10条里包含左连接的SQL")]),_._v(" "),s("p",[s("code",[_._v('mysqldumpslow -s t -t 10 -g "left join" 日志路径')])]),_._v(" "),s("p",[_._v("通过more查看日志，防止爆屏")]),_._v(" "),s("p",[s("code",[_._v("mysqldumpslow -s r -t 10 日志路径 | more")])])])}),[],!1,null,null,null);t.default=a.exports}}]);