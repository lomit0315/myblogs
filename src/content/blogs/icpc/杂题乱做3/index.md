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

## [P4317 花神的数论题](https://www.luogu.com.cn/problem/P4317)

答案显然是$\Pi i^{cnt[i]}$ ， $cnt[i]$是$i$ 个$1$出现的次数

虽然有比较一眼数位dp的做法，但是发现自己是用组合数算的

从高位往低位考虑，假设$N$的当前位置为1，我们可以让当前位置之前的全部能放$1$ 就放，然后这一位不放$1$, 那么之后剩下的就可以随便放了，用组合数随便搞搞即可

https://www.luogu.com.cn/paste/8ftcv19a


## [P4430 小猴打架](https://www.luogu.com.cn/problem/P4430)

我最喜欢的找规律题（bushi）

残存的记忆中有个叫prufer序列的，然后可以得到带标号无根树的数量是$n^{n-2}$

然后对于每一棵树，有$n-1$条边，所以生成的方案数是$(n-1)!$

把这两玩意乘起来即可

https://www.luogu.com.cn/paste/5rfn8cdq


<!-- truncated for brevity -->
