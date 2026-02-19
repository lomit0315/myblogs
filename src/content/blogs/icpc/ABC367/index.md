---
category: icpc
title: "ABC367"
description: "AtCoder Beginner Contest 367 A - Shout Everyday 题解"
publishDate: 2024-11-11
tags:
 - solution
---
## [**A - Shout Everyday**](https://atcoder.jp/contests/abc367/tasks/abc367_a)

### Problem Statement

Takahashi goes to bed at B o'clock and wakes up at C o'clock. You need to check whether he is awake at A o'clock.

### Solution

if $b < c$, then you just have to check whether $b <= a <= c$

if $b > c$, you can just let $c += 24$,    $a += 24$  (if $a < b$)

### Code

```cpp
#include<bits/stdc++.h>
using namespace std;
int main() {
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);
    if(b <= c) {
        if(a >= b && a <= c) {
            printf("No");
            return 0;
        }
    } else {
        c += 24;
        if(a < b) a += 24;
        if(a >= b && a <= c) {
            printf("No");
            return 0;
        }
    }
    printf("Yes");
    return 0;
}
```

## [**B - Cut .0**](https://atcoder.jp/contests/abc367/tasks/abc367_b)

### Problem Statemen

give you a number $X$, print $X$ under the following conditions

- The decimal part must not have trailing 0s
- There must not be an unnecessary trailing decimal point

### Solution

Due to the characteristics of C++, you can just cin >> x and then cout << x

### Code

```cpp
#include<bits/stdc++.h>
using namespace std;
int main() {
    double a;
    cin >> a;
    cout << a;
    return 0;
}
```


## [**C - Enumerate Sequences**](https://atcoder.jp/contests/abc367/tasks/abc367_c)

### Problem Statement

Print all sequences of length N that satisfy the following conditions

- the $1\\leq a[i]\\leq R_i$
- $\\sum a[i]$ is a multiple of $K$

### Solution

Since $N, K, R_i$ is very small, we can just use dfs

### Code

```cpp
#include<bits/stdc++.h>
#define N 250
using namespace std;
int n, K, a[N], b[N];
void dfs(int gs, int o) {
    if(gs == n + 1) {
        if(!o) {
            for(int i = 1; i <= n; i ++) printf("%d ", b[i]); printf("\\n");
        }
        return ;
    }
    for(int i = 1; i <= a[gs]; i ++) {
        b[gs] = i;
        dfs(gs + 1, (o + i) % K);
    }
}
int main() {
    scanf("%d%d", &n, &K);
    for(int i = 1; i <= n; i ++) scanf("%d", &a[i]);
    dfs(1, 0);
    return 0;
}
```
