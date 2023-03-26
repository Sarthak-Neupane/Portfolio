<template>
    <section class="flex justify-center items-center flex-col gap-5" ref="scrollContainer">
        <ClientOnly>
            <template #fallback>
                image
            </template>
            <div class="h-[90vh] max-h-[90vh] w-full" v-if="width >= 1280">
                <img :src="largeImage.src" class="h-full w-full object-cover" :alt="largeImage.alt">
            </div>
        </ClientOnly>
        <div
            class="xl:max-w-screen-lg 2xl:max-w-screen-xl 4xl:max-w-screen-2xl 6xl:max-w-screen-4xl mx-auto px-2 lg:px-5 flex flex-col justify-start items-start gap-7">
            <div>
                <NuxtLink to="/">
                    <button class="text-purple font-bold text-xs sm:text-sm lg:text-base 2xl:text-lg 4xl:text-xl">
                        <Icon name="uil:arrow-left" />
                        Work
                    </button>
                </NuxtLink>
            </div>
            <div class="flex flex-col justify-center items-start gap-5 w-full">
                <div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl 4xl:text-7xl font-black">
                        <slot name="title"> SOME MORE WORKS </slot>
                    </h1>
                    <h2 class="text-xs sm:text-base xl:text-lg 4xl:text-xl 6xl:text-2xl my-2 lg:my-5 font-medium">
                        <slot name="subtitle"> Small projects, yet with big difference </slot>
                    </h2>
                </div>
                <div ref="scrollToElement">
                    <div v-for="(project, index) of projects" :key="index">
                        <ProjectsTitle>{{ project.title }}</ProjectsTitle>
                        <ProjectsParagraph>
                            {{ project.description }}
                        </ProjectsParagraph>
                        <MoreProjectsLinks :links="project.links" />
                    </div>
                </div>
                <div
                    class="w-full flex justify-between items-center border-solid border-t-[0px] border-dark -mt-3 py-5 font-semibold text-purple">
                    <NuxtLink to="/work/ficfacfoe/" class="rounded-lg" @mouseover="hover" @mouseout="unhover">
                        <button
                            class=" pointer-events-none w-full h-full px-8 py-5 relative overflow-hidden  border-[1px] border-solid border-purple rounded-lg">
                            <span>Ficfacfoe</span>
                            <Icon name="uil:arrow-right" class="ml-2" />
                            <div class="absolute top-full -translate-x-2 translate-y-2 left-0 h-[200%] rotate-6 w-[200%] -z-[1] rounded-lg bg-purple"
                                data-element="second"> </div>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useWindowSize, useScroll, useElementBounding } from '@vueuse/core';
import gsap from 'gsap';

defineProps({
    largeImage: {
        type: Object,
        required: true
    },
    projects: {
        type: Array,
        required: true
    },
    nextRoute : {
        type: String,
        required: true
    },
})

const { width, height } = useWindowSize();

const scrollContainer = ref(null)
const scrollToElement = ref(null)

const ctx = ref(null)

let scroll;

if (typeof window !== "undefined") {
    scroll = useScroll(window, { behavior: 'smooth' })
}

const { top } = useElementBounding(scrollToElement)


const transition = useTransitionComposable()

watch(() => transition.transitionState.transitionComplete, (val) => {
    if (val && width.value >= 640) {
        if (scroll.y.value === 0) {
            scroll.y.value = top.value - height.value
        }
        ctx.value = gsap.context(() => { }, scrollContainer.value)
    }
})

const playHoveredAnim = (el, parent) => {
    if (ctx.value) {
        ctx.value.add(
            gsap.to(el, { duration: .5, top: '-90%', ease: 'power4.out' }),
            gsap.to(parent, { duration: .5, color: '#fffeff', ease: 'power4.out' })   
        )
    }
}

const unPlayHoveredAnim = (el, parent) => {
    if (ctx.value) {
        ctx.value.add(gsap.to(el, { duration: .5, top: '100%', ease: 'power4.out' }))
        gsap.to(parent, { duration: .5, color: 'rgb(39 35 35)', ease: 'power4.out' })   
    }
}

const hover = (e) => {
    const target = e.target.querySelector('[data-element]')
    playHoveredAnim(target, e.target)
}

const unhover = (e) => {
    const target = e.target.querySelector('[data-element]')
    unPlayHoveredAnim(target, e.target)
}

onUnmounted(() => {
    if (ctx.value) {
        ctx.value.revert()
    }
})

</script>
