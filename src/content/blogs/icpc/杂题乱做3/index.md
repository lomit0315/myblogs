---
category: icpc
title: 杂题乱做3
description: "主要是以前写过的一些luogu上的蓝题，口胡+补一下简易题解"
publishDate: 2025-05-11
tags:
 - solution

heroImage: { src: '1.jpg', color: '#B4C6DA' }
---
主要是以前写过的一些luogu上的蓝题，口胡+补一下简易题解

主要是以前写过的一些luogu上的蓝题，口胡+补一下简易题解

## P4317 花神的数论题

[problem link](https://www.luogu.com.cn/problem/P4317)

答案显然是$\Pi i^{cnt[i]}$ ， $cnt[i]$是$i$ 个$1$出现的次数

虽然有比较一眼数位dp的做法，但是发现自己是用组合数算的

从高位往低位考虑，假设$N$的当前位置为1，我们可以让当前位置之前的全部能放$1$ 就放，然后这一位不放$1$, 那么之后剩下的就可以随便放了，用组合数随便搞搞即可

https://www.luogu.com.cn/paste/8ftcv19a



## P4430 小猴打架

[problem link](https://www.luogu.com.cn/problem/P4430)

我最喜欢的找规律题（bushi）

残存的记忆中有个叫prufer序列的，然后可以得到带标号无根树的数量是$n^{n-2}$

然后对于每一棵树，有$n-1$条边，所以生成的方案数是$(n-1)!$

把这两玩意乘起来即可

https://www.luogu.com.cn/paste/5rfn8cdq



## P4514 上帝造题的七分钟

[problem link](https://www.luogu.com.cn/problem/P4514)

一眼树套树

看自己代码发现是二维树状数组

差分来差分去就可以搞定区间加，区间求和了

https://www.luogu.com.cn/article/u4lh1j1n



## P4550 收集邮票

[problem link](https://www.luogu.com.cn/problem/P4550)

人有点晕了属于是

这么简单的期望dp没推出来，麻了

https://www.luogu.com.cn/article/u3ul4p52



## CF1000F One Occurrence

[problem link](https://www.luogu.com.cn/problem/CF1000F)

第一眼莫队+set，看自己的代码发现不用set，拿个栈就好了，记录一下每个元素在栈里的位置，删除就和栈顶交换然后pop就好了

既然都离线了当然也可以扫描线，把区间按照右端点排序

然后对于每种数，只保留最右边的那一个，在那个位置上记录上一次出现这个数的位置，假设为$pre[i]$, 那么区间查询实际上就是求$pre[i]$的最小值是否$<l$, 如果是说明这个数只出现了一次，用线段树维护最小值和出现的位置即可

https://www.luogu.com.cn/article/5nv0adca



## P4822 [BJWC2012] 冻结

[problem link](https://www.luogu.com.cn/problem/P4822)

一眼分层图+最短路，但是看数据范围后感觉怪怪的

再看自己的代码发现没啥问题，沙波了

就是分$K$ 层，然后上层往下层连边的时候除以2即可

https://www.luogu.com.cn/paste/4hwtsh6g



## CF1006F Xor-Paths

[problem link](https://www.luogu.com.cn/problem/CF1006F)

看了一眼代码提交时间就知道这题代码应该不是我写的了

想了一会没啥想法

看了一眼标签有个搜索，突然就会了

直接按照对角线分开，然后折半搜索就完事了

https://www.luogu.com.cn/article/6kwz3c7z



## P4910 帕秋莉的手环

[problem link](https://www.luogu.com.cn/problem/P4910)

一眼dp然后矩阵优化

但是发现自己dp状态设爆了，优化不了一点，闹麻了

根本就不用把第一位设在状态里，初值改一下，分类讨论一下就完了

https://www.cnblogs.com/liangbowen/p/16945276.html



## P5021 [NOIP 2018 提高组] 赛道修建

[problem link](https://www.luogu.com.cn/problem/P5021)

好远古的回忆啊

首先不难想到用二分答案处理最小的最大这个地方

然后对于上面的部分，考虑树形dp

发现对于每个节点，它最多只能向上传递一条赛道，于是乎我们将它的儿子的赛道两两配对，用二分或者multiset都可以实现，选剩下来的最长的向上传递即可

https://www.luogu.com.cn/paste/bnbfvrsg



## CF1076E Vasya and a Tree

[problem link](https://www.luogu.com.cn/problem/CF1076E)

印象中是树上差分，但是没反应过来该怎么做

看一眼代码发现忘了可以吧所有的修改离线下来挂在树上先，然后只需要在dfs的时候差分，拿个树状数组记录每个深度上的差分值和求前缀和，因为dfs的时候本身就保证了差分的值是来自当前节点祖先的，回溯的时候去掉这个差分值即可

https://www.luogu.com.cn/paste/y1v2id1i



## P5122 [USACO18DEC] Fine Dining G

[problem link](https://www.luogu.com.cn/problem/P5122)

第一眼建图，然后从n开始跑个最短路，然后就不会做了 

扫了一眼题解发现原来不难，思维僵化了

假设跑完最短路的距离为$dis[i]$ ,考虑到如果节点$i$有干草堆，假设为$a[i]$ 那么可以考虑再建一个虚点$(n+1)$, 让$(n+1)$ 和$i$ 连边，边权设为$dis[i]-a[i]$, 然后再从新从$n+1$为起点跑一个最短路，得到另一个最短路数组，比较一下就知道答案了

https://www.luogu.com.cn/paste/jawppchr



## P5123 [USACO18DEC] Cowpatibility G

[problem link](https://www.luogu.com.cn/problem/P5123)

第一眼大力容斥，结果想了个很假的容斥，闹麻了

对于一个头奶牛，有$2^5$的容斥，那怎么保存每种结果计数呢？

看了自己写的代码发现好暴力，直接把选出来的数从小到大排序，然后往两个数中间插入特殊符号变成一个string，然后用map大力储存，不赖

https://www.luogu.com.cn/paste/rlmxpht1



## P5268 [SNOI2017] 一个简单的询问

[problem link](https://www.luogu.com.cn/problem/P5268)

懵了一下没反应过来，然后突然想起来好像和一个thuwc的题类似

先考虑对于数字$x$的情况，可以先做一个前缀和$sum[i]$表示$x$ 在前$i$个出现了多少次

然后对于$x$的答案就是$(sum[r_1]-sum[l_1-1]) * (sum[r_2] - sum[l_2-1])$

然后我们发现可以把这个用乘法分配律拆开，这样就变成两个前缀和相乘了，然后就可以用莫队简单解决了

https://www.luogu.com.cn/paste/95s712lj



## P5304 [GXOI/GZOI2019] 旅行者

[problem link](https://www.luogu.com.cn/problem/P5304)

降至了，没想出来，感觉多个log的做法比正解有意思一点

https://www.luogu.com.cn/article/oow8gs0r



## P5505 [JSOI2011] 分特产

[problem link](https://www.luogu.com.cn/problem/P5505)

大概的思路想到了，容斥，但是忘记可以插板法了，有点糖

https://www.luogu.com.cn/article/ifavg4dm



## CF1197D Yet Another Subarray Problem

[problem link](https://www.luogu.com.cn/problem/CF1197D)

想了个很糖的做法，感觉也能过？

看之前的代码发现其实就是一个dp，按照模数分组，然后从后往前dp，维护后面的,设$f[j]$表示$i\%m=j$的右端点的dp值

然后每移动到一个$i$，就考虑令$f[i]=sum[i]$, 或者继续用上一个,然后更新一下$f[i]-k$

两者取个max即可

对于当前这个$i$作为左端点，考虑每一个余数的右端点的贡献即可

https://www.luogu.com.cn/paste/vr2e3ait



## P5589 小猪佩奇玩游戏

[problem link](https://www.luogu.com.cn/problem/P5589)

dp的方程和规律都想到了，但是细节想错了一点，还好

大体想法和这个一样

https://www.luogu.com.cn/article/c187nysw



## CF1238F The Maximum Subtree

[problem link](https://www.luogu.com.cn/problem/CF1238F)

大概性质分析出来了，搞了个很奇怪的dp，然后去看自己的代码和题解


发现自己就搞了个贪心，有点意思，自己糖了

https://www.luogu.com.cn/paste/ed6j9k3r



## CF1238E Keyboard Purchase

[problem link](https://www.luogu.com.cn/problem/CF1238E)

看出来了是要状压dp，但是没看出来贡献怎么搞，有点爆

看自己以前的代码，发现有点妙，可以对于每个状态，每转移一次，就把贡献加上集合内和集合外的两两的贡献，这样一个字母什么时候被加入集合，它加入前被算了几次，刚好就是相当于键盘上的距离

看代码比较好理解

https://www.luogu.com.cn/paste/imhc56ui



## CF1303E Erase Subsequences

[problem link](https://www.luogu.com.cn/problem/CF1303E)

一眼dp，想一会还是能想出来的

首先可以枚举$s1$的长度，然后$f[i]$表示$s1$匹配到第$i$位，$s2$最多能匹配多少位

这个dp还是不难的，看看代码就懂了

https://www.luogu.com.cn/paste/hq2qo9u2



## P6186 [NOI Online #1 提高组] 冒泡排序

[problem link](https://www.luogu.com.cn/problem/P6186)

https://www.luogu.com.cn/article/duay9pls



## P6275 [USACO20OPEN] Sprinklers 2: Return of the Alfalfa P

[problem link](https://www.luogu.com.cn/problem/P6275)

分析错了，完蛋

画画图后发现分割两个部分的一定是从左上角到右下角的一条折线，然后我们考虑dp这条折线，设$dp[i][j][0/1]$表示现在到$(i,j)$这个格子，然后折线的朝向(右/下)

简单dp然后计数即可

https://www.luogu.com.cn/paste/umu66048



## CF1365F Swaps Again

[problem link](https://www.luogu.com.cn/problem/CF1365F)

毫无思路，完蛋了

实际上猜个结论就好了，最擅长的猜结论题反而不会做了现在

https://www.luogu.com.cn/article/w8jhbqpz



## P1857 质数取石子

[problem link](https://www.luogu.com.cn/problem/P1857)

典中典题，但是因为常年不训练脑子转不动了

首先肯定是SG函数，可以用线性筛，还有按照题目的要求把SG数组搞出来

然后再考虑DP，对于必胜的状态，尽量早点结束，对于必败的状态，尽量推迟

然后转移可以根据SG数组的状态来转移

看代码比较好理解

https://www.luogu.com.cn/paste/q8l5n8ih



## P2606 [ZJOI2010] 排列计数

[problem link](https://www.luogu.com.cn/problem/P2606)

一眼看出来是小根堆，然后口胡了一个看起来比较对的dp

设$f[n]$表示$n$个节点的小根堆数量，然后每次取1作为根节点，可以分为两个子问题，方案数乘起来再乘个组合数就好了，大概就是

$f[n]=f[l]*f[r]*C_{n-1}^{l}$

后来发现细节有点问题，可以提前build一个堆计算一下左子树的大小

https://www.luogu.com.cn/paste/5bptgon9



## P2743 [USACO5.1] 乐曲主题Musical Themes

[problem link](https://www.luogu.com.cn/problem/P2743)

想到一种非常唐诗的做法，硬是没想到直接差分完dp就完事了

$f[i][j]$表示第一部分以$i$结尾，第二部分以$j$ 结尾，随便转移一下

https://www.luogu.com.cn/paste/sd8mu4o0



## P3620 [APIO/CTSC2007] 数据备份

[problem link](https://www.luogu.com.cn/problem/P3620)

降大智了，差分完其实就是种树那题，经典的反悔贪心问题

https://www.luogu.com.cn/paste/kcqz94b7



## P3545 [POI 2012] HUR-Warehouse Store

[problem link](https://www.luogu.com.cn/problem/P3545)

一眼网络流，然后发现好像得用费用流

然后就发现好像就是 模拟费用流( 反悔贪心 )

拿个priority_queue随便搞搞就好了

https://www.luogu.com.cn/paste/uh0ia6ux



## CF900D Unusual Sequences

[problem link](https://www.luogu.com.cn/problem/CF900D)

没有分析能力了已经

设$g(y)$表示先不考虑$\gcd$的限制，序列和为$y$的方案数

不难发现是$g(y)=2^{y-1}$ 因为只需要考虑插板法，每个间隔放或者不放

然后设$f(x)$表示和为$x$ 且 $\gcd =1$的方案数

不难发现$g(k)=\sum\limits_{d|k}f(k/d)=2^{k-1}$

然后考虑容斥，可以发现

$f(k)=g(k)-\sum\limits_{d|k,d>1}f(k/d)$

直接大力递归容斥即可

https://www.luogu.com.cn/paste/e7ko1cep



## CF895C Square Subsets

[problem link](https://www.luogu.com.cn/problem/CF895C)

想得有点歪，往dp想了，虽然也能做，但是线形基是最快的做法

首先肯定是发现$a_i$很小，发现$<=70$的质数只有19个，于是乎考虑线性基

假设全部塞入线性基之后线性基的大小为$|S|$

那么说明剩下$n-|S|$个数都是可以被线性表示的

那么答案就是$2^{n-|S|}-1$了

https://www.luogu.com.cn/paste/rv65zn8y



## CF741C Arpa’s overnight party and Mehrdad’s silent entering

[problem link](https://www.luogu.com.cn/problem/CF741C)

以为是2-sat，我还是naive了

考虑建立二分图，然后染色

首先情侣之间肯定是连边的

三个人必须有两个不同的限制条件，可以$(2i-1,2i)$连边

这样连出来一定是个二分图，因为考虑一个环，一定是一条情侣之间的边，加上一条相邻之间的边，那么这样下去就刚好是个偶环，不存在奇环，所以一定是二分图

https://www.luogu.com.cn/paste/81eqdo46



## CF730I Olympiad in Programming and Sports

[problem link](https://www.luogu.com.cn/problem/CF730I)

一眼看出费用流建图

但是也可以反悔贪心（模拟费用流）

https://www.luogu.com.cn/article/2ensxnz4

Code： 

https://www.luogu.com.cn/paste/l0g3abms



## CF623B Array GCD

[problem link](https://www.luogu.com.cn/problem/CF623B)

有趣

关键点是要想到，因为不能全部删除，所以第一个数和最后一个数一定会有一个保留下来

所以只需要考虑这两个数，加减或者不变，一共六种情况的质因数即可

先筛选出来，然后对于每个质因数当作$\gcd$来 dp

设$f[i][0/1/2]$ 表示到第$i$个数，没删，正在删，已经删完了的最小花费

转移不难，可以直接看代码

第一步想到之后就很常规了

https://www.luogu.com.cn/paste/d1zcnjfe



## CF521D Shop

[problem link](https://www.luogu.com.cn/problem/CF521D)

记得这道题的做法，但是发现看错题了

反正执行的顺序肯定是先赋值，然后加，最后乘

赋值每个位置只需要保留最大的，然后赋值就可以转换为加了

然后加从大到小排序，又可以转化为乘了

最后乘再从大到小排序，输出前$m$个即可

https://www.luogu.com.cn/paste/9iffudq6



## CF486D Valid Sets

[problem link](https://www.luogu.com.cn/problem/CF486D) 

还是惯性思维了，看见数据范围就想着设二维的状态来 DP

既然数据范围这么小，只需要枚举每一个点，然后强制钦定这个点就是最大的，然后以它为根 DP 即可

$f[u] = f[u] + f[u]*f[v]$

相当于是做一个背包合并

https://www.luogu.com.cn/paste/xqad5b23


## CF19E Fairy

[problem link](https://www.luogu.com.cn/problem/CF19E)

题目看半天没看懂byd

就是问有哪些边，删了这一条之后剩下的图是二分图

首先考虑二分图等充要条件，不存在奇环

不难发现答案就是所有出现的奇环的交集

可以直接用dfs随便搞搞

https://www.luogu.com.cn/paste/edls0m5o


## P4161 SCOI2009 游戏

[problem link](https://www.luogu.com.cn/problem/P4161)

https://www.luogu.com.cn/article/zmgkp11r


## AT_arc070_b ABC056D No Need

[problem link](https://www.luogu.com.cn/problem/AT_arc070_b)

这题的关键在于对于第$i$个数，它不是可有可无的当且仅当用剩下的无法拼出$[K-a_i,a_i]$

第一眼先跑个背包，然后一个一个退回，因为背包可以用多项式来理解，退回操作就相当于是除一个多项式
看自己的代码发现是直接用cdq分治优化DP的
看了题解后发现还有别的做法，有点意思：[[https://www.luogu.com.cn/article/o87199on]]

my code: 
https://www.luogu.com.cn/paste/ds9v7cib


## AT_agc010_b AGC010B Boxes

[problem link](https://www.luogu.com.cn/problem/AT_agc010_b)

除了差分，没啥思路，爆了，去看题解了

牛魔的怎么前面的题解都写错了些东西，md
还是挺巧妙的一道思维题，首先考虑每次操作会让总的减少$\frac{n(n+1)}{2}$
然后只有$\large M=\frac{\sum_i a[i]}{\frac{n(n+1)}{2}}$ 为整数的时候才有解

于是考虑差分数组，发现每一次操作就是让一个$d[i]=d[i]+(n-1)$, 然后别的都$d[j]=d[j]-1$
假设在$i$ 这个位置有$m_i$ 次第一种操作
于是乎可以得到一个等式$d[i]+m_i(n-1)-(M-m_i)=0$

可以解得$m_i=\frac{M-d[i]}{n}$
于是乎就可以解决这题了，只需要保证每个$m_i$非负即可

https://www.luogu.com.cn/paste/76krqu56
btw, 有点不知道怎么把这个问题规约为一类问题

## AT_arc063_c ARC063E 木と整数

[problem link](https://www.luogu.com.cn/problem/AT_arc063_c)

小降智题
有一个很显然的构造，先把初始的所有有点权的点塞进优先队列里
每次取最大的那个出来，然后把和它相连的没有赋值的点赋值为它的点权-1
最后判断一下合法性即可

https://www.luogu.com.cn/paste/ts26d0ak

## AT_agc004_c AGC004C AND Grid

[problem link](https://www.luogu.com.cn/problem/AT_agc004_c)

有点意思啊这个构造
发现边界不会被覆盖，于是乎我们可以先将两张图这么构造

```
###. ....# 
#.... #### 
###. ....# 
#.... #### 
###. ....#
```
然后对于原图上的直接染色即可

https://www.luogu.com.cn/paste/oa3ylcch


## CF1051F The Shortest Statement

[problem link](https://www.luogu.com.cn/problem/CF1051F)

不难想到先拉一颗生成树出来
然后对于剩下的非树边，不难发现它们涉及到的点最多只有42个，我们设这些点为特殊点
对于这些点，用dijkstra跑出来它们到别的点的距离
然后询问的时候，首先用LCA求出来树上的距离，然后枚举特殊点，看看强制经过这个特殊点的距离是否会更近
代码不难实现
https://www.luogu.com.cn/paste/89h3fi2e

## CF1234F Yet Another Substring Reverse

[problem link](https://www.luogu.com.cn/problem/CF1234F)

想到了，但没有完全想到
首先看到数据范围会想肯定要状压
然后发现$|S|$很大，于是乎有点疑惑
冷静分析发现这题实际上要找的是两个区间，$s1,s2$满足$s1 \& s2=0$ 的条件下$s1|s2$ 1最多的
直接用高维前缀和即可，对于一个字符集的答案，求它和它补集的答案和即可
https://www.luogu.com.cn/paste/vi8s04gg

## P1989 无向图三元环计数

[problem link](https://www.luogu.com.cn/problem/P1989)

为什么思路这么巧妙
一看数据范围$10^5$感觉不太可做，汗流浃背，只能看题解，发现是自己高中退役前不久写的题（悲）
首先对于双向边，改成单向边，让度数小的连向度数大的，如果度数相同就编号小的连向编号大的
然后就可以大力枚举了
对于每个点$u$，先把和它相连的点打上标记，然后再枚举和它相邻的每个点$v$
然后再枚举和$v$ 相连的每个点$w$, 看是否有被$u$打上标记，如果有就答案$+1$
这样复杂的为什么是对的呢？
分开一个一个点考虑，发现时间复杂度其实就是每个点的入度乘出度

不难发现，当原图这个点的度数$<=\sqrt{m}$的时候，这个点的出度一定也是$<=\sqrt{m}$
如果这个点在原图的度数$> \sqrt{m}$ , 它只能连向度数比它的，这样的点肯定不超过$\sqrt{m}$个所以出度也是$<=\sqrt{m}$的
至于入度，可以另外考虑，对于原图的每一条边$(u,v)$，它对时间复杂度的贡献就是$out[v]$,然后根据上面证明的$out[v]<=\sqrt{m}$, 所以最终的时间复杂度就是$O(m\sqrt{m})$

https://www.luogu.com.cn/paste/9g86u6as


## AT_agc033_c AGC033C Removing Coins

[problem link](https://www.luogu.com.cn/problem/AT_agc033_c)

完全没往这方面想，有点糖
其实只用考虑直径的长度，每次操作相当于是可以让直径长度-1, -2, 于是乎只需要把直径长度求出来，然后 $\mod 3$判断一下即可，当然也可以用SG函数递推出来

https://www.luogu.com.cn/paste/9h9kwq6m


## AT_arc100_c ARC100E Or Plus Max

[problem link](https://www.luogu.com.cn/problem/AT_arc100_c)

有点思维固化了，一眼高维前缀和，然后发现好像不太会处理这个$a_i+a_j$

看了一眼自己的代码，发现其实是需要在做高维前缀和的时候同时记录最大值和次大值就好了，居然有点显然，但是却没想到
记得最后是$<=$ 所以还要做个前缀最大值
https://www.luogu.com.cn/paste/m1mn89hu



## AT_arc115_d Odd Degree

[problem link](https://www.luogu.com.cn/problem/AT_arc115_d)

首先最容易发现的是不可能存在奇数个点的度数为奇数，所以k只有在偶数的时候有答案
先考虑一棵树的情况该怎么做
容易发现如果选定了k个点的度数为奇数，树上每条边选与不选的状态就是确定的了（由叶子向上考虑）
同样的，发现加了一些树外的边之后，树上的边选择状态也是确定的
假设树的点数为 n, 总边数为 m, 强制 k 个点度数为奇数，方案数就是
$$2^{m-n+1} * C(n, k)$$
然后对于每一个连通块，用背包合并即可
难点在于要先分析树的情况

[code](https://www.luogu.com.cn/paste/7dqyc4hg)


## AT_arc122_d XOR Game

[problem link](https://www.luogu.com.cn/problem/AT_arc122_d)

首先对于这种xor相关的题目，无非就几种思路
考虑从高位到低位考虑，如果发现这一位 1 的个数为奇数个，那么最终答案一定在这一位确定了 
只需要找到用哪一个这一位为0的去匹配哪一个这一位为1的答案最小，就是最终答案了（因为一定是由后手决定的）
只需要用字典树就可以解决了
如果这一位 1 的个数为偶数个，那么一定可以两两匹配， 这一位最后一定为0，于是把数分为这一位为1和0的两部分继续在下一位判断即可

[code](https://www.luogu.com.cn/paste/wvjdi6rm)


## AT_arc124_d  Yet Another Sorting Problem

[problem link](https://www.luogu.com.cn/problem/AT_arc124_d)

首先我们可以先考虑没有限制，随便交换的情况，发现只需要将 i 与 p[i] 练边，然后可以得到若干个环，对于每个环，假设长度为 len, 那么只需要 len - 1 次操作就可以
让这个环上的每个位置都归位，显然每个环是独立的
那么对于这道题，我们发现，如果一个环同时跨过了左右两部分，那么这个环也可以只用 len - 1 次操作就归位
假设环上所有的点都在左边，那么一定要加两条边，与右边的某个环（或者一个点）连起来变成一个大环
假设左边有 s1 个环，右边有 s2 个环，一共有 gs 个环
那么答案就是 n + m - gs + 2 * max(s1, s2)
需要特判一个点的情况

[code](https://www.luogu.com.cn/paste/k3bpdz2k)

## AT_arc126_d Pure Straight

[problem link](https://www.luogu.com.cn/problem/AT_arc126_d)

首先我们注意到 K 的范围非常小，所以我们可以考虑状压DP，于是来考虑如何设计状态
设 $f[i][S]$ 表示当前考虑到第i个位置，已经确定了 $S$ 这个状态的这些数
那么对于第i个位置，假设$a[i]$没有在 $S$ 中出现过，那么可以考虑选择它，那么需要看S中与有几个比他大的，这些是一定要与 $i$ 交换的，产生这么多的贡献（其实就是逆序对个数）
然后转移到包含$a[i]$的状态中去

也可以选择不要$a[i]$, 那么就看是让已经选择的全部跨过 i 更优 还是 让后面选的跨过 i 更优，取个 min 就好了
这算是一道贡献提前计算的 DP 了

[code](https://www.luogu.com.cn/paste/ij9tqnz7)

## CF11D A Simple Task

[problem link](https://www.luogu.com.cn/problem/CF11D)

没睡醒说是

第一眼看数据范围应该是状压dp，关键的一点是钦定编号最小的为起始点 $f[S][i]$ 表示目前经过的点集为$S$ ， 目前的终点是$i$ 的路径数量，然后转移就很简单了，只需要枚举与$i$相连的点转移就好了。 注意一条边来回走，还有一个环会被统计两次。 只需要 $\frac{ans -  m}{2}$ 即可

[code](https://www.luogu.com.cn/paste/249v9ale)

##  [CF19E Fairy](https://www.luogu.com.cn/problem/CF19E)

方向想对了，但是细节还是没想清楚，老了，推不动性质了qwq

[solution](https://www.luogu.com.cn/article/c9mfsmzr)


## CF165E Compatible Numbers

[problem link](https://www.luogu.com.cn/problem/CF165E)

高维前缀和板子

## CF367E Sereja and Intervals

[problem link](https://www.luogu.com.cn/problem/CF367E)

没看清楚数据范围，爆了

[solution](https://www.luogu.com.cn/article/hoj0wp9e)



