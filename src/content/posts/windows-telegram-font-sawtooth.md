---
title: 简单解决 Windows Telegram 字体锯齿问题
published: 2025-05-11
description: '解决在 Windows 11 上 telegram 字体锯齿的问题'
image: ''
tags: [小技巧]
category: '技术'
draft: false 
lang: 'zh_cn'
isTop: false
---
:::warning
此方案有可能随着软件的不断迭代而失去时效性
:::

> 最近又回归到 Windows 上玩游戏了，发现安装完 Telegram 后字体有严重的锯齿问题，搜了几个要替换注册表的解决方案，麻烦且并不一定成功，最后发现 V2EX 甜菜老哥的简单设置，借老哥的方法水一篇，希望能帮助到有需要的朋友

# 问题
聊天窗口会有严重的字体锯齿现象（如图）
![锯齿](https://image.ahalo.ren/blog/telegram-sawtooth.png)

# 解决方案
> Settings（设置） -> Advanced（进阶） -> Experimental settings（实验性设置） -> 打开 FreeType font engine （FreeType 字体引擎） -> Restart Telegram（重启软件）
![锯齿](https://image.ahalo.ren/blog/telegram-sawtooth-setting.png)

# 结果（如图）
![锯齿](https://image.ahalo.ren/blog/telegram-sawtooth-result.png)

比起改注册表，是不是即简单又方便！