<template>
    <span class="bs-section">
        <slot></slot>
    </span>
</template>

<style scope>
.bs-section {
  box-shadow: none;
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-text-1);
  border-radius: 0.25rem;
  text-align: center;
  margin: 0 0.4rem;
  padding: 0.25rem 0.65rem;
  display: inline-block;
  font-size: 0.8rem;
  line-height: 1.5;
  vertical-align: middle;
}
</style>