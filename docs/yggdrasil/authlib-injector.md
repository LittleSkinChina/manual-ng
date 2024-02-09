<script setup>
import { ref } from 'vue'
const versionAI = ref('1.2.4')

fetch('https://authlib-injector.yushi.moe/artifact/latest.json').then(r => r.json()).then(r => {
    versionAI.value = r.version
})
</script>

# authlib-injector

<!--@include: ./index.md{42,46}-->

---

authlib-injector 当前最新版本：`{{ versionAI }}` <Badge type="tip" text="测试功能" />

## 单服务端

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

## Velocity <Badge type="tip" text="Minecraft 1.13 +" />

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

## WaterFall <Badge type="warning" text="不再推荐" />

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

::: tip 提示
如果你使用 BungeeCord，你需要在所有服务端（包括 BungeeCord 和所有子服）中加载 authlib-injector（方法见上），但只有 BungeeCord 可以打开 `online-mode`，其他服务端应该关闭 `online-mode`。
:::
