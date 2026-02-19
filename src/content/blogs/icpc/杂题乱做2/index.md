---
category: icpc
title: 杂题乱做2
description: "主要是以前写过的一些luogu上的蓝题，口胡+补一下简易题解"
publishDate: 2025-05-10
tags:
 - solution

heroImage: { src: '1.jpg', color: '#B4C6DA' }
---

主要是以前写过的一些luogu上的蓝题，口胡+补一下简易题解

## [P2303 [SDOI2012] Longge 的问题](https://www.luogu.com.cn/problem/P2303)

容易想到答案就是

$\large \sum\limits_{d|n}d*\phi(n/d)$

$\phi$直接展开$\sqrt{n}$算就完事了

https://www.luogu.com.cn/paste/0gbib398


## [P2371 [国家集训队] 墨墨的等式](https://www.luogu.com.cn/problem/P2371)

一开始没啥想法，看了标签发现有个最短路

反应过来是同余最短路，但是不记得怎么写了，刚好复习一下

就是板子题,去最大的那个距离当模数，然后最短路跑出每个余数最少几次可以到达

答案直接差分一下求$<=$的就完事了

https://www.luogu.com.cn/paste/hkwsmi6g


<!-- truncated for brevity -->
