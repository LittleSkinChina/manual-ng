---
outline: [2, 3]
---

<script setup>
import GetCSL from '../../components/GetCSL.vue'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
</script>

# 配置 Mod

若想要在 Minecraft 中显示你在 LittleSkin 设置的材质，你需要在 Minecraft 客户端中安装皮肤 Mod 并对其进行配置。

[[toc]]

> [!INFO] 本文不会说明「如何安装 Mod」
> 如果你确实不会，请将本文分享给你的朋友或其他愿意帮助你的人士，让他们指导你操作。

> [!INFO] 找不到下文中说的配置文件？
> 在大多数情况下，安装皮肤 Mod 后需要启动一次游戏并进入存档，配置文件才会被自动生成。
>
> 如果你在启动器中启用了版本隔离，配置文件的路径还可能与本文中描述的有所不同。

> [!IMPORTANT] 不要同时安装多个皮肤 Mod
> 否则，轻则无法正常加载材质，重则导致游戏崩溃。  
> 但并不是没有例外，比如：
>
> 1. CompatibilityLayerForCustomSkinLoader 需要与 CustomSkinLoader 一起安装

> [!TIP] 其他加载材质的方式
> 你也可以选择 [Yggdrasil 外置登录](/yggdrasil/index.md) 加载材质。但是，除 SkinPort 外，请不要同时使用 Yggdrasil 外置登录和皮肤 Mod，否则可能无法正常加载材质。

## CustomSkinLoader

CustomSkinLoader 是我们最推荐的皮肤 Mod，也被称为 **CSL** 或 **万用皮肤补丁**。

你可以在以下网站获取到关于 CustomSkinLoader 的更多信息

- [MC百科 (mcmod.cn)](https://www.mcmod.cn/class/883.html)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/customskinloader)

<GetCSL />

<!-- #TODO 解释 CustomSkinLoader 加载流程 -->

### 14.7+ <Badge type="tip" text="✨ 当前版本" />

LittleSkin 自 CustomSkinLoader 14.7 起被添加到了 CustomSkinLoader 的默认加载列表中，加载顺序仅次于正版皮肤，在大部分情况下，安装完成后你无需进行任何修改即可加载来自 LittleSkin 的材质。:tada:

如果你在游戏内加载了你从未使用过的皮肤，或者只加载了皮肤而没有加载披风，通常是因为存在与你同名的正版角色导致冲突而无法加载来自 LittleSkin 的材质，请参考下方的适用于 CustomSkinLoader 13.1 ~ 14.6a 的配置方法来修改 CustomSkinLoader 的配置文件。

### 早期版本 <Badge type="danger" text="👎 不再推荐" />

> [!WARNING] 注意
> 我们不再推荐使用以下远古版本的 CustomSkinLoader，即低于 14.7 的版本。
>
> - 对于 Minecraft 1.7.10，你可以同时安装 [CustomSkinLoader](#customskinloader) 和 [CompatibilityLayerForCustomSkinLoader](#clfcsl) 。
>
> - 对于更低版本，目前并没有很好的解决方案。

::: details 使用 ExtraList：13.1 ~ 14.6a

CustomSkinLoader 14.4 起支持通过 ExtraList 的方式添加皮肤站，这也是我们推荐的方法之一。你可以在用户中心的「皮肤 Mod」页面下载到 LittleSkin 的 ExtraList 文件，将其放入 `.minecraft/CustomSkinLoader/ExtraList/` 目录下即可。

在安装完成后的第一次启动游戏并成功载入 CustomSkinLoader 时 ExtraList 文件会被自动删除，这是正常现象。如果不出意外的话，此时 LittleSkin 已被添加至 CustomSkinLoader 加载列表列表顶部。

:::

::: details 修改配置文件：12.9-  

配置文件存放于 `.minecraft/CustomSkinLoader/` 目录中，共有两个配置文件，文件名分别为 `skinurls.txt` 和 `capeurls.txt`。

首先请使用记事本或者任意代码编辑器打开 `skinurls.txt`，将原有的所有内容替换为以下内容：

```
https://littleskin.cn/skin/*.png
https://skin.prinzeugen.net/skin/*.png
```

保存退出后再使用记事本或任意代码编辑器打开 `capeurls.txt`，将原有的所有内容替换为以下内容：

```
https://littleskin.cn/cape/*.png
https://skin.prinzeugen.net/cape/*.png
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 LittleSkin 中设置的材质了。

:::

### 手动修改配置文件 {#edit-csl-config}

> [!TIP] 什么情况下需要手动修改 CustomSkinLoader 配置文件？
> 👉 **一般来说，你只需要简单地安装 CustomSkinLoader Mod 即可，无需进行任何额外的配置。**
>
> 然而有时事与愿违，游戏中你的皮肤可能并不是你所期望的那个。
>
> 当你在这个手册上或者是其他地方得知，「你需要手动修改配置文件」时，那就是时候照着下面的步骤来做了。

💡 配置文件默认存放于 `.minecraft/CustomSkinLoader/` 目录中，仅有一个配置文件，文件名为 `CustomSkinLoader.json`。

::: details 图示：配置文件的具体位置
![CustomSkinLoader 文件夹所处位置](./assets/mods/csl-folder.webp)

![CustomSkinLoader 的配置文件和日志文件](./assets/mods/csl-files.webp)
:::

你也可以使用记事本或者任意编辑器将其打开，将配置文件原有的所有内容替换成以下内容。

修改完成后别忘了先保存再退出。再次启动 Minecraft 之后，你应该就能在游戏里看到你在 LittleSkin 中设置的材质了。

配置文件: `CustomSkinLoader.json` [<BSButton><FA :icon="faFileArrowDown" /> 下载此文件 </BSButton>](/CustomSkinLoader.json)

> [!IMPORTANT] 直接下载 CustomSkinLoader 配置文件
> 你可以下载到为 LittleSkin 量身定制的配置文件，此文件的内容与下面的内容一致。你只需将此文件覆盖原有文件即可。

<<< @/public/CustomSkinLoader.json{4-9 json:line-numbers}

### CompatibilityLayerForCustomSkinLoader {#clfcsl}

> 由于新版 CustomSkinLoader 从 14.7 以来就已经放弃对 Minecraft 1.7.10 的支持，但是相较后续的 Minecraft 版本而言，从网络获取皮肤的过程并没有发生太大的变化。
>
> 有了这个 Mod，就可以让新版 CSL 能够被 Forge 1.7.10 加载。

名称意为 CSL 兼容层。借助此 Mod，你可以在 Minecraft 1.7.10 中使用新版本的 CustomSkinLoader（仅限 _ForgeActive_ 通道）。

你可以在以下网站获取到关于 CompatibilityLayerForCustomSkinLoader 的更多信息。

- [MC百科 (mcmod.cn)](https://www.mcmod.cn/class/4160.html)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/compatibilitylayerforcustomskinloader)

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
