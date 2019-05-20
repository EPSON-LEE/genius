---
title: "Event loop"
date: "2019-05-18"
---


## Task
一个event loop会有一个或多个task队列
常见的任务源有以下几种：DOM操作任务源、用户交互任务源、网络任务源（响网络活动）、history traversal任务源（eg:调用history.back()）
除了上述task来源常见的还有以下几种：
- script
- setTimeout/setInterval
- I/O
- UI交互
- setImmediate(under nodeJS)
- 数据库操作

## Microtask
一个EL中只有一个microtask队列，通常下面几种任务被认为是microtask
- promise（promise的then和catch才是microtask，本身其内部的代码并不是）
- MutationObserver
- process.nextTick(nodejs环境中)

## Eventloop 循环过程
1. 在所有task队列中选择一个最早进队列的task，用户代理可以选择任何task队列，如果没有可选的任务，则跳到6Microtasks步骤。
1. 将前一步选择的task设置为 currently running task
1. Run: 运行被选择的task
1. 运行结束之后，将event loop的 currently running task 置为 null
1. 从task队列里移除前边Run里运行的task
1. Microtasks: 执行microtasks任务检查点。（也就是执行microtasks队列里的任务）
1. 更新渲染
1. 如果这是一个worker event loop，但是task队列中没有任务，并且WorkerGlobalScope对象的closing标识为true，则销毁EL，中止这些步骤，然后 run a worker
1. 返回到第1步