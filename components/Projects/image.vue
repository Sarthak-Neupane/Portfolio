<template>
    <img :src="src" :alt="alt" class="h-full w-full object-cover" />
</template>

<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
})
</script>