---
category: icpc
title: "2026.2–3 Rehab Training"
publishDate: 2026-02-12 23:16:56
description: "そうか、大人になったんだね"
tags:
 - personal
 - reflection
 - solution
heroImage: { src: '134148274_p0_master1200.jpg', color: '#B4C6DA' }
---

Busy with school lately, plus studying RL. The math is a joy to read — far more intuitive than nonlinear optimization.

How is the contest next month already? Subtracting midterm prep, there's really less than a month left.

I'll most likely graduate early, so this looks like my last shot at WF as an undergrad. Crying.

My follow-through still isn't good enough — my actions keep lagging behind my plans.
## 2.6

Looked at the ICPC NAC-O training. Doesn't seem all that useful; better to do my own thing.


## 2.10

My efficiency is far too low. Too much energy drained by useless coursework, too much time wasted. I need to make trade-offs — there's only so much time, opportunities pass in an instant, and I do know in my heart what actually matters and deserves the time.

Looked at the EC Final problems and realized that even in good form I probably couldn't qualify. Not great.

A month left to prepare. Need to train harder.

## 2.11

Slightly down.

Re-read some old problems, then sped through everything before DP on OI-wiki, reviewed DDP for the DP part, and will look at DP-of-DP tomorrow.

Then I worked up the courage to look at the editorials for the provincial contest where I retired. Genuinely painful to see — such a waste!

Overall I got through a fair amount of reading. Starting tomorrow I'll write code; reading alone isn't enough.



## 2.12

Started writing problems again. Got a bit hooked reading high schoolers' blogs.

Classic old-timer nostalgia. Days where all you did was competitive programming really were great, and I didn't appreciate them. If I'd known my family could catch me if I fell, high school wouldn't have been stressful enough to wreck my performance. Youth only comes once, and my brain has completely seized up now.

### P10614 BZOJ3864 Hero meet devil

