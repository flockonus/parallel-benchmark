
Wanted to show that node perform lineraly better by making use of more processes by leveraging Cluster for some intensive CPU processing task

**next** https://github.com/audreyt/node-webworker-threads


----

## update

With [worker-farm](https://github.com/rvagg/node-worker-farm) I was able to achieve 45s to finish 50 jobs (about 4 cores), vs. the single process, which takes 95s.  
4 cores seem used to the max, this will do for now =)

----

## naive approach

So far it seems that one process take all duty to itself while the others slack
Somehow the improvement using 3 processes vs. single seems about 20%
Consist in both node 0.8 and 0.10, while in 0.6 the speed is about 20% better on single
