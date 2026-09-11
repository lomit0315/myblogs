---
category: icpc
title: Assorted Problems 3
description: "Mostly old Luogu blue-difficulty problems I solved years ago, with quick sketches and short editorials."
publishDate: 2025-05-11
tags:
 - solution

heroImage: { src: '1.jpg', color: '#B4C6DA' }
---
Mostly old Luogu blue-difficulty problems I solved years ago — quick sketches plus short editorials.

## P4317 The Flower God's Number Theory Problem

[problem link](https://www.luogu.com.cn/problem/P4317)

The answer is clearly $\Pi i^{cnt[i]}$, where $cnt[i]$ is the number of times $i$ ones appear.

There's a fairly obvious digit-DP approach, but it turns out I computed it with binomials.

Go from the high bits down. Suppose the current bit of $N$ is 1: place a $1$ everywhere you can before this position, leave this bit as 0, and then the remaining bits are free. Binomials handle the rest.

https://www.luogu.com.cn/paste/8ftcv19a



## P4430 Monkey Fight

[problem link](https://www.luogu.com.cn/problem/P4430)

My favorite kind of find-the-pattern problem (not really).

Somewhere in the back of my memory is something called a Prüfer sequence, from which the number of labeled unrooted trees is $n^{n-2}$.

Each such tree has $n-1$ edges, so the number of generated orders is $(n-1)!$.

Multiply the two.

https://www.luogu.com.cn/paste/5rfn8cdq



## P4514 God's Seven Minutes of Problem Setting

[problem link](https://www.luogu.com.cn/problem/P4514)

Tree-of-trees at a glance.

Looking at my code, it's a 2D BIT.

Difference arrays on top of difference arrays give range add and range sum.

https://www.luogu.com.cn/article/u4lh1j1n



## P4550 Collecting Stamps

[problem link](https://www.luogu.com.cn/problem/P4550)

Brain a little foggy.

Couldn't derive an expected-value DP this simple. Rough.

https://www.luogu.com.cn/article/u3ul4p52



## CF1000F One Occurrence

[problem link](https://www.luogu.com.cn/problem/CF1000F)

Mo's algorithm + set at first glance. Looking at my code, you don't need a set — a stack works: record each element's position in the stack, and to delete, swap with the top and pop.

Since it's offline anyway, you can also sweep: sort the intervals by right endpoint.

Then for each value keep only its rightmost occurrence, and at that position record the previous occurrence, say $pre[i]$. A range query then asks whether the minimum $pre[i]$ is $<l$; if so that value appears exactly once. Maintain minima and positions with a segment tree.

https://www.luogu.com.cn/article/5nv0adca



## P4822 [BJWC2012] Freeze

[problem link](https://www.luogu.com.cn/problem/P4822)

Layered graph + shortest path at a glance, though the constraints felt odd.

Looking at my code, there's no problem. My mistake.

Build $K$ layers, and when connecting a layer to the one below, halve the weight.

https://www.luogu.com.cn/paste/4hwtsh6g



## CF1006F Xor-Paths

[problem link](https://www.luogu.com.cn/problem/CF1006F)

One look at the submission timestamp told me I probably didn't write this code.

Thought about it for a while with no ideas.

One glance at the "search" tag and it clicked.

Split along the diagonal and do meet-in-the-middle.

https://www.luogu.com.cn/article/6kwz3c7z



## P4910 Patchouli's Bracelet

[problem link](https://www.luogu.com.cn/problem/P4910)

DP plus matrix optimization at a glance.

But I'd blown up the DP state so it couldn't be optimized at all. Unbelievable.

You don't need the first element in the state at all — just adjust the initial values and case-split.

https://www.cnblogs.com/liangbowen/p/16945276.html



## P5021 [NOIP 2018] Building Tracks

[problem link](https://www.luogu.com.cn/problem/P5021)

Ancient memories.

First, it's easy to see you binary search the answer for the minimize-the-maximum part.

Above that, do a tree DP.

Each node can pass at most one track upward, so pair up its children's tracks (binary search or a multiset both work) and pass the longest leftover upward.

https://www.luogu.com.cn/paste/bnbfvrsg



## CF1076E Vasya and a Tree

[problem link](https://www.luogu.com.cn/problem/CF1076E)

I remembered it as a tree difference array but couldn't recall how.

Looking at the code: you can hang all the modifications on the tree offline first, then apply the difference during the dfs, using a BIT to record difference values per depth and prefix-sum them. The dfs itself guarantees the difference values come only from the current node's ancestors, and you remove the value on backtrack.

https://www.luogu.com.cn/paste/y1v2id1i



## P5122 [USACO18DEC] Fine Dining G

[problem link](https://www.luogu.com.cn/problem/P5122)

First instinct was to build the graph and run a shortest path from n — and then I was stuck.

One skim of the editorial showed it isn't hard; my thinking had gotten rigid.

Let $dis[i]$ be the shortest path distances. If node $i$ has a haystack $a[i]$, add a virtual node $(n+1)$ connected to $i$ with weight $dis[i]-a[i]$, then run another shortest path from $n+1$ to get a second distance array and compare.

https://www.luogu.com.cn/paste/jawppchr



## P5123 [USACO18DEC] Cowpatibility G

[problem link](https://www.luogu.com.cn/problem/P5123)

Brute-force inclusion-exclusion at first glance, and I came up with a bogus version of it. Unbelievable.

Each cow gives $2^5$ inclusion-exclusion terms — but how do you count each result?

Looking at my own code, it's delightfully brute force: sort the chosen numbers ascending, insert a separator between them to form a string, and store it all in a map. Not bad.

https://www.luogu.com.cn/paste/rlmxpht1



## P5268 [SNOI2017] A Simple Query

[problem link](https://www.luogu.com.cn/problem/P5268)

Blanked for a moment, then remembered it resembles a THUWC problem.

Consider a single value $x$ first, with a prefix sum $sum[i]$ counting occurrences of $x$ in the first $i$ elements.

The contribution of $x$ is $(sum[r_1]-sum[l_1-1]) * (sum[r_2] - sum[l_2-1])$.

Expand with the distributive law and it becomes a product of two prefix sums, which Mo's algorithm handles easily.

https://www.luogu.com.cn/paste/95s712lj



## P5304 [GXOI/GZOI2019] Traveler

[problem link](https://www.luogu.com.cn/problem/P5304)

Brain-lapse, didn't get it. The extra-log approach feels more interesting than the intended solution.

https://www.luogu.com.cn/article/oow8gs0r



## P5505 [JSOI2011] Distributing Specialties

[problem link](https://www.luogu.com.cn/problem/P5505)

I had the rough idea — inclusion-exclusion — but forgot about stars and bars. A bit embarrassing.

https://www.luogu.com.cn/article/ifavg4dm



## CF1197D Yet Another Subarray Problem

[problem link](https://www.luogu.com.cn/problem/CF1197D)

I came up with a silly approach that might also pass?

Looking at my old code, it's just a DP: group by residue, DP backwards, and maintain the suffix. Let $f[j]$ be the DP value for right endpoints with $i\%m=j$.

At each $i$, either set $f[i]=sum[i]$ or keep the previous one, then update with $f[i]-k$.

Take the max of the two.

Then with $i$ as the left endpoint, consider the contribution of the right endpoint for each residue.

https://www.luogu.com.cn/paste/vr2e3ait



## P5589 Peppa Pig Plays a Game

[problem link](https://www.luogu.com.cn/problem/P5589)

I got the DP recurrence and the pattern, but one detail wrong. Not too bad.

The general idea matches this:

https://www.luogu.com.cn/article/c187nysw



## CF1238F The Maximum Subtree

[problem link](https://www.luogu.com.cn/problem/CF1238F)

I mostly worked out the properties, came up with a weird DP, then looked at my code and the editorial.

Turns out I'd just used a greedy. Interesting — silly me.

https://www.luogu.com.cn/paste/ed6j9k3r



## CF1238E Keyboard Purchase

[problem link](https://www.luogu.com.cn/problem/CF1238E)

I saw it needed bitmask DP but couldn't see how to account for the contribution. A bit of a blowup.

Looking at my old code, it's rather neat: for each state, on each transition add the pairwise contribution between the set and its complement. Then when a letter enters the set, the number of times it has been counted beforehand is exactly the keyboard distance.

Easier to follow from the code.

https://www.luogu.com.cn/paste/imhc56ui



## CF1303E Erase Subsequences

[problem link](https://www.luogu.com.cn/problem/CF1303E)

DP at a glance, and you can get there with a bit of thought.

Enumerate the length of $s1$, then let $f[i]$ be the maximum number of characters of $s2$ matchable when $s1$ is matched up to position $i$.

The DP isn't hard; the code makes it clear.

https://www.luogu.com.cn/paste/hq2qo9u2



## P6186 [NOI Online #1] Bubble Sort

[problem link](https://www.luogu.com.cn/problem/P6186)

https://www.luogu.com.cn/article/duay9pls



## P6275 [USACO20OPEN] Sprinklers 2: Return of the Alfalfa P

[problem link](https://www.luogu.com.cn/problem/P6275)

Analyzed it wrong. Doomed.

Drawing it out, the boundary between the two parts is always a staircase from the top-left to the bottom-right, so DP over that staircase: let $dp[i][j][0/1]$ be the state at cell $(i,j)$ with the staircase heading right or down.

Simple DP plus counting.

https://www.luogu.com.cn/paste/umu66048



## CF1365F Swaps Again

[problem link](https://www.luogu.com.cn/problem/CF1365F)

Zero ideas. Doomed.

You just need to guess the right lemma — and guessing lemmas used to be my strongest skill.

https://www.luogu.com.cn/article/w8jhbqpz



## P1857 Prime Stone Game

[problem link](https://www.luogu.com.cn/problem/P1857)

A true classic, but years without training have slowed my brain.

It's Grundy values first, computable with a linear sieve, building the SG array as the statement requires.

Then DP: for winning states finish as early as possible, for losing states delay as long as possible.

The transitions follow from the SG array.

Easier to follow from the code.

https://www.luogu.com.cn/paste/q8l5n8ih



## P2606 [ZJOI2010] Counting Permutations

[problem link](https://www.luogu.com.cn/problem/P2606)

I saw it was a min-heap immediately and hand-waved a DP that looked about right.

Let $f[n]$ be the number of min-heaps on $n$ nodes. Take 1 as the root each time, split into two subproblems, multiply the counts and a binomial:

$f[n]=f[l]*f[r]*C_{n-1}^{l}$

There's a detail issue — build a heap in advance to compute the left subtree's size.

https://www.luogu.com.cn/paste/5bptgon9



## P2743 [USACO5.1] Musical Themes

[problem link](https://www.luogu.com.cn/problem/P2743)

I came up with a horribly convoluted approach and completely missed that you just take differences and DP.

$f[i][j]$: the first part ends at $i$, the second at $j$. Routine transitions.

https://www.luogu.com.cn/paste/sd8mu4o0



## P3620 [APIO/CTSC2007] Data Backup

[problem link](https://www.luogu.com.cn/problem/P3620)

Brain-lapse: after taking differences it's just the tree-planting problem — the classic regretful greedy.

https://www.luogu.com.cn/paste/kcqz94b7



## P3545 [POI 2012] HUR-Warehouse Store

[problem link](https://www.luogu.com.cn/problem/P3545)

Max flow at a glance, then I realized it needs min-cost flow.

And then that it's really just simulated min-cost flow (regretful greedy).

A priority_queue does the job.

https://www.luogu.com.cn/paste/uh0ia6ux



## CF900D Unusual Sequences

[problem link](https://www.luogu.com.cn/problem/CF900D)

My analytical ability is gone.

Let $g(y)$ be the number of sequences summing to $y$, ignoring the $\gcd$ constraint.

It isn't hard to see $g(y)=2^{y-1}$, by stars and bars: each gap is either split or not.

Let $f(x)$ be the number of sequences summing to $x$ with $\gcd =1$.

Then $g(k)=\sum\limits_{d|k}f(k/d)=2^{k-1}$

By inclusion-exclusion,

$f(k)=g(k)-\sum\limits_{d|k,d>1}f(k/d)$

Just recurse.

https://www.luogu.com.cn/paste/e7ko1cep



## CF895C Square Subsets

[problem link](https://www.luogu.com.cn/problem/CF895C)

My thinking went sideways into DP, which does work, but a linear basis is the fastest approach.

First, $a_i$ is small and there are only 19 primes $<=70$, which suggests a linear basis.

Let $|S|$ be the size of the basis after inserting everything.

Then the remaining $n-|S|$ numbers are linearly representable.

So the answer is $2^{n-|S|}-1$.

https://www.luogu.com.cn/paste/rv65zn8y



## CF741C Arpa's overnight party and Mehrdad's silent entering

[problem link](https://www.luogu.com.cn/problem/CF741C)

I thought it was 2-SAT. Naive of me.

Build a bipartite graph and color it.

Couples obviously get an edge.

The "two of any three must differ" constraint gives edges $(2i-1,2i)$.

The result is always bipartite: any cycle alternates a couple edge with an adjacency edge, so every cycle is even and no odd cycle exists.

https://www.luogu.com.cn/paste/81eqdo46



## CF730I Olympiad in Programming and Sports

[problem link](https://www.luogu.com.cn/problem/CF730I)

Min-cost flow construction at a glance.

But regretful greedy (simulated min-cost flow) also works.

https://www.luogu.com.cn/article/2ensxnz4

Code:

https://www.luogu.com.cn/paste/l0g3abms



## CF623B Array GCD

[problem link](https://www.luogu.com.cn/problem/CF623B)

Fun one.

The key realization: since you can't delete everything, either the first or the last number survives.

So you only need the prime factors of those two numbers across six cases (plus one, minus one, unchanged).

Sieve them out first, then DP with each prime factor as the $\gcd$.

Let $f[i][0/1/2]$ be the minimum cost at element $i$ with nothing deleted, currently deleting, or done deleting.

The transitions aren't hard; see the code.

Once you get step one, the rest is routine.

https://www.luogu.com.cn/paste/d1zcnjfe



## CF521D Shop

[problem link](https://www.luogu.com.cn/problem/CF521D)

I remembered the approach but had misread the statement.

The order of operations is always assign, then add, then multiply.

For assignment keep only the largest per position, which converts assignment into addition.

Sort the additions descending, which converts them into multiplications.

Finally sort the multiplications descending and output the first $m$.

https://www.luogu.com.cn/paste/9iffudq6



## CF486D Valid Sets

[problem link](https://www.luogu.com.cn/problem/CF486D)

Inertia again: I saw the constraints and immediately wanted a two-dimensional DP state.

Since the constraints are so small, just enumerate each node, force it to be the maximum, and DP with it as the root:

$f[u] = f[u] + f[u]*f[v]$

which is essentially a knapsack merge.

https://www.luogu.com.cn/paste/xqad5b23


## CF19E Fairy

[problem link](https://www.luogu.com.cn/problem/CF19E)

Took me forever to even understand the statement.

It asks which edges, when removed, leave a bipartite graph.

The criterion for bipartiteness is the absence of an odd cycle.

The answer is the intersection of all odd cycles that appear.

A dfs handles it.

https://www.luogu.com.cn/paste/edls0m5o


## P4161 [SCOI2009] Game

[problem link](https://www.luogu.com.cn/problem/P4161)

https://www.luogu.com.cn/article/zmgkp11r


## AT_arc070_b ABC056D No Need

[problem link](https://www.luogu.com.cn/problem/AT_arc070_b)

The key here is that element $i$ is *not* dispensable exactly when the rest cannot build up $[K-a_i,a_i]$.

First instinct: run a knapsack and then remove items one at a time — since a knapsack can be read as a polynomial, removal is dividing by a polynomial.
Looking at my code, I instead optimized the DP with CDQ divide and conquer.
The editorial has another approach that's quite interesting: [[https://www.luogu.com.cn/article/o87199on]]

my code:
https://www.luogu.com.cn/paste/ds9v7cib


## AT_agc010_b AGC010B Boxes

[problem link](https://www.luogu.com.cn/problem/AT_agc010_b)

No ideas beyond difference arrays. Blew it, went to the editorial.

Half the editorials got details wrong, ugh.
It's a rather clever thinking problem. Each operation decreases the total by $\frac{n(n+1)}{2}$,
so a solution exists only when $\large M=\frac{\sum_i a[i]}{\frac{n(n+1)}{2}}$ is an integer.

Now look at the difference array: each operation does $d[i]=d[i]+(n-1)$ at one index and $d[j]=d[j]-1$ everywhere else.
Let $m_i$ be the number of type-one operations at position $i$.
That gives the equation $d[i]+m_i(n-1)-(M-m_i)=0$

which solves to $m_i=\frac{M-d[i]}{n}$
and that settles the problem — just check that every $m_i$ is non-negative.

https://www.luogu.com.cn/paste/76krqu56
btw, I'm not quite sure how to reduce this problem to a general class.

## AT_arc063_c ARC063E Trees and Integers

[problem link](https://www.luogu.com.cn/problem/AT_arc063_c)

Small brain-lapse.
There's an obvious construction: push all the initially weighted nodes into a priority queue,
repeatedly pop the largest, and assign its unassigned neighbors that node's weight minus one.
Then check validity at the end.

https://www.luogu.com.cn/paste/ts26d0ak

## AT_agc004_c AGC004C AND Grid

[problem link](https://www.luogu.com.cn/problem/AT_agc004_c)

Nice construction.
Noticing the border is never covered, you can construct the two grids like this:

```
###. ....# 
#.... #### 
###. ....# 
#.... #### 
###. ....#
```
and then just color in the original grid's cells.

https://www.luogu.com.cn/paste/oa3ylcch


## CF1051F The Shortest Statement

[problem link](https://www.luogu.com.cn/problem/CF1051F)

It isn't hard to see you should pull out a spanning tree first.
The remaining non-tree edges touch at most 42 nodes; call those special.
Run Dijkstra from each special node to get its distances to everything.
For a query, first get the tree distance via LCA, then enumerate the special nodes and check whether forcing a path through one is shorter.
Easy to implement.
https://www.luogu.com.cn/paste/89h3fi2e

## CF1234F Yet Another Substring Reverse

[problem link](https://www.luogu.com.cn/problem/CF1234F)

I got most of the way there but not all of it.
The constraints immediately suggest bitmasks.
But $|S|$ is large, which confused me.
Analyzing calmly: what you actually need is two intervals $s1,s2$ with $s1 \& s2=0$ maximizing the popcount of $s1|s2$.
A high-dimensional prefix sum does it: for each character set, sum its answer with its complement's.
https://www.luogu.com.cn/paste/vi8s04gg

## P1989 Counting Triangles in an Undirected Graph

[problem link](https://www.luogu.com.cn/problem/P1989)

Why is this idea so clever?
One look at the $10^5$ constraint and it felt hopeless — I broke into a sweat and went to the editorial, only to find I'd written this problem shortly before retiring in high school (sigh).
First, turn each undirected edge into a directed one, from lower degree to higher degree, breaking ties by smaller index.
Then you can brute-force it.
For each node $u$, mark all its neighbors, then enumerate each neighbor $v$,
then enumerate each neighbor $w$ of $v$ and check whether $w$ is marked by $u$; if so, add $1$ to the answer.
Why is the complexity fine?
Consider the nodes one at a time: the complexity is each node's in-degree times its out-degree.

If a node's degree in the original graph is $<=\sqrt{m}$, its out-degree is certainly $<=\sqrt{m}$ too.
If its degree is $> \sqrt{m}$, it only points to nodes of higher degree, of which there are at most $\sqrt{m}$, so its out-degree is also $<=\sqrt{m}$.
For in-degree, consider each original edge $(u,v)$: its contribution to the complexity is $out[v]$, and since $out[v]<=\sqrt{m}$ as proven above, the total complexity is $O(m\sqrt{m})$.

https://www.luogu.com.cn/paste/9g86u6as


## AT_agc033_c AGC033C Removing Coins

[problem link](https://www.luogu.com.cn/problem/AT_agc033_c)

I never thought in this direction. Silly me.

You only need the diameter length: each operation reduces it by 1 or 2, so compute the diameter and check it $\mod 3$. You can also derive it with Grundy values.

https://www.luogu.com.cn/paste/9h9kwq6m


## AT_arc100_c ARC100E Or Plus Max

[problem link](https://www.luogu.com.cn/problem/AT_arc100_c)

My thinking got rigid: high-dimensional prefix sum at a glance, but then I didn't see how to handle $a_i+a_j$.

Looking at my code, you just track the largest *and* second largest while doing the high-dimensional prefix sum. Obvious in hindsight, and I still missed it.
Remember the constraint is $<=$, so take a prefix maximum at the end.
https://www.luogu.com.cn/paste/m1mn89hu



## AT_arc115_d Odd Degree

[problem link](https://www.luogu.com.cn/problem/AT_arc115_d)

The easiest observation is that an odd number of odd-degree vertices is impossible, so only even $k$ has an answer.
Consider the tree case first.
If you fix which $k$ vertices have odd degree, every tree edge's inclusion is determined (work up from the leaves).
Likewise, once you add some non-tree edges, the tree edges' states are still determined.
With $n$ vertices and $m$ edges in total, forcing $k$ vertices to odd degree gives
$$2^{m-n+1} * C(n, k)$$
ways, and then you merge across connected components with a knapsack.
The hard part is analyzing the tree case first.

[code](https://www.luogu.com.cn/paste/7dqyc4hg)


## AT_arc122_d XOR Game

[problem link](https://www.luogu.com.cn/problem/AT_arc122_d)

For XOR problems there are only so many angles.
Go from the high bit down. If the count of 1s at this bit is odd, the final answer is determined at this bit:
you just need to find which 0-at-this-bit element to pair with which 1-at-this-bit element to minimize the answer, since the second player decides.
A trie solves it.
If the count of 1s at this bit is even, they pair up perfectly, this bit ends as 0, so split the numbers by this bit and continue at the next one.

[code](https://www.luogu.com.cn/paste/wvjdi6rm)


## AT_arc124_d Yet Another Sorting Problem

[problem link](https://www.luogu.com.cn/problem/AT_arc124_d)

Start with the unrestricted case where you may swap freely: link $i$ to $p[i]$ to get a set of cycles, and a cycle of length $len$ needs $len - 1$ operations
to put every position in place. Each cycle is clearly independent.
For this problem, a cycle spanning both halves also takes only $len - 1$ operations.
If all of a cycle's nodes are on the left, you must add two edges to join it with some cycle (or single node) on the right, forming one big cycle.
With $s1$ cycles on the left, $s2$ on the right, and $gs$ cycles total,
the answer is $n + m - gs + 2 * max(s1, s2)$.
The single-node case needs special handling.

[code](https://www.luogu.com.cn/paste/k3bpdz2k)

## AT_arc126_d Pure Straight

[problem link](https://www.luogu.com.cn/problem/AT_arc126_d)

First, $K$ is tiny, so bitmask DP. Now, how to design the state?
Let $f[i][S]$ be: considering position i, having fixed the values in state $S$.
For position i, if $a[i]$ doesn't appear in $S$, you can take it — count how many elements of S are larger than it, since those must all be swapped with $i$, contributing that much (i.e. the inversion count),
then transition into the state containing $a[i]$.

Or you can skip $a[i]$: compare whether it's better to move everything already chosen past i, or to move everything chosen later past i, and take the min.
This counts as a DP with contributions computed in advance.

[code](https://www.luogu.com.cn/paste/ij9tqnz7)

## CF11D A Simple Task

[problem link](https://www.luogu.com.cn/problem/CF11D)

Hadn't woken up.

The constraints say bitmask DP at first glance, and the key is forcing the smallest index as the start. Let $f[S][i]$ be the number of paths covering the set $S$ with current endpoint $i$; the transition is then easy, just enumerate the neighbors of $i$. Note that walking an edge back and forth, and each cycle being counted twice, means the answer is $\frac{ans - m}{2}$.

[code](https://www.luogu.com.cn/paste/249v9ale)

##  [CF19E Fairy](https://www.luogu.com.cn/problem/CF19E)

Right direction, but I never nailed down the details. Getting old, can't push through the properties any more qwq

[solution](https://www.luogu.com.cn/article/c9mfsmzr)


## CF165E Compatible Numbers

[problem link](https://www.luogu.com.cn/problem/CF165E)

Textbook high-dimensional prefix sum.

## CF367E Sereja and Intervals

[problem link](https://www.luogu.com.cn/problem/CF367E)

Misread the constraints. Blew it.

[solution](https://www.luogu.com.cn/article/hoj0wp9e)
