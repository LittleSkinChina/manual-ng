---
outline: [2, 3]
---
# OAuth2 作用域 <Badge type="warn" text="测试页面" />

本页面列出了 LittleSkin 支持的 OAuth2 作用域（scope），以及它们的用途和注解。

---

[[toc]]

## 一般权限
### `openid`
OpenID Connect 标准作用域

获取 ID 令牌（ID Token）时必须使用

### `offline_access`
获取刷新令牌（Refresh Token）

刷新令牌可用于请求新的访问令牌

### `User.Read`
读取用户基本信息

### `Player.Read` / `Player.ReadWrite`
读取 / 读写用户的角色和对应材质

### `Closet.Read` / `Closet.ReadWrite`
读取 / 读写用户的衣柜收藏

### `Notification.Read`
读取用户的站内通知

### `PremiumVerification.Read`
读取用户正版验证状态

## Yggdrasil 权限

> [!WARNING] ⛔ 存在冲突
>
> [`Yggdrasil.PlayerProfiles.Read`](#yggdrasil-playerprofiles-read) 与 [`Yggdrasil.PlayerProfiles.Select`](#yggdrasil-playerprofiles-select) 冲突，**不可同时使用**。
>
> 若同时使用这两个权限：  
>
> - 在设备代码流中，LittleSkin 将返回 `invalid_scope` 错误  
> - 在授权代码流中，用户将正常完成授权，但在请求 API 时可能会返回错误

### `Yggdrasil.PlayerProfiles.Read`
读取用户的所有 Yggdrasil 档案

应用将得到用户的 **所有** Yggdrasil 档案

### `Yggdrasil.PlayerProfiles.Select`
要求在用户授权时将要求用户选择角色

应用将得到 **一个** 被选择的角色的 Yggdrasil 档案

### `Yggdrasil.Server.Join`
加入 Minecraft 多人游戏服务器

必须同时使用 `Yggdrasil.PlayerProfiles.Select` 或 `Yggdrasil.PlayerProfiles.Read`
