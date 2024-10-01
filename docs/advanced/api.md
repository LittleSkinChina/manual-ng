---
outline: [2, 3]
---

# LittleSkin API

<!--@include: ./for-experts.template.md-->

::: warning 注意
当前 Blessing Skin Server API 和我们的部分 API 正处于试验阶段，API 不稳定并随时可能发生破坏性变更，敬请留意。
:::

LittleSkin 使用 Blessing Skin 最新开发版本，支持通过 Blessing Skin Server API 使用 LittleSkin 的各种功能，包括但不限于获取角色信息、更改角色材质等。

除此之外，LittleSkin 有一些定制的 API，这些通常是 Blessing Skin Server API 不具备的。

通常来说，此页面列出的大多数 API 均需鉴权。一些无需鉴权即可使用的 API 会被特别标出。

## Blessing Skin API 文档

按理来说，LittleSkin 的 Blessing Skin API 与原版 Blessing Skin API 完全一致，你可以直接参考 Blessing Skin API 的文档：[Blessing Skin 用户手册 - Web API](https://blessing.netlify.app/api/)。

除此之外，这里还有一些 Blessing Skin API 的文档中没有提到的，请求部分 API 时可能需要请求用户授予的权限：

| 权限节点                         | 解释                          |
| -------------------------------- | ----------------------------- |
| `User.Read`                      | 读取用户基本信息              |
| `Player.Read` `Player.ReadWrite` | 读取/读写用户的角色和对应材质 |
| `Closet.Read` `Closet.ReadWrite` | 读取/读写用户的衣柜收藏       |
| `Notification.Read`              | 读取用户的站内通知            |

## LittleSkin 特有的 API

### OpenAPI 文档

<br/>
<NCard title="🏂 使用 SwaggerUI 查看" link="https://petstore.swagger.io/?url=https://manual.littlesk.in/littleskin-api.openapi3_1.yaml">
若 OpenAPI 文档中的表述与此文档不一致，以 OpenAPI 文档为准。
</NCard>

### 站点公告 Announcements <Badge type="info" text="🔓 无需鉴权" />

```http
GET https://littleskin.cn/api/announcements
```

返回站点公告的列表。

未来将遵守启动器联盟规范。<Badge type="info" text="不成熟的" />

::: details 说明

以下只是对 OpenAPI 文档的额外补充说明。

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

```json
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

:::

### 查询正版验证状态 PremiumVerification <Badge type="tip" text="🔒 需要鉴权" />

```http
GET https://littleskin.cn/api/premium-verification
```

返回用户正版验证状态。

需要在 [OAuth2](./oauth2.md) 授权时请求 `PremiumVerification.Read` 权限。

::: details 说明

以下只是对 OpenAPI 文档的额外补充说明。

| 值         | 简要解释                        |
| ---------- | ------------------------------- |
| `code`     | 状态码，目前只有 `0`            |
| `verified` | 是否已验证正版                  |
| `uuid`     | 无符号的正版 UUID，当存在时返回 |

```json
{
  "code": 0,
  "verified": true,
  "uuid": "69e535e98159409e93c8d649d7355279"
}
```

:::