[problem link](https://www.luogu.com.cn/problem/P10614)

Textbook DP of DP.

For the classic LCS problem there's an obvious $dp$: let $g[i][j]$ be the LCS length of the first $i$ characters of $T$ and the first $j$ of $S$.

That part is obvious. DP-of-DP then records the $j$ dimension's state, say $S$, with $f[i][S]$ counting the ways where $g[i][...]$ is in state $S$ over the first $i$ characters.

The state count is enormous, $15^{15}$, so compress it.

It isn't hard to see that with $i$ fixed, $g[i][j]$ is non-decreasing and adjacent increments are at most $1$. So record the difference array as the state, dropping the state count to $2^{15}$, which is immediately tractable.

The transition: for each $f[i][S]$, consider what to place next, see which state $S$ transitions to, say $T$, and do
$f[i][T] += f[i][S]$.

Easier to follow alongside the code.

[code](https://www.luogu.com.cn/paste/jp35655b)

### P4590 TJOI2018 Garden Party

[problem link](https://www.luogu.com.cn/problem/P4590)

The inner DP transition is the same; the outer one just needs one more dimension.

The code is nearly identical.

### P4072 SDOI2016 Journey

[problem link](https://www.luogu.com.cn/problem/P4072)

Push the algebra around a bit: splitting the contribution, you still need $m$ segments, minimizing the sum of squared segment lengths.

A good chance to review convex hull trick. Working it out:

$f_{i,k}  - s_i^2 = f_{j,k-1} + s_j^2 - 2 * s_i * s_j$

Then write it in slope form $b=y-kx$,

so we want to minimize the intercept $b$:

$y : f_{j,k-1}+s_j^2$

$k : 2*s_i$

$x : s_j$

Maintain a lower convex hull; since the slope $k$ is increasing, a plain queue suffices.

[code](https://www.luogu.com.cn/paste/uzh7zbh1)

From tomorrow I need at least 10 problems written or hand-waved per day, or I really won't make it.


## 2.13

Not in great shape today. Went to bed late last night, and my roommates were loud enough in the morning that I slept badly.

### P3515 POI 2011 Lightning Conductor

[problem link](https://www.luogu.com.cn/problem/P3515)

There's an obvious $n^2$ DP, and it isn't hard to see the contribution function $w(i, j)$ satisfies the quadrangle inequality and is monotone, so divide-and-conquer optimization applies directly.

[code](https://www.luogu.com.cn/paste/veq0d2j5)


### CF750E New Year and Old Subsequence

[problem link](https://www.luogu.com.cn/problem/CF750E)

DDP again. This editorial is quite clear:

https://www.luogu.com.cn/article/qf66h2g0


Then I hand-waved and skimmed a few more editorials. Head a bit foggy, couldn't be bothered. Training with the team tomorrow; we'll see how it goes.

## 2.14

Spent Valentine's Day doing five or six hours of intense ICPC training with the team.

VP'd an old NAC and it looks like we could make WF. Editorials later. Sleep.

## 2.15

The day before Lunar New Year's Eve. Spent the day out with friends eating and browsing the Chinese supermarket.

Tried to study after dinner and couldn't take anything in.

Reviewing slope trick and the Aliens trick with a fuzzy head, so I switched to data structures, which made it worse.

Not great. Probably too many overdue deadlines to concentrate. Should clear the backlog of homework first.

Only a month left. Crying.


## 2.18

Giving myself a few days off for the New Year.

Really it's the deadlines from every course grinding me down. Annoying — my energy and time management have serious problems.

Got Yoru X today (though no time to actually play, far too busy). Finally got hold of my advisor, and things finally seem to be looking up.

Graduating early has hit a snag; I may need to talk it over with my family. Need to earn more. (Honestly, another year of ICPC wouldn't be bad at all.)

Yesterday I learned a new toy: [the simplified LARSCH algorithm](https://www.luogu.com.cn/article/vqf42hah)

Really elegant. Wrote the classic problem for it.

### P9266 PA 2022 Nawiasowe podziały

[problem link](https://www.luogu.com.cn/problem/P9266)

The standard approach looks painful: WQS binary search + CDQ + parallel binary search. Absurd.

The main difficulty is computing $w(i, j)$, which isn't easy to do directly or offline, so it's effectively forced online.

Then you can just apply the algorithm above. The code is very simple, and the algorithm is rather elegant.

[code](https://www.luogu.com.cn/paste/b2sqphra)

Conveniently also a review of the quadrangle inequality, monotone decision optimization, and WQS binary search.



So much random stuff since the semester started. I really need to manage my time and energy carefully; I keep feeling like I waste a lot of energy on things that don't matter.

The contest is almost here and I still can't do anything. I wasted far too much time these past few years in college. (I suspect the 1000+ hours I put into CS2 would have put me back at my peak, and well past it.)

## 2.19

Reviewed strings today.

Went back through everything up to SAM, and found my old code somewhat unhinged — I'd mangled the logic to save one or two arrays.

Rewrote SA by hand and re-derived height. Felt good.

Tomorrow I'll get into SAM, PAM, and that family, then practice contests again the day after.

Progress still feels slow. I can only carve out two or three hours a day to prepare; too much other noise.

My energy is lacking too — the amount of genuinely focused study I get in a day is very, very small.

Started doing cardio again, hoping it helps my energy.




## 2.20

Slept through the morning.

Hand-waved a few problems at the gym in the afternoon and wrote up editorials.

Reviewed sqrt decomposition and tree decomposition. Will write problems tomorrow.

A bit sloppy.


## 2.25

Goofed off for a few days. Projects, quizzes, papers — annoying.

Evangelion is so good. On my third watch I realize how much I hadn't understood before.

The last time I watched it was five years ago.

Reviewed the various Mo's algorithm variants, segment tree operations, Li Chao trees and so on. Hand-waved a few problems, wrote editorials, haven't written the code yet. Tomorrow.

## 2.26

No more CS. It's too addictive and I stayed up late again.

CS2 uninstalled.

Re-hand-waved Li Chao trees, then looked at cat trees and 2-SAT. Getting sleepy.

Three midterms next week. Punishing, so much going on. I've been far too checked out in college — did nothing, learned nothing.

Never built any core strength or edge either.

## 3.5

Spent days preparing for midterms and racing deadlines. Finally I can go all in on ACM — spring break plus the weekend is a continuous block of free time, and I need to make it count.

## 3.7

Yesterday I wrote D1 T2 from the 2022 provincial contest, today D2 T1. Facing the past, in a way.

VP NOI 2022 tomorrow? I'll skim it. Preparing for ACM matters more.

These few days have stirred up a lot of memories.

## 3.8

I'd planned to do a CF round this morning, but my roommate was gaming and shouting at 2 a.m., I slept badly, and skipped it.

Let me write up some editorials instead.

### P8290 [Provincial Selection 2022] Filling a Tree

[link](https://www.luogu.com.cn/problem/P8290)

I actually did come up with the intended solution in the contest, but miscounted the complexity. A real shame.

The brute force isn't hard: fix a minimum, get an interval, and a simple DP plus inclusion-exclusion gives $O(nL)$, worth 40 points.
Then notice that while enumerating the minimum, each segment is just a product of several things, so boldly conjecture the answer is a polynomial and accelerate with Lagrange interpolation. Concretely, over $[L, L+K]$, as long as neither endpoint hits some node's constraint, the answer is a polynomial. We want prefix sums, which multiply in another polynomial of slightly higher degree — negligible for complexity — so just interpolate. For each contiguous unconstrained segment, compute $T$ point values and interpolate to get the answer at the segment's end. I took $T = n+5$, giving a final complexity of $O(n^3)$.

But in the contest I did something dumb and multiplied the cost of computing point values by the cost of interpolation, thinking it was $O(n^5)$. They're separate; it's $O(n^3)$.

[code](https://www.luogu.com.cn/paste/djg3u6pm)

### P8292 [Provincial Selection 2022] Cards

[link](https://www.luogu.com.cn/problem/P8292)

Another pattern problem I solved on sight in the contest — except my nerves were already shot by then, bruh.

For $s_i <= 30$ it isn't hard to see you can do inclusion-exclusion directly in $2^T$, where $T$ is the number of primes.

Then, like the Sushi Dinner pattern, split the primes into large and small around $\sqrt{\cdot}$.

For the large primes, note they're relatively independent during inclusion-exclusion — you never need to include-exclude on two large primes at once.

So do the $2^T$ inclusion-exclusion on the small primes and force each large prime to appear at least once.

For the small primes it's plain inclusion-exclusion: take the total, subtract the configurations where the small primes in set $S$ don't appear, subtract those with $cnt(S) = 1$, add those with $cnt(S) = 2$, and so on — while guaranteeing every large prime appears at least once.

Keep an array $g[S][p]$: how many numbers avoid the small primes in $S$ but are multiples of $p$. When handling the large primes, multiply by $2^{g[S][p]-1}$, subtract the counts involved, and let the remainder be chosen freely.

See the code for details. (My Chinese feels like it's deteriorated a lot — I can barely explain things any more.)

[code](https://www.luogu.com.cn/paste/p5plue85)

### P7967 [COCI 2021/2022 #2] Magneti

[link](https://www.luogu.com.cn/problem/P7967)

When I learned this in high school I think it was called split-the-contribution DP, or deferred contribution?

Nowadays it seems to be called contiguous-segment DP.

Sort ascending first, since satisfying the larger ones guarantees the smaller ones.

Let $f[i][j][k]$ be: considering the first $i$ items, forming $j$ segments, occupying $k$ cells.

The transition is simple — three cases: start a new group, append to either end of an existing group, or merge two groups.

Finally enumerate $f[n][1][k]$ and sum with stars and bars.

[code](https://www.luogu.com.cn/paste/nceh5uio)


## 3.9

Went out with friends last night for food, so I got up late today.

VP'd an ARC. My level still isn't there; I need to do more problems, but time seems to be running out.

The interview in the evening went reasonably well — they scheduled an extra round for tomorrow right after. Half-tempted to bail; I don't really feel like interviewing.

## 3.12

The interviews the last two days made it hard to focus on contest prep. The technical round passed quickly.

Time is short. Have to go all in.

Writing an editorial for every problem isn't feasible any more; I may need to speedrun — if I don't get it in a few minutes, read the editorial.

Most of the knowledge and patterns are gone, so reading editorials is probably more efficient.



## 3.22

Made WF. Feels unreasonably good.
