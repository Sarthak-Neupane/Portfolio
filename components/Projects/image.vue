<template>
    <div class="w-full flex justify-center items-center">
        <img :src="src" :alt="alt" class="h-full w-full object-cover sm:aspect-video lg:w-3/4 4xl:w-2/4" />
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