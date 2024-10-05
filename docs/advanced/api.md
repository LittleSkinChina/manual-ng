---
outline: [2, 3]
---

# LittleSkin API

<!--@include: ./for-experts.template.md-->

::: warning 注意
当前 Blessing Skin API 和我们的部分 API 正处于试验阶段，API 不稳定并随时可能发生破坏性变更，敬请留意。
:::

LittleSkin 使用 Blessing Skin 最新开发版本，支持通过 Blessing Skin API 使用 LittleSkin 的各种功能，包括但不限于获取角色信息、更改角色材质等。

除此之外，LittleSkin 有一些原版 Blessing Skin API 不具备的定制 API。

通常来说，此页面列出的大多数 API 均需 [鉴权](./oauth2/index.md#使用访问令牌进行鉴权)。一些无需鉴权即可使用的 API 会被特别标出。

## Blessing Skin API 文档

按理来说，LittleSkin 的 Blessing Skin API 与原版 Blessing Skin API 完全一致，你可以直接参考 Blessing Skin API 的文档：[Blessing Skin 用户手册 - Web API](https://blessing.netlify.app/api/)。

除此之外，这里还有一些 Blessing Skin API 的文档中没有提到的，请求部分 API 时可能需要请求用户授予的权限：

| 权限节点                           | 解释                          |
| ---------------------------------- | ----------------------------- |
| `User.Read`                        | 读取用户基本信息              |
| `Player.Read` / `Player.ReadWrite` | 读取 / 读写用户的角色和对应材质 |
| `Closet.Read` / `Closet.ReadWrite` | 读取 / 读写用户的衣柜收藏       |
| `Notification.Read`                | 读取用户的站内通知            |

## LittleSkin 特有的 API

### OpenAPI 文档

<br/>
<NCard title="🏂 使用 SwaggerUI 查看" link="https://petstore.swagger.io/?url=https://manual.littlesk.in/littleskin-api.openapi3_1.yaml">
若 OpenAPI 文档中的表述与此文档不一致，以 OpenAPI 文档为准。
</NCard>

### 站点公告 Announcements <Badge type="info" text="🔓 无需鉴权" />

```http
GET https://littleskin.cn/api/announcements HTTP/1.1
Accept: application/json
```

返回站点公告的列表。

未来将遵守启动器联盟规范。<Badge type="info" text="不成熟的" />

::: details 响应说明

以下只是对 OpenAPI 文档的额外补充说明。

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "title": "string",
    "content": "<p>string</p>",
    "color": "blue",
    "priority": 100,
    "severity": "info",
    "expand": false,
    "timestamp": 1706369054.135452,
    "id": "70c90f09-9f77-4d78-b7e4-92b4e86d8f6c"
  }
]
```

| 值          | 简要解释                                        |
| ----------- | ----------------------------------------------- |
| `title`     | 同 `content`，但通常只是纯文本                  |
| `content`   | 可能会包含一些简单的 HTML 标签，如 `<p>` `<ul>` |
| `color`     | 颜色名称取自 Bootstrap UI                       |
| `priority`  | 值越大，优先级越高，应被安排在上方或前方展示    |
| `severity`  | 公告的重要/严重性                               |
| `expand`    | 对于 `<details>` 标签，若为 `false` 则默认收起  |
| `timestamp` | Unix 时间戳，单位为秒                           |
| `id`        | UUID v4，对公告进行了修改不会改变               |

:::

### 查询正版验证状态 PremiumVerification <Badge type="tip" text="🔒 需要鉴权" />

```http
GET https://littleskin.cn/api/premium-verification HTTP/1.1
Accept: application/json
```

返回用户正版验证状态。

需要在 [OAuth 2 授权](./oauth2/index.md#获取访问令牌) 时请求 `PremiumVerification.Read` 权限。

::: details 响应说明

以下只是对 OpenAPI 文档的额外补充说明。

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "code": 0,
  "verified": true,
  "uuid": "69e535e98159409e93c8d649d7355279"
}
```

| 值         | 简要解释                        |
| ---------- | ------------------------------- |
| `code`     | 状态码，目前只有 `0`            |
| `verified` | 是否已验证正版                  |
| `uuid`     | 无符号的正版 UUID，当存在时返回 |

:::

### 获取用户名下所有角色的 Yggdrasil 档案 <Badge type="tip" text="🔒 需要鉴权" />

```http
GET https://littleskin.cn/api/yggdrasil/sessionserver/session/minecraft/profiles HTTP/1.1
Accept: application/json
```

需要在 [OAuth 2 授权](./oauth2/index.md#获取访问令牌) 时请求 `Yggdrasil.PlayerProfiles.Read` 权限。

::: details 响应说明

以下只是对 OpenAPI 文档的额外补充说明。

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": "{{uuid}}",
        "name": "{{name}}",
        "properties": [
            {
                "name": "{{property_name}}",
                "value": "{{property_value}}"
            }
        ]
    }
]
```

| 参数                 | 类型   | 值                                                           |
| -------------------- | ------ | ------------------------------------------------------------ |
| （最外层的数组自身） | array  | 用户名下的所有角色列表                                       |
| `[]`（数组元素）     | object | Yggdrasil 档案（不包含签名），详见 [Yggdrasil 服务端技术规范 - 角色信息的序列化](https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E8%A7%92%E8%89%B2%E4%BF%A1%E6%81%AF%E7%9A%84%E5%BA%8F%E5%88%97%E5%8C%96) |

:::

> [!TIP] 只需要获取已知角色的档案？
> 在已知角色名或角色 UUID 的情况下，可直接通过请求 Yggdrasil API 获取角色的 Yggdrasil 档案，无需鉴权。请参阅：[Yggdrasil 服务端技术规范 - 角色部分](https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E8%A7%92%E8%89%B2%E9%83%A8%E5%88%86)

### 获取 Minecraft 令牌 <Badge type="tip" text="🔒 需要鉴权" />

```http
POST https://littleskin.cn/api/yggdrasil/sessionserver/session/minecraft/profiles HTTP/1.1
Accept: application/json
Content-Type: application/json

{
    "uuid": "{{uuid}}"
}
```

获取一个用于 authlib-injector 外置登录的 Minecraft 令牌（即 Yggdrasil API 中的 Access Token）。

需要在 [OAuth 2 授权](./oauth2/index.md#获取访问令牌) 时请求 `Yggdrasil.MinecraftToken.Create` 权限。

| 参数           | 类型   | 值                                    |
| -------------- | ------ | ------------------------------------- |
| `uuid`         | string | 选定的角色的 UUID，无符号               |

通过该 API 创建 Minecraft 令牌时不支持指定 Client Token，只能由服务端随机生成。

::: details 响应说明

以下只是对 OpenAPI 文档的额外补充说明。

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "accessToken": "{{access_token}}",
    "clientToken": "{{client_token}}",
    "availableProfiles": [
      {
        "id": "{{uuid}}",
        "name": "{{name}}"
      }
    ],
    "selectedProfile": {
      "id": "{{uuid}}",
      "name": "{{name}}"
    }
}
```

响应内容（包括错误响应）即是 Yggdrasil API 的登录 API 的响应内容，详见: [Yggdrasil 服务端技术规范 - 登录](https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E7%99%BB%E5%BD%95)

此 API 签发的 Minecraft 令牌与 Yggdrasil API 签发的 Minecraft 令牌一致，可直接通过 Yggdrasil API 进行刷新、验证、吊销、加入服务器等操作。同理，通过 Yggdrasil API 执行的登出操作也会使此 API 签发的 Minecraft 令牌被吊销。

:::
