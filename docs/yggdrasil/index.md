# Yggdrasil 外置登录

LittleSkin 提供 Yggdrasil 验证鉴权服务，也被简单地称为外置登录。

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

## 什么是外置登录？

<!-- @include: @/pay-for-minecraft.template.md -->

暂未购入正版 Minecraft 账户的玩家通常都会使用 **离线登录** 来启动游戏，Minecraft 服务端提供了启用离线模式的选项。

- 🏴‍☠️ 玩家只需要用户名即可进入服务端，服务端并不会验证进服玩家身份的有效性;  
- 😕 玩家在游戏中的样貌只能是 Steve 或 Alex 之类的默认皮肤，而不能是自定义的材质。

为了让玩家在游戏中能欣赏到各自的皮肤，CustomSkinLoader 和 SkinsRestorer 等 Mod 或插件被广泛使用。

但离线登录的鉴权机制给予了恶意玩家们极大的发挥空间。他们会冒充其他玩家进入服务器行偷鸡摸狗之事，零成本的批量账号更是轰炸小型服务器的绝妙武器。

因此而头疼的服务器管理员们会为服务器安装诸如 AuthMe 之类的登录插件，以尽可能杜绝上述事项。然而，对服务器管理员来说，登录插件的配置过程称不上简单；对于玩家来说，改名、忘记密码等操作更是繁琐。

---

上述现象都是离线登录机制导致的。如果使用正版登录，基本不用为之操劳。

而 **外置登录**，也可以避开上述问题。

> 其实，在游戏内部，外置登录的工作方式几乎如正版登录一模一样。

如果将正版登录理解为游戏中官方的纯正的「内置登录」的话，那么「外置登录」的意思就很好理解了：

**<mark>将 Minecraft 官方的登录鉴权服务器地址，替换为第三方的登录鉴权服务器地址。</mark>**

- 🔐 可控的鉴权
- 👔 自定义皮肤 / 披风
- 👍️ 极强的兼容性

只有玩家和服务器两端都正确配置后，外置登录才能正常工作。因此外置登录<mark>并不能用来登录至采用正版登录的服务器</mark>。

如果仅仅是单人游戏，无需借助 Mod 即可在游戏内欣赏到自定义的皮肤也是一个不小的亮点。
