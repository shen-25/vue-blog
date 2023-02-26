<template>
  <article class="hentry">
    <header class="entry-header sticky-breadcrumbs">
      <div id="single-sticky" class="container">
        <h1 class="entry-title">指针的进阶——（1）</h1>
        <div class="entry-meta">
          <span class="entry-category"> <a href="/news.html">news</a></span>
          <!-- .entry-category -->
          <span class="entry-author">来源：原创</span>
          <!-- .entry-author -->
          <span class="entry-date">2023/2/25 16:39:36</span>
          <!-- .entry-date -->
          <span class="sticky-meta-right">
            <span class="meta-right"> <!-- .meta-right --></span>
            <!-- .sticky-meta-right --></span
          >
        </div>
        <!-- .entry-meta -->
      </div>
      <!-- #single-sticky -->
    </header>
    <!-- .entry-header -->
    <article class="baidu_pl">
      <div id="article_content" class="clearfix">
        <div id="content_views" class="htmledit_views">
          <h1><span style="color: #fe2c24">本次讲解重点：</span></h1>
          <h1><span style="color: #fe2c24">1、字符指针</span></h1>
          <h1><span style="color: #fe2c24">2、数组指针</span></h1>
          <h1><span style="color: #fe2c24">3、指针数组</span></h1>
          <h1><span style="color: #fe2c24">4、数组传参和指针传参</span></h1>
          <h1><span style="color: #fe2c24">5、函数指针</span></h1>
          <p>
            <span style="color: #0d0016"
              ><strong
                >关于指针这个知识点的主题，我们在前面已经初级阶段已经对指针有了大致的理解和应用了。我们知道了指针的概念：</strong
              ></span
            >
          </p>
          <blockquote>
            <p>
              <span style="color: #a2e043"><strong>1、</strong></span
              ><span style="color: #0d0016"
                ><strong
                  >指针就是地址，但口语中说的指针通常指的是指针变量，指针变量用来存放地址，地址唯一标识一块内存空间。</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #a2e043"><strong>2、</strong></span
              ><span style="color: #0d0016"
                ><strong
                  >指针的大小是固定的4/8字节（32位平台/64位平台）。</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #a2e043"><strong>3、</strong></span
              ><span style="color: #0d0016"
                ><strong
                  >指针是有类型的，指针的类型决定了指针的+-整数的步长，指针解引用操作的时候的权限。</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #a2e043"><strong>4、</strong></span
              ><span style="color: #0d0016"><strong>指针的运算。</strong></span>
            </p>
            <p>
              <span style="color: #a2e043"><strong>5、</strong></span
              ><span style="color: #0d0016"
                ><strong>二级指针：存放一级指针变量的地址的变量。</strong></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;理解：指针变量前的第一个*与变量结合表示它是指针，再往前面所有东西表示这个指针所指向对象的类型。</strong
                ></span
              >
            </p>
          </blockquote>
          <p>
            <span style="color: #0d0016"
              ><strong
                >关于初阶指针有什么不太了解，大家可以点击下方链接学习一遍之后，再来学习进阶。</strong
              ></span
            >
          </p>
          <p>S6---初阶指针_wangjiushun的博客-CSDN博客</p>
          <p>
            <span style="color: #0d0016"
              ><strong>接下来，我们继续探讨指针的高级主题。</strong></span
            >
          </p>
          <hr />
          <h1>
            <span style="color: #fe2c24"
              ><strong>1.&nbsp; 字符指针</strong></span
            >
          </h1>
          <p>
            <span style="color: #0d0016"
              ><strong
                >在指针的类型中我们知道有一种指针类型为字符指针：char*</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #a2e043"
              ><strong
                >一般我们使用：让一个字符指针指向一个字符变量</strong
              ></span
            >
          </p>
          <pre><code class="language-cpp">int main()
{char ch = 'a';char* pc = &amp;ch;return 0;
}</code></pre>
          <p>
            <span style="color: #a2e043"
              ><strong
                >还有一种使用方式：让一个字符指针指向一个常量字符串的首字符地址</strong
              ></span
            >
          </p>
          <pre><code class="language-cpp">#include&lt;stdio.h&gt;int main()
{const char* pstr = "abcdef";printf("%s\n", pstr);return 0;
}</code></pre>
          <p>
            <span style="color: #0d0016"
              ><strong>代码const char *pstr="abcdef";</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong
                >很容易让我们误以为是把常量字符串存储到字符指针pstr里了，但是想一想一个字符指针怎么可能放得下7个字节的字符串呢？所以其本质是把字符串abcdef首字符的地址放到了pstr中。</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #0d0016"><strong>图解：</strong></span>
          </p>
          <p>
            <img
              alt=""
              height="227"
              src="https://img-blog.csdnimg.cn/814a73ece3c04c069e5ff6acbb1eae26.png"
              width="815"
            />
          </p>
          <p>
            <span style="color: #fe2c24"><strong>知识点总结：</strong></span>
          </p>
          <blockquote>
            <p>
              <span style="color: #a2e043"><strong>1.&nbsp;</strong></span
              ><span style="color: #0d0016"
                ><strong> 常量字符串：</strong></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >&nbsp; &nbsp; &nbsp; &nbsp;
                  ①常量字符串不能被修改：用const修饰（如果修改，程序崩溃）；</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >&nbsp; &nbsp; &nbsp; &nbsp;
                  ②常量字符串出现在表达式中时，这个常量字符串的值是首字符的地址。</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #a2e043"><strong>2.&nbsp; </strong></span
              ><span style="color: #0d0016"
                ><strong
                  >const修饰的常变量：变量pstr不能被修改，但是pstr本质上还是一个变量，所以叫常变量</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #a2e043"><strong>3.&nbsp;</strong></span
              ><span style="color: #0d0016"
                ><strong>
                  %s-打印字符串，直到遇到'\0'才停止。&nbsp;</strong
                ></span
              >
            </p>
          </blockquote>
          <p>
            <span style="color: #0d0016"
              ><strong>有这么一道面试题：</strong></span
            >
          </p>
          <pre><code class="language-cpp">#include&lt;stdio.h&gt;int main()
{char str1[] = "hello bit";char str2[] = "hello bit";const char* str3 = "hello bit";const char* str4 = "hello bit";if (str1 == str2){printf("str1 and str2 are same\n");}else{printf("str1 and str2 are not same\n");}if (str3 == str4){printf("str3 and str4 are same\n");}else{printf("str3 and str4 are not same\n");}return 0;
}</code></pre>
          <p>
            <span style="color: #0d0016"
              ><strong>大家猜猜运行的结果。</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"><strong>运行结果：</strong></span>
          </p>
          <p>
            <img
              alt=""
              height="117"
              src="https://img-blog.csdnimg.cn/a1e6f99d4f924bbc89dd537de5cf7d42.png"
              width="414"
            />
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>为什么会这样了？</strong></span
            >
          </p>
          <p>
            <span style="color: #fe2c24"><strong>知识点：</strong></span>
          </p>
          <blockquote>
            <p>
              <span style="color: #fe2c24"><strong>总结：</strong></span>
            </p>
            <p>
              <span style="color: #a2e043"><strong>①</strong></span
              ><span style="color: #0d0016"
                ><strong
                  >（常量字符串，不能被修改）C/C++会把常量字符串存储到单独的一个内存区域，当有几个指针，指向同一个常量字符串的时候，它们实际会指向同一块内存。</strong
                ></span
              ><br /><span style="color: #a2e043"><strong>②</strong></span
              ><span style="color: #0d0016"
                ><strong
                  >但是用相同的常量字符串去初始化不同的数组的时候，就会开辟不同的内存块。</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #a2e043"><strong>③</strong></span
              ><span style="color: #0d0016"
                ><strong>一个变量对应着一个唯一的空间。</strong></span
              >
            </p>
          </blockquote>
          <p>
            <span style="color: #0d0016"><strong>图解：</strong></span>
          </p>
          <p>
            <img
              alt=""
              height="392"
              src="https://img-blog.csdnimg.cn/d6519a3d62b74d3f9338509cbeee862e.png"
              width="941"
            />
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>所以str1和str2不同，str3和str4相同。</strong></span
            >
          </p>
          <h1>
            <span style="color: #fe2c24"
              ><strong>2.&nbsp; 指针数组</strong></span
            >
          </h1>
          <p>
            <span style="color: #0d0016"
              ><strong
                >在初阶指针里我们已经学习一次指针数组，指针数组是一个存放指针的数组。</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>这里，我们在回顾一下：</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>整形数组-存放整形的数组；</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>字符数组-存放字符的数组</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>指针数组-存放指针(地址)的数组</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>指针数组的使用：使用一维数组模拟二维数组</strong></span
            >
          </p>
          <p>
            <span style="color: #a2e043"
              ><strong>代码1：存放字符指针的数组</strong></span
            >
          </p>
          <pre><code class="language-cpp">#include&lt;stdio.h&gt;int main()
{//存放字符指针的数组const char* arr[4] = { "abcd","hello","hehe","wang" };//打印int i = 0;for (i = 0; i &lt; 4; i++){printf("%s\n", arr[i]);}return 0;
}</code></pre>
          <p>
            <span style="color: #0d0016"><strong>&nbsp;图解：</strong></span>
          </p>
          <p>
            <img
              alt=""
              height="290"
              src="https://img-blog.csdnimg.cn/3a985185a6bb4028b9657fcfdbafadbc.png"
              width="1000"
            />
          </p>
          <p>
            <span style="color: #a2e043"
              ><strong>代码2：存放整形指针的数组</strong></span
            >
          </p>
          <pre><code class="language-cpp">#include&lt;stdio.h&gt;int main()
{int arr1[4] = { 1,2,3,4 };int arr2[4] = { 2,3,4,5 };int arr3[4] = { 3,4,5,6 };//存放整形指针的数组int* arr[3] = { arr1,arr2,arr3 };//打印int i = 0;for (i = 0; i &lt; 3; i++){int j = 0;for (j = 0; j &lt; 4; j++){printf("%d ", *(arr[i] + j));//等价于arr[i][j]}printf("\n");}return 0;
}</code></pre>
          <p>
            <span style="color: #0d0016"><strong>图解：</strong></span>
          </p>
          <p>
            <img
              alt=""
              height="229"
              src="https://img-blog.csdnimg.cn/37c8b8bfacd947d18644e5888ded3b16.png"
              width="587"
            />
          </p>
          <p>
            <span style="color: #fe2c24"><strong>总结：</strong></span
            ><span style="color: #0d0016"
              ><strong
                >这就是和二维数组一样的，只不过我们是使用指针数组来模拟的。</strong
              ></span
            >
          </p>
          <h1>
            <span style="color: #fe2c24"
              ><strong>&nbsp;3.&nbsp; 数组指针</strong></span
            >
          </h1>
          <h2>
            <span style="color: #fe2c24"
              ><strong>3.1&nbsp; 数组指针的定义</strong></span
            >
          </h2>
          <p>
            <span style="color: #0d0016"
              ><strong>数组指针是指针？还是数组？</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"><strong>答案是：指针。</strong></span>
          </p>
          <p>
            <span style="color: #0d0016"><strong>我们已经熟悉：</strong></span>
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong
                >整形指针-存放整形地址的指针-指向整形的指针 int*</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong
                >字符指针-存放字符（字符串）地址的指针-指向字符（字符串）的指针
                char*</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #a2e043"
              ><strong
                >那数组指针是：存放数组地址的指针-指向数组的指针</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #0d0016"><strong>代码实例：</strong></span>
          </p>
          <pre><code class="language-cpp">int main()
{//整形指针int a = 10;int* pi = &amp;a;//字符指针char ch = 'w';char* pc = &amp;ch;//数组指针int arr[10] = { 0 };//int* pa[10]是这样的吗，但是这不是指针数组，//pa先与[]结合了就是数组，int(*pa)[10] = &amp;arr;return 0;
}</code></pre>
          <p>
            <strong
              ><span style="color: #fe2c24">对数组指针的理解：</span
              ><span style="color: #a2e043">①</span
              >pa先和*结合，说明pa是一个指针变量，然后指向的是一个大小为10个整形的数组。（即pa是一个指针，指向一个数组的指针，叫做数组指针）</strong
            >
          </p>
          <p>
            <strong
              ><span style="color: #a2e043">②</span
              >数组指针后面的[]表示所指向的数组有几个元素</strong
            >
          </p>
          <p>
            <span style="color: #fe2c24"><strong>知识点：</strong></span>
          </p>
          <blockquote>
            <p>
              <strong
                ><span style="color: #a2e043">①</span
                >注意：[]的优先级要高于*的，所以必须加上（）来保证pa先和*结合。</strong
              >
            </p>
            <p>
              <strong
                ><span style="color: #a2e043">②</span
                >指针变量前的第一个*与变量结合表示它是指针，再往前面所有的东西表示这个指针所指向对象的类型。</strong
              >
            </p>
          </blockquote>
          <p><strong>接下来，我们深入了解数组名和&amp;数组名</strong></p>
          <h2>
            <span style="color: #fe2c24"
              ><strong>3.2&nbsp; &amp;数组名VS数组名</strong></span
            >
          </h2>
          <p>
            <span style="color: #a2e043"
              ><strong>代码1：打印&amp;数组名和数组名的地址观察</strong></span
            >
          </p>
          <pre><code class="language-cpp">#include&lt;stdio.h&gt;int main()
{int arr[10] = { 1,2,3,4,5,6,7,8,9,10 };//打印数组名地址printf(" arr--&gt;%p\n", arr);//打印&amp;数组名地址printf("&amp;arr--&gt;%p\n", &amp;arr);return 0;
}</code></pre>
          <p>&nbsp;运行结果：</p>
          <p>
            <img
              alt=""
              height="118"
              src="https://img-blog.csdnimg.cn/285da0698bdd48af90988225260dec6b.png"
              width="273"
            />
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong
                >运行之后我们发现：&amp;数组名和数组名的地址是一样的。</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>难道两个是一样的吗？</strong></span
            >
          </p>
          <p>
            <span style="color: #a2e043"
              ><strong>代码2：&amp;数组名和数组名+1</strong></span
            >
          </p>
          <pre><code class="language-cpp">//代码2：
