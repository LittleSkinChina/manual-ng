---
outline: [2, 3]
---

<script setup>
import { ref } from 'vue'
const versionAI = ref('1.2.4')

fetch('https://authlib-injector.yushi.moe/artifact/latest.json').then(r => r.json()).then(r => {
    versionAI.value = r.version
})
</script>

# 在服务端上使用 Yggdrasil 鉴权服务

## authlib-injector

<!--@include: ./index.md{33,35}-->

authlib-injector 当前最新版本：`{{ versionAI }}` <Badge type="tip" text="测试功能" />

### 单服务端

1. 将服务器配置文件 `server.properties` 中 `online-mode` 一项的值设为 `true`
   
    ::: code-group
   
   ```properties:line-numbers=23
   online-mode=true
   ```
   
    :::

2. 在你的服务端的启动指令的 `-jar` 参数前添加如下参数
   
    ::: code-group
   
   ```bash-vue
   -javaagent:authlib-injector-{{ versionAI }}.jar=https://littleskin.cn/api/yggdrasil
   ```
   
   ```bash-vue
   java -Xms4G -Xmx16G -javaagent:authlib-injector-{{ versionAI }}.jar=https://littleskin.cn/api/yggdrasil -jar paper-1.20.4-409.jar --nogui
   ```
   
    :::
   
   - `authlib-injector-{{ versionAI }}.jar` 为指向 authlib-injector 的 `jar` 的路径或文件名
   - `https://littleskin.cn/api/yggdrasil` 为 LittleSkin 的 Yggdrasil API 地址

### Velocity <Badge type="tip" text="Minecraft 1.13 +" />

新式转发 (modern forwarding) 是 Velocity 支持的一种独创格式。它以高效的二进制格式转发所有玩家信息。但是，它仅适用于 Minecraft 1.13 或更高版本。

::: tip 提示
本文仅会对「为新式转发配置 LittleSkin Yggdrasil 外置登录」做出说明。

本案例使用 Velocity modern forwarding + Paper 作为示例。

