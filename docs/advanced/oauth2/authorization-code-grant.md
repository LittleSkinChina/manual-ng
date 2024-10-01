# 通过授权代码流获取 OAuth 访问令牌

授权代码流适用于有后端服务器，且应用通过后端服务器获取访问令牌的场景。

目前 LittleSkin 尚未支持 PKCE。

若要了解关于 OAuth 2.0 授权代码授予和授权代码流的更多信息，请参阅 [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)。

## 请求授权代码

客户端需要按以下格式拼接授权 URL，并引导用户在**浏览器**中访问：

```plain
https://littleskin.cn/oauth/authorize?client_id={{client_id}}&redirect_uri={{redirect_uri}}&response_type=code&scope={{scope}}
```

| 参数            | 值                     |
| --------------- | ---------------------- |
| `client_id`     | ...                    |
| `redirect_uri`  | ...                    |
| `response_type` | 固定值 `code`          |
| `scope`         | 要申请的权限列表，多个权限节点间以空格分隔 |

若 `scope` 参数为空，则默认为 `User.Read`。要了解具体的每个 API 要求申请的权限，请参阅 [LittleSkin API](./api.md)。

在用户完成授权后，LittleSkin 将会将用户重定向至回调 URL (`redirect_uri`)，并在 Query String 中包含一个名为 `code` 的参数，这个参数的值即为本次授权的授权代码。

## 兑换访问令牌

获取到授权代码后，应用需要向 LittleSkin 发送如下请求，以授权代码兑换访问令牌：

```http
// 请求体中的换行只是为了方便阅读，实际发起请求时不应换行，下同
POST https://littleskin.cn/oauth/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
client_id={{client_id}}&
client_secret={{client_secret}}&
redirect_uri={{redirect_uri}}&
code={{code}}
```

::: details curl 示例

```bash
curl -X POST \ 
  --url "https://littleskin.cn/oauth/token" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "grant_type=authorization_code" \
  --data "client_id={{client_id}}" \
  --data "client_secret={{client_secret}}" \
  --data "redirect_uri={{redirect_uri}}" \
  --data "code={{code}}"
```

:::

如果请求成功，LittleSkin 将返回如下响应：

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "token_type": "Bearer",
  "expires_in": 259200,
  "access_token": "******",
  "refresh_token": "******"
}
```

| 参数            | 值                        |
| --------------- | ------------------------- |
| `token_type`    | 令牌类型，固定值 `Bearer` |
| `expires_in`    | 令牌的有效时间（秒）      |
| `access_token`  | 访问令牌                 |
| `refresh_token` | 刷新令牌                 |

至此即完成了授权代码流的所有流程，成功获取到了访问令牌。

## 错误响应

在 OAuth 2 授权过程中，如发生错误，LittleSkin 将返回错误响应。

如错误在授权过程中发生，LittleSkin 会将用户重定向至回调 URL，并在 Query String 中包含 `error` 和 `error_description` 参数：

```plain
https://example.com/oauth/littleskin/callback?error={{error}}&error_description={{error_description}}
```

如错误在兑换访问令牌时中发生，LittleSkin 会返回如下错误响应：

```http
HTTP/1.1 400 Bad Request // server_error 时为 500 Internal Error
Content-Type: application/json

{
    "error": "error type",
    "error_description": "error description"
}
```

| 参数                | 值                                    |
| ------------------- | ------------------------------------- |
| `error`             | RFC 6749 中规定的错误类型            |
| `error_description` | 人类可读的错误描述文本                |

### 错误类型

以下只是列举 LittleSkin 可能返回的常见的错误，更多错误类型和原因请参考 RFC 6749。

| 错误类型                | 原因                                         |
| ----------------------- | -------------------------------------------- |
| `access_denied`         | 用户拒绝授权                                 |
| `invalid_client`        | 应用未注册或未申请白名单                     |
| `invalid_request`       | 请求参数有误，如缺少必要参数、参数值不合法等 |
| `invalid_scope`         | 请求的 scope 不合法                          |
| `server_error`          | 服务器内部错误，请联系 LittleSkin 运营组      |