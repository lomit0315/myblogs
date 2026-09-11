---
category: icpc
title: Assorted Problems 2
description: "Mostly old Luogu blue-difficulty problems I solved years ago, with quick sketches and short editorials."
publishDate: 2025-05-10
tags:
 - solution

heroImage: { src: '1.jpg', color: '#B4C6DA' }
---

Mostly old Luogu blue-difficulty problems I solved years ago — quick sketches plus short editorials.

## P2303 [SDOI2012] Longge's Problem

[problem link](https://www.luogu.com.cn/problem/P2303)

It's easy to see the answer is

$\large \sum\limits_{d|n}d*\phi(n/d)$

Just expand $\phi$ and compute it in $\sqrt{n}$.

https://www.luogu.com.cn/paste/0gbib398



## P2371 [National Team] Momo's Equation

[problem link](https://www.luogu.com.cn/problem/P2371)

No ideas at first. Then I saw "shortest path" in the tags.

Realized it's a congruence shortest path, but I'd forgotten how to write one — a good chance to review.

It's the textbook version: take the largest distance as the modulus, then run a shortest path to find the minimum number of steps to reach each residue.

Take a difference over the $<=$ counts and that's the answer.

https://www.luogu.com.cn/paste/hkwsmi6g



## P2375 [NOI2014] Zoo

[problem link](https://www.luogu.com.cn/problem/P2375)

I clearly hadn't woken up.

You just maintain a $num[i]$ alongside the KMP, recording how many times you can keep jumping $i=next[i]$ from here.

Then rematch, multiply, done.

https://www.luogu.com.cn/paste/mnhfbwlc



## P2424 Sum of Divisors

[problem link](https://www.luogu.com.cn/problem/P2424)

Compute prefix sums, then subtract the answer at $X-1$ from the one at $Y$.

Writing out the formula, divisor-block decomposition makes this easy.

https://www.luogu.com.cn/paste/o0x2vuon



## P2447 [SDOI2010] Alien Millipede

[problem link](https://www.luogu.com.cn/problem/P2447)

Clearly Gaussian elimination, optimized with a bitset.

https://www.luogu.com.cn/paste/n8u2qiit



## P2467 [SDOI2010] Goblin Tribe

[problem link](https://www.luogu.com.cn/problem/P2467)

DP at a glance. I tried setting up states like in [P2059 [JLOI2013] Card Game](https://www.luogu.com.cn/problem/P2059) and transitioning from there.

Let $f[i][j]$ be the number of ways over the first $i$ numbers starting with $j$ as a peak.

But I couldn't work out the transition and got stuck.

It isn't hard to see you can force the first element to be a peak and double the answer at the end, since the complementary state is exactly the one starting with a valley.

Once you think in terms of complements, you can work out which states $f[i][j]$ transitions from.

There are two cases. If $j$ and $j-1$ are adjacent, it reduces to arranging $i-1$ elements starting with $j-1$ as a valley — by complementarity that's just $f[i-1][i-(j-1)]$, taking the complement of all those states. If $j$ and $j-1$ are not adjacent, swapping $j$ and $j-1$ doesn't affect the structure and the state stays valid, so you can simply add $f[i][j-1]$.

So $f[i][j] = f[i-1][i-(j-1)]+f[i][j-1]$.

Off you go.

https://www.luogu.com.cn/paste/rkwzfw8s



## P2485 [SDOI2011] Calculator

[problem link](https://www.luogu.com.cn/problem/P2485)

A stitched-together problem.

Fast exponentiation for part one, extended Euclid for part two, BSGS for part three.

A good chance to review.

https://www.luogu.com.cn/paste/9jur8l61



## P2503 [HAOI2006] Splitting Data Evenly

[problem link](https://www.luogu.com.cn/problem/P2503)

Simulated annealing at a glance (the instincts are still there).

But I'd forgotten how to write it.

[A short note on simulated annealing](https://blog.csdn.net/qq_38944163/article/details/106068656?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522b01f13cbc58d5c95d7c4651b5564c16b%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=b01f13cbc58d5c95d7c4651b5564c16b&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-2-106068656-null-null.nonecase&utm_term=%E6%A8%A1%E6%8B%9F&spm=1018.2226.3001.4450)

```cpp
void SA() {
	for(double t = Bt; t > Et; t = t * Ct) {
		int x = rand() % n + 1, y = rand() % n + 1;// pick a random new state
		calc(); // evaluate the new state
		if(ans < ANS) ANS = ans,nowx = x, nowy = y;// accept if it beats the best
		else if(exp((ANS - ans)*1.0 / t) > (double)rand() / RAND_MAX)
		 		// otherwise accept with some probability; (double)rand() / RAND_MAX lies in [0,1]
		 		// do NOT get the sign wrong here!!!! (learned the hard way)
	}
}
```



## P2511 [HAOI2008] Splitting Sticks

[problem link](https://www.luogu.com.cn/problem/P2511)

First instinct: binary search the answer.

Then I noticed it asks for the number of ways.

No matter — binary search the length first, then a simple DP.

https://www.luogu.com.cn/paste/yop2tsot



## P2519 [HAOI2011] problem a

[problem link](https://www.luogu.com.cn/problem/P2519)

I couldn't even remember the first transformation.

Getting old.

Step one is to convert it into a set of rank intervals and keep as many intervals as possible.

Intervals either coincide or are disjoint.

An interval can't appear more times than its length.

So sort by right endpoint ascending and DP.

The code makes it clearer.

https://www.luogu.com.cn/paste/zazpqr4r



## P2607 [ZJOI2008] Knights

[problem link](https://www.luogu.com.cn/problem/P2607)

I have a feeling I didn't write this code myself.

It isn't hard to see it's a forest of base-ring trees.

For each such tree, pick any edge on the cycle and cut it, then for its two endpoints force one of them to be *excluded* in turn. (I first tried forcing one to be included and the other excluded, which is wrong — you should only force exclusion.)

https://www.luogu.com.cn/problem/solution/P2607



## P2619 [National Team] Tree I

[problem link](https://www.luogu.com.cn/problem/P2619)

Textbook WQS binary search. I don't know why I found this algorithm hard back then.

It feels pretty obvious now.

Confusing.

https://www.luogu.com.cn/article/29g0lu2h

Oh, never mind — going back through my old blog, the hard part was seeing that the answer function is convex.

[A short note on WQS binary search](https://blog.csdn.net/qq_38944163/article/details/108627904?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522ee262ba848ed36ef1ab0ecbb7cee9098%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=ee262ba848ed36ef1ab0ecbb7cee9098&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-2-108627904-null-null.nonecase&utm_term=%E7%82%B9%E5%88%86)



## P2634 [National Team] Congcong and Koko

[problem link](https://www.luogu.com.cn/problem/P2634)

Textbook centroid decomposition at a glance.

[A short note on tree divide and conquer](https://blog.csdn.net/qq_38944163/article/details/106153490?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522ee262ba848ed36ef1ab0ecbb7cee9098%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=ee262ba848ed36ef1ab0ecbb7cee9098&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-6-106153490-null-null.nonecase&utm_term=%E7%82%B9%E5%88%86&spm=1018.2226.3001.4450)



## P3953 [NOIP 2017] Park Walk

[problem link](https://www.luogu.com.cn/problem/P3953)

First build the reverse graph and run a shortest path to get $dis[u]$.

Then let $f[u][k]$ be the number of paths from $u$ to $n$ of length $dis[u] + [k]$.

The transition is straightforward; the $-1$ case is when a cycle appears.

The code makes it clear.

https://www.luogu.com.cn/paste/ptj7ceir



## P2657 [SCOI2009] Windy Numbers

[problem link](https://www.luogu.com.cn/problem/P2657)

Textbook digit DP.

https://www.luogu.com.cn/paste/cbxvyqhb



## P2672 [NOIP 2015 Junior] Salesman

[problem link](https://www.luogu.com.cn/problem/P2672)

First, it isn't hard to see the first position can be found by brute force; call it $pos$.

Once the first position is fixed, the rest splits into two parts. The earlier part depends only on $A[i]$.

The later part contributes $2*(S[i]-S[pos])+A[i]$.

Maintain both sides with priority queues.

https://www.luogu.com.cn/article/qd6x7mh4



## P2680 [NOIP 2015] Transport Plan

[problem link](https://www.luogu.com.cn/problem/P2680)

The non-brute-force data structure solution here is actually interesting.

The answer is clearly monotone, so binary search $mid$ first and consider all the routes.

Intersect all routes longer than $mid$; if the intersection is empty the answer clearly fails.

Otherwise take the heaviest edge in the path intersection.

Path intersection can be done with tree difference arrays, with LCA via binary lifting.

https://www.luogu.com.cn/paste/tw42wbhr



## P2698 [USACO12MAR] Flowerpot S

[problem link](https://www.luogu.com.cn/problem/P2698)

Binary search plus range max/min at a glance.

Which felt a bit silly.

You can actually just use a sliding window with two monotonic queues maintaining the max and min.

The code makes it clearer.

https://www.luogu.com.cn/paste/ewnh37r8



## P2747 [USACO5.4] Canada Tour

[problem link](https://www.luogu.com.cn/problem/P2747)

I couldn't come up with an approach at all. Doomed.

https://www.luogu.com.cn/article/alk40pvk



## P3177 [HAOI2015] Coloring a Tree

[problem link](https://www.luogu.com.cn/problem/P3177)

Not hard — a classic pattern.

Consider each edge's contribution, then let $dp[u][i]$ be the contribution over the subtree of $u$ with $i$ black nodes.

Tree knapsack DP.

https://www.luogu.com.cn/paste/t6h1yv1d



## P3403 Elevator

[problem link](https://www.luogu.com.cn/problem/P3403)

One glance at the "graph theory" tag and I realized it's a congruence shortest path.

https://www.luogu.com.cn/paste/8xtk42xu



## P3396 Hash Collision

[problem link](https://www.luogu.com.cn/problem/P3396)

Missing the sqrt decomposition here is a bit embarrassing.

For $p$ smaller than $\sqrt{n}$, precompute everything up front.

For $p$ larger than $\sqrt{n}$, just jump and sum by brute force.

https://www.luogu.com.cn/paste/2170ct3a



## P3507 [POI 2010] GRA-The Minima Game

[problem link](https://www.luogu.com.cn/problem/P3507)

Fun one.

First, after sorting, you clearly take contiguous blocks.

Let $f[i]$ record the optimal difference.

The transition is $f[i]=\max(f[i-1],a[i]-f[i])$.

That is: take the current one together with the previous, or take it alone and subtract from the previous difference to get the new one.

http://luogu.com.cn/paste/d01vfzif



## P3878 [TJOI2010] Splitting Gold Coins

[problem link](https://www.luogu.com.cn/problem/P3878)

Thought about it for ages.

Then suddenly noticed I'd written it with simulated annealing back then, lol.

You can also just do meet-in-the-middle, storing each case by count in a vector.

Sort them, then binary search while searching the other half.

https://www.luogu.com.cn/paste/si1aq1jn



## P3964 [TJOI2013] Squirrel Gathering

[problem link](https://www.luogu.com.cn/problem/P3964)

The Chebyshev/Manhattan distance transform.

https://www.luogu.com.cn/article/0aub49ev



## P4035 [JSOI2008] Spherical Space Generator

[problem link](https://www.luogu.com.cn/problem/P4035)

Clearly either Gaussian elimination or simulated annealing at a glance.

Turns out both work.

I got stuck on the first transformation for the Gaussian elimination version. Unbelievable.

You just take the $n+1$ equations, subtract consecutive pairs to get $n$ equations, and solve.

https://www.luogu.com.cn/paste/a049o4w4



## P4113 [HEOI2012] Picking Flowers

[problem link](https://www.luogu.com.cn/problem/P4113)

For this kind of problem you can usually take the queries offline and process them by increasing right endpoint.

Since you need at least two of a flower to count, maintain a BIT where for each color only the second-to-last occurrence contributes 1 and the rest contribute nothing. A BIT handles that easily.

https://www.luogu.com.cn/paste/07m3op7e



## P4101 [HEOI2014] Everyone Speaks Well of Jiangnan

[problem link](https://www.luogu.com.cn/problem/P4101)

Brain broken, couldn't think.

I skimmed several editorials and understood none of them.

Then I finally realized that no matter what operations you do, the number of steps to reach the final state is the same.

So just assume you always merge a size-$1$ pile with the largest one, count the steps, and check the parity.

https://www.luogu.com.cn/article/w2pmnzk3



## P4127 [AHOI2009] Same-class Distribution

[problem link](https://www.luogu.com.cn/problem/P4127)

I misread the number as a primitive root and was confused for half a minute.

Digit DP at a glance, but if you track the digit sum as the modulus it changes during the DP, which seems hopeless. So instead enumerate each possible digit sum and track the remainder modulo it.

The code is very readable.

https://www.luogu.com.cn/paste/aav9z6m0



## CF593D Happy Tree Party

[problem link](https://www.luogu.com.cn/problem/CF593D)

Any edge that isn't $1$ can only be jumped log times, so just merge all the $1$ edges with a DSU.

Though my old approach appears to have been plain heavy-light decomposition.

https://www.luogu.com.cn/article/x3nxygfq



## CF558E A Simple Task

[problem link](https://www.luogu.com.cn/problem/CF558E)

Spin up 26 segment trees and brute-force range assignment.

https://www.luogu.com.cn/paste/ao44bi2m



## CF449D Jzzhu and Numbers

[problem link](https://www.luogu.com.cn/problem/CF449D)

Do a high-dimensional prefix sum (FWT) first, then inclusion-exclusion by popcount.

Roughly that.

https://www.luogu.com.cn/paste/9jq3k5tm



## CF11D A Simple Task

[problem link](https://www.luogu.com.cn/problem/CF11D)

The constraints say bitmask DP.

Let $f[S][i]$ be the set of cycle nodes present in $S$, forcing the smallest node in $S$ as the start and $i$ as the current path endpoint. During transitions don't change the start (the smallest node), check whether it closes into a cycle, and sum.

https://www.luogu.com.cn/paste/i4resfgr



## P4170 [CQOI2007] Painting

[problem link](https://www.luogu.com.cn/problem/P4170)

The constraints threw me off.

DP at a glance, the state is obvious, but the transition confused me.

Turns out eighth-grade me solved this instantly, which stings a bit.

The state is clearly $f[l][r]$.

As for transitions, there are two strategies.

When $st[l] == st[r]$, just $f[l][r] = \min(f[l + 1][r], f[l][r - 1])$

i.e. paint the other node at the same time. Fairly obvious in hindsight (I just didn't see it).

Otherwise enumerate a split point, paint the two halves separately, sum, and minimize.

Textbook interval DP, I'd say.

https://www.luogu.com.cn/paste/qtp5rb4n



## P4212 Outer Space Travel

[problem link](https://www.luogu.com.cn/problem/P4212)

As everyone knows, maximum clique is NP-complete.

Then I looked at my code and found brute-force search had passed. Baffling.

Reading my old editorial: ah, the recklessness of youth, not knowing it was the beginning of the tragedy.

https://www.luogu.com.cn/article/amm2kmdx



## SP3267 DQUERY - D-query

[problem link](https://www.luogu.com.cn/problem/SP3267)

Textbook Mo's algorithm at first glance, but I immediately felt a persistent segment tree would also work (problem-solving instinct).

I just didn't have the details worked out.

It turns out you can take it offline, sort by right endpoint, and sweep.

For each color: if it hasn't appeared, set 1 at this position; otherwise set the previous occurrence to 0 and then set this position to 1. Each query is a range sum (suffix sum).

And clearly, if forced online, a persistent segment tree does it. I didn't write the code, but it's obviously not hard.

https://www.luogu.com.cn/paste/fpptcxuv



## AT_arc081_c [ARC081E] Don&#39;t Be a Subsequence

[problem link](https://www.luogu.com.cn/problem/AT_arc081_c)

Subsequence automaton at a glance — wait, what is a subsequence automaton again?

Define an array $nxt[i][c]$: the first position at or after $i$ where character $c$ occurs.

You can build it with a single backwards pass. That's the subsequence automaton.

Then BFS over it and find the first $0$.

You can also DP for the answer while building the automaton.

The implementation is very simple.

https://www.luogu.com.cn/paste/z3b4i2p8



## UVA1335 Beijing Guards

[problem link](https://www.luogu.com.cn/problem/UVA1335)

Interesting one.

I didn't think of transforming the problem, splitting it into two parts, and then binary searching the answer.

https://www.luogu.com.cn/article/44crqg53



## UVA10859 Placing Lampposts

[problem link](https://www.luogu.com.cn/problem/UVA10859)

Not realizing that an undirected acyclic graph is a forest, and getting stuck on step one, is a little painful.

If you only minimize the total count, it's a simple DP.

Let $f[u][0/1]$ be the optimal answer for the subtree of $u$ with a lamp placed at this node or not.

You can use the usual flow trick (domain extension?): set an edge lit by one lamp to $10000 + 1$ and one lit by two lamps to $10000$. Then the DP guarantees that, subject to the minimum total number of lamps, the number of edges lit by only one lamp is minimized (i.e. the number lit by two is maximized).

https://www.luogu.com.cn/paste/nzqsp7gt



## UVA10891 Game of Sum

[problem link](https://www.luogu.com.cn/problem/UVA10891)

I wanted to do interval DP tracking the difference directly, unsure whether that works.

Looking at my old code, it DPs on the first player's optimal score, so the recurrence needs adjusting.

I tried tracking the difference and it AC's too, and it's easier to understand.

https://www.luogu.com.cn/paste/btb40dbq



## UVA11300 Spreading the Wealth

[problem link](https://www.luogu.com.cn/problem/UVA11300)

I never thought in this direction. Interesting.

I assumed it was some known-result problem and it turned out to be pure math.

Let $X_i$ be the number of coins $i$ passes to $i-1$.

$A[i] - X[i] + X[i + 1] = average$

Rearranged:

$X[i+1]=average + X[i] - A[i]$

Expanding by induction:

 $X[i] = (i-1) * average - A[1] - A[2] - ... - A[i - 1] + X[1]$

Let $C[i] = A[1] + A[2] + .. + A[i -1 ] - (i - 1) * average$

Then $X[i] = X[1] - C[i]$

So fixing $X[1]$ determines everything else.

The answer is $|X[1]| + |X[2]| + ... + |X[n]|$

which turns it into an elementary-school olympiad problem. (AtCoder seems to have a similar one: [**D - Inc, Dec - Decomposition**](https://atcoder.jp/contests/arc123/tasks/arc123_d))

https://www.luogu.com.cn/paste/nmcfa8cv



## P4301 [CQOI2013] New Nim Game

[problem link](https://www.luogu.com.cn/problem/P4301)

I misread the statement and had no ideas.

Only from the code did I see you insert into a linear basis from largest to smallest and sum whatever doesn't fit.

https://www.luogu.com.cn/paste/h3w1920k



## P4306 [JSOI2010] Connectivity Count

[problem link](https://www.luogu.com.cn/problem/P4306)

Contract with Tarjan first; for the connectivity check I just brute-forced it with dfs + bitset.

Then compute directly.

https://www.luogu.com.cn/paste/xrh0w073
