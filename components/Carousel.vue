<template>
    <div class="flex justify-between items-center overflow-hidden h-full w-full" ref="container">
        <div class="flex-none xl:flex-initial flex justify-center items-center h-full w-full min-w-fit px-1 contentBox">
            <NuxtLink to="/contact/" class="w-full h-full aspect-square flex justify-center items-center">
                <nuxt-img :src="getImageUrl('ficfacfoe')" format="webp" alt="FICFACFOE" fit="cover"
                    class="aspect-square xl:grayscale h-full xl:aspect-auto" ref="Image1" data-hover="1" data-name="FICFACFOE"
                    @mouseenter="hoverImage" @mouseout="unHoverImage" :preload="true"
                    sizes="xl:25vw 2xl:25vw 4xl:25vw" />
            </NuxtLink>
        </div>
        <div class="flex-none xl:flex-initial flex justify-center items-center h-full w-full min-w-fit  px-1 contentBox">
            <NuxtLink to="/contact/" class="w-full h-full aspect-square flex justify-center items-center">
                <nuxt-img :src="getImageUrl('goalgram')" format="webp" alt="GOALGRAM" fit="cover"
                    class="aspect-square xl:grayscale h-full xl:aspect-auto" ref="Image2" data-hover="2" data-name="GOALGRAM"
                    @mouseenter="hoverImage" @mouseout="unHoverImage" :preload="true"
                    sizes="xl:25vw 2xl:25vw 4xl:25vw" />
            </NuxtLink>
        </div>
        <div class="flex-none xl:flex-initial flex justify-center items-center h-full w-full min-w-fit px-1 contentBox">
            <NuxtLink to="/contact/" class="w-full h-full aspect-square flex justify-center items-center">
                <nuxt-img :src="getImageUrl('rooms')" format="webp" alt="ROOMS" fit="cover"
                    class="aspect-square xl:grayscale h-full xl:aspect-auto" ref="Imag3" data-hover="3" data-name="ROOMS"
                    @mouseenter="hoverImage" @mouseout="unHoverImage" :preload="true"
                    sizes="xl:25vw 2xl:25vw 4xl:25vw" />
            </NuxtLink>
        </div>
        <div class="flex-none xl:flex-initial flex justify-center items-center h-full w-full min-w-fit   px-1 contentBox">
            <NuxtLink to="/contact/" class="w-full h-full aspect-square flex justify-center items-center">
                <nuxt-img :src="getImageUrl('chillflix')" format="webp" alt="CHILLFLIX" fit="cover"
                    class="aspect-square xl:grayscale h-full xl:aspect-auto" ref="Imag4" data-hover="4" data-name="CHILLFLIX"
                    @mouseenter="hoverImage" @mouseout="unHoverImage" :preload="true"
                    sizes="xl:25vw 2xl:25vw 4xl:25vw" />
            </NuxtLink>
        </div>
        <div class="flex-none xl:flex-initial flex justify-center items-center h-full w-full min-w-fit   px-1 contentBox">
            <NuxtLink to="/contact/" class="w-full h-full aspect-square flex justify-center items-center">
                <nuxt-img :src="getImageUrl('others')" format="webp" fit="cover" alt="OTHERS"
                    class="aspect-square xl:grayscale h-full xl:aspect-auto" ref="Image5" data-hover="5" data-name="OTHERS"
                    @mouseenter="hoverImage" @mouseout="unHoverImage" :preload="true"
                    sizes="xl:25vw 2xl:25vw 4xl:25vw" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { toRefs } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useResizeObserver } from '@vueuse/core';

const { width } = useWindowSize();

const getImageUrl = (name) => {
    return `/${name}/medium.jpg`;
}


const props = defineProps({
    play: {
        type: Boolean,
        required: true
    },
    next: {
        type: Number,
        required: true
    },
    prev: {
        type: Number,
        required: true
    }
})

const hovered = ref(false);

const emits = defineEmits(['hover', 'unHover', 'pause', 'resume'])
const container = ref(null);
const boxes = ref(null);

const hoverImage = (e) => {
    if (width.value > 1024) {
        pauseCarousel()
        hovered.value = true;
        const { hover, name } = e.target.dataset;
        gsap.to(e.target, { filter: 'grayscale(0)', duration: 0.5, ease: 'power2.inOut' })
        emits('hover', { hover: hover, name: name })
    }
}

const unHoverImage = (e) => {
    if (width.value > 1024) {
        resumeCarousel()
        hovered.value = false;
        gsap.to(e.target, { filter: 'grayscale(1)', duration: 0.5, ease: 'power2.inOut' })
        emits('unHover')
    }
}

const ctx = ref(null);
const loop = ref(null)

const play = toRefs(props).play;
const next = toRefs(props).next;
const prev = toRefs(props).prev;

watch(play, (val) => {
    if (loop.value) {
        if (!hovered.value) {
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
            repeat: -1,
            center: true,
        });
        if (val) {
            if (width.value > 1024) {
                loop.value.play()
            } else {
                loop.value.pause()
            }
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
        if (width.value > 1024) {
            loop.value.play()
        } else {
            loop.value.pause()
        }
    }
}

watch(next, (val) => {
    if (loop.value) {
        loop.value.next({ duration: 1.5, ease: 'power2.inOut' })
        const element = document.querySelector(`[data-hover="${loop.value.current() + 1}"]`)
        hovered.value = true;
        const { hover, name } = element.dataset;
        emits('hover', { hover: hover, name: name })
    }
})

watch(prev, (val) => {
    if (loop.value) {
        loop.value.previous({ duration: 1.5, ease: 'power2.inOut' })
        const element = document.querySelector(`[data-hover="${loop.value.current() + 1}"]`)
        hovered.value = true;
        const { hover, name } = element.dataset;
        emits('hover', { hover: hover, name: name })
    }
})

useResizeObserver(container, (entries) => {
    if (loop.value) {
        if (width.value <= 1024) {
            loop.value.toIndex(0, { duration: 1, ease: 'power2.inOut' })
            loop.value.pause()
        } else {
            loop.value.play()
        }
    }
})

onUnmounted(() => {
    if (ctx.value) {
        ctx.value.revert();
    }
});

</script>