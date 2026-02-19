---
category: icpc
title: 杂题乱做1
description: "主要是以前写过的一些luogu上的蓝题，口胡+补一下简易题解"
publishDate: 2025-05-09
tags:
 - solution
---

主要是以前写过的一些luogu上的蓝题，口胡+补一下简易题解

## [P1053 [NOIP 2005 提高组] 篝火晚会](https://www.luogu.com.cn/problem/P1053)

不然发现，最终状态就两种，从 $1$ 开始构造之后就顺时针和逆时针两种情况。但是环是可以旋转的，所以一共会有 $2n$ 种情况，怎么快速判断旋转多少会让答案最优呢？ 只需要让最终的状态与初始状态的每个位置做差，看看相同差值的个数最多的是哪一个，旋转那么多次就是最佳答案。

正反都做一遍就好了。

https://www.luogu.com/paste/fpchzse6


## [P1073 [NOIP 2009 提高组] 最优贸易](https://www.luogu.com.cn/problem/P1073)

一开始想的是直接缩点，然后在 DAG 上 DP，感觉没啥问题

看自己以前的代码发现直接一个暴力dfs干过去了，闹麻了

后来感觉题解说的分层图+SPFA也很有道理

https://www.luogu.com.cn/article/l1losgoo


## [P1129 [ZJOI2007] 矩阵游戏](https://www.luogu.com.cn/problem/P1129)

重新看的时候一开始想着不是直接算一下 $1$ 的数量就好了吗?后来点开标签看到了二分图,然后就会做了. 说白了就是考虑单独的某一列,发现这一列上的点只能匹配到某一行上面,也就是这题实际上是要用行去匹配列. 对于一个点的位置$(i,j)$就让$i$行向$j$列连边,拆成二分图跑Dinic就完事了

不过我的代码貌似是匈牙利算法

https://www.luogu.com.cn/paste/h1tkqgk7


<!-- truncated for brevity -->
