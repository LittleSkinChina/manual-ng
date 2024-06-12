---
outline: [2, 4]
---

# 遇到问题了咋办

> 任何事物都不可能尽善尽美，LittleSkin 也是如此。

如果你在使用 LittleSkin 的过程中遇到了任何问题（包括但不限于材质无法显示、网站出现错误等），请认真阅读并充分理解下述内容，这会对你有帮助。

## 遇到问题后的第一反应

<div align="center" style="line-height: 1.5em; font-size: 1.5em; padding: 2em 1em; margin: 2em 0; border: 1px solid var(--vp-c-text-1); border-radius: 8px">不要急，也不要慌，更不要气急败坏。</div>

大部分情况下，LittleSkin 是可以正常运行的。

👉 所以在遇到问题时，你应该**检查一下是不是你自己的问题**，比如：网络错误、操作错误，甚至你自己的浏览器都可能导致你无法正常使用 LittleSkin。所以，在提问之前，请先以自己的经验判断一下，这是不是你自己的问题。

👉 其次，你应该**阅读一遍 《常见问题解答 / FAQ》**。很多情况下你遇到的问题也曾经困扰过很多人，并且已经被总结出了解决方案。这种情况下，直接查阅这份 FAQ 能更快地解决你的问题。

<NCard title="🤔 常见问题解答 / FAQ" link="/faq/">
说不定就有你正在努力寻找的答案。
</NCard>

如果你确定不是你自己的问题，并且你遇到的问题并未列举在 FAQ 中，你可以着手准备报告问题了。

## 运营团队，或是帮助你的人，并不是神

看起来你们大多数人好像都不知道的样子？

那就让我们来告诉你们一个真理吧：

<div align="center" style="padding: 2em; margin: 2em 0; border: 1px solid var(--vp-c-text-1); border-radius: 8px">
<p align="left">Troubleshooting any problem without the error log is like driving with your eyes closed.</p>
<p align="right" style="font-size: 1.15em">在没有错误日志的情况下诊断任何问题无异于闭眼开车。</p>
</div>

也就是说，不管是谁，都**很难通过只言片语快速定位你的问题**！

所以，在每一次报告问题时，不要只丢下一句「皮肤站出错了」、「无法加载皮肤」就跑了。在没有日志、报错截图等信息的辅助下，我们 **不可能** 知道网线对面的你到底遇到了什么问题。

为了得到高效且愉悦的帮助，建议你按照以下步骤来报告问题 :point_down:

## 我应该提供哪些信息？

可能需要视情况而定。这里列举几个通用的，重点部分已被我们加粗。

> [!NOTE] 感觉看不懂？
> 如果你难以判断你需要提供哪些内容，请尽可能详细地描述你的问题，我们的支持团队会指导你提供相关信息。

### 1. 报错截图 <Badge type="info">网站</Badge>

如果是 LittleSkin 网站的问题，发生错误时，网站应该会给出相应的提示。可能是红色的弹窗，也可能是页面上的故障。

**请把相关的提示乃至整个屏幕截图**，并在提问时提供。

### 2. 复现步骤 <Badge type="info">网站</Badge><Badge type="info">游戏内</Badge>

许多问题只会在特定的操作下出现。提供复现步骤可以让我们了解你的问题是在何种操作下出现的，并快速定位问题所在和解决问题。

你可以思考以下问题：

1. 你想要进行什么操作？为的是达到什么目的？
2. 在问题发生之前，你分别都进行了哪些操作？
3. <Badge type="info">网站</Badge> 你正在使用什么浏览器？你的操作系统是什么？网络环境是什么？
4. <Badge type="info">游戏内</Badge> 你的游戏版本是多少？是单人游戏还是多人游戏？有没有安装特殊的 Mod？

若能在提问时提供上述信息，则将极大提高我们提供精准服务的效率。

### 3. 日志 <Badge type="info">游戏内</Badge>

日志文件记录了程序在运行过程中的详细信息，包括操作记录、错误提示、警告信息等。

日志之所以被设计出来，就是因为它可以帮助支持人员快速定位问题的根源，从而提供更准确的解决方案。

各种日志是侦错时不可缺少的信息，所以如果有，提问时请带上这些日志：

> [!NOTE] 关于版本隔离
> 为了隔离一台设备上的多个 Minecraft 版本、整合包、Mod 等，很多启动器都使用了版本隔离技术，以确保他们之间互不干扰。
>
> 考虑到版本隔离的情况，一些文件的将会提供两个路径，以方便查找。
>
> 版本隔离路径中的 `{version}` 只是一个占位符，因人而异，实际路径不需要带大括号。

> [!TIP] 启动器提供的便捷功能
> 许多启动器都带有类似于 <BSSection>打开游戏文件夹</BSSection> 的功能，可以很方便地应对版本隔离的情况。

#### <Badge type="info">皮肤 Mod</Badge> CustomSkinLoader

CustomSkinLoader 的日志位于 `.minecraft/CustomSkinLoader/CustomSkinLoader.log`，  
在使用版本隔离的情况下则为 `.minecraft/versions/{versions}/CustomSkinLoader/CustomSkinLoader.log`

::: details 图示：日志文件的具体位置
![CustomSkinLoader 文件夹所处位置](./newbee/assets/mods/csl-folder.webp)

![CustomSkinLoader 的配置文件和日志文件](./newbee/assets/mods/csl-files.webp)
:::

#### <Badge type="info">外置登录</Badge> authlib-injector

如果是 Yggdrasil 外置登录的问题，请在添加 JVM 参数 `-Dauthlibinjector.debug` 并复现问题后，提供以下日志：

- 服务端从开始到出错的所有日志（最后一次运行服务端生成的日志位于 `logs/latest.log`）

- 客户端游戏从开始到出错的所有日志（最后一次游戏生成的日志位于 `.minecraft/logs/latest.log` 或 `.minecraft/versions/{versions}/logs/latest.log`）

  - 如果有，请优先使用启动器的 <BSSection>测试游戏</BSSection> 功能导出的日志

- 服务端和客户端的 authlib-injector 日志（最后一次生成的日志位于客户端游戏目录或服务端根目录下的 `authlib-injector.log`）

- 启动器日志（请咨询启动器作者以获取日志位置）

提供日志时，请直接发送日志文件，而不是提供日志截图。如果没有这些日志，请在提问时说明清楚；如果你提问后被要求提供更多信息，请提供我们要求的信息以帮助我们查找问题。

## 我该去哪里提问？

<p style="margin-bottom: 2em"></p>

<NCard title="🙋 加入用户交流群" link="/user-group" >
你可以加入我们的官方用户交流群来提问
</NCard>
<NCard title="📬️ 通过邮件发送工单" link="/email" >
也可以给我们发送邮件工单
</NCard>
<NCard title="🧑‍🔬 一对一技术支持" link="https://afdian.net/a/tnqzh123" >
也可以通过 <strong>💰赞助支持</strong> 来获取高质量的一对一技术支持服务
</NCard>
