---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: LittleSkin
  text: 用户使用手册
  tagline: 不知道填什么好
  actions:
    - theme: brand
      text: 开始阅读
      link: /README

  image:
    src: /LittleSkin_square.png
    alt: LittleSkin

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #6c6c6c 30%, #845335);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #f8d3bf 50%, #391900 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
