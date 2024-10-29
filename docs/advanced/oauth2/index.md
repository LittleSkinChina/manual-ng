# OAuth 2

<!--@include: ../for-experts.template.md-->

LittleSkin 实现了 OAuth 2 服务端。通过 OAuth 2，你可以在你的应用中集成「使用 LittleSkin 账户登录」这样的功能，并请求读取和修改用户在 LittleSkin 上的数据。

> [!IMPORTANT] ✨ 为启动器等应用带来了新的可能
> LittleSkin 现已支持通过 OAuth 获取用以访问 Yggdrasil API 的 Minecraft 令牌。

## 创建 OAuth 2 应用

在你的应用中集成 OAuth 2 之前，你需要先在 LittleSkin [<BSSection>创建应用</BSSection>](https://littleskin.cn/user/oauth/manage)。

通过提供：

- 应用名称（将被展示在用户的授权界面上）
- 回调 URL / `redirect_uri`  
  若要添加多条回调 URL，每条 URL 之间可使用半角逗号 `,` 分隔

你将会被分配到：

- 客户端 ID / `client_id`
- 客户端 Secret / `client_secret`

## 获取访问令牌

对于需要鉴权的 API，需要先向用户请求授权，获取到访问令牌（Access Token）后，再向对应的 API 发起请求。

LittleSkin 支持以下授权请求方式：

<NCard title="授权代码授予（Authorization Code Grant）" link="./authorization-code-grant" target="_blank">
使用授权代码流（Authorization Code Flow）获取访问令牌，适用于有后端的场景
</NCard>

<NCard title="设备授权授予（Device Authorization Grant）" link="./device-authorization-grant" target="_blank">
使用设备代码流（Device Code Flow）获取访问令牌，适用于无后端或其他受限制的场景
</NCard>

## 使用访问令牌进行鉴权

在请求需要鉴权的 API 时，将访问令牌作为 Bearer Token 放入 HTTP 请求的 Authorization 头中，即可完成鉴权。

例如，使用访问令牌请求用户信息：

```http
GET https://littleskin.cn/api/user HTTP/1.1
Accept: application/json
Authorization: Bearer {{access_token}}
```

- ✅ 如访问令牌有效，LittleSkin 将正常返回 API 响应；
- ❌  如访问令牌无效，LittleSkin 将返回 `HTTP 401 Unauthorized` 错误；
- ⛔ 如应用访问了用户未授权的资源，LittleSkin 将返回 `HTTP 200 OK`，但 JSON 响应中将包含一个 `code` 参数，其值为 `403`。

如要了解更多 API 的用法，请参阅 [LittleSkin API](../api.md)。

> [!WARNING] 不要解码令牌
> 请不要在代码中解码或验证任何不由你直接签发的令牌，即使其看起来像是某种你熟悉的形式——除非文档中明确说明你可以这么做。
> 
> LittleSkin 签发的令牌可以是任何形式，在代码中解码令牌可能导致你的应用在未来无法正常工作。因此，除非文档中明确说明你可以从令牌中获取信息，否则请始终将令牌视为不透明的字符串。

> [!IMPORTANT] 建议在请求中添加 Accept 头
> 我们建议始终在请求 API 时在 HTTP 请求中添加 `Accept: application/json` 头。
>
> 一般情况下，即使不添加这个头，LittleSkin API 也将返回 JSON 响应，但在部分错误情况下可能会返回意想不到的响应。因此，除文档中特别说明的情况外，请在请求中添加这个头。
