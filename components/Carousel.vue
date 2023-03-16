<template>
    <div class="flex justify-center items-center overflow-hidden" @mouseover="pauseCarousel" @mouseout="resumeCarousel">
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetOne.jpg" fit="cover" class="aspect-square object-cover h-full w-full" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetTwo.jpg" class="aspect-square object-cover h-full w-full" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetThree.jpg" class="aspect-square object-cover h-full w-full" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetFour.jpg" class="aspect-square object-cover h-full w-full" />

        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetFive.jpg" class="aspect-square object-cover h-full w-full" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetSix.jpg" class="aspect-square object-cover h-full w-full" />
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';

const boxes = ref(null);
let loop;

onMounted(() => {
    boxes.value = gsap.utils.toArray(".contentBox");
})

watch(boxes, (newVal, oldVal) => {
    if (newVal) {
        loop = useHorizontalScroll(newVal, {
            paused: true,
            repeat: -1
        });
        loop.play()
    }
})

const pauseCarousel = () => {
    // console.log('pause')
    loop.pause()
}

const resumeCarousel = () => {
    // console.log('resume')
    loop.play()
}


</script>