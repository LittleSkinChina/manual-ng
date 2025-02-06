---
outline: [2, 3]
---

# MultiLogin

> MultiLogin 是一款服务端插件， 功能是让您的服务器支持正版与多种外置登录共存， 用来连接两个或多个外置验证服务器下的玩家，让他们能在一起玩。

外置登录给服务器提供了类似正版的管理和登录方式，但对于一个拥有 Minecraft 正版账号的玩家来说，正版登录是更加简单方便的选择。如果你是一名服务器管理员，可以考虑选用下面的插件实现这种效果。

此插件专为服务端设计。服务器管理员可参考此文档：[GitHub / MultiLogin / wiki](https://github.com/CaaMoe/MultiLogin/wiki)

<!-- @include: @/pay-for-minecraft.template.md -->

## 单服务端<Badge type="warning" text="过时" />
> [!WARNING] 提示
> MultiLogin 自 0.6.12 版本后不再分发 Bukkit、Bungee 的本体，且在后续暂停维护
>
> 我们建议您 [改用 Velocity](#velocity) 以获得更好的体验。

我们建议直接参考 MultiLogin 的 [GitHub Wiki](https://github.com/CaaMoe/MultiLogin/wiki#%E7%AE%80%E5%8D%95%E9%85%8D%E7%BD%AE)。

若只需要使用 Mojang 和 LittleSkin，仅限创建以下两个文件。

::: code-group

``` yaml:line-numbers [multilogin/services/offical.yml]
# Below, only the most basic configuration is provided.
# You can refer to the template file to complete all configurations.

# Please edit before use.
id: 0

name: 'Official'
# Don't change it unless you really want to.
serviceType: OFFICIAL
```

``` yaml:line-numbers [multilogin/services/littleskin.yml]
# Below, only the most basic configuration is provided.
# You can refer to the template file to complete all configurations.

# Please edit before use.
id: 1

name: 'LittleSkin'
# Don't change it unless you really want to.
serviceType: BLESSING_SKIN
yggdrasilAuth:
  blessingSkin:
    apiRoot: 'https://littleskin.cn/api/yggdrasil'
```

:::

## Velocity <Badge type="tip" text="Minecraft 1.13 +" />

### 1. 配置 Velocity 转发

Modern forwarding 是 Velocity 支持的一种独创格式。它以高效的二进制格式转发所有玩家信息。但是，它仅适用于 Minecraft 1.13 或更高版本。

> [!TIP] 提示
> 本文仅会对「为 Velocity modern forwarding 配置 LittleSkin 外置登录」做出说明。
>
> 本案例使用 Velocity + Paper + MultiLogin 作为示例。
>
> 具体的 Velocity 配置请结合参考 [Velocity 文档](https://docs.papermc.io/velocity/player-information-forwarding#configuring-modern-forwarding)。

<!--@include: ./velocity.template.md-->

### 2. 配置 MultiLogin

- 对于 Velocity
  
  安装 MultiLogin 插件，并按照 [MultiLogin 的官方文档](https://github.com/CaaMoe/MultiLogin/wiki)正确配置插件配置文件。

- 对于子服务器

  仅需在 Velocity 正确配置 MultiLogin 插件即可，无需对子服进行修改。
