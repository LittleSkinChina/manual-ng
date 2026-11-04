<template>
    <div class="card-grid">
        <slot />
    </div>
</template>

<style scoped>
.card-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 2em;
    margin-bottom: 2em;
}

@media (min-width: 48rem) {
    .card-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>