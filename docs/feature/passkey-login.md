<script setup>
import { faUser } from '@fortawesome/free-solid-svg-icons'
</script>

# 使用 安全密钥 登录 LittleSkin

<!--@include: ./feature-tip.template.md-->

摘自 [fido Alliance 的介绍](https://fidoalliance.org/passkeys/)：

> 通行密钥基于 FIDO 标准，是密码的替代品，能让用户在各种设备上更快、更方便、更安全地登录网站和应用程序。与密码不同，通行密钥始终保持强大功能，并可抵御网络钓鱼。
>
> 通行密钥简化了应用程序和网站的账户注册，易于使用，可在用户的大多数设备上使用，甚至可在物理距离较近的其他设备上使用。

[[toc]]

## 详解

### 管理当前密钥

进入 [<BSSection>仪表盘</BSSection>](https://littleskin.cn/user) ，点击 [<BSSection style="background-color:#343a40; color:#ffffff; border: none"><FA :icon="faUser" />个人资料</BSSection>](https://littleskin.cn/user/profile) ，找到底部的 [<BSSection style="background-color:#007bff; color:#ffffff; border: none">管理通行密钥</BSSection>](https://littleskin.cn/user/passkey) ，进入通行密钥管理页面。

下图是页面中各信息点的详解：

![信息详解](./assets/passkey-login/page-desc.png)

### 添加通行密钥

在通行密钥管理页面点击 <BSSection style="background-color:#007bff; color:#ffffff; border: none">添加通行密钥</BSSection> ，唤起系统的验证页面。此时请您按照页面提示操作，操作成功后即可完成添加。

添加后该密钥将可在[登录页面](https://littleskin.cn/auth/login)内用于 Passkey 快速登录。

### 使用通行密钥登录

在[登录页面](https://littleskin.cn/auth/login)的下方「其他登录方式」处，选择 [<BSSection>Passkey</BSSection>](https://littleskin.cn/auth/passkey) 以使用通行密钥快速登录。

### 删除通行密钥

在通行密钥管理页面点击 <BSSection style="background-color:red; color:#ffffff; border: none">删除</BSSection> ，将弹出删除确认框：

![删除确认](./assets/passkey-login/delete-confirm.png)

按提示信息输入，点击确认后，即可删除密钥。

删除后，该密钥不能在[登录页面](https://littleskin.cn/auth/login)内用于 Passkey 快速登录。

::: warning 删除前请三思！

删除操作通常是**永久性**的！我们既不能也无法帮你恢复被删除的密钥的信息。
:::

## 在操作过程中遇到问题？

<NCard title="🙋 加入用户交流群" link="/user-group" >
你可以加入我们的官方用户交流群来提问
</NCard>
<NCard title="📬️ 通过邮件发送工单" link="/email" >
也可以给我们发送邮件工单
</NCard>
