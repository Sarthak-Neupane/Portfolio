<template>
    <div class="w-full bg-green flex justify-center items-center">
        <img :src="src" :alt="alt" class="h-full w-full object-cover sm:aspect-video" />
    </div>
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