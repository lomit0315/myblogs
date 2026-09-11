---
category: icpc
title: Assorted Problems 1
description: "Mostly old Luogu blue-difficulty problems I solved years ago, with quick sketches and short editorials."
publishDate: 2025-05-09
tags:
 - solution

heroImage: { src: '86634053_p0.png', color: '#B4C6DA' }
---


Mostly old Luogu blue-difficulty problems I solved years ago — quick sketches plus short editorials.

## P1053 [NOIP 2005] Bonfire Party

[problem link](https://www.luogu.com.cn/problem/P1053)

It isn't hard to see that there are only two possible final states: build from $1$ going clockwise, or counterclockwise. But the ring can be rotated, so there are $2n$ cases in total. How do you quickly decide how much to rotate for the optimum? Just take the difference at each position between the final state and the initial state, find which difference value occurs most often, and rotating by that amount is optimal.

Do it in both directions and you're done.

https://www.luogu.com/paste/fpchzse6



## P1073 [NOIP 2009] Optimal Trade

[problem link](https://www.luogu.com.cn/problem/P1073)

My first thought was to contract SCCs and then DP on the DAG, which seems fine.

Then I looked at my old code and found I'd just brute-forced it with a dfs. Unbelievable.

Afterwards the layered-graph + SPFA approach in the editorial also made a lot of sense.

https://www.luogu.com.cn/article/l1losgoo



## P1129 [ZJOI2007] Matrix Game

[problem link](https://www.luogu.com.cn/problem/P1129)

Re-reading it, my first thought was "can't you just count the number of $1$s?". Then I opened the tags, saw "bipartite matching", and immediately knew how to do it. Put simply: look at a single column and notice its cells can only be matched to some row — the problem is really about matching rows to columns. For a cell at $(i,j)$, add an edge from row $i$ to column $j$, split into a bipartite graph, and run Dinic.

Though my code appears to use the Hungarian algorithm.

https://www.luogu.com.cn/paste/h1tkqgk7



## P1272 Rebuilding Roads

[problem link](https://www.luogu.com.cn/problem/P1272)

Tree knapsack at a glance.

Let $f[u][s]$ be the answer for the subtree rooted at $u$ containing $s$ nodes.

Initialize with $f[u][1]=in[u]$, the in-degree, and you're done.



https://www.luogu.com.cn/paste/v7pp62ll



## P1306 Fibonacci GCD

[problem link](https://www.luogu.com.cn/problem/P1306)

A classic identity:
$$
\gcd(fib_n,fib_m)=fib_{\gcd(n,m)}
$$
Speed up the transition with matrix exponentiation and you're done. I don't remember the proof.

https://www.luogu.com.cn/paste/pj9lnh95



## P1343 Earthquake Escape

[problem link](https://www.luogu.com.cn/problem/P1343)

Max flow at first glance.

Second glance at the tags made me doubt it, so I opened the editorial — it is plain max flow.

Unbelievable.

https://www.luogu.com.cn/paste/l6r84sku



## P1357 Garden

[problem link](https://www.luogu.com.cn/problem/P1357)

I spotted bitmask DP with matrix optimization straight away.

But I couldn't work out how to handle the cycle. I'm getting old.

Looking at my old code reminded me: just enumerate all states and sum, for each starting state, the number of ways to return to that same state after $n$ transitions. That's the answer.

https://www.luogu.com.cn/paste/9oyltdq2

## P1399 [NOI2013] Fast Food Restaurant

[problem link](https://www.luogu.com.cn/problem/P1399)

A problem where the implementation is harder than the idea.

https://blog.csdn.net/qq_38944163/article/details/89470928



## P1447 [NOI2010] Energy Harvesting

[problem link](https://www.luogu.com.cn/problem/P1447)

Identified on sight as
$$
\sum\limits_{i=1}^{n}\sum\limits_{j=1}^{m} 2\gcd(i,j)-1
$$
and the rest falls out.

The previous problem is way harder than this one — why are they both blue?

https://www.luogu.com.cn/paste/zpoqmbsb



## P1450 [HAOI2008] Coin Shopping

[problem link](https://www.luogu.com.cn/problem/P1450)

Total brain-lapse moment.

There are only 4 coin types. Run an unbounded knapsack first, then brute-force inclusion-exclusion.

https://www.luogu.com.cn/paste/s261ojim



## P1463 [POI 2001] [HAOI2007] Anti-primes

[problem link](https://www.luogu.com.cn/problem/P1463)

Search at first glance.

Note that in the factorization of the answer, the exponents must be non-increasing.

Prune on that and you're done.

https://www.luogu.com.cn/paste/wc881720



## P1472 [USACO2.3] Cow Pedigrees

[problem link](https://www.luogu.com.cn/problem/P1472)

Looking at the constraints I thought this needed some fancy technique.

It's just DP. Let $f[i][j]$ be the number of ways using $i$ nodes with depth $\le j$.

Do the obvious transition, take a difference, and that's the answer.

https://www.luogu.com.cn/paste/h4v87qoz



## P1484 Planting Trees

[problem link](https://www.luogu.com.cn/problem/P1484)

The kind of problem you can do once you've seen it once, and are unlikely to come up with on your own.

It's called regretful greedy, and it can presumably also be analyzed as simulated min-cost flow. My brain isn't working right now.

Just read the code.

https://www.luogu.com.cn/paste/5v8danb9



## P1494 [National Team] Little Z's Socks

[problem link](https://www.luogu.com.cn/problem/P1494)

Textbook Mo's algorithm.

https://www.luogu.com.cn/paste/4z8luzi2



## P1495 [Template] Chinese Remainder Theorem (CRT) / Cao Chong Raises Pigs

[problem link](https://www.luogu.com.cn/problem/P1495)

A good chance to review CRT.

https://blog.csdn.net/qq_38944163/article/details/85677874



## P1514 [NOIP 2010] Bringing Water to the City

[problem link](https://www.luogu.com.cn/problem/P1514)

I wrote this one back before the provincial contest in seventh grade. Seven years ago already.

~~And I still didn't see the approach immediately.~~

The key property: assuming a solution exists, each reservoir in the first row covers exactly one contiguous interval of the last row. So you can precompute a set of intervals with dfs, and the problem becomes simple interval covering.

You can do it with DP or with a greedy.

My code uses DP.

https://www.luogu.com.cn/paste/wjvdr6ho



## P1613 Running

[problem link](https://www.luogu.com.cn/problem/P1613)

I somehow didn't think of Floyd given these constraints. It's essentially precomputing a binary-lifting structure, then running Floyd.

https://www.luogu.com.cn/problem/solution/P1613



## P1640 [SCOI2010] Continuous Attack Game

[problem link](https://www.luogu.com.cn/problem/P1640)

At first I assumed order mattered and thought it was just a greedy.

Then I realized the equipment can be used in any order, and got stuck.

One straightforward idea is to binary search the answer, build a graph, and run max flow to check feasibility.

But the complexity blows up.

My old code just uses the Hungarian algorithm, augmenting one path at a time.

https://www.luogu.com.cn/paste/d6irkvj2



## P1641 [SCOI2010] Generating Strings

[problem link](https://www.luogu.com.cn/problem/P1641)

Obvious approach: enumerate the first invalid position, then multiply the counts on the left and right and sum.

Catalan numbers on the left, binomials on the right.

https://ctz45562.github.io/2019/05/30/%E6%B4%9B%E8%B0%B7-P1641-SCOI2010-%E7%94%9F%E6%88%90%E5%AD%97%E7%AC%A6%E4%B8%B2/

The editorial has a nicer approach. Transform it and draw a picture.

Walk diagonally from $(0,0)$: $1$ goes up-right, $0$ goes down-right.

You must avoid $y=-1$, so reflect at the first time you touch $y=-1$.

That turns it into a walk starting from $(0,-2)$, and the binomial falls out.

Simplifying the first approach with Vandermonde's identity should give the same thing.

https://www.luogu.com.cn/paste/l6rhuphf



## P1654 OSU!

[problem link](https://www.luogu.com.cn/problem/P1654)

By linearity of expectation, maintain the first, second, and third powers separately.

The transitions are straightforward.

Note that the first and second power terms are expectations conditioned on ending at $i$.

https://www.luogu.com.cn/paste/j2aibvlf



## P1712 [NOI2016] Intervals

[problem link](https://www.luogu.com.cn/problem/P1712)

My brain has slowed down. Middle-school me would have solved this instantly; now it takes me ages.

I kept trying to first decide which point to cover and then optimize the interval length.

Instead, sort the intervals by length, longest to shortest.

Add them one at a time, maintaining coverage counts with a segment tree. Once some point's coverage count reaches $m$, we have a valid configuration.

Then subtract the current length from the longest added length.

Two pointers makes this easy to implement.

That converts the optimization problem into a decision problem.

https://www.luogu.com.cn/paste/yuai99ca



## P1730 Minimum Density Path

[problem link](https://www.luogu.com.cn/problem/P1730)

Didn't click at first glance.

Second glance: it's 0/1 fractional programming.

Binary search the answer $ANS$, subtract $ANS$ from every edge weight, then check whether a non-negative path exists.

Run SPFA and you're done.

https://www.luogu.com.cn/paste/owdsufg9



## P1772 [ZJOI2006] Logistics

[problem link](https://www.luogu.com.cn/problem/P1772)

Completely blank. How did I ever solve this?

Reading the editorial, it isn't that easy to come up with either.

The key is to let $dp[i]$ be the answer for the first $i$ days.

Then precompute $cost[i][j]$, the minimum cost of using the same route from day $i$ through day $j$.

After that the DP is easy.

$cost$ can be computed with SPFA.

https://www.luogu.com.cn/paste/xopmnix3



## P1850 [NOIP 2016] Changing Classrooms

[problem link](https://www.luogu.com.cn/problem/P1850)

Classic expected-value DP.

Let $dp[i][j][0/1]$ be the state over the first $i$ courses having chosen $j$ swaps, with the current one taken or not.

Case-split the transitions and you're done.

https://www.luogu.com.cn/paste/kjsm64ha



## P1948 [USACO08JAN] Telephone Lines S

[problem link](https://www.luogu.com.cn/problem/P1948)

It isn't hard to see that you need to binary search the answer first.

For the graph construction: set edges with weight <= mid to 0 and all others to 1, run a shortest path, and check whether it is $<=k$. The idea is clean overall; the shortest path can be SPFA or a 0-1 BFS with a deque.

https://www.luogu.com.cn/paste/3v6ojw0x



## P1966 [NOIP 2013] Matchstick Queue

[problem link](https://www.luogu.com.cn/problem/P1966)

Brain-lapse problem.

First, note that the $i$-th tallest in $a$ must correspond to the $i$-th tallest in $b$.

So discretize $a$ and $b$ into ranks.

Let $py[i]$ be the position of the $i$-th tallest in $a$.

Let $p[i] = py[b[i]]$, meaning position $i$ must end up at position $py[b[i]]$.

Then count inversions in $p$.

https://www.luogu.com.cn/paste/qirufjer



## P1967 [NOIP 2013] Truck Transport

[problem link](https://www.luogu.com.cn/problem/P1967)

Didn't click at first — I thought it was some flow-on-tree thing.

It's just a Kruskal reconstruction tree plus binary lifting.

A very classic problem.

https://www.luogu.com.cn/paste/jwuw2o2o



## P1972 [SDOI2009] HH's Necklace

[problem link](https://www.luogu.com.cn/problem/P1972)

Classic pattern.

Take the queries offline and sort by right endpoint.

Let $pre[i]$ be the previous position with the same type as $i$.

Then when adding right endpoint $i$, do $add(i,1),add(pre[i],-1)$. That guarantees only the first occurrence of each type contributes within a queried interval, so each type is counted once.

Maintain it with a BIT.

https://www.luogu.com.cn/paste/mz2ke5ag



## P2051 [AHOI2009] Chinese Chess

[problem link](https://www.luogu.com.cn/problem/P2051)

Another brain-lapse.

It's easy to see that each row and each column holds at most two pieces.

Go row by row.

Then notice you don't care *where* the pieces in the first $i$ columns went — only how many columns hold one and how many hold two.

So let $f[i][j][k]$ be: considering row $i$, with $j$ columns holding one piece and $k$ columns holding two.

The transition is routine.

https://www.luogu.com.cn/paste/rgdxtymz



## P2059 [JLOI2013] Card Game

[problem link](https://www.luogu.com.cn/problem/P2059)

I failed to see DP at this level. Brain not working.

Let $f[i][j]$ be the probability that, with $i$ people in a circle starting from person $1$, person $j$ wins.

Say the drawn card is $pos$.

Two cases:

$f[i][j] += f[i - 1][i - pos + j] / m, (pos > j)$

$f[i][j] += f[i - 1][j - pos] / m, (pos < j)$

Routine transition from there.

https://www.luogu.com.cn/paste/xehybpi7



## P2146 [NOI2015] Package Manager

[problem link](https://www.luogu.com.cn/problem/P2146)

Heavy-light decomposition plus a segment tree with range assign and range sum, at a glance.

https://www.luogu.com.cn/paste/dat07wfw



## P2148 [SDOI2009] E&D

[problem link](https://www.luogu.com.cn/problem/P2148)

Brute-force a table, then Grundy values. The idea was right, I just don't remember the implementation.

https://www.luogu.com.cn/problem/solution/P2148



## P2149 [SDOI2009] Elaxia's Route

[problem link](https://www.luogu.com.cn/problem/P2149)

Build the shortest-path DAG.

Find the longest common path of the two DAGs.

It isn't hard to see it must be one contiguous segment.

A simple DP does it.

https://www.luogu.com.cn/paste/x48kzfld



## P2161 [SHOI2009] Venue Booking

[problem link](https://www.luogu.com.cn/problem/P2161)

After a while I thought a Chtholly tree would work.

Then realized a single set is enough.

Since the intervals can never overlap anyway, it's straightforward.

My own code appears to use a BIT plus binary search for the last interval.

The set is better.

https://www.luogu.com.cn/paste/il8szf5z



## P2163 [SHOI2007] The Gardener's Trouble

[problem link](https://www.luogu.com.cn/problem/P2163)

Looked like a textbook persistent segment tree at first glance.

And that does work.

My old code uses CDQ divide and conquer.

Not bad — a good chance to review it.

https://www.luogu.com.cn/paste/xz3y6ydd



## P2219 [HAOI2007] Building a Green Belt

[problem link](https://www.luogu.com.cn/problem/P2219)

I thought of a very brute-force approach, and it turns out to be the intended one.

Precompute a bunch of things over rows and columns.

Then run a sliding-window maximum over rows and columns separately.

Easier to follow from the code.

https://www.luogu.com.cn/paste/bma8oezk



## P2221 [HAOI2012] Highway

[problem link](https://www.luogu.com.cn/problem/P2221)

It isn't hard to see the answer is

$\huge \frac{\sum\sum dis[i][j]}{C_{r-l+1}^2}$

which isn't easy to maintain directly.

Consider each edge's contribution instead, turning the numerator into

$\large \sum cost[i]*(i-l+1)*(r-i+1)$

Expanding, the only things you need to maintain are

$a[i], a[i]*i, a[i]*i*i$

A segment tree handles it.

https://www.luogu.com.cn/paste/huj8ii7i



## P2231 [HNOI2002] Flea

[problem link](https://www.luogu.com.cn/problem/P2231)

Solved this one instantly.

It isn't hard to see you just need two of the cards to be coprime.

Straight inclusion-exclusion, with the Möbius function as the coefficients:

$\large \sum\limits_{d|n} \mu(d)(m/d)^n$

Something like that.

https://www.luogu.com.cn/paste/ubt89rm2



## P2261 [CQOI2007] Sum of Remainders

[problem link](https://www.luogu.com.cn/problem/P2261)

One peek at the tags and I had it.

$k \mod i$ can be rewritten as $k - \lfloor \frac{k}{i}\rfloor*i$

then use divisor-block decomposition.

https://www.luogu.com.cn/paste/th74g5on



## P2279 [HNOI2003] Fire Stations

[problem link](https://www.luogu.com.cn/problem/P2279)

First instinct was DP, which felt a bit involved but doable.

One peek at the editorial shows a plain greedy works. I'm getting old, my brain has slowed down.

Greedily start from the leaves: repeatedly take the deepest leaf and place a station at its grandparent.

https://www.luogu.com.cn/article/cv2yki5g



## P2312 [NOIP 2014] Solving Equations

[problem link](https://www.luogu.com.cn/problem/P2312)

No ideas. Unbelievable.

Reading the code, you just pick an arbitrary modulus and brute-force over candidate roots, checking each one.

https://www.luogu.com.cn/paste/zrr1z2o9
