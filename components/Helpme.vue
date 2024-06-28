<script setup lang="ts">
// @ts-ignore: 2307
import { withDefaults, defineProps } from 'vue'
import NCard from './NCard.vue'
const props = withDefaults(
    // @ts-ignore: 2307
    defineProps<{
        afdian?: boolean,
        readBeforeAsk?: boolean
    }>(),
    {
        afdian: false,
        readBeforeAsk: false,
    }
)
</script>
<template>
    <div class="ncard">

        <div class="ncard-desc">
            <p class="ncard-title">向我们寻求帮助</p>
            <slot></slot>
            <NCard v-if="props.readBeforeAsk" title="✨ 遇到问题了怎么办？" link="/problems#运营团队-或是帮助你的人-并不是神" target="_blank">
                在联系我们之前，请<mark>务必认真仔细地阅读一下这篇文章</mark>，有助于更好地帮助你解决问题
            </NCard>
        </div>


        <div class="card-container">
            <div class="support-card">
                <a href="/user-group" target="_blank">
                    <div class="support-card-body">
                        <div class="title-text text">
                            🙋 加入用户交流群
                        </div>
                    </div>
                </a>
            </div>
            <div class="support-card">
                <a href="/email" target="_blank">
                    <div class="support-card-body">
                        <div class="title-text text">
                            📬️ 发送邮件工单
                        </div>
                    </div>
                </a>
            </div>
            <div v-if="props.afdian" class="support-card">
                <a href="https://afdian.net/a/tnqzh123" target="_blank">
                    <div class="support-card-body">
                        <div class="title-text text">
                            🧑‍🔬 1v1 技术支持
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

</template>

<style scoped>
.ncard {
    margin: 2em 0;
}
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.support-card {
    border: 1px solid #ebedf0;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, .15);
    margin-bottom: 2em;
    border-radius: 8px;
    transition: all 200ms ease;

    margin: .5em .5em;
    flex-grow: 1;
    flex-basis: 14em;
}

.support-card:hover {
    border: 1px solid var(--vp-c-brand);
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, .1);
}

.support-card-body {
    padding: 1.8em;
}

a {
    color: var(--vp-c-text-1);
    text-decoration-line: none;
}

a::after {
    content: none !important;
}

.title-text {
    font-size: 1.2em;
}

.ncard-title {
    font-size: 1.5em;
}

.ncard-desc {
    font-size: 0.9em;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: .8em;
}
</style>