//数组名-数组首元素的地址
// &amp;数组名-是数组的地址
// 数组首元素的地址和数组的地址从值的角度来看是一样的，但是意义不一样
// 指针的类型决定了指针+-整数的步长，指针解引用操作的时候的权限
//#include&lt;stdio.h&gt;int main()
{int arr[10] = { 1,2,3,4,5,6,7,8,9,10 };printf(" arr----&gt;%p\n", arr);//指针的类型:int*printf(" arr+1--&gt;%p\n", arr + 1);//+1，向后跳4个字节printf("&amp;arr----&gt;%p\n", &amp;arr);//指针的类型：int(*)[10]printf("&amp;arr+1--&gt;%p\n", &amp;arr + 1);//+1，向后跳40个字节return 0;
}</code></pre>
          <p>&nbsp;运行结果：</p>
          <p>
            <img
              alt=""
              height="150"
              src="https://img-blog.csdnimg.cn/6e87a90d075c4ad5b8133c5a11676e66.png"
              width="427"
            />
          </p>
          <p>图解：</p>
          <p>
            <img
              alt=""
              height="270"
              src="https://img-blog.csdnimg.cn/742bfa42567f43adb41b56a20b75a0d9.png"
              width="833"
            /><span style="color: #0d0016"
              ><strong>根据上面的代码，</strong></span
            ><span style="color: #fe2c24"><strong>我们发现：</strong></span>
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>数组名-数组首元素的地址</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>&amp;数组名-是数组的地址&nbsp;</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong
                >&nbsp;数组首元素的地址和数组的地址从值的角度来看是一样的，但是意义不一样。</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #fe2c24"><strong>知识点：</strong></span>
          </p>
          <blockquote>
            <p>
              <span style="color: #a2e043"><strong>1.&nbsp;</strong></span
              ><span style="color: #0d0016"
                ><strong>
                  指针的类型决定了指针+-整数的步长，指针解引用操作的时候的权限。</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #a2e043"><strong>2.</strong></span
              ><span style="color: #0d0016"
                ><strong>&nbsp; 存储一个数组所需的内存字节数：</strong></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >&nbsp; &nbsp; &nbsp; &nbsp;
                  ①一维数组：总字节数=sizeof（类型）*元素个数</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >&nbsp; &nbsp; &nbsp; &nbsp;
                  ②二维数组：总字节数=sizeof（类型）*行数*列数</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #a2e043"><strong>3、</strong></span
              ><span style="color: #0d0016"
                ><strong
                  >对二维数组数组名的加深理解：数组名就是二维数组首元素的地址</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >&nbsp; &nbsp; &nbsp; &nbsp;
                  对于二维数组来说，它的第一行就是它的第一个元素，第二行就是它的第二个元素……</strong
                ></span
              ><span style="color: #a2e043"
                ><strong
                  >即一行是一个元素，二维数组是一个一维数组的数组。</strong
                ></span
              >
            </p>
            <pre><code class="language-cpp">//代码：二维数组的数组名
