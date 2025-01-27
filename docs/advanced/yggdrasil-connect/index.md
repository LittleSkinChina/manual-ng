# Yggdrasil Connect <Badge type="warning" text="草案" /> <Badge type="warning" text="测试页面" />

<!-- @include: @/advanced/for-experts.template.md -->
<!-- @include: @/pay-for-minecraft.template.md -->

> [!IMPORTANT] 🔎 草案正在公开审阅中
> 此功能是 [Yggdrasil Connect 草案](https://github.com/yushijinhun/authlib-injector/issues/268) 的一部分，处于公开审阅阶段。
>
> 我们深知，这份草案绝非简单的几句话就能定夺，它的实现和推动依赖于社区的共同努力。
>
> 我们充分尊重且欢迎社区提出的每一条具有建设性的意见。

> [!IMPORTANT] ♻️ 现有的传统 Yggdrasil API 短时间内不会终止服务
> Yggdrasil Connect 和现有的传统 Yggdrasil API 会同时提供服务，以确保用户始终能够轻松、稳定地使用 LittleSkin 的服务。

> [!WARNING] 🐞 最终的方案可能有所不同
> 在 Yggdrasil Connect 的最终实现方案中，可能会与当前版本有所不同。

<NCard title="📃 现有的 Yggdrasil 服务端技术规范" link="https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83" target="_blank">
Yggdrasil 服务端技术规范 · yushijinhun/authlib-injector Wiki
</NCard>

<NCard title="📃 正在公开审阅中的 Yggdrasil Connect 规范" link="https://github.com/yushijinhun/authlib-injector/issues/268" target="_blank">
[proposal] Yggdrasil Connect Specification (Public Review) · Issue #268 · yushijinhun/authlib-injector
</NCard>

---

Yggdrasil Connect 是基于 OpenID Connect 协议的全新用户身份认证协议，其目的是取代现有的 Yggdrasil API 中的 Auth Server 部分。

单纯的用户名密码登录已经过时了。自 2020 年 10 月起，Mojang 官方逐步推行开始使用 Microsoft 的 OAuth 2.0 登录，众多启动器纷纷添加了对其的支持。

<mark>Yggdrasil Connect 使用与目前 Microsoft 类似的规范和流程，这使得启动器开发者可以复用部分代码。</mark>

<details>
<summary>什么是 OpenID Connect？</summary>

> [!NOTE] 关于 OpenID Connect
> [OpenID Connect](https://openid.net/developers/how-connect-works/) 是一种 **基于 OAuth 2.0 协议** 的身份验证层，它允许客户端根据授权服务器的验证结果，来验证终端用户的身份和获取用户的基本信息。
>
> 简而言之，OpenID Connect 提供了一种简单的方式来让网站和应用程序安全地使用用户在其他地方（如 Google、Microsoft 等）的身份验证信息。
>
> OpenID Connect 成为大势所趋的原因包括：
>
> - **标准化**：它提供了一个标准的、广泛支持的协议，使得跨多个应用程序和服务进行身份验证变得更加容易
> - **安全性**：通过使用 OAuth 2.0 和 ID 令牌，OpenID Connect 提供了强大的安全性和灵活性
> - **简化登录过程**：用户可以避免为每个服务创建和管理不同的账户，而是使用已有的身份进行登录
> - **互操作性**：OpenID Connect 支持不同身份提供者和服务提供者之间的互操作性，促进了互联网服务的无缝集成
> - **灵活性**：它支持多种类型的客户端，包括 Web 应用、移动应用和基于设备的客户端

</details>

---

![现有 Yggdrasil 服务端技术规范架构示意图](../assets/yggdrasil-connect/current-yggdrasil-api.drawio.svg)

在现有的 Yggdrasil API 的 Auth Server 部分中存在以下缺陷：

- **存在密码泄露的风险**
  
  用户需要将自己的用户名和密码直接暴露给第三方应用，才能通过第三方应用访问 Yggdrasil API

- **无法良好地保障用户账户的安全**

  在设计上几乎没有考虑到二步验证 / 多因素认证

- **用户在不同应用之间的登录体验存在较大割裂**

  由于各个第三方应用在该部分的的实现的差异，用户在不同应用之间的登录体验存在较大割裂，时常出现应用实现不完整导致用户无法正常登录的问题。

- **传统 Auth Server 限制了验证服务器的新功能的开发**

  简单的用户名密码验证已经无法满足日益多样化的需求，Mojang 也已弃用传统验证。

Yggdrasil Connect 的目标即是解决这些问题。

## Device Code Flow
Yggdrasil Connect 客户端主要指的是启动器。

<NCard title="📃 启动器实现规范" link="./launcher" target="_blank">
启动器的基础实现流程 <Badge type="warning" text="测试页面" />
</NCard>
