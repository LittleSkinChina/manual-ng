<script setup>
import { ref } from 'vue'
const latest = ref('')
const updated = ref('')
const download = ref('')
const downloadMirror = ref('')

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

fetch('https://authlib-injector.yushi.moe/artifact/latest.json').then(r => r.json()).then(r => {
    latest.value = r.version
    updated.value = new Date(r.release_time).toLocaleString()
    download.value = r.download_url
    downloadMirror.value = r.download_url.replace('https://authlib-injector.yushi.moe/', 'https://bmclapi2.bangbang93.com/mirrors/authlib-injector/')
})
</script>

<template>
    <div class="ncard">
        <div class="ncardBody">
            <div class="card-title text">获取最新版本的 authlib-injector</div>
            <div class="card-text text">
                <p><code>authlib-injector-{{ latest }}.jar</code> , 更新于 {{ updated }}</p>
                <a class="download-button" target="_blank" :href="download">
                    <FontAwesomeIcon :icon="faFileArrowDown" />&nbsp;&nbsp;开发者提供的网站
                </a><a class="download-button" target="_blank" :href="downloadMirror">
                    <FontAwesomeIcon :icon="faFileArrowDown" />&nbsp;&nbsp;BMCLAPI
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ncard {
    border: 1px solid var(--vp-c-border);
    margin: 2em 0;
    border-radius: 8px;
}

.ncardBody {
    padding: 1.8em;
}

a {
    color: var(--vp-c-text-1);
    text-decoration-line: none;
}

.card-title {
    font-size: 1.2em;
    margin-bottom: .8em;
}

.card-text {
    font-size: 0.9em;
}

.download-button {
    cursor: pointer;
    background-color: var(--vp-c-bg);
    box-shadow: none;
    color: var(--vp-c-text-1);
    border: 1px solid var(--vp-c-text-1);
    border-radius: 0.25rem;
    text-align: center;
    margin-right: 1em;
    padding: .6em 2em;
    display: inline-block;
    font-size: 1em;
    line-height: 1.5;
    vertical-align: middle;
    transition: all 200ms ease;
}

.download-button:hover {
    border: 1px solid var(--vp-c-brand);
}

</style>