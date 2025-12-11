# Yggdrasil 外置登录

LittleSkin 提供 Yggdrasil 验证鉴权服务，也被简单地称为「Yggdrasil 外置登录」、「authlib-injector 外置登录」或「外置登录」。

外置登录可以为玩家提供统一的非 Mojang 游戏外登录体验，并在不安装皮肤 Mod 的情况下加载来自 LittleSkin 的材质。

> [!WARNING] 外置登录不是联机服务
> LittleSkin 可以在联机时提供皮肤和鉴权服务，但不提供联机服务本身。

<!-- @include: @/pay-for-minecraft.template.md -->

## Yggdrasil API 地址

LittleSkin 的 Yggdrasil API 的地址是：

```plain
https://littleskin.cn/api/yggdrasil
```

> [!NOTE] 😎 简化冗长的地址
> LittleSkin 已在全站启用 authlib-injector 的 API 地址指示（ALI）功能。
>
> 在支持此功能的启动器上，直接输入 `littleskin.cn` 即可被识别并自动转化为完整地址。

---

<NCard title="在客户端使用" link="./client" >
在 Minecraft 游戏中使用 Yggdrasil 外置登录，进行多人游戏鉴权和材质加载
</NCard>
<NCard title="在服务端使用" link="./server" >
为各类 Minecraft 服务端配置 Yggdrasil 外置登录 <Badge type="tip" text="服务器管理员" />
</NCard>

---

> [!WARNING] 有点高级
> 以下部分是面向开发者和多人游戏服务器管理员的，普通用户可能无法理解。
>
> 如果你看不懂下面在说些什么，直接忽略这部分内容即可，这并不会影响你正常使用 LittleSkin 的基础功能。

## 什么是 Yggdrasil 外置登录？

<!-- @include: @/pay-for-minecraft.template.md -->

暂未购入正版 Minecraft 账户的玩家通常都会使用 **离线登录** 来启动游戏，Minecraft 服务端也提供了禁用在线身份验证的选项：

- 🏴‍☠️ 玩家只需要用户名即可进入服务端，服务端并不会验证进服玩家身份的有效性；
- 😕 玩家在游戏中的样貌只能是 Steve 或 Alex 之类的默认皮肤，而不能是自定义的材质。

但离线模式缺乏合适的鉴权机制的特性给予了恶意玩家们极大的发挥空间。他们会冒充其他玩家进入服务器行偷鸡摸狗之事，零成本的批量账号更是轰炸小型服务器的绝妙武器。

因此，大多数离线模式的服务器的管理员们会为服务器安装诸如 AuthMe 之类的登录插件，来实现服务器内部的身份验证机制，以尽可能防范上述危害的发生。然而，对服务器管理员来说，调校登录插件的过程称不上简单；对于玩家来说，每次进入服务器都需要重新登录，改名、忘记密码等操作更是繁琐。

---

如果我们将 AuthMe 等登录插件实现的身份验证机制称为「内置登录」，那么「外置登录」就很好理解了：将玩家身份验证流程，移动至 Minecraft 游戏之外。

> [!IMPORTANT] 🤯 没想到吧！
> 正版登录其实也是一种外置登录！

在 Yggdrasil 外置登录出现之前，市面上就已经出现了不少外置登录插件（如 WebLogin、BeeLogin 等），但是这些外置登录插件并未改变服务器处于离线模式的本质，离线模式的弊端仍然未得到解决。

那么我们为何不来个大胆的想法，直接让 Minecraft 的正版登录的鉴权机制为我们所用，从而将服务器转换为在线模式呢？

这就是 Yggdrasil 外置登录的核心思想和实现方式：**<mark>将 Mojang 官方的正版登录服务器地址替换为第三方的登录鉴权服务器地址，以利用 Minecraft 的正版登录的鉴权机制实现自定义的玩家身份验证。</mark>**_（俗称「伪正版」）_

这样一来，Yggdrasil 外置登录就可以实现和正版登录几乎完全一致的效果：

- 🔐 简单且可控的玩家身份验证
- 🙋‍♂️ 一个账号通行所有服务器
- 👔 自带皮肤 / 披风加载
- 👍️ 极强的兼容性

> [!TIP] 👀 为什么叫「Yggdrasil 外置登录」？
> 因为 Minecraft 的正版登录鉴权机制的名称就叫 Yggdrasil。

> [!DANGER] 🤔 能不能用 Yggdrasil 外置登录来登录正版服务器？
> 不能。
>
> 外置登录需要在服务端和客户端都正确配置后才能正常工作，因此外置登录<mark>并不能用来登录至采用正版登录的服务器</mark>，也无法替代正版账号。
