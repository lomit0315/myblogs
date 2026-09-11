---
category: icpc
title: The 4th Universal Cup. Stage 10 Grand Prix of Wrocław
publishDate: 2026-01-28 16:04:56
description: "ciallo~"
tags:
 - reflection
 - solution
heroImage: { src: '1.png', color: '#B4C6DA' }
---



link: https://qoj.ac/contest/2814

We VP'd this one with the team on Saturday. Getting up early on a weekend is rough.

Final score 8/12 — and then not long after the contest ended, both Jeff and I debugged the problems we had been assigned. So close to 10/12.

# A. Automatized Mineral Classification

An interactive problem, assigned to a teammate. I thought about it a bit too and had no particularly good idea, until Yehor mentioned randomization, which suddenly made a lot of sense: if you pop the numbers one at a time to determine the current bit, you only expect to pop `len/2` of them, and putting them back also costs only `len/2`. So roughly `len` operations determine the values of two new positions.

Handed it to Jeff to write.

[code](https://qoj.ac/submission/1957553)

# C. Connecting Railway Stations

This was mine.

I got to the key point immediately: consider the maximum contribution of each edge to the answer, and for each node push as many nodes upward as possible.

Then I tried to solve it with one dfs.

That turned out not to work — you can't only look at the subtree. You need two dfs passes, one bottom-up and one top-down: the first pushes up as much as possible, the second pushes down as much as possible, and a greedy on top of that gives the answer.

In the end I did handle the case where the root is a leaf, but forgot to actually pass the parameter in, never got it to work, and blew the problem.

[code](https://qoj.ac/submission/1957610)

# D. DNA

Jeff had this one and I think he hadn't woken up yet. He asked me about it and I solved it instantly.

It isn't hard to see that if a string $S$ is their LCS, then since the strings are binary, the count of either 0s or 1s must exceed $len/2$. So just count the 0s and 1s in each string up front and take a straightforward greedy.

[code](https://qoj.ac/submission/1957304)

# F. Foxes

A data structure problem. Jeff brute-forced 4.9 kb of code after the contest and got it working.

# G. Game of Darts

Warm-up problem.

# H. Hiking

Written by the other two teammates, haven't looked at it yet. Will come back to it.

# I. Identical Fences

Same as above.

# J. Joyful Guided Tour

This one is actually interesting.

By the pigeonhole principle, with 7 edges the worst case is that the colors appear $2,2,2,1$ times. So for the current node you just pick the least frequent color, then check whether that node needs its color adjusted. A queue implements this easily.

Why is it correct? Define $ret[u]$ as the number of neighbors of $u$ that share its color. Under the strategy above, each step increases $ret$ for at most one node and decreases it for at least two. Since $\sum ret[u]$ is at most $7n$, every operation reduces the sum, so the amortized complexity is certainly fine.

[code](https://qoj.ac/submission/1957426)

# K. Key Properties

First, the constraint $n>=42$ feels a little too deliberate.

So, how do we construct it? The statement already gives a construction for 10 nodes.

An odd number of nodes clearly can't be constructed, so I went straight to constructing 12 nodes.

Trying something similar: build a bipartite graph with 3 nodes on each side, wrap another ring around the outside, connect things loosely, and the construction falls out.

Now we have constructions for 10 nodes and for 12 nodes.

Since odd counts are impossible, halve $n$ first, giving $n/2>=21$, and we have two graphs of sizes $5$ and $6$ to work with.

This is NOIP 2017 "Xiaokai's Puzzle": the largest unconstructible value is $5*6-5-6=19$, so everything here is constructible. Just brute-force the number of times each graph is used.

Then I kept getting WA because I misread the statement and assumed the graph could be disconnected. Changing it to connected passed.

Concretely: drop the $1->2$ edge in each graph, line them up, and connect every other one into a cycle.

[code](https://qoj.ac/submission/1957366)

# L. Letters on T-shirts

Warm-up problem, written by a teammate.