//二维数组的数组名是首元素地址--&gt;第一行的地址
// 对于二维数组一行是一个元素#include&lt;stdio.h&gt;int main()
{int arr[3][4] = { 0 };printf("%p\n", arr);printf("%p\n", arr + 1);//跳过了16个字节return 0;
}</code></pre>
            <p>运行结果：</p>
            <p>
              <img
                alt=""
                height="118"
                src="https://img-blog.csdnimg.cn/dd4a9f8dd30041ae9544b2faf459f847.png"
                width="306"
              />
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >上机运行实践，也正是如此：arr+1跳40个字节，刚好是一行。</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >注意区分:二维数组的第一行第一个元素地址是&amp;arr[0][0],</strong
                ></span
              >
            </p>
          </blockquote>
          <h2>
            <span style="color: #fe2c24"
              ><strong>3.3&nbsp; 数组指针的使用</strong></span
            >
          </h2>
          <p>
            <span style="color: #a2e043"
              ><strong
                >代码1：一维数组数组指针的使用，但是我们很少这样写代码</strong
              ></span
            >
          </p>
          <pre><code class="language-cpp">//代码1：一维数组数组指针的使用，但是我们很少这样写代码#include&lt;stdio.h&gt;int main()
{int arr[10] = { 1,2,3,4,5,6,7,8,9,10 };//数组指针int(*p)[10] = &amp;arr;//打印数组int i = 0;for (i = 0; i &lt; 10; i++){printf("%d ", (*p)[i]);//*p[i]这种写法的话，p先与[i]结合再解引用}return 0;
}</code></pre>
          <p>
            <span style="color: #a2e043"
              ><strong>&nbsp;代码2：二维数组数组指针的使用</strong></span
            >
          </p>
          <pre><code class="language-cpp">#include&lt;stdio.h&gt;void print1(int arr[3][4], int r, int c)
{int i = 0;for (i = 0; i &lt; r; i++){int j = 0;for (j = 0; j &lt; c; j++){printf("%d ", arr[i][j]);}printf("\n");}
}void print2(int(*p)[4], int r, int c)
{int i = 0;for (i = 0; i &lt; r; i++){int j = 0;for (j = 0; j &lt; c; j++){printf("%d ", *(*(p + i) + j));//等价于(*(p+i))[j],也等价p[i][j]}printf("\n");}
}int main()
{int arr[3][4] = { {1,2,3,4},{2,3,4,5},{3,4,5,6} };//调用函数打印数组print1(arr, 3, 4);print2(arr, 3, 4);return 0;
}</code></pre>
          <p>图解：</p>
          <p>
            <img
              alt=""
              height="250"
              src="https://img-blog.csdnimg.cn/46332ad8bd6444a2a1643908d644b599.png"
              width="523"
            />
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong
                >&nbsp;学了指针数组和数组指针我们一起回顾并看看下面代码的意思：</strong
              ></span
            >
          </p>
          <blockquote>
            <p>
              <span style="color: #0d0016"><strong>int arr[5];</strong></span>
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong>int *parr1[10];</strong></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong>int (*parr2)[10];</strong></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong>int (*parr3[10])[5];</strong></span
              >
            </p>
          </blockquote>
          <p>
            <img
              alt=""
              height="611"
              src="https://img-blog.csdnimg.cn/cdef4150239f48578880f454a843c2a4.png"
              width="1200"
            />
          </p>
          <h1>
            <span style="color: #fe2c24"
              ><strong>&nbsp;4.&nbsp; 数组参数、指针参数</strong></span
            >
          </h1>
          <p>
            <span style="color: #0d0016"
              ><strong
                >我们写代码的时候难免要把数组或者指针传给函数，那么函数的参数该如何设计呢？</strong
              ></span
            >
          </p>
          <h2>
            <span style="color: #fe2c24"
              ><strong>4.1&nbsp; 一维数组传参</strong></span
            >
          </h2>
          <blockquote>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >void test(int arr[])//ok?<br />
                  {}<br />
                  void test(int arr[10])//ok?<br />
                  {}<br />
                  void test(int* arr)//ok?<br />
                  {}<br />
                  void test2(int* arr[20])//ok?<br />
                  {}</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong>void test2(int* arr[])//ok?</strong></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >{}<br />
                  void test2(int** arr)//ok?<br />
                  {}<br />
                  int main()<br />
                  {<!-- --><br />
                  &nbsp;&nbsp; &nbsp;int arr[10] = { 0 };<br />
                  &nbsp;&nbsp; &nbsp;int* arr2[20] = { 0 };<br />
                  &nbsp;&nbsp; &nbsp;test(arr);<br />
                  &nbsp;&nbsp; &nbsp;test2(arr2);<br />
                  }</strong
                ></span
              >
            </p>
          </blockquote>
          <p>
            <img
              alt=""
              height="661"
              src="https://img-blog.csdnimg.cn/1c1b044a7b464266bb37b5e1e619bbc4.png"
              width="1200"
            />
          </p>
          <h2>
            <span style="color: #fe2c24"
              ><strong>&nbsp;4.2&nbsp; 二维数组传参</strong></span
            >
          </h2>
          <blockquote>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >void test(int arr[3][5])//ok？<br />
                  {}<br />
                  void test(int arr[][])//ok？<br />
                  {}<br />
                  void test(int arr[][5])//ok？<br />
                  {}<br />
                  void test(int* arr)//ok？<br />
                  {}<br />
                  void test(int* arr[5])//ok？<br />
                  {}<br />
                  void test(int(*arr)[5])//ok？<br />
                  {}<br />
                  void test(int** arr)//ok？<br />
                  {}<br />
                  int main()<br />
                  {<!-- --><br />
                  &nbsp;&nbsp; &nbsp;int arr[3][5] = { 0 };<br />
                  &nbsp;&nbsp; &nbsp;test(arr);<br />
                  }</strong
                ></span
              >
            </p>
          </blockquote>
          <p>
            <img
              alt=""
              height="648"
              src="https://img-blog.csdnimg.cn/25e5caf8edff49f8ba9106752958704a.png"
              width="1200"
            />
          </p>
          <h2>
            <span style="color: #fe2c24"
              ><strong>4.3&nbsp; 一级指针传参</strong></span
            >
          </h2>
          <p>
            <span style="color: #a2e043"><strong>思考：</strong></span
            ><span style="color: #0d0016"
              ><strong
                >当一个函数的参数部分为一级指针的时候，函数能接收什么参数？</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #a2e043"><strong>答案是：</strong></span
            ><span style="color: #0d0016"
              ><strong
                >①一级指针变量；②一维数组数组名；③变量地址。</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #0d0016"><strong>比如：</strong></span>
          </p>
          <blockquote>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >void test1(int *p)<br />
                  {}<br />
                  //test1函数能接收什么参数？<br />
                  void test2(char* p)<br />
                  {}<br />
                  //test2函数能接收什么参数？</strong
                ></span
              >
            </p>
          </blockquote>
          <pre><code class="language-cpp">void test1(int* p)
{}void test2(char* p)
{}int main()
{//test1函数能接收什么参数？int a = 10;int* pi = &amp;a;int arr[5] = { 0 };test1(pi);//一级指针变量test1(arr);//一位数组数组名test1(&amp;a);//变量地址//test2函数能接收什么参数？char ch = 'w';char* pc = &amp;ch;char arr1[6] = { '\0' };test2(pc);test2(arr1);test2(&amp;ch);return 0;
}</code></pre>
          <h2>
            <span style="color: #fe2c24"
              ><strong>4.4&nbsp; 二级指针传参</strong></span
            >
          </h2>
          <p>
            <span style="color: #a2e043"><strong>思考：</strong></span
            ><span style="color: #0d0016"
              ><strong
                >当函数的参数为二级指针的时候，函数能接收什么参数？</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #a2e043"><strong>答案是：</strong></span
            ><span style="color: #0d0016"
              ><strong
                >①二级指针变量；②指针数组数组名；③一级指针变量地址。</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #0d0016"><strong>代码实例：</strong></span>
          </p>
          <pre><code class="language-cpp">void test(char** p)
{ }
int main()
{char c = 'b';char* pc = &amp;c;char** ppc = &amp;pc;char* arr[10];test(&amp;pc);//一级指针变量地址test(ppc);//二级指针变量test(arr);//指针数组数组名return 0;
}</code></pre>
          <h1>
            <span style="color: #fe2c24"><strong>5、函数指针</strong></span>
          </h1>
          <p>
            <span style="color: #0d0016"><strong>我们先打印一下</strong></span
            ><span style="color: #fe2c24"><strong>函数的地址</strong></span
            ><span style="color: #0d0016"><strong>：</strong></span>
          </p>
          <pre><code class="language-cpp">#include&lt;stdio.h&gt;int Add(int x, int y)
{return x + y;
}int main()
{//打印函数地址printf("%p\n", &amp;Add);printf("%p\n", Add);return 0;
}</code></pre>
          <p>
            <span style="color: #0d0016"><strong>运行结果：</strong></span>
          </p>
          <p>
            <img
              alt=""
              height="105"
              src="https://img-blog.csdnimg.cn/cd486b5153564122836adfcce36772a5.png"
              width="329"
            />
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong
                >从结果我们发现：取函数名和函数名，打印的地址一样。</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #fe2c24"><strong>结论：</strong></span
            ><span style="color: #a2e043"
              ><strong>①取函数名和函数名，都是函数的地址。</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong>那函数的地址是怎么保存的呢？</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"><strong>看下面代码：</strong></span>
          </p>
          <pre><code class="language-cpp">#include&lt;stdio.h&gt;int Add(int x, int y)
{return x + y;
}int main()
{//数组指针-指向数组的指针int arr[10] = { 0 };int(*pa)[10] = &amp;arr;//函数指针-指向函数的指针int (*pf)(int, int) = &amp;Add;//pf 是一个存放函数地址的指针变量-函数指针int ret1 = pf(2, 3);//pf是函数地址，Add也是函数地址，所以不用解引用也可以int ret2 = (*pf)(2, 3);//写上*也可以，符合语法，但是需注意带（）printf("%d %d\n", ret1, ret2);return 0;
}</code></pre>
          <p>
            <span style="color: #0d0016"
              ><strong>类比数组指针，函数指针也是如此要</strong></span
            ><span style="color: #a2e043"
              ><strong>注意带()保证*和变量pf先结合。</strong></span
            >
          </p>
          <p>
            <span style="color: #fe2c24"
              ><strong>使用函数指针找到所指向的函数：</strong></span
            >
          </p>
          <p>
            <span style="color: #a2e043"
              ><strong>①直接写函数指针：</strong></span
            ><span style="color: #0d0016"
              ><strong
                >因为函数指针变量存储的就是函数的地址，所以在使用的时候可以不解引用。</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #a2e043"
              ><strong>②函数指针解引用：</strong></span
            ><span style="color: #0d0016"
              ><strong
                >解引用其实没必要，这样写就是方便理解。因为pf是指针，指针要找到他所指向的对象(对象函数名就是函数的地址)，解引用更容易理解，符合语法的理解。(注意：优先级缘故，如果要解引用，一定要使用()把*和函数指针变量括起来。)</strong
              ></span
            >
          </p>
          <p>
            <span style="color: #ff9900"
              ><strong>现在我们来看两段有趣的代码：</strong></span
            >
          </p>
          <blockquote>
            <p>
              <span style="color: #ff9900"><strong>//代码1</strong></span
              ><br /><span style="color: #0d0016"><strong>(</strong></span
              ><span style="color: #ff9900"><strong>*</strong></span
              ><span style="color: #0d0016"><strong>(</strong></span
              ><span style="color: #a2e043"><strong>void</strong></span
              ><span style="color: #0d0016"><strong> (</strong></span
              ><span style="color: #ff9900"><strong>*</strong></span
              ><span style="color: #0d0016"><strong>)())</strong></span
              ><span style="color: #a2e043"><strong>0</strong></span
              ><span style="color: #0d0016"><strong>)();</strong></span
              ><br /><span style="color: #ff9900"><strong>//代码2</strong></span
              ><br /><span style="color: #a2e043"><strong>void</strong></span
              ><span style="color: #0d0016"><strong> (</strong></span
              ><span style="color: #ff9900"><strong>*</strong></span
              ><span style="color: #4da8ee"><strong>signal</strong></span
              ><span style="color: #0d0016"><strong>(</strong></span
              ><span style="color: #a2e043"><strong>int</strong></span
              ><span style="color: #0d0016"><strong> , </strong></span
              ><span style="color: #a2e043"><strong>void</strong></span
              ><span style="color: #0d0016"><strong>(</strong></span
              ><span style="color: #ff9900"><strong>*</strong></span
              ><span style="color: #0d0016"><strong>)(</strong></span
              ><span style="color: #a2e043"><strong>int</strong></span
              ><span style="color: #0d0016"><strong>)))(</strong></span
              ><span style="color: #a2e043"><strong>int</strong></span
              ><span style="color: #0d0016"><strong>);</strong></span>
            </p>
          </blockquote>
          <p>
            <strong><span style="color: #fe2c24">代码1的解读：</span></strong>
          </p>
          <pre><code class="language-cpp">int main()
{( *( void(*)() ) 0 )();//分析：// ①void(*)()--&gt;函数指针类型，这个函数是无参的// ②()里面放类型--&gt;强制类型转换// ③( void(*)() ) 0 --&gt;把0强转成这种函数指针类型，// 就是0被当成了函数的地址// ④（*指针变量）--&gt;解引用操作，找到0地址的函数// ⑤最后的（）--&gt;调用函数不用传参(因为强转的0函数类型是无参的)////总结：该代码是一次函数调用，调用0地址处的一个函数//		首先代码中将0强转为类型为( void(*)() )的函数指针//      然后去调用0地址处的函数return 0;
}
</code></pre>
          <p>
            <span style="color: #0d0016"
              ><strong>破题点：从0出发，再开始分析。</strong></span
            >
          </p>
          <p>
            <span style="color: #fe2c24"><strong>代码2的解读：</strong></span>
          </p>
          <pre><code class="language-cpp">//函数返回类型是函数指针int main()
{void (*signal(int, void(*)(int))) (int);//分析：①signal没有与*结合，这不是指针//		②signal后有括号()--&gt;signal是函数名//		③函数名括号()里--&gt;函数参数//		第一个参数是int类型，第二个参数是函数指针类型//		④语句最后有；没有函数体--&gt;函数是声明//		⑤函数的声明--&gt;形式：函数返回类型 函数名 (形参列表)；//		那剩下的void(*)(int)就是函数返回类型了//		//总结：该代码是一次函数的声明//		声明的函数名字叫signal//		signal函数的参数有2个，第一个是int类型，第二个是函数指针类型，//		该函数指针能够指向的那个函数的参数是int，返回类型是void。//		signal函数的返回类型是一个函数指针，//		该函数指针能够指向的那个函数的参数是int，返回类型是void。//我们能不能这么写？//void(*)(int) signal(int,void(*)(int));//答案是不能这么写，帮助理解可以这么写，但是语法上是错的//函数的返回类型是函数指针是，只能把函数名 (形参列表)移到*的后面。//优化：类型简化---&gt;typedef//函数指针的重命名typedef void(*pf_t)(int);pf_t signal(int, pf_t);return 0;
}</code></pre>
          <p>
            <span style="color: #0d0016"
              ><strong>破题点：从signal出发，再开始分析。</strong></span
            >
          </p>
          <p>
            <span style="color: #fe2c24"><strong>知识点：</strong></span>
          </p>
          <blockquote>
            <p>
              <span style="color: #a2e043"
                ><strong>1、函数返回类型是指针函数时的写法：</strong></span
              ><span style="color: #0d0016"
                ><strong
                  >当函数的返回类型是函数指针时，只能把函数名
                  (参数列表)移到返回类型这个函数指针的*的后面。</strong
                ></span
              >
            </p>
            <p>
              <span style="color: #a2e043"
                ><strong>2、指针类型简化（重命名）---&gt;typedef</strong></span
              >
            </p>
            <p>
              <span style="color: #0d0016"
                ><strong
                  >&nbsp; &nbsp; &nbsp; &nbsp;
                  指针类型重命名，别名写在*的后面并且还要注意操作符的优先级（即*先与别名结合）</strong
                ></span
              >
            </p>
          </blockquote>
          <p>
            <span style="color: #0d0016"
              ><strong>指针进阶的主题并未结束，在下一次文章终结。</strong></span
            >
          </p>
          <p>
            <span style="color: #0d0016"
              ><strong
                >有什么不足希望大家指出，我会更加努力写出更好的文章。</strong
              ></span
            >
          </p>
        </div>
      </div>
      <div id="treeSkill"></div>
    </article>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
