---
titleTemplate: LittleSkin FAQ
description: 任何事物都不可能尽善尽美，LittleSkin 也是如此。如果你在使用 LittleSkin 的过程中遇到了任何问题，看看这个也许会帮到你。
head:
  - - meta
    - name: keywords
      content: mc skin cape 我的世界 faq littleskin 万用皮肤补丁 csl 外置登录 皮肤站 披风 报错 打不开 加载 不显示 无效的会话 看不见 邮件 邮箱
---

# 游戏内加载相关

[[toc]]

## <Badge type="info">皮肤 Mod</Badge> <Badge type="tip" text="常见" /> 这不是我自己设置的皮肤 {#not-my-skin}

这个问题通常出现在使用皮肤 Mod（如 _CustomSkinLoader_）加载皮肤的用户当中。

以 CustomSkinLoader 为例，它的默认加载顺序为 _Mojang_ > _LittleSkin_。  
所以，<mark>如果你的角色名与某位正版用户相同，那么 CustomSkinLoader 会优先加载那位正版用户的皮肤</mark>。

你可以在 [新手指引 > 配置 CustomSkinLoader > 工作原理](/newbee/csl#how-it-works) 章节中了解到 CustomSkinLoader 的工作流程和原理。

🛠️ 要解决此问题，可以参照 [新手指引 > 配置 CustomSkinLoader > 手动修改配置文件](/newbee/csl#edit-csl-config) 章节进行操作。

## <Badge type="info">皮肤 Mod</Badge> <Badge type="tip" text="常见" /> 别人看不到我的材质 {#no-skin-by-other-players}

通常，只有在多人游戏中使用皮肤 Mod 时才会遇到此问题。

在此情境下，只有 **正确安装并配置** 皮肤 Mod 后才能加载来自 LittleSkin 的材质。

🛠️ 如果你想让别人也看见你的材质，请<mark>让他们也正确安装并配置皮肤 Mod</mark>。

## <Badge type="info">皮肤 Mod</Badge> <Badge type="tip" text="常见" /> 为什么我在网站上设置好了材质，但是在游戏中不显示 / 没更新？ {#no-skin}

> [!TIP] 需要重新进入游戏
> 当你在 LittleSkin 中更新了角色的材质，大多数的皮肤 Mod 都需要重新进入游戏。
>
> 只有这样，Mod 才会重新从 LittleSkin 获取角色的材质信息。
>
> 除此之外，皮肤 Mod 还可能会将你的材质信息进行缓存，这种情况请参考下方的解决方案。

对于使用皮肤 Mod 加载材质的用户，这是个很常见的问题。大多数情况下，这个问题是以下四个原因引起的：

::: details 1. 你没有正确地安装和配置皮肤 Mod

🛠️ 解决方案：正确安装并配置皮肤 Mod。

你可以在 [新手指引 > 配置 Mod](/newbee/mod) 中学习如何正确配置皮肤 Mod；
:::

::: details 2. 你安装的其它 Mod（如 _NonUpdate_）干扰了皮肤 Mod 与 LittleSkin 之间的连接

🛠️ 解决方案：删除这些 Mod，或让它们绕过皮肤 Mod 与 LittleSkin 之间的连接。
:::

::: details 3. 你的材质被皮肤 Mod 缓存了 <Badge type="tip" text="🎯 最为常见" />
🛠️ 解决方案：等待几分钟后再试。

如果还是没有更新，尝试清除皮肤 Mod 的缓存，即**直接删除**对应的文件夹：

- CustomSkinLoader 的缓存文件夹为 `.minecraft/CustomSkinLoader/caches`
- SkinPort 的缓存文件夹为 `.minecraft/cachedImages`
:::

::: details 4. 你使用了 Alex 模型的皮肤，并且你的 Minecraft 版本低于 1.8
🛠️ 解决方案：

- 对于 1.7.10，请使用 SkinPort 加载材质。SkinPort 在 1.7.10 上提供了对 Alex 模型的支持。  
  参考 [新手指引 > 配置 Mod > SkinPort](/newbee/mod#skinport) 进行配置。
- 对于更低版本，目前无解，你只能更换为 Steve 模型的皮肤。
:::

::: info 使用的是外置登录，但在多人游戏中不显示皮肤？
如果你使用外置登录的方式加载材质，并遇到了如标题所说的问题，请阅读 [下一条👇](#no-skin-in-server)。
:::

<Helpme afdian readBeforeAsk>

<p>如果你确定你的问题不是以上原因引起的，或者你按照以上的解决方案做了之后你的角色的材质依然没有显示或更新，请在认真仔细阅读下面这个文章后，<mark>带上你的皮肤 Mod 的日志</mark>，向我们寻求帮助。</p>
<p>当然，你也可以直接购买一对一远程技术支持服务，将由高质量的专家手把手协助你解决问题。</p>

</Helpme>

## <Badge type="info">外置登录</Badge> <Badge type="tip" text="常见" /> 单人游戏中可以正常显示皮肤，但在多人游戏中就不行 {#no-skin-in-server}

这种情况往往在使用 Yggdrasil 外置登录进行服务器联机时出现。

由于 Minecraft 的材质加载机制，在多人游戏中，只有正确配置了外置登录（即**同时满足以下全部条件**），才能正常地在多人游戏中显示你在 LittleSkin 上设置的材质：

- 服务端启用了在线模式（`server.properties` 中 `online-mode=true`）
- [在服务端配置了 Yggdrasil 外置登录](/yggdrasil/server)

🛠️ 如果你有在服务器联机中加载材质的需求，并且你是服主，请在服务端正确配置 Yggdrasil 外置登录

> [!IMPORTANT] 😕 只是一个普通的服务器玩家？
> 如果你并不是服主或服务器管理员，你可能无法在服务端配置 Yggdrasil 外置登录。
>
> 这种情况下，<mark>你可以安装皮肤 Mod</mark>，虽然这样只能使你自己看到自己或他人的皮肤。
>
> 🛠️ 推荐你<mark>安装 CustomSkinLoader</mark>。此外，你可能还需要<mark>「手动修改配置文件」</mark>。
>
> 幸运的是，这份手册中详细介绍了 [CustomSkinLoader 的配置方法](/newbee/csl)。

## <Badge type="info">外置登录</Badge> <Badge type="tip" text="常见" /> 外置登录进入服务器时提示「无效的会话」/ accessToken 无效  {#invalid-session}

🛠️ 请先尝试退出游戏并在启动器中删除账号，然后重新登录。

🛠️ 如果重新登录无法解决问题，请检查你在 LittleSkin <mark>绑定的邮箱中是否存在大写英文字母</mark>，如果有，请将其更改为全小写字母，然后再次在启动器中重新登录。

<Helpme afdian readBeforeAsk>
如果以上操作均无法解决问题，请在认真仔细阅读下面这个文章后，向我们寻求帮助。
</Helpme>

## <Badge type="info" text="皮肤 Mod" /> 为什么我无法使用 Universal Skin Mod 加载材质了？ {#universal-skin-mod}

由于一些技术上的原因，LittleSkin 自 2020 年 1 月起不再支持 UniSkinAPI。你仍然可以通过传统加载方式加载材质，但我们建议使用 Universal Skin Mod 加载材质的用户尽快更换到 CustomSkinLoader。

## <Badge type="info" text="外置登录" /> 启动器下载 authlib-injector 失败  {#authlib-injector-failed-to-download}

此问题比较罕见，但一般都是网络原因引起的，请在启动器中更换下载源后再试。

如果你使用 HMCL 3，如果更换下载源后仍然报错，请手动下载 authlib-injector，将其放入 `%appdata%\.hmcl\`（Windows）或 `$HOME/.hmcl/`（Linux 和 macOS）中并重命名为 `authlib-injector.jar`。使用其他启动器的用户请咨询启动器作者。

## LittleSkin 支持 Minecraft 中国版（国服）吗？ {#about-netease}

取决于你使用的皮肤 Mod 是否支持 Minecraft 中国版。

我们没有进行过测试，但从我们目前了解的信息来看，在对 Minecraft 中国版客户端进行一些特殊处理后，CustomSkinLoader 可以在 Minecraft 中国版中很好地运行。

我们不建议用户在 Minecraft 中国版中使用 LittleSkin，这可能给你带来被网易封禁的风险。我们不会对想要在 Minecraft 中国版中使用 LittleSkin 的用户提供技术支持，就算你是捐助者也一样。用户在 Minecraft 中国版中使用 LittleSkin 是用户的个人行为，与我们无关。
