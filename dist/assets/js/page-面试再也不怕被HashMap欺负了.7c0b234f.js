(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{663:function(a,n,s){"use strict";s.r(n);var t=s(1),e=Object(t.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596467333000.png",alt:"",loading:"lazy"}})]),a._v(" "),s("p",[s("strong",[a._v("作者")]),a._v(": 西魏陶渊明\n"),s("strong",[a._v("博客")]),a._v(": "),s("a",{attrs:{href:"https://blog.springlearn.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.springlearn.cn/"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("西魏陶渊明")]),a._v(" "),s("p",[a._v("莫笑少年江湖梦，谁不少年梦江湖")])]),a._v(" "),s("blockquote",[s("p",[a._v("HashMap是我们在日常开发中经常使用的一个结合类型,同时也是面试时候最好提问的集合类型,在这里进行整理\n一起学习,进步。")])]),a._v(" "),s("h2",{attrs:{id:"一、数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、数据结构"}},[a._v("#")]),a._v(" 一、数据结构")]),a._v(" "),s("p",[a._v("先说两种数据结构, 不用怕, 如果要对付面试只要了解就行了。不用手写实现, 同时也因为已经有人帮我写好,所以开发中我们只要用就行。")]),a._v(" "),s("h3",{attrs:{id:"_1-二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-二叉树"}},[a._v("#")]),a._v(" 1. 二叉树")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.cs.usfca.edu/~galles/visualization/BST.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("动画展示二叉树"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("本来是一个相对平衡的二叉树(当前数据 > 根节点 ？ 从右边插入 : 从左边插入)。\n"),s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596522740000.png",alt:"",loading:"lazy"}}),a._v("\n但是由于在使用的过程中的删除,慢慢的变成了一个瘸腿。此时树的高度越高,数据越多,导致查询叶子\n的耗时越长。\n"),s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596522608000.png",alt:"",loading:"lazy"}})]),a._v(" "),s("p",[a._v("于是乎人们在这个数据结构的基础上,研究出新的结构,就是下面的红黑树。")]),a._v(" "),s("h3",{attrs:{id:"_2-红黑树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-红黑树"}},[a._v("#")]),a._v(" 2. 红黑树")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.cs.usfca.edu/~galles/visualization/RedBlack.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("动画展示红黑树"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("依次插入7 5 3 2 4 6 8 9 12 11 17 13 14 16")]),a._v(" "),s("p",[a._v("很明显我们可以看出红黑树比二叉树相对比较平衡。\n"),s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596523217000.png",alt:"",loading:"lazy"}})]),a._v(" "),s("p",[a._v("在对比一下二叉树")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596523318000.png",alt:"",loading:"lazy"}})]),a._v(" "),s("p",[a._v("好了关于数据结构的知识就说这么多,可以通过图就能知道这两种数据结构情况了。因为数据结构不是我们本篇研究的点。\n所以就提这么多。")]),a._v(" "),s("h2",{attrs:{id:"二、源码分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、源码分析"}},[a._v("#")]),a._v(" 二、源码分析")]),a._v(" "),s("p",[a._v("HashMap 实现了 Map 接口,JDK1.7由 数组 + 链表实现， 1.8后由 数组 + 链表 + 红黑树实现")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596527068000.png",alt:"",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"_1-put的源码分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-put的源码分析"}},[a._v("#")]),a._v(" 1. put的源码分析")]),a._v(" "),s("p",[a._v("HashMap中声明的常量信息,注意看。下面源码中会提到。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("变量")]),a._v(" "),s("th",[a._v("含义")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("DEFAULT_INITIAL_CAPACITY")]),a._v(" "),s("td",[a._v("默认的初始容量")])]),a._v(" "),s("tr",[s("td",[a._v("MAXIMUM_CAPACITY")]),a._v(" "),s("td",[a._v("最大的容量2^30")])]),a._v(" "),s("tr",[s("td",[a._v("DEFAULT_LOAD_FACTOR")]),a._v(" "),s("td",[a._v("容器个数 size > 负载因子 * 数组长度  就需要进行扩容")])]),a._v(" "),s("tr",[s("td",[a._v("TREEIFY_THRESHOLD")]),a._v(" "),s("td",[a._v("如果数组中某一个链表 >= 8 需要转化为红黑树")])]),a._v(" "),s("tr",[s("td",[a._v("UNTREEIFY_THRESHOLD")]),a._v(" "),s("td",[a._v("如果数组中某一个链表转化为红黑树后的节点 < 6 的时候 继续转为 链表")])])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" final V putVal(int hash, K key, V value, boolean onlyIfAbsent,\n                   boolean evict) {\n        Node<K,V>[] tab; Node<K,V> p; int n, i;\n        if ((tab = table) == null || (n = tab.length) == 0)\n            n = (tab = resize()).length;\n        if ((p = tab[i = (n - 1) & hash]) == null)\n            tab[i] = newNode(hash, key, value, null);\n        else {\n            Node<K,V> e; K k;\n            if (p.hash == hash &&\n                ((k = p.key) == key || (key != null && key.equals(k))))\n                e = p;\n            //判断是否是树    \n            else if (p instanceof TreeNode)\n                e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);\n            //继续用链表    \n            else {\n                // 循环链表\n                for (int binCount = 0; ; ++binCount) {\n                    if ((e = p.next) == null) {\n                        // 新建节点存储\n                        p.next = newNode(hash, key, value, null);\n                        if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st\n                            //大于树的阀值,就转换为树结构\n                            treeifyBin(tab, hash);\n                        break;\n                    }\n                    if (e.hash == hash &&\n                        ((k = e.key) == key || (key != null && key.equals(k))))\n                        break;\n                    p = e;\n                }\n            }\n            if (e != null) { // existing mapping for key\n                V oldValue = e.value;\n                if (!onlyIfAbsent || oldValue == null)\n                    e.value = value;\n                afterNodeAccess(e);\n                return oldValue;\n            }\n        }\n        ++modCount;\n        if (++size > threshold)\n            resize();\n        afterNodeInsertion(evict);\n        return null;\n    }\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br")])]),s("p",[a._v("从上面源码中我们可以看到在put时候会判断是链表结构还是红黑树。如果是树就用树put\n"),s("code",[a._v("((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);")]),a._v("。")]),a._v(" "),s("p",[a._v("如果是链表就循环列表插入数据,如果发现列表长度大于树的阀值就讲链表转换为树")]),a._v(" "),s("h3",{attrs:{id:"_2-put流程赘述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-put流程赘述"}},[a._v("#")]),a._v(" 2. put流程赘述")]),a._v(" "),s("ol",[s("li",[a._v("判断 table 是否为 null。为 null 则新建一个 table 数组")]),a._v(" "),s("li",[a._v("调用 hash 获取 该 key 的 hash 值\n"),s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596528441000.png",alt:"",loading:"lazy"}})]),a._v(" "),s("li",[a._v("将hash & n-1的值当做下标去找数据")]),a._v(" "),s("li",[a._v("如果发现有数据\n"),s("ol",[s("li",[a._v("但是数据的hash和key都和当前要插入的一致就替换。(此时还是一个Node节点)")]),a._v(" "),s("li",[a._v("但是数据的hash一致,但是key不一致,说明是hash冲突了。就转换成一个Node链表,数据放到链表尾部")])])]),a._v(" "),s("li",[a._v("如果发现链表长度大于等于8,就转换成红黑树\n"),s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596528854000.png",alt:"",loading:"lazy"}})])]),a._v(" "),s("h2",{attrs:{id:"三、面试知识扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、面试知识扩展"}},[a._v("#")]),a._v(" 三、面试知识扩展")]),a._v(" "),s("p",[a._v("前面我们知道了HashMap在1.8之后的优化。这里我们最后再说一个面试题。\n问: 1.7时候hashmap在扩容时候回出现死链的问题。问题原因是什么?  已经出现的场景是什么?")]),a._v(" "),s("p",[a._v("首先看下扩容方法 "),s("code",[a._v("resize")]),a._v(" "),s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596530770000.png",alt:"",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"_1-优化1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-优化1"}},[a._v("#")]),a._v(" 1. 优化1")]),a._v(" "),s("p",[a._v("jdk1.8在对链表进行扩容时候时候不是直接都去hash了。而是\n"),s("code",[a._v("(e.hash & oldCap) == 0")]),a._v(" 下标不变\n"),s("code",[a._v("(e.hash & oldCap) != 0")]),a._v(" 下标 = 原下标 + oldCap")]),a._v(" "),s("h3",{attrs:{id:"_2-出现的场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-出现的场景"}},[a._v("#")]),a._v(" 2. 出现的场景")]),a._v(" "),s("p",[a._v("多线程操作扩容")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img.springlearn.cn/blog/learn_1596531864000.png",alt:"",loading:"lazy"}})]),a._v(" "),s("p",[a._v("最后求关注,求订阅,谢谢你的阅读!")])])}),[],!1,null,null,null);n.default=e.exports}}]);