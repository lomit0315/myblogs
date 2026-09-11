---
category: icpc
title: "2026.1 Rehab Training"
publishDate: 2026-01-06 22:04:56
description: "If the footprints of a life are one day buried by the dust of time, then we can never stop walking."
tags:
 - personal
 - reflection
 - solution
heroImage: { src: '1.jpg', color: '#B4C6DA' }
---



After finals I goofed off for ten days before remembering I was supposed to be doing rehab training. I never knew where to start, so I just kept slacking. Then a couple of days ago I discovered that next year's WF might be in Shanghai, which would mean a company-paid trip home, and suddenly I was interested. Thinking about it calmly, I really do need to prepare properly.
I have to consider whether this is the only chance I'll ever get.

The whole point of staying at school over winter break instead of going home was to stop myself from slacking off completely. There's plenty to do.

I'm doing this series because I need a record. Research or ICPC, with only 21 precious days of break left, not writing down what I did each day makes it far too easy to drift.

And I'll write up some editorials along the way.

## 12.29

Strictly speaking this started on 12.29, but let's file it under January 2026.

Got up early and VP'd ABC 418 while chatting with a high-school friend. The early problems were easy, basically instant. Then the second-to-last one stumped me — I assumed there was some mystical property I'd missed, and the editorial says it's DDP. The last problem was a deterministic finite automaton. Is this the level things are at now??

I looked at last year's NAC problems and found that reliably solving 7 blue problems plus 1-2 purple ones gets you into WF. I really was too checked out last year.

### ABC418E - Trapezium

