---
title: "Chrome Dev Tools"
date: "2019-05-18"
---

#### debugger 时无法进入打包后的代码
 
Blackboxing 会屏蔽掉符合某一个规则的js代码中的debugger

解决方法：chrome dev tools -> settings -> Blackboxing -> delete pattern

![avatar](./assets/chromeDev.jpg)
