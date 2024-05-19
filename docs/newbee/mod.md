---
outline: [2, 3]
---

# 配置 Mod

若想要在 Minecraft 中显示你在 LittleSkin 设置的材质，你需要在 Minecraft 客户端中安装皮肤 Mod 并对其进行配置。

[[toc]]

<!--@include: ./mod-tips.template.md-->

## SkinPort

如果你想要在 Minecraft 1.7.10 中加载 Alex 模型的皮肤，你需要使用 SkinPort。

你可以在以下网站获取到关于 SkinPort 的更多信息

- [MC百科 (mcmod.cn)](https://www.mcmod.cn/class/2700.html)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/skinport)
- [GitHub Release](https://github.com/zlainsama/SkinPort/releases/latest)

::: tip 提示
LittleSkin 仅支持 `1.7.10-v10a` 或更高版本的 SkinPort。

如果你使用 Yggdrasil 外置登录加载 Alex 材质，则只需要安装 SkinPort 即可，无需修改配置文件。
:::

::: danger 谨记
SkinPort 仅适用于 Minecraft 1.7.10。对于更低版本，目前没有方法加载 Alex 模型的皮肤。

请勿将 SkinPort 安装在其它版本的 Minecraft 上，否则可能导致游戏崩溃。
:::

配置文件位于 `.minecraft/config/skinport.cfg`。请使用记事本或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容：

``` java:line-numbers
client {
    S:hostCustomServer=http://example.com
    S:hostCustomServer2Cape=https://littleskin.cn/cape/%name%.png  // [!code focus] 
    S:hostCustomServer2Skin=https://littleskin.cn/skin/%name%.png  // [!code focus] 
    B:useCrafatar=false
    B:useCustomServer=false
    B:useCustomServer2=true
    B:useMojang=false
}
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 LittleSkin 中设置的材质了。

## 传统加载 <Badge type="danger" text="👎 不再推荐" />

``` http
# 皮肤查询 API
https://littleskin.cn/skin/{playername}.png
# 披风查询 API
https://littleskin.cn/cape/{playername}.png
```

针对非上述列出的 Mod，你可以尝试使用这样的 API 来加载你的材质。

请将以上两个查询 API 填入你的皮肤 Mod 的配置文件的对应位置。其中 `{playername}` 为角色名，请将其替换为对应的占位符。

你也可以分享出你的皮肤 Mod 的配置方法，非常欢迎你帮助我们完善这个页面。
