# Yggdrasil 外置登录

LittleSkin 提供 Yggdrasil 验证鉴权服务。

外置登录需要配合其他技术一起实现。外置登录可以为玩家提供统一的非 Mojang 游戏外登录体验，并在不安装皮肤 Mod 的情况下加载来自 LittleSkin 的材质。

## Yggdrasil API 地址

LittleSkin 的 Yggdrasil API 的地址是：

``` http
https://littleskin.cn/api/yggdrasil
```

::: tip API 地址指示

LittleSkin 已在全站启用 authlib-injector 的 API 地址指示（ALI）功能。

因此，在支持此功能的启动器上，直接输入 `littlesk.in` 即可被识别。一下子就简单了很多 :tada:

:::

---

::: warning 有点高级
以下部分是面向开发者和多人游戏服务器管理员的，普通用户可能无法理解。

如果你看不懂下面在说些什么，直接忽略这部分内容即可，这并不会影响你正常使用 LittleSkin 的基础功能。
:::

## authlib-injector

> authlib-injector 为玩家提供统一的非 Mojang 游戏外登录体验。几乎所有外置登录都使用 authlib-injector 来实现。

你可以在 <https://authlib-injector.yushi.moe/> 下载到最新版本的 authlib-injector。

开发者文档：[GitHub / authlib-injector / wiki](https://github.com/yushijinhun/authlib-injector/wiki)


## MultiLogin

> MultiLogin 是一款服务端插件， 功能是让您的服务器支持正版与多种外置登录共存， 用来连接两个或多个外置验证服务器下的玩家，让他们能在一起玩。

此插件专为服务端设计。服务器管理员可参考此文档：[GitHub / MultiLogin / wiki](https://github.com/CaaMoe/MultiLogin/wiki)
