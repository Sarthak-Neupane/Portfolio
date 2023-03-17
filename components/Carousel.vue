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
import { toRefs } from 'vue';

const props = defineProps({
    play: {
        type: Boolean,
        required: true
    }
})

const hovered = ref(false);

const emits = defineEmits(['hover', 'unHover', 'pause', 'resume'])
const container = ref(null);
const boxes = ref(null);

const hoverImage = (e) => {
    hovered.value = true;
    const { hover, name } = e.target.dataset;
    emits('hover', { hover: hover, name: name })
}

const unHoverImage = () => {
    hovered.value = false;
    emits('unHover')
}

const ctx = ref(null);
const loop = ref(null)

const play = toRefs(props).play;

watch(play, (val) => {
    if (loop.value) {
        if (!hovered.value) {
            loop.value.play()
        } else {
            loop.value.pause()
        }
    } else {
        createLoop(!hovered.value)
    }
})


const createLoop = (val) => {
    ctx.value = gsap.context((self) => {
        boxes.value = self.selector('.contentBox');
        loop.value = useHorizontalScroll(boxes.value, {
            paused: true,
            repeat: -1
        });
        if (val) {
            loop.value.play()
        } else {
            loop.value.pause()
        }
    }, container.value)
}

const pauseCarousel = () => {
    emits('pause')
    if (loop.value) {
        loop.value.pause()
    }
}

const resumeCarousel = () => {
    emits('resume')
    if (loop.value) {
        loop.value.play()
    }
}

onUnmounted(() => {
    if (ctx.value) {
        ctx.value.revert();
    }
});

</script>