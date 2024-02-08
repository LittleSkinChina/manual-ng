# 在服务端上使用 Yggdrasil 验证鉴权服务

请先将服务器配置文件（一般为 server.properties）中 `online-mode` 一项的值设为 `true`，然后在你的服务端的启动指令的 `-jar` 参数前添加如下参数：

```
-javaagent:{path/to/authlib-injector.jar}=https://littleskin.cn/api/yggdrasil
```

其中 `{path/to/authlib-injector.jar}` 为指向 authlib-injector 的路径。

`https://littleskin.cn/api/yggdrasil` 为 LittleSkin 的 Yggdrasil API 地址

::: warning

**实际填写的路径两边没有大括号！** 大括号只是表明必须正确指定这个参数的值，但是实际上并不需要填入大括号。
:::

::: tip
如果你使用 BungeeCord，你需要在所有服务端（包括 BungeeCord 和所有子服）中加载 authlib-injector（方法见上），但只有 BungeeCord 可以打开 `online-mode`，其他服务端应该关闭 `online-mode`。
:::

## 与正版与多种外置登录共存

外置登录给服务器提供了类似正版的管理和登录方式，但对于一个拥有 Minecraft 正版账号的玩家来说，正版登录是更加简单方便的选择。如果你是一名服务器管理员，可以考虑选用下面的插件实现这种效果。

### MultiLogin

> MultiLogin 是一款服务端插件， 功能是让您的服务器支持正版与多种外置登录共存， 用来连接两个或多个外置验证服务器下的玩家，让他们能在一起玩。

此插件专为服务端设计。服务器管理员可参考此文档：[GitHub / MultiLogin / wiki](https://github.com/CaaMoe/MultiLogin/wiki)
