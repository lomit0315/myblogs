---
category: icpc
title: "[AGC020C] Median Sum"
description: " "
publishDate: 2024-11-11
tags:
 - solution
---
# [AGC020C] Median Sum

## 题目简述

给定$n$个整数的可重集合$a_{1,2,3,...,n}$ , 求出它的非空自己的和的中位数

## solution

直接考虑所有集合是不现实的，因为有 $2^N$那么多个集合

于是我们从要求的东西上入手

容易发现一个性质，假设全集为$T$，假设所有数的和为$SUM$，对于一个子集$S$, 假设它的和为$sum$,

那么一定存在一个$S$的补集，$T-S$,使得它的和为$SUM - sum$, 因此所有的集合，都有一个对称的集合

所以，最后所有集合的中位数，一定是最接近 $\frac{SUM}{2}$  且比它大的第一个能取到的数

所以跑一个背包就行了，用bitset 优化转移


```cpp
#include<bits/stdc++.h>
#define N 4000050
using namespace std;
int n;
bitset<N> f;
int main() {
    scanf("%d", &n);
    f[0] = 1; int s = 0;
    for(int i = 1; i <= n; i ++) {
        int x;
        scanf("%d", &x);
        f |= f << x; s += x;
    }
    for(int i = (s + 1) / 2; i <= s; i ++) if(f[i]) {printf("%d", i); return 0;}
    return 0;
}
```
