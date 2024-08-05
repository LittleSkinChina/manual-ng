<script setup>
import { faUser } from '@fortawesome/free-solid-svg-icons'
</script>

# 使用 安全密钥 登录 LittleSkin

<!--@include: ./feature-tip.template.md-->

[[toc]]

## 管理当前密钥

进入[仪表盘](https://littleskin.cn/user)，点击 [<BSSection style="background-color:#343a40; color:#ffffff; border: none"><FA :icon="faUser" />个人资料</BSSection>](https://littleskin.cn/user/profile) ，找到底部的 [<BSSection style="background-color:#007bff; color:#ffffff; border: none">管理通行密钥</BSSection>](https://littleskin.cn/user/passkey) ，进入通行密钥管理页面。

在当前页面会显示您添加的每个密钥的详细信息：

- 您设定的备注名称
- 添加这个密钥的时间

此外，将在每个密钥的详细信息下方提供如下操作：

- <BSSection>重命名</BSSection>

  重命名该密钥。

- <BSSection style="background-color:red; color:#ffffff; border: none">删除</BSSection>

  删除该密钥。

  ::: warning

  删除密钥之后将不能再使用此密钥进行登录！
  :::

## 添加通行密钥

在通行密钥管理页面点击 <BSSection style="background-color:#007bff; color:#ffffff; border: none">添加通行密钥</BSSection> ，唤起系统的验证页面。此时请您按照页面提示操作，操作成功后即可完成添加。

## 使用通行密钥登录

在[登录页面](https://littleskin.cn/auth/login)的下方「其他登录方式」处，选择 [<BSSection>Passkey</BSSection>](https://littleskin.cn/auth/passkey) 以使用通行密钥快速登录。

## 删除通行密钥

在通行密钥管理页面点击 <BSSection style="background-color:red; color:#ffffff; border: none">删除</BSSection> ，即可删除该通行密钥。

## 在操作过程中遇到问题？

<NCard title="🙋 加入用户交流群" link="/user-group" >
你可以加入我们的官方用户交流群来提问
</NCard>
<NCard title="📬️ 通过邮件发送工单" link="/email" >
也可以给我们发送邮件工单
</NCard>
