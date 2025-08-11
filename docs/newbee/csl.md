<script setup>
import GetCSL from '../../components/GetCSL.vue'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
</script>

# CustomSkinLoader

CustomSkinLoader 是我们最推荐的皮肤 Mod，也被称为 **CSL** 或 **万用皮肤补丁**。

CustomSkinLoader 以游戏内的玩家名作为标识，按配置文件中设置的顺序依次从各个皮肤服务器尝试获取皮肤。

LittleSkin 自 CustomSkinLoader 14.7 起被添加到了 CustomSkinLoader 的默认加载列表中，加载顺序仅次于正版皮肤。

本文提供了修改 CustomSkinLoader 配置文件的方法，以令其优先从 LittleSkin 加载材质。

## 下载此 Mod {#download}

你可以在以下网站获取到关于 CustomSkinLoader 的更多信息

- [MC百科 (mcmod.cn)](https://www.mcmod.cn/class/883.html)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/customskinloader)
- [Modrinth](https://modrinth.com/mod/customskinloader)

<ClientOnly>
    <GetCSL />
</ClientOnly>

---

<!--@include: ./mod-tips.template.md-->

## 版本：14.7+ <Badge type="tip" text="✨ 当前版本" /> {#14.7+}

如果不存在与你同名的正版角色导致冲突的问题，<mark>一般无需修改 CustomSkinLoader 的配置文件</mark>。

以下是同名冲突在游戏内的典型表现：

- 显示的是你从**未使用过的陌生皮肤**
- 只加载了皮肤而没有加载披风 <Badge type="info" text="仅旧版" />

如果出现了上述情况，请参考本文中的 [**# 手动修改配置文件**](#edit-csl-config) 部分进行操作，以使其优先从 LittleSkin 加载材质。

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

```http
https://littleskin.cn/skin/*.png
https://skin.prinzeugen.net/skin/*.png
```

保存退出后再使用记事本或任意代码编辑器打开 `capeurls.txt`，将原有的所有内容替换为以下内容：

```http
https://littleskin.cn/cape/*.png
https://skin.prinzeugen.net/cape/*.png
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 LittleSkin 中设置的材质了。

:::

## 手动修改配置文件 {#edit-csl-config}

<!-- markdownlint-disable MD051 -->

> [!NOTE] 什么情况下需要手动修改 CustomSkinLoader 配置文件？
> 一般来说，你只需要简单地安装 CustomSkinLoader Mod 即可，无需进行任何额外的配置。
>
> 然而有时事与愿违，如果你在使用过程中遇到了如 [同名冲突](#14.7+) 这样的情况，那就是时候照着下面的步骤来做了。

<!-- markdownlint-restore -->

---

配置文件: `CustomSkinLoader.json` <a href="/CustomSkinLoader.json" download><BSButton style="background-color: var(--vp-c-success-3)"><FA :icon="faFileArrowDown" /> 下载此文件 </BSButton></a>

> [!IMPORTANT] ✅ 建议直接下载 CustomSkinLoader 配置文件
> 你可以下载到为 LittleSkin 量身定制的配置文件，此文件的内容与下方代码块的内容一致。
>
> 👉 你只需将下载到的文件<mark>覆盖（替换）掉原有的文件</mark>即可，而无需对原文件进行编辑。

> [!TIP] 📍 配置文件的位置
> 配置文件默认存放于 `.minecraft/CustomSkinLoader/` 目录中，仅有一个配置文件，文件名为 `CustomSkinLoader.json`。
>
> 在大多数情况下，安装皮肤 Mod 后需要启动一次游戏并进入存档，配置文件才会被自动生成。

> [!TIP] 🔁 需要重启游戏
> 完成配置文件的修改后，你需要重启游戏才能使其生效。

> [!NOTE] 🥰 有关版本隔离
> 如果你在启动器中启用了版本隔离，配置文件的路径还可能与上述有少许不同。
>
> 善用启动器的 <BSSection>打开模组文件夹</BSSection> 等类似功能，结合下方图示，再给予自己一些信心，你能够找到它的。

::: details 🤔 找不到配置文件的具体位置？来看看图示
![CustomSkinLoader 文件夹所处位置](./assets/mods/csl-folder.webp)

![CustomSkinLoader 的配置文件和日志文件](./assets/mods/csl-files.webp)
:::

<<< @/public/CustomSkinLoader.json{4-9 json:line-numbers}

## 功能特性

### 仅在客户端有效
是一个客户端 Mod，在服务端上安装它不会起到任何作用

### 多个皮肤来源 / 加载列表
会尝试从众多来源（皮肤站）逐个加载皮肤，直到皮肤和披风都加载完毕

### 高清材质支持
提供了对大于 64*64 的皮肤和披风的高清材质的支持，在没有 Optifine 和 Sodium 等改善渲染的 Mod 的情况下也能正确显示高清材质

### 低版本双层皮肤支持
在 1.7.10 以下的版本中正确显示原先不支持显示的双层皮肤

### 透明皮肤支持
在部分低版本中可正确显示透明皮肤

## 工作原理 {#how-it-works}

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

::: details ✨ `14.25` 更新了加载列表
自 `14.25` 更新后，CustomSkinLoader 引入了一个新的加载来源，即 *GameProfile*。

*GameProfile* 现在默认拥有最高优先级。在多人游戏中，若服务端下发某玩家的 *GameProfile*，那么客户端会优先从该 *GameProfile* 加载材质，而不会再从 Mojang 官方的服务器（此前最高优先级）加载材质。

如果在多人游戏中使用了皮肤插件之类的技术，那么 CustomSkinLoader 就会遵从，而不是像此前一样有自己的想法。
:::

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
若 Mojang 中的同名角色设置了皮肤但未设置披风，CustomSkinLoader 会尝试从后续的服务器加载披风。

![默认配置，尝试加载全部材质时的加载流程](./assets/mods/flow-loadall.webp)
:::

## CompatibilityLayerForCustomSkinLoader <Badge type="danger" text="仅限 Minecraft 1.7.10" /> {#clfcsl}

> [!NOTE] 介绍
> CustomSkinLoader 从 14.7 以来就已经放弃对 Minecraft 1.7.10 的支持，但是相较后续的 Minecraft 版本而言，从网络获取皮肤的过程并没有发生太大的变化。
>
> 此 Mod 可以使 CustomSkinLoader 在 1.7.10 中正常运行。

名称意为 *CustomSkinLoader 兼容层*。

借助此 Mod，你可以<mark>在 Minecraft 1.7.10 中使用新版本的 CustomSkinLoader</mark>。

你可以在以下网站获取到关于 CompatibilityLayerForCustomSkinLoader 的更多信息。

- [MC百科 (mcmod.cn)](https://www.mcmod.cn/class/4160.html)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/compatibilitylayerforcustomskinloader/files/all?page=1&pageSize=20&showAlphaFiles=show)

> [!WARNING] ⚠️ 需要前置 Mod
> 除了 CompatibilityLayerForCustomSkinLoader 自身外，你还需要安装以下前置 Mod：
>
> - [CustomSkinLoader](#customskinloader)
> - [UniMixins](https://www.mcmod.cn/class/9457.html)
>
> 在安装 CustomSkinLoader 时，请下载适用于 Minecraft 1.8 的版本，**其文件名通常带有 `ForgeLegacy` 或 `ForgeV1` 字样**。

> [!IMPORTANT] 💡 加载纤细皮肤时可能遇到问题
> 如果加载纤细（Slim / Alex）模型的皮肤时遇到如显示错位之类的问题，可以采取临时措施：
>
> - 将 CustomSkinLoader 的版本降级至 [`ForgeLegacy_14.17`](https://www.curseforge.com/minecraft/mc-mods/customskinloader/files/4642232)
>
> 此问题由一个 Bug 引起，暂未得到解决。