具体的 Velocity 配置请结合参考 [Velocity 文档](https://docs.papermc.io/velocity/player-information-forwarding#configuring-modern-forwarding)。
:::

- 对于 Velocity
  
  - 检查 `velocity.toml` 文件，确保 `online-mode` 项的值为 **`true`** :point_left:
    
    ::: code-group
    
    ```toml:line-numbers=15
    # Should we authenticate players with Mojang? By default, this is on.
    online-mode = true  # [!code focus]
    ```
    
    :::

- 对于 Paper 子服
  
  - 检查子服务器的 `server.properties` 文件，确保 `online-mode` 项的值为 **`false`** :point_left:  
    这会阻止子服务器对玩家进行身份验证，Velocity 将会承担起对玩家进行身份验证的职责。
  
  - 检查子服务器的 `config/paper-global.yaml` 中的 `online-mode` 项的值为 **`true`** :point_left:  
    这个值在任何情况下都应该与 `velocity.toml` 中的 `online-mode` 项的值保持一致。
    
    对于 Paper 1.18.2 或更低版本，`online-mode` 将会位于 `settings.velocity-support.online-mode`。
    
    ::: code-group
    
    ```properties:line-numbers=23
    online-mode=false
    ```
    
    ```yaml:line-numbers=96
      velocity:
        enabled: true
        online-mode: true  # [!code focus]
        secret: '************'
    ```
    
    :::

- 对于以上所有
  
    **每个**服务端都应该配置 authlib-injector，以便其能正确地处理外置登录。
  
    在**每个**服务端的启动指令的 `-jar` 参数前添加如下参数。
  
    ::: code-group
  
  ```bash-vue
  -javaagent:authlib-injector-{{ versionAI }}.jar=https://littleskin.cn/api/yggdrasil
  ```
  
  ```bash-vue
  java "-Dauthlibinjector.disableHttpd" -Xms512M -Xmx512M -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -javaagent:authlib-injector-{{ versionAI }}.jar=https://littleskin.cn/api/yggdrasil -jar velocity-3.3.0-SNAPSHOT-351.jar 
  ```
  
  ```bash-vue
  java -Xms4G -Xmx16G -javaagent:authlib-injector-{{ versionAI }}.jar=https://littleskin.cn/api/yggdrasil -jar paper-1.20.4-409.jar --nogui
  ```
  
    :::
  
  - `authlib-injector-{{ versionAI }}.jar` 为指向 authlib-injector 的 `jar` 的路径或文件名
  - `https://littleskin.cn/api/yggdrasil` 为 LittleSkin 的 Yggdrasil API 地址
  - 对于 Velocity，`-Dauthlibinjector.disableHttpd` 用于禁用 authlib-injector 内建的 HTTP 服务器，这会导致部分功能不可用，但可以有效解决目前存在的 [身份验证服务宕机问题 - #234](https://github.com/yushijinhun/authlib-injector/issues/234)。

### WaterFall <Badge type="warning" text="不再推荐" />

BungeeCord 和 WaterFall 属于亲兄弟好姐妹，因此，以下配置同样适用于 BungeeCord。

- 对于 BungeeCord / WaterFall
  
  检查 `config.yml`，确保 `online-mode` 项的值为 **`true`** :point_left:
  
    ::: code-group
  
  ```yaml:line-numbers=17
  online-mode: true
  ```
  
    :::

- 对于子服务端
  
  检查 `server.properties` 文件，确保 `online-mode` 项的值为 **`false`** :point_left:
  
    ::: code-group
  
  ```properties:line-numbers=23
  online-mode=false
  ```
  
    :::

- 对于以上所有
  
    **每个**服务端都应该配置 authlib-injector，以便其能正确地处理外置登录。
  
    在**每个**服务端的启动指令的 `-jar` 参数前添加如下参数。
  
    ::: code-group
  
  ```bash-vue
  -javaagent:authlib-injector-{{ versionAI }}.jar=https://littleskin.cn/api/yggdrasil
  ```
  
  ```bash-vue
  java -Xms512M -Xmx512M -javaagent:authlib-injector-{{ versionAI }}.jar=https://littleskin.cn/api/yggdrasil -jar waterfall-562.jar
  ```
  
  ```bash-vue
  java -Xms4G -Xmx16G -javaagent:authlib-injector-{{ versionAI }}.jar=https://littleskin.cn/api/yggdrasil -jar paper-1.20.4-409.jar nogui
  ```
  
    :::
  ::: warning

**实际填写的路径两边没有大括号！** 大括号只是表明必须正确指定这个参数的值，但是实际上并不需要填入大括号。
:::

::: tip
如果你使用 BungeeCord，你需要在所有服务端（包括 BungeeCord 和所有子服）中加载 authlib-injector（方法见上），但只有 BungeeCord 可以打开 `online-mode`，其他服务端应该关闭 `online-mode`。
:::

## MultiLogin

> MultiLogin 是一款服务端插件， 功能是让您的服务器支持正版与多种外置登录共存， 用来连接两个或多个外置验证服务器下的玩家，让他们能在一起玩。

外置登录给服务器提供了类似正版的管理和登录方式，但对于一个拥有 Minecraft 正版账号的玩家来说，正版登录是更加简单方便的选择。如果你是一名服务器管理员，可以考虑选用下面的插件实现这种效果。

此插件专为服务端设计。服务器管理员可参考此文档：[GitHub / MultiLogin / wiki](https://github.com/CaaMoe/MultiLogin/wiki)

### 单服务端

关于最简单的配置方式，MultiLogin 已经在[它的 Github Wiki 文档]([Home · CaaMoe/MultiLogin Wiki · GitHub](https://github.com/CaaMoe/MultiLogin/wiki))中写得很明白了，参考官方文档是更好的选择。并且本插件在`examples`文件夹中预留了 LittleSkin 的 Service 文件，您无需专门编写配置文件，只需将其复制到`services`目录，并修改ID即可使用。

下面是一份示例，分别是`official.yml`和`littleskin.yml`。

::: code-group

```yaml:line-numbers=4
# Please edit before use.
id: 0
```

```yaml:line-numbers=4

# Please edit before use.

id: 1
:::

### Velocity <Badge type="tip" text="Minecraft 1.13 +" />

::: tip

本文介绍 Velocity

对于 Velocity新式转发 的介绍及其配置方式，[上文](#velocity)已有提及，下面将仅介绍 Velocity新式转发+MultiLogin 配置方式与上文的相同与不同之处。

本文采用的测试环境如下：

- Velocity 3.3.0-SNAPSHOT (git-53923ed8-b351)

- Paper 1.20.1 (git-Paper-196)

- MultiLogin (git:dba4e6c)

:::

::: warning

截止发稿时，MultiLogin的最新正式版本仍无法在Velocity 3.3.0上运行，故采用开发版本进行测试

:::

- 对于 Velocity
  
  - 对于`velocity.toml`的配置与[上文](#velocity)相同
  - 安装 MultiLogin 插件，并按照[MultiLogin的官方文档](https://github.com/CaaMoe/MultiLogin/wiki)正确配置插件配置文件。

- 对于 Paper 子服
  
  - 全部与[上文](#velocity)相同

- 对于以上所有

对于**以上所有服务端**均无需额外增加任何运行选项，仅需在 Velocity 正确配置 MultiLogin 插件即可。