<template>
    <span class="bs-btn primary">
        <slot></slot>
    </span>
</template>

<style scope>
.bs-btn {
  box-shadow: none;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  text-align: center;
  margin: 0 0.4rem;
  padding: 0.25rem 0.65rem;
  display: inline-block;
  font-size: 0.8rem;
  line-height: 1.5;
  vertical-align: middle;
}
.primary {
  background-color: #007bff;
}
</style>