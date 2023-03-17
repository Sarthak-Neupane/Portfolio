<template>
    <div class="flex justify-center items-center overflow-hidden" @mouseover="pauseCarousel" @mouseout="resumeCarousel"
        ref="container">
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetOne.jpg" fit="cover" class="aspect-square object-cover h-full w-full" ref="Image" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetTwo.jpg" class="aspect-square object-cover h-full w-full" ref="Image" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetThree.jpg" class="aspect-square object-cover h-full w-full" ref="Image" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetFour.jpg" class="aspect-square object-cover h-full w-full" ref="Image" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetFive.jpg" class="aspect-square object-cover h-full w-full" ref="Image" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetSix.jpg" class="aspect-square object-cover h-full w-full" ref="Image" />
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { useTransitionStore } from '@/store/transition';

const props = defineProps({
    play: {
        type: Boolean,
        required: true
    }
})

const transitionStore = useTransitionStore()

const container = ref(null);
const boxes = ref(null);
const Image = ref(null);
const ctx = ref(null);
let loop;

watch(() => props.play, (val) => {
    if (val) {
        if (loop) {
            loop.play()
        } else {
            ctx.value = gsap.context((self) => {
                boxes.value = self.selector('.contentBox');
                loop = useHorizontalScroll(boxes.value, {
                    paused: true,
                    repeat: -1
                });
                loop.play()
            }, container.value)
        }
    } else {
        if (loop) {
            loop.pause()
        }
    }
})

// onMounted(() => {
//     if (transitionStore.initialRenderState) {
//         if (!transitionStore.transitionState) {
//             ctx.value = gsap.context((self) => {
//                 boxes.value = self.selector('.contentBox');
//                 loop = useHorizontalScroll(boxes.value, {
//                     paused: true,
//                     repeat: -1
//                 });
//                 loop.play()
//             }, container.value)
//         }
//         transitionStore.$subscribe((mutation, state) => {
//             if (!state.transitionState) {
//                 ctx.value = gsap.context((self) => {
//                     boxes.value = self.selector('.contentBox');
//                     loop = useHorizontalScroll(boxes.value, {
//                         paused: true,
//                         repeat: -1
//                     });
//                     loop.play()
//                 }, container.value)
//             }
//         })
//     } else {
//         transitionStore.$subscribe((mutation, state) => {
//             if (!state.transitionState) {
//                 ctx.value = gsap.context((self) => {
//                     boxes.value = self.selector('.contentBox');
//                     loop = useHorizontalScroll(boxes.value, {
//                         paused: true,
//                         repeat: -1
//                     });
//                     loop.play()
//                 }, container.value)
//             }
//         })
//     }
// })

const pauseCarousel = () => {
    if (loop) {
        loop.pause()
    }
    // loop.pause()
}

const resumeCarousel = () => {
    // loop.play()
    if (loop) {
        loop.play()
    }
}

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
});


</script>