<template>
    <div class="relative py-4 xl:py-0 h-5 flex justify-center items-center w-full xl:h-full" ref="main">
        <h1 class="truncate px-3 text-xs absolute top-1/2 -translate-y-1/2 left-0 bg-light overflow-hidden xl:top-0 xl:left-1/2 
                                xl:-translate-x-1/2 xl:translate-y-[calc(100%_+_1.03rem)] xl:origin-center xl:-rotate-90 sm:text-base xl:text-xs 4xl:text-base 6xl:text-lg"
            ref="movingText" id="movingText">{{ text }}</h1>
        <div class="w-full h-0.5 bg-yellow xl:w-0.5 xl:h-full"></div>
    </div>
</template>

<script setup>
import gsap from 'gsap'
import { useWindowSize } from '@vueuse/core';
import { useResizeObserver } from '@vueuse/core';


const props = defineProps({
    play: {
        type: Boolean,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: false
    }
})


const movingText = ref(null)
const main = ref(null)
const ctx = ref()

const { width } = useWindowSize()
// const reactiveWidth = ref(width.value)


const createLoop = (el, elChild) => {
    if (width.value < 1280) {
        gsap.to(elChild, {
            x: el.offsetWidth - elChild.offsetWidth,
            duration: 5,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
        })
    } else {
        gsap.to(elChild, {
            y: el.offsetHeight - 3 * elChild.offsetHeight,
            duration: 5,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
        })
    }
}


watch(() => props.play, (val) => {
    if (val) {
        ctx.value = gsap.context((self) => {
            const movingText = self.selector('h1')
            createLoop(main.value, movingText[0])
        }, main.value);
    } else {
        if (ctx.value) {
            ctx.value.revert()
        }
    }
})

useResizeObserver(main, (entry) => {
    if (ctx.value) {
        ctx.value.revert()
    }
    if (props.play) {
        ctx.value = gsap.context((self) => {
            const movingText = self.selector('h1')
            createLoop(main.value, movingText[0])
        }, main.value);
    }
})

onUnmounted(() => {
    if (ctx.value) {
        ctx.value.revert();
    }
})
</script>