[problem link](https://atcoder.jp/contests/abc418/tasks/abc418_e)

Can't upsolve this yet, placeholder for now.

### ICPC NAC 2025 H. Ornaments on a Tree

[problem link](https://qoj.ac/contest/2041/problem/11363)

It isn't hard to see that a bottom-up greedy is clearly correct.

For the current node $u$, if it's $-1$, just set it to $\min(K - sum[fa], K - sum[u])$.

Then update $sum[fa], sum[u]$ and continue.

[code](https://qoj.ac/submission/1877544)

I looked at the other problems and have ideas; I'll upsolve tomorrow.


[Generalized series-parallel graph method](https://www.cnblogs.com/apjifengc/p/17786222.html) — read it but haven't understood it yet, will study tomorrow.


## 12.30

Finished reading about generalized series-parallel graphs in the morning and learned how to use them on problems. Found two problems and wrote them up.

Then went to the campus gym, came back and browsed around various topics and blogs.

Reading high schoolers' blogs got me a bit down, reminiscing about the old days. Wasted a huge amount of time.

Then I found out the national training team apparently no longer gets direct admission this year — there's a written test and an interview now. Wild.

### SNOI2020 Spanning Tree

[problem link](https://www.luogu.com.cn/problem/P6790)

A generalized series-parallel graph is one with no $K_4$ subgraph. For such graphs you can shrink a large graph down by deleting degree-one vertices, contracting degree-two vertices, and merging parallel edges, while maintaining the answer.

For this problem the given graph is clearly a generalized series-parallel graph.

So during contraction, maintain a $dp$ on edges: $f[e], g[e]$ are the counts for this edge being deleted or kept.

For deleting a degree-one vertex, just set $ans = ans \times f[e]$.

For a degree-two vertex with edges $e_1, e_2$, contracting into edge $e^*$:

$f[e^{*}] = f[e_1] * f[e_2]$

$g[e^{*}] = f[e_1] * g[e_2] + g[e_1] * f[e_2]$


For merging parallel edges:

$f[e^{*}] = f[e_1] * g[e_2] + g[e_1] * f[e_2]$

$g[e^{*}] = g[e_1] * g[e_2]$

A queue is enough to maintain all this, and the code is reasonably easy to write. (Not sure why so much of the editorial code has such an unusual style.)

[code](https://www.luogu.com.cn/paste/d0h32vm7)

###  [ICPC NAC 2025 G. Most Scenic Cycle](https://qoj.ac/contest/2041/problem/11362)

Easier than the previous one — you only maintain the longest path.

Add when contracting degree-two vertices, then compute the answer and maintain the maximum when merging parallel edges.

[code](https://qoj.ac/submission/1879415)

### Luogu P4839 P's Buckets

[problem link](https://www.luogu.com.cn/problem/P4839)

A linear basis rehab problem.

It isn't hard to see this is point update, range query.

Build a segment tree and maintain a linear basis at each node.

To merge two bases, loop over one and insert its elements into the other.

[code](https://www.luogu.com.cn/paste/z5jek63b)


## 12.31

New Year's Eve. My high-school friends in China stayed up to game with me, then that evening I stayed up to game with them. Got a bit carried away.

Tidied my room.

Might as well rest for New Year's.

## 1.1

Nothing.

## 1.2

Started writing problems again. No motivation, kind of listless, just want to lie down, don't even want to game.

Still, writing problems feels more interesting than research. I might be avoiding something.

### ABC133F Colorful Tree

[problem link](https://atcoder.jp/contests/abc133/tasks/abc133_f)

My first thought was heavy-light decomposition, but you don't need it — binary-lifting LCA plus a persistent segment tree works.

Concretely, give each node a segment tree recording each color's occurrence count and distance sum, and the arithmetic is easy.

[code](https://atcoder.jp/contests/abc133/submissions/72152863)

### ABC134F Permutation Oddness

[problem link](https://atcoder.jp/contests/abc134/tasks/abc134_f)

Couldn't do it, copied it!

Turns out it's a split-the-contribution DP. Dead memories suddenly reawakened: for an absolute value, split the contribution into two parts, positive for the larger and negative for the smaller.

The interesting bit is the state design: at each step you consider both the position of value $i$ and what goes in position $i$.

Process from small to large.

Let $f[i][j][k]$ be: considering position $i$ and value $i$, with $j$ unmatched small value/position pairs and current contribution $k$.

-  $p[i] = i$, i.e. $i$ sits at position $i$: $f[i][j][k] += f[i - 1][j][k]$
- $p[i]$ and $i$ both match with larger later ones, i.e. as the negative side: $f[i][j][k] += f[i-1][j-1][k + 2*i]$
- $p[i]$ and $i$ both match with smaller earlier ones, i.e. as the positive side: $f[i][j][k] += f[i-1][j+1][k - 2*i] * (j+1)^2$
- one of $p[i]$ and $i$ matches a smaller earlier one and the other a larger later one: $f[i][j][k] += f[i - 1][j][k] * j * 2$

And that's the transition.

[code](https://atcoder.jp/contests/abc134/submissions/72152944)

### ABC135F Strings of Eternity

[problem link](https://atcoder.jp/contests/abc135/tasks/abc135_f)

First you obviously pad $s$ out to at least the length of $t$.

Then build a KMP on $t$, run it over $s$ to find matches, connect the matched positions with edges, and find the longest chain.

(Though I botched the KMP, and got the longest-chain DP direction backwards, and debugged it forever.)

[code](https://atcoder.jp/contests/abc135/submissions/72155086)

Still inefficient — I keep drifting off to do other things, and don't even enjoy those.

## 1.3

Wrote one problem in the morning, then for some reason lost motivation again. Spent the afternoon doing a random walk around campus, thinking about things.

## 1.4

Nothing.

## 1.5

Got up, wrote a problem, went to the gym. Shouldn't have done legs — went too hard, and spent the whole afternoon barely able to stay awake. Sleep.

Spent the evening deep in Arknights story. A bit addictive, bruh.

### ABC136F Enclosed Points

[problem link](https://atcoder.jp/contests/abc136/tasks/abc136_f)

Didn't know what to do at first.

But you can split the contribution and consider each point individually.

Take each point as the origin, split into four quadrants, and use inclusion-exclusion to compute its contribution.

Four quadrants around each point is just simple 2D point counting.

[code](https://atcoder.jp/contests/abc136/submissions/72223405)

### ABC137F Polynomial Construction

[problem link](https://atcoder.jp/contests/abc137/tasks/abc137_f)

Lagrange interpolation at a glance, but my head wasn't clear.

So I went with a similar idea. Both Lagrange interpolation and CRT construct $n$ expressions, each satisfying exactly one point value and vanishing at the others, then sum them. The same approach works here.

Say the expression must satisfy the $i$-th requirement, $f(i) = a_i \ (\mod p)$, and be $0$ elsewhere. Fermat's little theorem gives exactly that: $1 - (x-i)^{p-1}$.

So the final polynomial is $$\sum\limits_{i=0}^{p-1} 1 - (x-i)^{p-1}$$
Expand with the binomial theorem to get the coefficients.

[code](https://atcoder.jp/contests/abc137/submissions/72258518)
### ABC138F Coincidence

[problem link](https://atcoder.jp/contests/abc138/tasks/abc138_f)

First, I recall the property $y \mod x <= y/2$

which you can prove by case-splitting on $x$.

For this problem:

By that property, $x$ and $y$ must have the same highest bit, otherwise the xor would exceed the mod.

From which $y/2 <= x$

so $y \mod x =  y - x$
and the problem becomes
$y-x = x\  \text{XOR}\  y$

Bit by bit, that means $y$ must contain $x$ in binary,
i.e. each bit of $(x,y)$ is one of $(0,0), (0,1), (1,1)$.

Straight digit DP (don't forget the same-highest-bit condition).

Let $dp[pos][o][l][r]$ be: at bit $pos$ counting down from the top, whether the highest bit is fixed, and whether we're tight against the lower/upper bounds.

[code](https://atcoder.jp/contests/abc138/submissions/72259636)

### ABC147F Sum Difference

[problem link](https://atcoder.jp/contests/abc147/tasks/abc147_f)

For problems like this, write out the expression for the answer first.

$\sum\limits_{i\in S} a_i - \sum\limits_{i\notin S} a_i$

which can be rewritten as
$2 * \sum\limits_{i\in S} a_i - \sum\limits_{i=1}^{n} a_i$
so the only thing that matters is $\sum\limits_{i\in S} a_i$; everything else is a constant, and you only need the count.

Substituting the expression, if $S$ contains $t$ numbers the answer is

$tX + kD$
where $k$ is the sum of $t$ values chosen from $0,1,2,...n-1$, which ranges over

$$k\in[\frac{t(t-1)}{2}, \frac{(n-1+n-t)t}{2}]$$
Then group by $tX \mod D$ (remember to offset the ranges), and within each group it's a segment-union problem (interval covering), which is routine.

[code](https://atcoder.jp/contests/abc147/submissions/72259847)



## 1.6

Slept from 12 to 11. Early to bed, late to rise.

Shouldn't have done legs — several days of feeling dead. Removing it from the training list and switching to cardio.

Woke up to the news that WF is in Dubai. Looks like no trip home. Sad.

### ABC157F Yakiniku Optimization Problem

[problem link](https://atcoder.jp/contests/abc157/tasks/abc157_f)

The correct approach is to binary search $T$, giving $n$ circles of radius $T/C_i$, where the pairwise intersections are the candidate answers. Brute-force over the intersections.

Note that you need to rotate the coordinates by a random angle to avoid undefined slopes.

```cpp
a[i].x = x * cos(theta) - y * sin(theta);
a[i].y = x * sin(theta) + y * cos(theta);
```


Then I noticed the constraints are small, so I tried simulated annealing as a review.

(And discovered that the annealing I'd written before was always wrong — I had the sign backwards.)

Concretely: always accept a better answer.

For a worse answer, compute its difference from the current best, say $\Delta > 0$.

Then accept the worse answer with probability $e^{-\Delta / T}$.

The intuition is clear: the smaller $\Delta$ is, or the larger $T$ is, the closer this gets to $1$; otherwise it approaches $0$.

So draw a random $0<p<1$ and accept when $p<e^{-\Delta / T}$.

The probability that a random $p$ satisfies $p<e^{-\Delta / T}$ is exactly $e^{-\Delta / T}$.

That is:
```cpp
if(ret < ANS) ANS = ret, nowx = x, nowy = y;
else
	if((rand() * 1.0 / RAND_MAX) < exp(- (ret - ANS) * 1.0 / T))
		nowx = x, nowy = y;
```

Couldn't be bothered to tune the parameters.

[code](https://atcoder.jp/contests/abc247/submissions/30900895)

### ABC163F path pass i

[problem link](https://atcoder.jp/contests/abc163/tasks/abc163_f)

Centroid decomposition at first glance, but it doesn't seem that complicated.

Count the paths that avoid nodes of a given color: removing those nodes leaves several connected components, and you pick any two nodes within each component and sum.

Then for each color you should be able to do it during a dfs. Haven't worked out the details, will write it tomorrow.

btw why am I this unproductive, so sloppy.

## 1.7

A bit upset, indulged for a day and finished the IC chapter of WHITE ALBUM2.

A genuine masterpiece. Maruto is a god!

## 1.8

Ugh, things have been chaotic lately. Went to the campus gym today and there were police cars everywhere.

Hand-waved a few problems, no motivation to write them, bruh. Going to get up early tomorrow and VP a div 1.

Off to do research.


## 1.9

What is this blond guy even trying to do.

It's got everyone on edge.

Too nervous to go out. Feeling low.

## 1.10

Distracted myself, calming down first.

Why is WHITE ALBUM2 this addictive.

Cleared Setsuna's route on CC, no spoilers, single run.

I'm grown now.

## 1.16

It's been too chaotic outside; my phone goes off all day (Citizen app).

Feeling a bit lost, though I shouldn't be — there's plenty to do.

Turned down an offer, thinking about the future.

The semester starts soon, though it seems it's moving online. Annoying.

## 1.17

Sleep schedule wrecked.

## 1.18

Finally VP'd a [CF div 1](https://codeforces.com/contest/2129). Half-hearted, drifting while playing.

I've been letting outside factors get to me too easily. The protests, the campus closure — none of it has much to do with me or affects my actual goals. Just focus on doing what I should be doing. No need to panic.

Call it a restart. Keep it going.


### A. Double Perspective

[problem link](https://codeforces.com/contest/2129/problem/A)

Took me ages just to read the statement — my English reading has decayed.

~~What am I going to do in the writing class next semester (midterms/in-class tests need 2500+ word essays)~~

There's an obvious conjecture: sort by left endpoint, break ties by right endpoint, and greedily do an interval covering.

That makes $g(S)$ always $0$.

[code](https://codeforces.com/contest/2129/submission/358607853)

### B. Stay or Mirror

[problem link](https://codeforces.com/contest/2129/problem/B)

No ideas at first, needed an entry point.

So consider values from small to large, starting with $1$: if you keep $1$, its contribution to the inversion count is the number of elements before it; if you flip it to $2n-1$, the contribution is the number of elements after it.

Once that's decided you can remove $1$, reducing to a subproblem. Greedy from there.

[code](https://codeforces.com/contest/2129/submission/358617187)

### C3. Interactive RBS (Hard Version)

[problem link](https://codeforces.com/contest/2129/problem/C3)

Let me describe the Medium approach first.

It isn't hard to see you can binary search to find a "(", taking roughly 10 queries.

Then you can query eight positions at once, like packing bits.

Concretely, build a binary encoding where each bit's contribution corresponds to whether that position is a ")".

```cpp
for(int i = 1; i <= n; i += 8) {
	ls.clear();
	for(int j = 0; j < 8 && i + j <= n; j ++) {
		for(int k = 1; k <= (1 << j); k ++) ls.push_back(pos);
		for(int k = 1; k <= (1 << j); k ++) ls.push_back(i + j);
		ls.push_back(pos);
	}
	int o = query(ls);
	for(int j = 0; j < 8 && i + j <= n; j ++) {
		ans[i + j] = (o >> j) & 1;
	}
}
```

Full easy/Medium code:

[code](https://codeforces.com/contest/2129/submission/358643846)



For the hard version, just replace the binary construction with something like

(p1(p1(p1(p1(p1 (  (p2(p2(p2(p2(p2   (    (p3(p3(p3(p3(p3(p3(p3    (

and pack bits the same way. Brute-forcing a table shows you can query up to thirteen positions at once.

[code](https://codeforces.com/contest/2129/submission/358658716)


For D I figured it should be interval DP, but hadn't worked out the details. I'll finish D and E tomorrow.

Why does the semester start the day after tomorrow qwq

Though it may move online, bruh.


## 1.19

Early to bed, late to rise.

Class tomorrow, so I went to scope out the classroom. Froze half to death.

Came back in the afternoon and fixed up yesterday's problems.
### E. Induced Subgraph Queries

[problem link](https://codeforces.com/contest/2129/problem/E)

Didn't think in the direction of sqrt decomposition at first.

It's just Mo's algorithm plus value-range decomposition.

A few tricks worth noting. You can't block by index directly — you need weighted blocks, because each time you reach a node the query cost is that node's degree. So block by the sum of degrees, keeping each block's degree sum roughly equal.

That gives a block size of $\sqrt{2m}$.

Then a pile of nodes with total degree $0$ could break it, so add $1$ to every node's degree first.

Giving a final block size of $\sqrt{n + 2m}$.

The rest is ordinary Mo's algorithm.

~~(btw, I somehow wrote this in 30 mins, compiled first try, passed samples first try, AC first try. Is this a last flicker before the end?)~~

[code](https://codeforces.com/contest/2129/submission/358841985)

While reading next semester's syllabus after finishing the problems, I discovered the midterm clashes with ICPC. Broke into a sweat and immediately emailed the prof and the coach. Why is there so much going on next semester — that's what graduating early does to you, qwq.

I don't want the semester to start 😭

## 1.20

Semester's here. Left at nine in the morning, got back after seven at night. Wiped out.

So much to sort out.

Found a good contest set, will VP it tomorrow after I get up, qwq.

The workload this semester really is a bit heavy. Nooo.

## 1.21

Dozed through the morning.

VP'd a contest in the afternoon, hand-waved two problems, and discovered my formula-manipulation skills have badly declined.

Tomorrow after class I'll write the code and the remaining solutions.

## 1.22

Class again both morning and afternoon.

Hooked on piano. A bit addictive.


## 1.23

Slept through the morning again.

The one I hand-waved earlier was CF938.

### CF938 D. Buy a Ticket

[problem link](https://codeforces.com/contest/938/problem/D)

A few minutes of thought: just add a super source connected to every node with weight $a[i]$ and run a shortest path.

Couldn't be bothered to write the code.

### CF938 E. Max History

[problem link](https://codeforces.com/contest/938/problem/E)

Derived the wrong formula, damn it.

You don't need DP at all — just consider each value's contribution.

Sort first and consider each number from small to large. Take $a[x]$, assuming $a[x] \neq a[x-1]$.

For this number to contribute, everything before it must be smaller than it.

So the count is $$\binom{n}{x-1}\times (x-1)! \times (n-x)!$$
i.e. everything smaller and everything after it can be permuted freely. Expanding and simplifying gives

$$\frac{n!}{n-x+1}$$
Remember to multiply by $a[i]$ (I forgot the first time and it still passed the samples).

Then if $a[x] = a[x-1]$, $a[x]$'s contribution equals $a[x-1]$'s, so just record it.

And remember $a[x]==a[n]$ contributes nothing.

[code](https://codeforces.com/contest/938/submission/359475756)

### CF938 G. Shortest Path Queries

[problem link](https://codeforces.com/contest/938/problem/G)

This immediately recalls [WC2011 Maximum XOR Path](https://www.luogu.com.cn/problem/P4151), where you throw every cycle into a linear basis and take the xor maximum.

For this problem you just handle the updates with segment tree divide and conquer.

My implementation stamina isn't there. Shelving it for now.


My advisor finally replied. Hoping to graduate a semester early (though I don't especially want to).

I don't want to do SDE work, it's so boring.

Can't find a job, about to be unemployed /sad

Feels like if I don't get some research done soon I'm finished.

Have to get up early again tomorrow for team practice. Five early mornings a week, qwq.

Piano is fun, addictive. My wrist hurts — is this tendonitis? (sigh)

~~Though it's probably just from trying to bench 100 lb yesterday and twisting my wrist.~~

## 1.24

Went to bed very late, got up early for campus. So cold.

Jeff overslept, waited half an hour, then picked a random contest on qoj and started.

Final score 8/12. Jeff and I each had a problem we couldn't debug, so we lost 10.

Of those 10, I think 5 were mine to write or solve. Not bad — the training has had at least some effect. Once I finish upsolving my teammates' problems and look at the remaining two, I'll write a separate blog post with the editorials.

Played from 10 to 3:30, starving, hadn't eaten a bite.

Went out to dinner with friends in the evening, then got sucked into CS2. A bit addictive.

## 1.25

Late to bed and late to rise again. Seems Wednesday and Sunday are the only two days I get to wake up after 9 (sigh).

~~Why does every CS2 night lead to a late morning?~~


## 1.26

No time, goofing off.

## 1.28

Wrote up the editorials.
