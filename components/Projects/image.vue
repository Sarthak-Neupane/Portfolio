<template>
    <div class="w-full flex justify-center items-center">
        <img v-if="src" :src="src" :alt="alt" class="h-full w-full object-cover sm:aspect-video lg:w-3/4 4xl:w-2/4" />
    </div>
</template>

<script setup>
const props = defineProps({
    src: {
        required: true
    },
    alt: {
        required: true
    },
})
</script>