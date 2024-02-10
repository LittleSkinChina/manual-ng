- 对于 Velocity

  - 检查 `velocity.toml` 文件，确保 `online-mode` 项的值为 **`true`** :point_left:

    ::: code-group

    ``` toml:line-numbers=15 {2} [velocity.toml]
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

    ``` properties:line-numbers=23 [server.properties]
    online-mode=false
    ```

    ``` yaml:line-numbers=96 [config/paper-global.yaml]
      velocity:
        enabled: true
        online-mode: true  # [!code focus]
        secret: '************'
    ```

    :::
