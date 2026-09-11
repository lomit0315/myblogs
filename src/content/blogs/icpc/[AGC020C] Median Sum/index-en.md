---
category: icpc
title: "[AGC020C] Median Sum"
description: "Finding the median of all non-empty subset sums with a bitset knapsack."
publishDate: 2024-11-11
tags:
 - solution

heroImage: { src: '1.jpg', color: '#B4C6DA' }
---
## Problem

Given a multiset of $n$ integers $a_{1,2,3,...,n}$, find the median of the sums of its non-empty subsets.

## Solution

Enumerating every subset is hopeless — there are $2^N$ of them.

So let's look at the quantity we are asked for instead.

There is an easy observation. Let $T$ be the full set and let $SUM$ be the sum of all the numbers. For a subset $S$ with sum $sum$, its complement $T-S$ exists and has sum $SUM - sum$. Every subset therefore has a symmetric partner.

So the median over all subsets must be the first attainable value that is at least $\frac{SUM}{2}$.

Which means we just run a knapsack, using a bitset to speed up the transition.

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
