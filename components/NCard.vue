<script setup lang="ts">
// @ts-ignore: 2307
const props = defineProps<{
    title: string,
    link: string
}>()
</script>

<template>
    <div class="ncard">
        <a :href="props.link">
            <div class="ncardBody">
                <div class="card-title text">{{ props.title }}</div>
                <div class="card-text text">
                    <slot></slot>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped>
.ncard {
    border: 1px solid #ebedf0;
    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, .15);
    /* background-color: #f7f7f7; */
    margin-bottom: 2em;
    border-radius: 8px;
}

.ncard:hover {
    border: 1px solid var(--vp-c-brand);
    transition: all 200ms ease;
}

.ncardBody {
    padding: 1.8em;
}

a {
    color: var(--vp-c-text-1);
    text-decoration-line: none;
}

.card-title {
    font-size: 1.5em;
    margin-bottom: 14px;
}

.card-text {
    font-size: 0.9em;
}
</style>