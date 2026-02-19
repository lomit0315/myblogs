---
category: icpc
title: The 4th Universal Cup. Stage 10 Grand Prix of Wrocław
publishDate: 2026-01-28 16:04:56
description: "ciallo~"
tags:
 - personal
 - reflection
heroImage: { src: '1.png', color: '#B4C6DA' }
---


link: https://qoj.ac/contest/2814

周六和队友VP了这一场，周末还要早起好难受啊

最后是 8/12, 然而结束没一会我和jeff就都把自己负责那题调出来了痛失 10/12

# A. Automatized Mineral Classification

交互题，队友负责的，我也想了一下，没有什么特别的想法，Yehor提了一嘴可以随机化，突然发现很有道理，这样一个一个数pop来确定当前位的时候期望只用 pop 掉 len/2 个，然后加入回来的时候也只用加 len/2个，这样相当于只用len次就能确定两个新的位置的值

丢给jeff写了

[code](https://qoj.ac/submission/1957553)

# C. Connecting Railway Stations

我负责的这题

第一眼抓住重点，考虑每一条边对答案的最大贡献，对于每个店，能往上传尽量往上传节点

然后尝试一个dfs解决这个问题

结果发现不太行，并不能只考虑子树，得跑两次dfs，考虑从下到上和从上到下的，第一遍尽量往上传，第二遍尽量往下传，贪心求一下即可

然而最后考虑了根是叶子结点的情况，但是忘记把参数传进去，一直没调出来，崩了

[code](https://qoj.ac/submission/1957610)

# D. DNA

jeff 负责这题，感觉是没睡醒，问了一下我，我直接秒了

不难发现，如果一个串 $S$ 是他们的 LCS，因为是 01串，那么0或者1其中一个的个数一定是超过 $len/2$  的，所以只需一开始对于每个串统计一下 0和1的数量，随便贪心取一下即可


[code](https://qoj.ac/submission/1957304)

<!-- truncated for brevity -->
