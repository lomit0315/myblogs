---
category: icpc
title: 2026.1 康复训练
publishDate: 2026-01-06 22:04:56
description: "如果生命的脚印终有一天会被时间的尘埃掩埋，那我们就永远不能停下脚步。"
tags:
 - personal
 - reflection
 - solution
heroImage: { src: '1.jpg', color: '#B4C6DA' }
---



考完final，摸了十天鱼终于想起来要康复训练了，之前一直不知道从哪里开始，于是乎一直在摆烂。前两天突然发现明年WF可能在上海，有机会公费回国，突然来兴致了，冷静思考一下感觉还是得认真准备一下。 
我必须得考虑这是否是我此生仅有的机会了。

寒假选择不回国留在学校的初衷也是防止自己回国过于摆烂，还是有很多事情要做的。

做这个系列是因为感觉还是得记录一下，不管是科研还是icpc，在寒假这剩下21天的宝贵时间里不记录每天干了啥容易摆烂

顺便写写题解

## 12.29

其实准确的来说是 12.29开始的，但是归进 26 年1月好了

今天一早起来vp了一场 ABC 418， 边和高中同学聊天一边打，前面的题都还算容易，基本一眼秒。到了倒数第二题开始发现不会做，以为有什么神必性质没看出来，看题解发现原来是 DDP，然后最后一题是 确定性有穷自动机， 现在都卷到这种程度了吗？？

看了一下去年NAC的题，发现只要能稳定做出7个蓝题+切1/2题紫题就能进 WF了，去年还是太摆了。

### ABC418E - Trapezium

