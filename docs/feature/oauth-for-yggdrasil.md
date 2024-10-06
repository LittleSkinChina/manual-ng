# 通过 OAuth 访问 Yggdrasil API

<!--@include: ../advanced/for-experts.template.md-->

authlib-injector 外置登录利用了 Minecraft 自带的 Yggdrasil 鉴权认证系统，已经成为了多人游戏中用户身份认证的主流手段之一。

但传统的 Yggdrasil API 仍然存在设计上的缺陷。Yggdrasil API 的 [登录 API](https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E7%99%BB%E5%BD%95) 需要由启动器直接处理用户输入的账号和密码，并将其在 HTTP 请求中明文发送，这给了恶意程序盗取用户机密信息的可乘之机；且该 API 在设计上几乎没有考虑到二步验证，无法良好地保障用户的资产安全。

为解决这一问题，Mojang 在 2020 年 10 月宣布，将原先的 Mojang 账号体系迁移至 Microsoft 账号，以在全平台上提供统一的身份认证体验。并通过 Microsoft 账号体系提供的多因素认证功能保障用户账号安全。这一迁移行动已于 2023 年 12 月完成。

---

> 那，第三方 Yggdrasil 认证服务器呢？

作为事实上的国内最大第三方 Yggdrasil 验证服务器，长期以来，LittleSkin 饱受不同启动器上身份认证体验不统一导致的用户体验低下的问题的折磨（一个典型的例子是 PCL，其在登录失败时不会向用户展示验证服务器返回的错误详情，而是显示一个其推测的所有可能原因的文字模板，这一问题直至 PCL 2.8.6 才得以解决）；

也因为传统 Yggdrasil API 的登录 API 不支持「直接输入用户名和密码」以外的身份认证方式，LittleSkin 一直无法实装用户体验良好的二步验证和社交网站登录功能。

> We've had enough.

我们决定改变这一现象，在不同启动器上为所有用户提供用户体验统一的 Yggdrasil 身份认证服务。

因此，我们很高兴地宣布：**即日起，LittleSkin 支持通过 OAuth 获取用以访问 Yggdrasil API 的 Minecraft 令牌。**

---

与 Mojang 一样，我们认为向用户提供统一的身份验证体验的最好的方式就是 OAuth。

OAuth 是一项开放且成熟的用户资源授权规范，允许第三方应用（如启动器）在经过用户授权的情况下访问用户所拥有的资源，而无需将用户名和密码直接提供给第三方应用。

OAuth 允许用户通过网页授予第三方应用访问权限，以在不同平台上获得统一的用户体验（在这个智能设备横行的时代，随手拿出一台支持网页浏览器的设备几乎易如反掌），还可以通过基于 TOTP 或 [通行密钥](./passkey-login.md) 的二步验证功能（即将推出）保护自己的 LittleSkin 账号和服务器内游戏数据的安全。

<NCard title="✨ 了解现在可用的 OAuth 授权方式" link="/advanced/oauth2/" >
授权代码授予（Authorization Code Grant）和设备授权授予（Device Authorization Grant）现已开放！
</NCard>

---

为实现这一特性，我们在 LittleSkin API 中添加了两个新的 API：

- 📁 [获取用户名下所有角色的 Yggdrasil 档案](../advanced/api.md#get-all-yggdrail-profiles-of-user)
- 🔑 [获取 Minecraft 令牌](../advanced/api.md#get-minecraft-token)

应用可以在经过用户授权的情况下，通过第一个 API 获取用户名下角色的 Yggdrasil 档案，然后通过第二个 API 轻松获取 Minecraft 令牌，进以获得 Yggdrasil API 的访问权限。

---

我们在设计这一特性时充分考虑到了应用的适配难度，并努力提升改造时的便利性。

我们将 🔑 第二个 API 的响应设计为与传统 Yggdrasil API 的登录 API 相同的响应，使得应用开发者可以直接重用这部分的相关代码；同时，考虑到需要访问 Yggdrasil API 的应用大多是第三方 Minecraft 启动器，我们为 LittleSkin 添加了符合 [RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628) 的 [OAuth 设备授权授予（Device Authorization Grant）](../advanced/oauth2/device-authorization-grant.md) 支持——这也是大多数启动器实现微软正版登录的方式。

---

两个新的 Yggdrasil 相关的 LittleSkin API 以及 OAuth 设备代码流现已面向所有应用开放（需要重新请求用户授权）。

我们建议所有需要访问 Yggdrasil API 的应用尽快切换至 OAuth，以获得更好的用户体验和更高的安全性。

> [!TIP] ♻️ 传统 Yggdrasil API 的生命周期
>
> - 🔚 传统 Yggdrasil API 的 **登录 API** 在很长一段时间内仍然会保持可用，但我们将不再对其进行维护，且最终会在未来停止对其的支持。
> - ✅ 传统 Yggdrasil API 的 **其它 API** 将持续保持可用——它们仍在 Minecraft 游戏中被广泛使用。
