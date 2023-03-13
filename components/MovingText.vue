<template>
    <div class="relative py-4 h-5 flex justify-center items-center w-full" ref="main">
        <h1 class="truncate px-3 text-xs absolute top-1/2 -translate-y-1/2 left-0 bg-[#FFFEFF] overflow-hidden"
            ref="movingText">Who am I</h1>
        <div class="w-full h-0.5 bg-[#FFBE0B]"></div>
    </div>
</template>

<script setup>
import gsap from 'gsap'
import { useWindowSize } from '@vueuse/core';

const movingText = ref(null)
const main = ref(null)
const ctx = ref()

onMounted(() => {
    ctx.value = gsap.context((self) => {
        gsap.to(movingText.value, {
            x: main.value.offsetWidth - movingText.value.offsetWidth,
            duration: 5,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
        })
    }, main.value);
});


onUnmounted(() => {
    ctx.value.revert();
})
</script>