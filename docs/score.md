<script setup>
import {
    faGaugeHigh,
    faFileArrowUp, faStar, faCircleExclamation, faLock, faCakeCandles, faChampagneGlasses,
    faUserPlus, faCalendarCheck, faHeart, faLockOpen, faLink, faHandcuffs
} from '@fortawesome/free-solid-svg-icons'
</script>

# 积分系统

::: tip 提示
本文所述内容仅供参考，具体细则请以站内标注及站点管理员解释为准。
:::

积分系统是 LittleSkin 的一项重要机制，旨在防止滥用、合理调配资源，类似于现实中的货币系统。

你在 LittleSkin 网站上进行一些操作时会涉及到积分变动。

## 消耗积分的场景 {#use}

### <FA :icon="faFileArrowUp" /> 上传材质

上传材质需要消耗积分。

对于公开材质，每 KB 存储空间需要花费 1 积分；对于私密材质，每 KB 存储空间需要花费 20 积分。

::: warning 注意
材质上传页面显示的预估积分消耗仅供参考，实际积分消耗将按材质文件的实际大小计算。
:::

### <FA :icon="faStar" /> 收藏材质到衣柜

每个衣柜收藏需要花费 10 积分，取消收藏后积分会返还。

### <FA :icon="faCircleExclamation" /> 举报材质

为了防止恶意举报，在举报材质时，需要先扣除 100 积分作为抵押积分。
当被举报的材质被认定违规后，抵押积分将会返还，并且你可以获得额外的积分奖励。但如果被举报的材质未被认定违规，则抵押积分不予返还。

### <FA :icon="faLock" /> 公开材质改为私密材质

如果你将你上传的公开材质更改为了私密材质，那么需要扣除上传私密材质所需的积分。

### <FA :icon="faCakeCandles" /> 站点活动

参与一些站点活动（如积分抽奖）时可能需要消耗一定的积分。

## 获取积分的方式 {#get}

### <FA :icon="faUserPlus" /> 新用户初始积分

新用户注册后即拥有 1000 初始积分。

### <FA :icon="faCalendarCheck" /> 每日签到

每日 0 时后，点击用户中心首页 <BSSection><FA :icon="faGaugeHigh" /> 仪表盘 </BSSection> 中的 <BSButton><FA :icon="faCalendarCheck" /> 签到</BSButton> 按钮，可随机获得 10~100 不等的积分。每日只能签到一次，当日的签到机会不累计至次日。在站点活动时可能会临时调整签到积分奖励。

### <FA :icon="faHeart" /> 公开材质被收藏

你上传的公开材质每被收藏一次，你就会获得 10 积分。

如果被取消收藏，则奖励积分将会被收回。

### <FA :icon="faLockOpen" /> 私密材质改为公开材质

如果你将你上传的私密材质更改为了公开材质，在上传时多扣除的积分将会被返还。

### <FA :icon="faLink" /> 绑定正版角色

如果你拥有正版 Minecraft，可以通过绑定正版获得 1000 积分。

### <FA :icon="faHandcuffs" /> 举报材质成功

如果你举报的材质被确认违规，你将获得 1000 奖励积分。

### <FA :icon="faChampagneGlasses" /> 活动奖励

站点活动时可能会发放大量积分，活动期间注册的新用户的初始积分和每日签到可获得的积分上限也将有所提高。
