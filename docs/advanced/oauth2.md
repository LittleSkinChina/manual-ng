---
outline: [2, 3]
---

# OAuth 2

<!--@include: ./for-experts.template.md-->

LittleSkin 支持 OAuth 2 服务端。你可以在你的应用中集成「使用 LittleSkin 账户登录」这样的功能。

## 参考文档

请参阅：[Blessing Skin 用户手册 - Web API - OAuth2 认证](https://blessing.netlify.app/api/oauth.html)。

## 创建 OAuth 2 应用

在你的应用中集成 OAuth 2 之前，你需要先在 LittleSkin [创建应用](https://littleskin.cn/user/oauth/manage)。

通过提供：

- 应用名称（将被展示在用户的授权界面上）
- 回调 URL / `redirect_uri`

你会被分配到：

- 客户端 ID / `client_id`
- 客户端 Secret / `client_secret`

如果你使用 Blessing Skin Server 的 LittleSkin 登录插件，上述信息足矣。

## 有关 OAuth 2 的详细信息

如果你正在进行开发，下述的信息可能会有所帮助。

### API 端点

| API 端点 Endpoint      | URL                                      |
| ---------------------- | ---------------------------------------- |
| 授权 Authorize         | `https://littleskin.cn/oauth/authorize`  |
| 令牌 Token             | `https://littleskin.cn/oauth/token`      |
| 用户信息 User Info     | `https://littleskin.cn/api/user`         |
| 刷新令牌 Refresh Token | `https://littleskin.cn/api/auth/refresh` |

### 支持的 Scope

| Scope                            | 解释                          |
| -------------------------------- | ----------------------------- |
| `User.Read`                      | 读取用户基本信息              |
| `Player.Read` `Player.ReadWrite` | 读取/读写用户的角色和对应材质 |
| `Closet.Read` `Closet.ReadWrite` | 读取/读写用户的衣柜收藏       |
| `Notification.Read`              | 读取用户的站内通知            |
| `PremiumVerification.Read`       | 读取用户的正版验证状况        |

### 授权

客户端构造 Authorize URL 并引导用户在**浏览器**中访问。

```http
GET https://littleskin.cn/oauth/authorize
    ?client_id={client_id}
    &redirect_uri={redirect_uri}
    &response_type=code
    &scope=
```

| 参数            | 值                             |
| --------------- | ------------------------------ |
| `client_id`     | ...                            |
| `redirect_uri`  | ...                            |
| `response_type` | 固定值 `code`                  |
| `scope`         | 支持的 scope 列表，以 `,` 分隔 |

若 `scope` 参数为空，则服务器默认为 `User.Read`。

在用户完成授权后，服务端将会将用户重定向至回调 URL (`redirect_uri`)，其中包含一个名为 `code` 的查询参数 (Query Parameter)。

取回 `code` 并进行接下来的操作。

### 获取 Access Token

客户端构造 URL 并发起 POST 请求。

```http
POST https://littleskin.cn/oauth/token
Content-Type: application/x-www-form-urlencoded

{
    "grant_type": "authorization_code",
    "client_id": "{client_id}",
    "client_secret": "{client_secret}",
    "redirect_uri": "{redirect_uri}",
    "code": "{code}"
}
```

| 参数            | 值                          |
| --------------- | --------------------------- |
| `grant_type`    | 固定值 `authorization_code` |
| `client_id`     | ...                         |
| `client_secret` | ...                         |
| `redirect_uri`  | ...                         |
| `code`          | 上一步获取到的 `code`       |

请求成功后将返回 JSON 响应。

```json
{
  "access_token": "***J.W.T***",
  "token_type": "Bearer",
  "expires_in": 31622400,
  "refresh_token": "******"
}
```

| 值              | 解释                      |
| --------------- | ------------------------- |
| `access_token`  | Access Token (JWT 格式)   |
| `token_type`    | 令牌类型，固定值 `Bearer` |
| `expires_in`    | 令牌的有效时间（秒）      |
| `refresh_token` | 刷新令牌                  |

### 使用 Access Token

在此使用 Access Token 获取用户基本信息。

```http
GET https://littleskin.cn/api/user
Authorization: Bearer {access_token}
```

如果一切在预料之中，这个请求会正确地返回用户的基本信息。

欲了解更多内容，请访问 [参考文档](#参考文档) 及 [LittleSkin API](./api.md)。

### 刷新 Access Token

为了在刷新 Access Token 的过期时间，可在 Access Token 有效期内请求更新有效期。

```http
POST https://littleskin.cn/api/auth/refresh
Authorization: Bearer {access_token}
```

请求成功后将返回 JSON 响应。

```jsonc
{
  "token": "***J.W.T***"
}
```

| 值      | 解释                         |
| ------- | ---------------------------- |
| `token` | 新的 Access Token (JWT 格式) |
