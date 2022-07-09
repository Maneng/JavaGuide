(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{641:function(e,n,s){"use strict";s.r(n);var a=s(1),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"一、什么是blockingqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是blockingqueue"}},[e._v("#")]),e._v(" 一、什么是BlockingQueue")]),e._v(" "),s("p",[e._v("BlockingQueue即阻塞队列，从阻塞这个词可以看出，在某些情况下对阻塞队列的访问可能会造成阻塞。被阻塞的情况主要有如下两种：")]),e._v(" "),s("ol",[s("li",[e._v("当队列满了的时候进行入队列操作")]),e._v(" "),s("li",[e._v("当队列空了的时候进行出队列操作\n因此，当一个线程试图对一个已经满了的队列进行入队列操作时，它将会被阻塞，除非有另一个线程做了出队列操作；同样，当一个线程试图对一个空队列进行出队列操作时，它将会被阻塞，除非有另一个线程进行了入队列操作。")])]),e._v(" "),s("h2",{attrs:{id:"二、blockingqueue的用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、blockingqueue的用法"}},[e._v("#")]),e._v(" 二、BlockingQueue的用法")]),e._v(" "),s("p",[e._v("阻塞队列主要用在生产者/消费者的场景，下面这幅图展示了一个线程生产、一个线程消费的场景：")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://img.blog.csdn.net/20150929153140497",alt:"",loading:"lazy"}})]),e._v(" "),s("p",[e._v("负责生产的线程不断的制造新对象并插入到阻塞队列中，直到达到这个队列的上限值。队列达到上限值之后生产线程将会被阻塞，直到消费的线程对这个队列进行消费。同理，负责消费的线程不断的从队列中消费对象，直到这个队列为空，当队列为空时，消费线程将会被阻塞，除非队列中有新的对象被插入。")]),e._v(" "),s("h2",{attrs:{id:"三、blockingqueue接口中的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、blockingqueue接口中的方法"}},[e._v("#")]),e._v(" 三、BlockingQueue接口中的方法")]),e._v(" "),s("p",[e._v("阻塞队列一共有四套方法分别用来进行insert、remove和examine，当每套方法对应的操作不能马上执行时会有不同的反应，下面这个表格就分类列出了这些方法：")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("-")]),e._v(" "),s("th",[e._v("Throws Exception")]),e._v(" "),s("th",[e._v("Special Value")]),e._v(" "),s("th",[e._v("Blocks")]),e._v(" "),s("th",[e._v("Times Out")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Insert")]),e._v(" "),s("td",[e._v("add(o)")]),e._v(" "),s("td",[e._v("offer(o)")]),e._v(" "),s("td",[e._v("put(o)")]),e._v(" "),s("td",[e._v("offer(o, timeout, timeunit)")])]),e._v(" "),s("tr",[s("td",[e._v("Remove")]),e._v(" "),s("td",[e._v("remove(o)")]),e._v(" "),s("td",[e._v("poll()")]),e._v(" "),s("td",[e._v("take()")]),e._v(" "),s("td",[e._v("poll(timeout, timeunit)")])]),e._v(" "),s("tr",[s("td",[e._v("Examine")]),e._v(" "),s("td",[e._v("element()")]),e._v(" "),s("td",[e._v("peek()")]),e._v(" "),s("td"),e._v(" "),s("td")])])]),e._v(" "),s("ol",[s("li",[e._v("ThrowsException：如果操作不能马上进行，则抛出异常")]),e._v(" "),s("li",[e._v("SpecialValue：如果操作不能马上进行，将会返回一个特殊的值，一般是true或者false")]),e._v(" "),s("li",[e._v("Blocks:如果操作不能马上进行，操作会被阻塞")]),e._v(" "),s("li",[e._v("TimesOut:如果操作不能马上进行，操作会被阻塞指定的时间，如果指定时间没执行，则返回一个特殊值，一般是true或者false\n需要注意的是，我们不能向BlockingQueue中插入null，否则会报NullPointerException。")])]),e._v(" "),s("h2",{attrs:{id:"四、blockingqueue的实现类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、blockingqueue的实现类"}},[e._v("#")]),e._v(" 四、BlockingQueue的实现类")]),e._v(" "),s("p",[e._v("BlockingQueue只是java.util.concurrent包中的一个接口，而在具体使用时，我们用到的是它的实现类，当然这些实现类也位于java.util.concurrent包中。在Java6中，BlockingQueue的实现类主要有以下几种：")]),e._v(" "),s("ol",[s("li",[e._v("ArrayBlockingQueue")]),e._v(" "),s("li",[e._v("DelayQueue")]),e._v(" "),s("li",[e._v("LinkedBlockingQueue")]),e._v(" "),s("li",[e._v("PriorityBlockingQueue")]),e._v(" "),s("li",[e._v("SynchronousQueue")])]),e._v(" "),s("h3",{attrs:{id:"_4-1-arrayblockingqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-arrayblockingqueue"}},[e._v("#")]),e._v(" 4.1 ArrayBlockingQueue")]),e._v(" "),s("p",[e._v("ArrayBlockingQueue是一个有边界的阻塞队列，它的内部实现是一个数组。有边界的意思是它的容量是有限的，我们必须在其初始化的时候指定它的容量大小，容量大小一旦指定就不可改变。")]),e._v(" "),s("p",[e._v("ArrayBlockingQueue是以先进先出的方式存储数据，最新插入的对象是尾部，最新移出的对象是头部。下面是一个初始化和使用ArrayBlockingQueue的例子：")]),e._v(" "),s("p",[e._v('BlockingQueue queue = new ArrayBlockingQueue(1024);\nqueue.put("1");\nObject object = queue.take();')]),e._v(" "),s("h3",{attrs:{id:"_4-2-delayqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-delayqueue"}},[e._v("#")]),e._v(" 4.2 DelayQueue")]),e._v(" "),s("p",[e._v("DelayQueue阻塞的是其内部元素，DelayQueue中的元素必须实现 java.util.concurrent.Delayed接口，这个接口的定义非常简单：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public interface Delayed extends Comparable<Delayed> {\nlong getDelay(TimeUnit unit);\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("getDelay()方法的返回值就是队列元素被释放前的保持时间，如果返回0或者一个负值，就意味着该元素已经到期需要被释放，此时DelayedQueue会通过其take()方法释放此对象。")]),e._v(" "),s("p",[e._v("从上面Delayed 接口定义可以看到，它还继承了Comparable接口，这是因为DelayedQueue中的元素需要进行排序，一般情况，我们都是按元素过期时间的优先级进行排序。")]),e._v(" "),s("p",[e._v("例1：为一个对象指定过期时间")]),e._v(" "),s("p",[e._v("首先，我们先定义一个元素，这个元素要实现Delayed接口")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('public class DelayedElement implements Delayed {\n  private long expired;\n  private long delay;\n  private String name;\n\n  DelayedElement(String elementName, long delay) {\n         this. name = elementName;\n         this. delay= delay;\n         expired = ( delay + System. currentTimeMillis());\n  }\n\n  @Override\n  public int compareTo(Delayed o) {\n        DelayedElement cached=(DelayedElement) o;\n         return cached.getExpired()> expired?1:-1;\n  }\n\n  @Override\n  public long getDelay(TimeUnit unit) {\n\n         return ( expired - System. currentTimeMillis());\n  }\n\n  @Override\n  public String toString() {\n         return "DelayedElement [delay=" + delay + ", name=" + name + "]";\n  }\n\n  public long getExpired() {\n         return expired;\n  }\n\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br")])]),s("p",[e._v("设置这个元素的过期时间为3s")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('public class DelayQueueExample {\n  public static void main(String[] args) throws InterruptedException {\n        DelayQueue<DelayedElement> queue= new DelayQueue<>();\n        DelayedElement ele= new DelayedElement( "cache 3 seconds",3000);\n         queue.put( ele);\n        System. out.println( queue.take());\n\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("运行这个main函数，我们可以发现，我们需要等待3s之后才会打印这个对象。")]),e._v(" "),s("p",[e._v("其实DelayQueue应用场景很多，比如定时关闭连接、缓存对象，超时处理等各种场景，下面我们就拿学生考试为例让大家更深入的理解DelayQueue的使用。")]),e._v(" "),s("p",[e._v("例2：把所有考试的学生看做是一个DelayQueue，谁先做完题目释放谁")]),e._v(" "),s("p",[e._v("首先，我们构造一个学生对象")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('public class Student implements Runnable,Delayed{\n  private String name;  //姓名\n  private long costTime;//做试题的时间\n  private long finishedTime;//完成时间\n\n  public Student(String name, long costTime) {\n         this. name = name;\n         this. costTime= costTime;\n         finishedTime = costTime + System. currentTimeMillis();\n  }\n\n  @Override\n  public void run() {\n        System. out.println( name + " 交卷,用时" + costTime /1000);\n  }\n\n  @Override\n  public long getDelay(TimeUnit unit) {\n         return ( finishedTime - System. currentTimeMillis());\n  }\n\n  @Override\n  public int compareTo(Delayed o) {\n        Student other = (Student) o;\n         return costTime >= other. costTime?1:-1;\n  }\n\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br")])]),s("p",[e._v("然后在构造一个教师对象对学生进行考试")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('public class Teacher {\n  static final int STUDENT_SIZE = 30;\n  public static void main(String[] args) throws InterruptedException {\n        Random r = new Random();\n        //把所有学生看做一个延迟队列\n        DelayQueue<Student> students = new DelayQueue<Student>();\n        //构造一个线程池用来让学生们“做作业”\n        ExecutorService exec = Executors.newFixedThreadPool(STUDENT_SIZE);\n         for ( int i = 0; i < STUDENT_SIZE; i++) {\n               //初始化学生的姓名和做题时间\n               students.put( new Student( "学生" + (i + 1), 3000 + r.nextInt(10000)));\n        }\n        //开始做题\n        while(! students.isEmpty()){\n               exec.execute( students.take());\n        }\n         exec.shutdown();\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br")])]),s("p",[e._v("我们看一下运行结果：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("学生2 交卷,用时3\n学生1 交卷,用时5\n学生5 交卷,用时7\n学生4 交卷,用时8\n学生3 交卷,用时11\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("通过运行结果我们可以发现，每个学生在指定开始时间到达之后就会“交卷”（取决于getDelay()方法），并且是先做完的先交卷（取决于compareTo()方法）。")]),e._v(" "),s("h3",{attrs:{id:"_4-3-linkedblockingqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-linkedblockingqueue"}},[e._v("#")]),e._v(" 4.3 LinkedBlockingQueue")]),e._v(" "),s("p",[e._v("LinkedBlockingQueue阻塞队列大小的配置是可选的，如果我们初始化时指定一个大小，它就是有边界的，如果不指定，它就是无边界的。说是无边界，其实是采用了默认大小为Integer.MAX_VALUE的容量 。它的内部实现是一个链表。")]),e._v(" "),s("p",[e._v("和ArrayBlockingQueue一样，LinkedBlockingQueue 也是以先进先出的方式存储数据，最新插入的对象是尾部，最新移出的对象是头部。下面是一个初始化和使LinkedBlockingQueue的例子：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('BlockingQueue<String> unbounded = new LinkedBlockingQueue<String>();\nBlockingQueue<String> bounded   = new LinkedBlockingQueue<String>(1024);\nbounded.put("Value");\nString value = bounded.take();\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"_4-4-priorityblockingqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-priorityblockingqueue"}},[e._v("#")]),e._v(" 4.4 PriorityBlockingQueue")]),e._v(" "),s("p",[e._v("PriorityBlockingQueue是一个没有边界的队列，它的排序规则和 java.util.PriorityQueue一样。需要注意，PriorityBlockingQueue中允许插入null对象。")]),e._v(" "),s("p",[e._v("所有插入PriorityBlockingQueue的对象必须实现 java.lang.Comparable接口，队列优先级的排序规则就是按照我们对这个接口的实现来定义的。")]),e._v(" "),s("p",[e._v("另外，我们可以从PriorityBlockingQueue获得一个迭代器Iterator，但这个迭代器并不保证按照优先级顺序进行迭代。")]),e._v(" "),s("p",[e._v("下面我们举个例子来说明一下，首先我们定义一个对象类型，这个对象需要实现Comparable接口：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('public class PriorityElement implements Comparable<PriorityElement> {\nprivate int priority;//定义优先级\nPriorityElement(int priority) {\n    //初始化优先级\n    this.priority = priority;\n}\n@Override\npublic int compareTo(PriorityElement o) {\n    //按照优先级大小进行排序\n    return priority >= o.getPriority() ? 1 : -1;\n}\npublic int getPriority() {\n    return priority;\n}\npublic void setPriority(int priority) {\n    this.priority = priority;\n}\n@Override\npublic String toString() {\n    return "PriorityElement [priority=" + priority + "]";\n}\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br")])]),s("p",[e._v("然后我们把这些元素随机设置优先级放入队列中")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public class PriorityBlockingQueueExample {\npublic static void main(String[] args) throws InterruptedException {\n    PriorityBlockingQueue<PriorityElement> queue = new PriorityBlockingQueue<>();\n    for (int i = 0; i < 5; i++) {\n        Random random=new Random();\n        PriorityElement ele = new PriorityElement(random.nextInt(10));\n        queue.put(ele);\n    }\n    while(!queue.isEmpty()){\n        System.out.println(queue.take());\n    }\n}\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("p",[e._v("看一下运行结果：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PriorityElement [priority=3]\nPriorityElement [priority=4]\nPriorityElement [priority=5]\nPriorityElement [priority=8]\nPriorityElement [priority=9]\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h3",{attrs:{id:"_4-5-synchronousqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-synchronousqueue"}},[e._v("#")]),e._v(" 4.5 SynchronousQueue")]),e._v(" "),s("p",[e._v("SynchronousQueue队列内部仅允许容纳一个元素。当一个线程插入一个元素后会被阻塞，除非这个元素被另一个线程消费。")])])}),[],!1,null,null,null);n.default=t.exports}}]);