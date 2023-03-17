<template>
    <div class="flex justify-between items-center overflow-hidden" @mouseover="pauseCarousel" @mouseout="resumeCarousel"
        ref="container">
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetOne.jpg" fit="cover" class="aspect-square object-cover h-full w-full" ref="Image1"
                data-hover="1" data-name="FICFACFOE" @mouseenter="hoverImage" @mouseout="unHoverImage" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetTwo.jpg" class="aspect-square object-cover h-full w-full" ref="Image2" data-hover="2"
                data-name="GOALGRAM" @mouseenter="hoverImage" @mouseout="unHoverImage" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetThree.jpg" class="aspect-square object-cover h-full w-full" ref="Imag3" data-hover="3"
                data-name="ROOMS" @mouseenter="hoverImage" @mouseout="unHoverImage" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetFour.jpg" class="aspect-square object-cover h-full w-full" ref="Imag4" data-hover="4"
                data-name="CHILLFLIX" @mouseenter="hoverImage" @mouseout="unHoverImage" />
        </div>
        <div class="flex justify-center items-center h-full min-w-[25%] px-1 contentBox">
            <nuxt-img src="/assetFive.jpg" class="aspect-square object-cover h-full w-full" ref="Image5" data-hover="5"
                data-name="OTHERS" @mouseenter="hoverImage" @mouseout="unHoverImage" />
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { useTransitionStore } from '@/store/transition';
import { toRefs } from 'vue';

const props = defineProps({
    play: {
        type: Boolean,
        required: true
    }
})

const emits = defineEmits(['hover', 'unHover'])

const transitionStore = useTransitionStore()

const container = ref(null);
const boxes = ref(null);
const Images = ref([]);

const hoverImage = (e) => {
    const { hover, name } = e.target.dataset;
    emits('hover', { hover: hover, name: name })
}

const unHoverImage = () => {
    emits('unHover')
}

const ctx = ref(null);
let loop;

const play = toRefs(props).play;

watch(play, (val) => {
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

const pauseCarousel = () => {
    if (loop) {
        loop.pause()
    }
}

const resumeCarousel = () => {
    if (loop) {
        loop.play()
    }
}

onUnmounted(() => {
    if (ctx.value) {
        ctx.value.revert();
    }
});

</script>