---
outline: [2, 3]
---


<script setup>
import { ref } from 'vue'
import GetAuthlibInjector from '../../components/GetAuthlibInjector.vue'

const latest = ref('')
const updated = ref('')
const download = ref('')

fetch('https://authlib-injector.yushi.moe/artifact/latest.json').then(r => r.json()).then(r => {
    latest.value = r.version
    updated.value = new Date(r.release_time).toLocaleString()
    download.value = r.download_url
})
</script>

# authlib-injector

> authlib-injector 为玩家提供统一的非 Mojang 登录体验。大多数的外置登录都使用 authlib-injector 来实现。

> [!WARNING] 这不是插件，也不是 Mod
> authlib-injector 使用方式较为特殊，将其 JAR 文件放入服务端的 `plugins/` 或 `mods/` 目录下不会有任何作用。

<!-- @include: @/pay-for-minecraft.template.md -->

## 获取 JAR 文件

<GetAuthlibInjector :latest="latest" :updated="updated" :download="download" />

下载 `authlib-injector-{{ latest }}.jar` 文件后，将其放入 **服务端启动脚本** 或 **服务端文件** 所在的文件夹中。

## 配置各类服务端

> [!TIP] 🤗 在面板服上配置 authlib-injector
> 配置 authlib-injector 时不可避免地需要修改服务端启动命令/参数。
>
> 部分 Minecraft 服务器租赁商可能会使用 [MCSManager](https://mcsmanager.com/) 或 [Pterodactyl® Panel 翼龙面板](https://pterodactyl.io/) 等 Minecraft 服务器管理面板以便销售和管理服务器实例。
>
> 有些用户可能无法自行修改服务端启动命令/参数。**请与服务器租赁商沟通，让其帮助你配置。**

### 单服务端（非群组服）<Badge text="✨ 常用" />

1. 将服务器配置文件 `server.properties` 中 `online-mode` 一项的值设为 `true`

    ::: code-group

    ``` properties:line-numbers=23 [server.properties]
    online-mode=true
    ```

    :::

2. 在你的服务端的启动指令的 `-jar` 参数前添加如下参数

    ::: code-group

    ``` bash-vue [需要添加的内容]
    -javaagent:authlib-injector-{{ latest }}.jar=https://littleskin.cn/api/yggdrasil
    ```

    ``` bash-vue [完整的启动指令示例]
    java -Xms4G -Xmx16G -javaagent:authlib-injector-{{ latest }}.jar=https://littleskin.cn/api/yggdrasil -jar paper-1.20.4-409.jar --nogui
    ```

    :::

    - `authlib-injector-{{ latest }}.jar` 为指向 authlib-injector 的 `jar` 的路径或文件名
    - `https://littleskin.cn/api/yggdrasil` 为 LittleSkin 的 Yggdrasil API 地址

### Velocity <Badge type="tip" text="Minecraft 1.13 +" />

Modern forwarding 是 Velocity 支持的一种独创格式。它以高效的二进制格式转发所有玩家信息。但是，它仅适用于 Minecraft 1.13 或更高版本。

> [!TIP] 提示
> 本文仅会对「为 Velocity modern forwarding 配置 LittleSkin 外置登录」做出说明。
>
> 本案例使用 Velocity + Paper 作为示例。
>
> 具体的 Velocity 配置请结合参考 [Velocity 文档](https://docs.papermc.io/velocity/player-information-forwarding#configuring-modern-forwarding)。

<!--@include: ./velocity.template.md-->

- 对于以上所有
  
    **每个**服务端都应该配置 authlib-injector，以便其能正确地处理外置登录。

    在**每个**服务端的启动指令的 `-jar` 参数前添加如下参数。

    ::: code-group

    ``` bash-vue [需要添加的内容]
    -javaagent:authlib-injector-{{ latest }}.jar=https://littleskin.cn/api/yggdrasil
    ```

    ``` bash-vue [Velocity 完整的启动指令示例]
    java "-Dauthlibinjector.disableHttpd" -Xms512M -Xmx512M -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -javaagent:authlib-injector-{{ latest }}.jar=https://littleskin.cn/api/yggdrasil -jar velocity-3.3.0-SNAPSHOT-351.jar 
    ```

    ``` bash-vue [Paper 子服务器 完整的启动指令示例]
    java -Xms4G -Xmx16G -javaagent:authlib-injector-{{ latest }}.jar=https://littleskin.cn/api/yggdrasil -jar paper-1.20.4-409.jar --nogui
    ```

    :::

  - `authlib-injector-{{ latest }}.jar` 为指向 authlib-injector 的 `jar` 的路径或文件名
  - `https://littleskin.cn/api/yggdrasil` 为 LittleSkin 的 Yggdrasil API 地址

### Waterfall / BungeeCord <Badge type="warning" text="不再推荐" />

BungeeCord 和 Waterfall 属于亲兄弟好姐妹，因此，以下配置同时适用于两者。

- 对于  Waterfall / BungeeCord
  
  检查 `config.yml`，确保 `online-mode` 项的值为 **`true`** :point_left:

    ::: code-group

    ``` yaml:line-numbers=17 [config.yml]
    online-mode: true
    ```

    :::

- 对于子服务端
  
  检查 `server.properties` 文件，确保 `online-mode` 项的值为 **`false`** :point_left:

    ::: code-group

    ``` properties:line-numbers=23 [server.properties]
    online-mode=false
    ```

    :::

- 对于以上所有
  
    **每个**服务端都应该配置 authlib-injector，以便其能正确地处理外置登录。

    在**每个**服务端的启动指令的 `-jar` 参数前添加如下参数。

    ::: code-group

    ``` bash-vue [需要添加的内容]
    -javaagent:authlib-injector-{{ latest }}.jar=https://littleskin.cn/api/yggdrasil
    ```

    ``` bash-vue [Waterfall / BungeeCord 完整的启动指令示例]
    java -Xms512M -Xmx512M -javaagent:authlib-injector-{{ latest }}.jar=https://littleskin.cn/api/yggdrasil -jar waterfall-562.jar
    ```

    ``` bash-vue [Paper 子服务器 完整的启动指令示例]
    java -Xms4G -Xmx16G -javaagent:authlib-injector-{{ latest }}.jar=https://littleskin.cn/api/yggdrasil -jar paper-1.20.4-409.jar --nogui
    ```

    :::