[problem link](https://atcoder.jp/contests/abc418/tasks/abc418_e)

现在暂时还没法补，先占个坑吧

### ICPC NAC 2025  H. Ornaments on a Tree

[problem link](https://qoj.ac/contest/2041/problem/11363)

不难发现，自底向上的贪心显然很对

对于当前的点 $u$,  如果是$-1$，只需让其等于 $\min(K - sum[fa], K - sum[u])$ 即可

然后更新一下$sum[fa], sum[u]$ 接着做

[code](https://qoj.ac/submission/1877544)

别的题看了一下，有想法，明天补吧


[广义串并联图方法](https://www.cnblogs.com/apjifengc/p/17786222.html) 看了一下还没理解，明天研究一下


## 12.30

上午看完了广义串并联图，就学了一下怎么做题。找了两题写了一下

然后去学校健身房练完，回来到处乱看了一些知识和blog

看高中生blog看得有点玉玉，忆往昔岁月了说是，浪费了巨量的时间

然后发现今年国家集训队好像都没法直接保送，还得笔试和面试，感觉非常逆天

### SNOI2020 生成树

[problem link](https://www.luogu.com.cn/problem/P6790)

广义串并联图就是不存在 $K_4$ 子图的图，对于这种图，可以用删一度点，缩二点，然后叠合重边的方式把大图缩成小图，然后维护答案

对于这题，显然给出的图是广义串并联图

于是在缩图的时候，可以考虑用$dp$ 维护边 , $f[e], g[e]$ 表示对于这条边删或者不删的方案数

对于删一度点， 直接让 $ans = ans \times f[e]$

对于二度点点两条边$e_1, e_2$  假设缩成的边为 $e^*$

$f[e^{*}] = f[e_1] * f[e_2]$

$g[e^{*}] = f[e_1] * g[e_2] + g[e_1] * f[e_2]$


对于叠合重边

$f[e^{*}] = f[e_1] * g[e_2] + g[e_1] * f[e_2]$

$g[e^{*}] = g[e_1] * g[e_2]$

可以直接拿个队列维护这玩意，代码还算好写 (不知道为啥题解区的好多代码码风很奇特)

[code](https://www.luogu.com.cn/paste/d0h32vm7)

###  [ICPC NAC 2025  G. Most Scenic Cycle](https://qoj.ac/contest/2041/problem/11362)

这题比上一题还简单，只用维护最长的路径

缩二度点的时候相加，然后叠合重边的时候计算答案并且维护最大值

[code](https://qoj.ac/submission/1879415)

### luogu P4839 P 哥的桶

[problem link](https://www.luogu.com.cn/problem/P4839)

线性基康复训练题

不难发现这是一个单点修改，区间询问问题

首先搞个线段树，然后每个节点上用线性基维护即可

把两个线性基合并就是for其中一个，然后把里面的插进另一个线性基即可

[code](https://www.luogu.com.cn/paste/z5jek63b)


## 12.31

跨年，国内高中同学熬夜和我打游戏，然后晚上我又熬夜和他们打游戏，有点上头

整理了一下房间

跨年还是休息一下吧

## 1.1

摸

## 1.2

重新开始写题，感觉没啥动力，摆摆的，只想躺着，游戏都不想打

不过写题感觉还是比research有意思一点，有点想逃避了

### ABC133F Colorful Tree

[problem link](https://atcoder.jp/contests/abc133/tasks/abc133_f)

一开始看想着树剖，但是发现不用，可以直接倍增LCA + 可持久化线段时

具体来说就是每个节点一个线段树，记录每个颜色出现的次数和距离和，简单算算即可

[code](https://atcoder.jp/contests/abc133/submissions/72152863)

### ABC134F Permutation Oddness

[problem link](https://atcoder.jp/contests/abc134/tasks/abc134_f)

不会做，贺！

发现原来是拆贡献dp，死去的记忆突然苏醒，对于绝对值，就把贡献拆成两个部分，大的是正的，小的是负的

然后主要是状态设计比较有意思，每次同时考虑 值$i$的位置 和第  $i$ 个位置放什么

从小到大考虑

设 $f[i][j][k]$ 表示 考虑到第$i$个位置和值$i$ ,  有$j$ 对小的值和位置没有被匹配，当前贡献为$k$ 有几种情况

-  $p[i] = i$, 即 $i$ 放在第 $i$ 个位置，那么 $f[i][j][k] += f[i - 1][j][k]$
- $p[i]$ 和 $i$  都和后面大的匹配，即作为负贡献的那一方，那么 $f[i][j][k] += f[i-1][j-1][k + 2*i]$
- $p[i]$ 和 $i$  匹配前面小的，即作为正贡献的那一方，那么 $f[i][j][k] += f[i-1][j+1][k - 2*i] * (j+1)^2$
- $p[i]$ 和 $i$  一个匹配前面小的，一个匹配后面大的，那么 $f[i][j][k] += f[i - 1][j][k] * j * 2$
转移即可

[code](https://atcoder.jp/contests/abc134/submissions/72152944)

### ABC135F Strings of Eternity

[problem link](https://atcoder.jp/contests/abc135/tasks/abc135_f)

首先肯定是要把 $s$ 的长度补齐到至少 $t$

然后把对 $t$ 建 kmp， 在 $s$ 上面跑出来一个匹配，然后把匹配上的连边跑最长链就好了

(然而kmp写挂，最长链dp方向写反调了一万年)

[code](https://atcoder.jp/contests/abc135/submissions/72155086)

效率还是有点低，总是去摸鱼干别的事情，但是也没有摸爽

## 1.3

上午写了一题，不知道为啥又没啥动力了，下午在校园里随机游走，思考一些东西

## 1.4

摆

## 1.5

上午起来写了一题，然后去健身，不应该练腿的，练猛了，整个下午困得要死，sleep

晚上沉迷方舟剧情，有点上头bruh

### ABC136F Enclosed Points

[problem link](https://atcoder.jp/contests/abc136/tasks/abc136_f)

一开始没想到该咋办

但发现，其实可以拆贡献，考虑每个点的贡献

于是乎以每个点为坐标原点考虑，可以分为四个象限，然后容斥一下就可以的算出贡献了

以每个点为坐标原点分四个象限，就是简单点二维数点问题

[code](https://atcoder.jp/contests/abc136/submissions/72223405)

### ABC137F Polynomial Construction

[problem link](https://atcoder.jp/contests/abc137/tasks/abc137_f)

一眼拉格朗日插值，但是但是脑子有点不清醒

于是考虑类似的思想，拉插和中国剩余定理的想法都是构造$n$ 个式子，每个柿子刚好满足其中一个点值，在别的点为 $0$, 然后再把所有式子加起来.这题也可以考虑类似的构造

假设我们构造的式子要满足第$i$ 个要求，即 $f(i) = a_i \ (\mod p)$   然后仔别的地方为$0$， 不难想到可以用费马小定理来构造，即为 $1 - (x-i)^{p-1}$ 刚好可以满足

然后最后的多项式就是 $$\sum\limits_{i=0}^{p-1} 1 - (x-i)^{p-1}$$
用二项式定理展开求系数即可

[code](https://atcoder.jp/contests/abc137/submissions/72258518)
### ABC138F Coincidence

[problem link](https://atcoder.jp/contests/abc138/tasks/abc138_f)

首先我记得有个性质是 $y \mod x <= y/2$

这个可以直接将 $x$ 分类讨论一下证明

然后对于这题

因为上面那个性质，所以$x,y$ 的最高位一定相同，不然 xor 会比 mod 大

那么就可以知道 $y/2 <= x$

那么$y \mod x =  y - x$
这题转换为
$y-x = x\  \text{XOR}\  y$

考虑每一位，直接上就是在二进制下 $y$ 应该包含 $x$
即$(x,y)$每一位只有 $(0,0), (0,1), (1,1)$ 三种可能

直接数位dp即可 （别忘了前面最高位必须相同的条件）

设 $dp[pos][o][l][r]$ 表示当前从高到低考虑到第 $pos$ 位， 是否已经确定最高位，是否卡着上下界

[code](https://atcoder.jp/contests/abc138/submissions/72259636)

### ABC147F Sum Difference

[problem link](https://atcoder.jp/contests/abc147/tasks/abc147_f)

遇到这种题还是要先把答案的式子表示出来

$\sum\limits_{i\in S} a_i - \sum\limits_{i\notin S} a_i$

然后发现可以写成
$2 * \sum\limits_{i\in S} a_i - \sum\limits_{i=1}^{n} a_i$
然后发现要考虑的实际上只有$\sum\limits_{i\in S} a_i$ 别的都是常数，不用管，只用看这个的个数

然后再带它的表达式，假设$S$ 集合里选了 $t$ 个数，那么答案就是

$tX + kD$
其中 $k$ 就是从 $0,1,2,...n-1$ 中选$t$ 个求和的值，容易得到$k$ 的范围就是

$$k\in[\frac{t(t-1)}{2}, \frac{(n-1+n-t)t}{2}]$$
然后，按照$tX \mod D$ 分类(记得后面的取值范围要加偏移量)，每一类里面就是一个线段求并问题（区间覆盖），随便做做

[code](https://atcoder.jp/contests/abc147/submissions/72259847)



## 1.6

从12点睡到11点， 早睡晚起这块

不应该练腿的，连着几天没精神，从训练清单上去掉，改成有氧吧

起床后得知WF在迪拜，好像没有机会回国了sad

### ABC157F Yakiniku Optimization Problem

[problem link](https://atcoder.jp/contests/abc157/tasks/abc157_f)

正确的做法是二分 $T$ 然后得到$n$ 个圆，每个圆的半径是 $T/C_i$, 然后两两圆的交点就是答案备选，大力枚举交点算即可

注意到需要把坐标随机旋转一个角度，确保不会出现没有斜率的情况

```cpp
a[i].x = x * cos(theta) - y * sin(theta);
a[i].y = x * sin(theta) + y * cos(theta);
```


然后发现这题数据范围不大，可以尝试模拟退火，顺便复习一下

（结果发现自己之前写的退火一直都是错的，写反了）

具体来说就是，对于更优的答案，显然接受

对于不是更优的答案， 算它与当前最优答案的差值，假设为 $\Delta > 0$

那么，我们可以以一个 $e^{-\Delta / T}$ 的概率去接受这个不那么优的答案

直观也很好理解，当$\Delta$越小 或者 $T$ 越大的时候，这个值会越接近 $1$,  否则会越接近 $0$

然后我们就可以随机一个$0<p<1$, 当$p<e^{-\Delta / T}$ 的时候就接受这个答案

随机一个$p$ 满足 $p<e^{-\Delta / T}$ 的概率就是$e^{-\Delta / T}$

就是
```cpp
if(ret < ANS) ANS = ret, nowx = x, nowy = y;
else
	if((rand() * 1.0 / RAND_MAX) < exp(- (ret - ANS) * 1.0 / T))
		nowx = x, nowy = y;
```

代码懒得调参了

[code](https://atcoder.jp/contests/abc247/submissions/30900895)

### ABC163F path pass i

[problem link](https://atcoder.jp/contests/abc163/tasks/abc163_f)

第一眼淀粉质，但是发现好像没那么复杂

考虑求不经过某个颜色的点的方案数，不难发现拿掉这些点之后会变成若干联通块，然后每个联通块里随便选两个，加起来即可

然后对于每种颜色，应该可以在dfs的时候随便做做，具体还没想好，明天写

btw怎么效率这么低，好摆啊

## 1.7

有点upset，放纵了一天，推完了白2 IC篇

这是真神作，丸户神了！

## 1.8

唉，好乱啊最近，今天去学校健身房一堆警车

口胡了几题，没啥动力写题bruh，明早起来vp一场div 1吧

干research去了


## 1.9

这金发奶龙到底要干啥

搞得人心惶惶

不敢出门了，玉玉中

## 1.10

转移注意力了，先让自己冷静下来

白二怎么这么上头

白二 cc无剧透一命通关雪菜te

我大了

## 1.16

最近外面太乱了，手机一整天响个不停 (Citizen app）

有些迷茫了，虽然不应该迷茫，明明还有挺多事情要做的

拒掉了一个offer，思考未来

马上就要开学了，不过好像改成网课了，很麻

## 1.17

作息混乱

## 1.18

终于vp了一场[CF div 1](https://codeforces.com/contest/2129)， 有点摆，边打边摸

之前还是太容易被外界的因素影响了，游行也好，学校封闭也好，其实和我的关系都不是特别大，对我的最终目的没有太大影响，专注做好自己该做的事情就好了，没有必要恐慌。

算是重新开始了，继续保持


### A. Double Perspective

[problem link](https://codeforces.com/contest/2129/problem/A)

阅读题面花了好久，英语阅读水平退化了

~~开学后的写作课该咋办(midterm/随堂测得写2500+字作文)~~

有个非常显然的猜想，直接按照左端点排序，相同的情况下按照右端点排序，贪心的做一个区间覆盖

这样$g(S)$ 就一定为 $0$

[code](https://codeforces.com/contest/2129/submission/358607853)

### B. Stay or Mirror

[problem link](https://codeforces.com/contest/2129/problem/B)

第一眼没啥想法，得找一个切入点

于是乎从小到大考虑，先考虑 $1$, 发现如果选择 $1$ 它对逆序对的个数贡献就是前面的数的个数，如果变换成$2n-1$, 那么贡献就是后面的数的个数

确定后就可以把 $1$ 拿掉了，变成一个子问题，贪心的做即可

[code](https://codeforces.com/contest/2129/submission/358617187)

### C3. Interactive RBS (Hard Version)

[problem link](https://codeforces.com/contest/2129/problem/C3)

先说说 Medium 的做法吧

首先不难发现，可以用二分找出来一个 "(", 大概需要 10 次左右操作

然后可以类似二进制压位一样一次询问八个位置

具体来说就是构造二进制，每一位的贡献刚好对应这一位是不是 ")"

```cpp
for(int i = 1; i <= n; i += 8) {
	ls.clear();
	for(int j = 0; j < 8 && i + j <= n; j ++) {
		for(int k = 1; k <= (1 << j); k ++) ls.push_back(pos);
		for(int k = 1; k <= (1 << j); k ++) ls.push_back(i + j);
		ls.push_back(pos);
	}
	int o = query(ls);
	for(int j = 0; j < 8 && i + j <= n; j ++) {
		ans[i + j] = (o >> j) & 1;
	}
}
```

easy/Medium 完整代码 

[code](https://codeforces.com/contest/2129/submission/358643846)



然后对于hard version，只需要把二进制这种构造换成

(p1(p1(p1(p1(p1 (  (p2(p2(p2(p2(p2   (    (p3(p3(p3(p3(p3(p3(p3    (

类似这种，然后同样是压位的想法，打个表发现最多可以一次询问十三个位置

[code](https://codeforces.com/contest/2129/submission/358658716)


D 想到了应该是区间dp，但是还没想好细节，明天补完 D和E吧

怎么后天就要开学了qwq

不过可能改上网课了bruh


## 1.19

早睡晚起

明天上课，跑去学校教室踩点，冷成啥呗了

下午回来订正了一下昨天的题
### E. Induced Subgraph Queries

[problem link](https://codeforces.com/contest/2129/problem/E)

一开始没往分块那边想

其实就是直接莫队+值域分块

有一些trick需要注意，一个是不能直接按照编号分块，应该有个加权分块，因为每次到一个点，查询的复杂度是这个点的度数，就是按照度数的和分块，让每个块的度数的和差不多

那么块的大小就是$\sqrt{2m}$

然后可能有存在一堆点的度数的和是$0$, 会被卡掉，为了避免这种情况，于是先把每个点的度数$+1$

那么最后块的大小就是$\sqrt{n + 2m}$ 

剩下的就和正常莫队一样做就好了

~~(btw, 我居然30mins写完代码一遍过编译+一遍过样例+一遍AC，难道真的回光返照了？)~~

[code](https://codeforces.com/contest/2129/submission/358841985)

写完题看下学期课syllabus的时候突然发现midterm 和 icpc撞了，汗流浃背，赶紧写邮件联系prof和coach。下学期怎么这么多事啊，提早毕业导致的qwq

我不要开学😭

## 1.20

开学惹，早上九点出门，晚上回来已经七点多了，摆烂。

好多事要折腾

找到了一场不错的题，明天起床vp一下qwq

这学期workload好像还是有点大的 nooo

## 1.21

上午昏睡

下午vp了一场，口胡了两题，发现自己的推式子能力严重下降了

明天上完课补一下code 和剩下的sol

## 1.22

依旧上下午都有课

沉迷钢琴，有点上头


## 1.23

上午又昏睡了

之前嘴巴的是 CF938

### CF938 D. Buy a Ticket

[problem link](https://codeforces.com/contest/938/problem/D)

思考几分钟，发现只需要搞一个超级源点，然后往每个点连边，边权为 $a[i]$ 跑个最短路即可

代码懒得写了

### CF938 E. Max History

[problem link](https://codeforces.com/contest/938/problem/E)

推错式子了，干

实际上不需要想dp，直接考虑每个值的贡献

首先肯定是排个序从小到大考虑每一个数，然后考虑第 $a[x]$ , 先假定 $a[x] \neq a[x-1]$

然后发现，这个数要有贡献，必须满足在它前面的都比它小，它才能对最后的答案产生贡献

那么方案数一共是 $$\binom{n}{x-1}\times (x-1)! \times (n-x)!$$
就是比它小的，还有它之后的都可以任意排列，把组合数展开后化简一下就是

$$\frac{n!}{n-x+1}$$
记得乘上$a[i]$ (第一次没乘居然能过样例)

然后如果$a[x] = a[x-1]$ 那么 $a[x]$ 的贡献就是和$a[x-1]$ 一样的，记录一下就好了

记得$a[x]==a[n]$ 的时候是没有贡献的

[code](https://codeforces.com/contest/938/submission/359475756)

### CF938 G. Shortest Path Queries

[problem link](https://codeforces.com/contest/938/problem/G)

首先不难想到 [WC2011 最大XOR和路径](https://www.luogu.com.cn/problem/P4151) 那题，那题就是直接把每个环丢进线性基，然后跑个xor最大值即可

然后对于这题，不难发现只需要用线段树分治处理修改就好了

码力有点不够，先咕咕着


advisor终于回我了，希望能提早一学期毕业吧（虽然不是很想提早毕业）

不想干sde，好勾八无聊啊

找不到工作了，要失业了/sad

感觉再不干干research要被一脚踹死了

明天又得早起和队友打训练赛，一周五天得早起qwq

钢琴好玩，上头，手腕好痛，是不是腱鞘炎了 (悲)

~~虽然感觉大概率是昨天尝试卧推100lb手腕扭到了~~

## 1.24

昨晚睡的好晚，早起去学校，好冷

jeff睡过头了，等了半小时，随便在qoj上选了一场开了

最后是 8/12， 我和jeff各有一题没调出来，痛失10题。

10题里面有 5 题算是我写/想的吧，还行，之前的训练多少还是有一点点效果，等补完队友写的题and看看剩下两题后单独开一个blog写题解吧

10点打到三点半，饿昏了，一口饭没吃

晚上和朋友出去吃了顿饭，然后沉迷 CS2，有点上头

## 1.25

又一次晚睡晚起，好像一周就只有周三和周日两题能9点后起床了(悲)

~~怎么好像每次前一天打cs2，第二天都会晚起~~


## 1.26

没空，摸鱼

## 1.28

补了一下题解

