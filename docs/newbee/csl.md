---
outline: [2, 3]
---

<script setup>
import GetCSL from '../../components/GetCSL.vue'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
</script>

# CustomSkinLoader

CustomSkinLoader 是我们最推荐的皮肤 Mod，也被称为 **CSL** 或 **万用皮肤补丁**。

LittleSkin 自 CustomSkinLoader 14.7 起被添加到了 CustomSkinLoader 的默认加载列表中，加载顺序仅次于正版皮肤。

在大部分情况下，安装完成后无需进行任何修改，即可加载来自 LittleSkin 的材质。

你可以在以下网站获取到关于 CustomSkinLoader 的更多信息

- [MC百科 (mcmod.cn)](https://www.mcmod.cn/class/883.html)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/customskinloader)

<GetCSL />

<!--@include: ./mod-tips.template.md-->

## 工作原理

CustomSkinLoader 会使用游戏内的玩家名查询不同的服务器，以此加载皮肤。

CustomSkinLoader 有一个加载列表，里面存放和定义着如何加载你的材质：

- **从哪个服务器加载？**
- **加载的先后顺序？**
- 其他高级加载策略

目前的情况下，若不对 CustomSkinLoader 的配置文件进行修改，默认的加载顺序如下：

1. Mojang 官方
2. **LittleSkin** ✨
3. Blessing Skin
4. ...

有一些流程示意图可帮助你理解加载列表这个机制：

::: details 1. 默认配置 & Mojang 上不存在同名角色
![默认配置 且 Mojang 上没有同名角色时的加载流程](./assets/mods/flow-regular.webp)
:::

::: details 2. 默认配置 & Mojang 上有同名角色
此时若要优先从 LittleSkin 中加载皮肤，可参照本文中的 [手动修改配置文件](#edit-csl-config) 部分进行操作，以达到 **3.** 的效果。

![默认配置 且 Mojang 上有同名角色时的加载流程](./assets/mods/flow-mojang-only.webp)
:::

::: details 3. 手动修改配置文件，将 LittleSkin 设置为最高优先级
若参照本文中的 [手动修改配置文件](#edit-csl-config) 部分进行操作，即可达到以下效果。

![修改了配置文件，将 LittleSkin 设置为最高优先级时的加载流程](./assets/mods/flow-littleskin-only.webp)
:::

::: details 4. 默认配置 & Mojang 上有同名角色 & 尝试加载全部材质
若 Mojang 中的同名角色设置了皮肤但未设置皮肤，CustomSkinLoader 会尝试从后续的服务器加载披风。

![默认配置，尝试加载全部材质时的加载流程](./assets/mods/flow-loadall.webp)
:::

## 版本：14.7+ <Badge type="tip" text="✨ 当前版本" />

如果你在游戏内加载了你从未使用过的皮肤，或者只加载了皮肤而没有加载披风，通常是因为存在与你同名的正版角色导致冲突而无法加载来自 LittleSkin 的材质，请参考本文中的 [手动修改配置文件](#edit-csl-config) 部分进行操作。

## 版本：早期 <Badge type="danger" text="👎 不再推荐" />

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

## 手动修改配置文件 {#edit-csl-config}

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

## CompatibilityLayerForCustomSkinLoader {#clfcsl}

> 由于新版 CustomSkinLoader 从 14.7 以来就已经放弃对 Minecraft 1.7.10 的支持，但是相较后续的 Minecraft 版本而言，从网络获取皮肤的过程并没有发生太大的变化。
>
> 有了这个 Mod，就可以让新版 CSL 能够被 Forge 1.7.10 加载。

名称意为 CSL 兼容层。借助此 Mod，你可以在 Minecraft 1.7.10 中使用新版本的 CustomSkinLoader（仅限 _ForgeActive_ 通道）。

你可以在以下网站获取到关于 CompatibilityLayerForCustomSkinLoader 的更多信息。

- [MC百科 (mcmod.cn)](https://www.mcmod.cn/class/4160.html)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/compatibilitylayerforcustomskinloader)
