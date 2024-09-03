---
titleTemplate: LittleSkin FAQ
description: 任何事物都不可能尽善尽美，LittleSkin 也是如此。如果你在使用 LittleSkin 的过程中遇到了任何问题，看看这个也许会帮到你。
head:
  - - meta
    - name: keywords
      content: mc skin cape 我的世界 faq littleskin 万用皮肤补丁 csl 外置登录 皮肤站 披风 报错 打不开 加载 不显示 无效的会话 看不见 邮件 邮箱 挂了 密码 忘记密码 无法登陆
---

<script setup>
import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons'
</script>

# 站点使用相关

[[toc]]

## <Badge type="tip" text="常见" /> 收不到验证邮件？ {#no-email}

请优先检查你的账号绑定的邮箱是否正确。如果不正确，请在[<BSSection><FA :icon="faUser" /> 个人资料</BSSection>](https://littleskin.cn/user/profile)页面中将其更改为正确的邮箱。

再看看你的邮箱的<BSSection><FA :icon="faTrash" /> 垃圾箱</BSSection>。如果垃圾箱中也没有验证邮件，可以尝试再发送一次验证邮件。

如果你短时间内反复发送验证邮件，你的邮箱可能会被我们的邮件服务提供商封禁，这种情况下请向我们寻求帮助。

<Helpme>如果你确定你绑定的邮箱正确，并且验证邮件不在你的邮箱的垃圾箱里，请联系我们排查问题。</Helpme>

> [!IMPORTANT] 常见的错误邮箱
> 我们经常遇到有用户填写了错误的邮箱，<mark>检查一下你是否犯了同样的错误</mark>。
>
> - ❌ 使用 QQ 邮箱时将 QQ 号输入错误
>
>     ✅ 认真地、仔细地、一个一个数字地：比对检查你的 QQ 号
> - ❌ 使用 QQ 邮箱时将手机号填写在 `@qq.com` 前
>
>     ✅ 正确的做法应该是 `你的QQ号@qq.com`
> - ❌ 使用 QQ 邮箱时拼写错误，例如 `123456789@qq.coom` / `qq@qq.com123456789`
>
>     ✅ 正确做法如上，并检查是否你的输入是否有错误
> - ❌ 使用 QQ 邮箱时经过调查发现其并没有开通 QQ 邮箱服务
>
>     ✅ 正确做法是前往 <https://mail.qq.com/> 检查你是否真的开通了 QQ 邮箱
> - ❌ 使用 163 邮箱时将手机号填写在 `@163.com` 前
>
>     ✅ 正确做法是填写实际的邮箱地址
> - ...

## <Badge type="tip" text="常见" /> 我的角色被别人占用了，我可以要回来吗？ {#player-already-exists}

<mark>不可以</mark>。重名的几率很大，随意更改角色所有者对双方都不公平，所以不管你是名声多大的主播还是某个影响力巨大的人物，我们都不会提供更改角色所有者的服务。

如果你发现你的角色名被别人占用了，你可以先联系当前该角色的所有者进行协商，没准这事儿就成了，同时你还收获了一个朋友呢。如果你好好地和当前该角色的所有者商量（而不是一上来就用一种强硬的口气要求释放角色——这种情况大多不会有好结果），在大多数情况下，他们都可以是很好说话的。至于怎么联系？缘分到了就自然联系上了咯。

> [!NOTE] 例外情况
>
> - 你拥有正版 Minecraft
> - 你的正版 ID 就是那个被他人占用的角色名
>
> 这种情况下，你可以通过 [绑定正版 Minecraft](/newbee/premium) 来强制获取这个角色的所有权。

## <Badge type="warning" text="关键" /> 无法访问 LittleSkin 网站 {#server-down}

你可能在尝试访问 LittleSkin 网站时遇到了类似于以下报错：

- 503 Service Temporarily Unavailable
- 502 Bad Gateway
- Error 525, SSL handshake failed
- Service Unavailable

当你遇到这类情况时，请稍安勿躁。

我们已在第一时间通过自动监测程序即时发现了问题，并正在全力以赴解决中。

我们的紧迫感与你同样强烈，都在期待着尽快恢复正常服务。

<Helpme>若在等待一段时间后依旧无法访问 LittleSkin 网站，你可以通过以下方式获取最新的进展情况和相互支持。</Helpme>

## 注册账号时失败 {#ip-limit}

若在注册账号时出现含有以下关键词的报错，则说明你的 IP 地址上注册的用户数已达上限：

- **【IPL】**
- 注册 IP 达到上限
- 网络环境异常，请使用移动网络注册

导致此问题的原因较为复杂，但解决方案很简单。

🛠️ 使用移动通讯网络（如流量）进行注册即可。

## 无法绑定正版账号？ {#microsoft-failed-to-link}

请先确定你购买了正版 Minecraft 并且为你的正版 Java 版 Minecraft 账号设置了 ID（档案名称 / Profile Name）。你可以在 [Minecraft 官网](https://www.minecraft.net/msaprofile/mygames/editprofile) 设置 ID。

保险起见，建议使用官方启动器启动一次最新版本的 Minecraft 再尝试绑定正版账号。

> [!NOTE] 提示
> Microsoft 服务器在中国大陆少数地区的连接质量较差，验证时可能会遇到网络问题。你可以等待一段时间再重新尝试或者切换一下网络环境。

> [!WARNING] 注意
> 由于 Mojang 账号已全面迁移至 Microsoft 账号，我们已不再支持通过 Mojang 账号绑定正版 Minecraft 账号。

<Helpme>

如果你确定你购买了正版 Minecraft，并且你可以通过官方启动器启动最新版本的 Minecraft，但仍然无法在 LittleSkin 绑定正版账号，请向我们反馈。

<NCard title="🗝️ 关于正版绑定" link="/premium" >
了解绑定正版 Microsoft 账号的完整步骤和详细说明
</NCard>

</Helpme>

## 无法正常显示某些页面 / 图片？ {#broken-webpage}

大多数情况下，这是由你的浏览器导致的。

请先尝试<mark>按下键盘上的 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd></mark>（即清除本地缓存并刷新页面），如果问题仍然存在，则说明你的浏览器过时了。

很多过时的浏览器不支持 LittleSkin 使用的一些新技术，而你可能就正在使用这些过时的浏览器。你需要<mark>更新你的浏览器至最新版本</mark>。然而，有些浏览器即使更新到最新版本，其使用的浏览器内核仍然是过时的。

经测试，LittleSkin 在以下浏览器的最新版本上都能正常工作：

- [Microsoft Edge](https://aka.ms/msedge) <Badge type="info" text="仅新版" />
- [Google Chrome](https://www.google.cn/chrome)
- [Mozilla Firefox](https://www.mozilla.org/firefox/new)

在极少数情况下，你使用的设备的显卡不支持 LittleSkin 页面中的使用的技术（如 WebGL）也会导致此问题。你可能需要更新显卡驱动或更换至新的显卡才能彻底解决。

<Helpme>如果你还是没有什么头绪，请向站点管理员反馈。</Helpme>

## 不是有效的披风文件 {#invalid-cape}

LittleSkin 对材质格式有着严格的要求，请按照 Minecraft 官方的标准来绘制披风。

此外，LittleSkin 不支持 22\*17 格式的披风，请自行将披风转换为 64\*32 格式后再上传。

## 忘记站点密码/如何修改密码 {#change-password}

如果您忘记了站点密码导致无法登录，或想要重置密码，请参考以下操作

  #### 如果你知道密码想要修改密码
  - 打开[`个人资料`](https://littleskin.cn/user/profile)页面
  - 找到`更改密码`模块
  - 输入你的老密码和新密码进行修改

  #### 如果你忘记了原密码
  - 若处于登录状态，请先退出登录（电脑端点击右上角头像，手机端点击左上菜单栏选择登出账号）
  - 在首页选择登录
  - 在登录页面账号密码框下侧选择`忘记密码?`按钮
  - 输入你的邮箱，并前往邮箱查收邮件
  - 将邮件里的链接使用浏览器打开 **不要使用内置浏览器访问！！！**
  - 按步骤操作即可

## 发生严重错误 {#server-error}

如果你在使用 LittleSkin 时遇到了红色的 <BSButton style="background-color: #dc3545;">严重错误</BSButton> 弹窗，别着急。

错误可能是临时性的，你可以稍等一会儿再试试看。

<Helpme>如果长时间等待后错误仍未解决，请将其截图，联系站点管理员处理。</Helpme>

## 什么时候会举办活动呀？活动的内容有什么呢？ {#activities}

LittleSkin 会不定期举办站内活动。具体何时举办活动以及活动细则将由站点管理员讨论后宣布。

一般来说，在隆重的节假日（如春节）、站点周年庆（每年的三月）和用户总数达到一定程度时会举办活动。

## 我被封禁了，可以解封吗？ {#banned}

不可以。封禁是永久性的，<mark>除非是误封</mark>，就算你大额捐助并且手写书面保证书也不能给你解封。

<Helpme>如果你确定是误封，请联系站点管理员处理。</Helpme>
