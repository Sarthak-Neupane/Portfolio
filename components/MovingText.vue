<template>
    <div class="relative py-4 lg:py-0 h-5 flex justify-center items-center w-full lg:h-full" ref="main">
        <h1 class="truncate px-3 text-xs absolute top-1/2 -translate-y-1/2 left-0 bg-light overflow-hidden lg:top-0 lg:left-1/2 
        lg:-translate-x-1/2 lg:translate-y-[calc(100%_+_1.03rem)] lg:origin-center lg:-rotate-90 sm:text-base lg:text-xs 4xl:text-base 6xl:text-lg"
            ref="movingText">Who am I</h1>
        <div class="w-full h-0.5 bg-yellow lg:w-0.5 lg:h-full"></div>
    </div>
</template>

<script setup>
import gsap from 'gsap'
import { useWindowSize } from '@vueuse/core';

const movingText = ref(null)
const main = ref(null)
const ctx = ref()

const { width } = useWindowSize()
const reactiveWidth = ref(width.value)

watch(width, (val) => {
    reactiveWidth.value = val
})


onMounted(() => {
    ctx.value = gsap.context((self) => {
        if (reactiveWidth.value < 1024) {
            gsap.to(movingText.value, {
                x: main.value.offsetWidth - movingText.value.offsetWidth,
                duration: 5,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true,
            })
        } else {
            gsap.to(movingText.value, {
                y: main.value.offsetHeight - 3 * movingText.value.offsetHeight,
                duration: 5,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true,
            })
        }
    }, main.value);
});


onUnmounted(() => {
    ctx.value.revert();
})
</script>