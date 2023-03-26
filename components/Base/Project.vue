<template>
    <section class="flex justify-center items-center flex-col gap-5" ref="scrollContainer">
        <ClientOnly>
            <template #fallback>
                image
            </template>
            <div class="h-[90vh] max-h-[90vh] w-full" v-if="width >= 1280">
                <img src="/ficfacfoe/large.jpg" class="h-full w-full object-cover" alt="">
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
            <div class="flex flex-col justify-center items-start gap-5">
                <div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl 4xl:text-7xl font-black">
                        <slot name="title"></slot>
                    </h1>
                    <h2 class="text-xs sm:text-base xl:text-lg 4xl:text-xl 6xl:text-2xl my-2 lg:my-5 font-medium">
                        <slot name="subtitle"></slot>
                    </h2>
                    <ul
                        class="flex justify-start items-center gap-5 text-xs sm:text-sm lg:text-base 2xl:text-lg 4xl:text-xl">
                        <li class="flex justify-center items-center gap-4"><a
                                class="underline underline-offset-2 text-blue-600"
                                href="https://ficfacfoe.onrender.com">Visit </a>
                            <Icon name="uil:globe" />
                        </li>
                        <li class="flex justify-center items-center gap-4"><a
                                class="underline underline-offset-2 text-blue-600"
                                href="https://github.com/Sarthak-Neupane/Footys">Github</a>
                            <Icon name="uil:github" />
                        </li>
                    </ul>
                </div>
                <div>
                    <ProjectsTitle>Stack :</ProjectsTitle>
                    <ul class="flex text-xs sm:text-base justify-start items-center gap-4 flex-wrap">
                        <li>
                            <slot name="stack1"></slot>
                        </li>
                        <li>
                            <slot name="stack2"></slot>
                        </li>
                        <li>
                            <slot name="stack3"></slot>
                        </li>
                        <li>
                            <slot name="stack4"></slot>
                        </li>
                    </ul>
                </div>
                <div ref="scrollToElement">
                    <ProjectsTitle>Overview</ProjectsTitle>
                    <ProjectsParagraph>
                        <slot name="overview">
                        </slot>
                    </ProjectsParagraph>
                </div>
                <div>
                    <ProjectsTitle>Development Process</ProjectsTitle>
                    <ProjectsParagraph>
                        <slot name="para1">
                        </slot>
                    </ProjectsParagraph>
                    <ProjectsImage :src="images[0].src" class="my-5" alt="Image One" />
                    <ProjectsParagraph>
                        <slot name="para2">
                        </slot>
                    </ProjectsParagraph>

                    <ProjectsParagraph>
                        <slot name="para3"></slot>
                    </ProjectsParagraph>
                    <ProjectsImage :src="images[1].src" class="my-5" alt="Image One" />
                    <ProjectsParagraph>
                        <slot name="para4"></slot>
                    </ProjectsParagraph>
                    <ProjectsParagraph>
                        <slot name="para5">
                        </slot>
                    </ProjectsParagraph>
                    <ProjectsParagraph>
                        <slot name="para6">
                        </slot>
                    </ProjectsParagraph>
                </div>
                <div
                    class="w-full flex justify-between items-center border-solid border-t-[0px] border-dark -mt-3 py-5 font-semibold text-purple">
                    <NuxtLink to="/work/ficfacfoe/" class="rounded-lg" @mouseover="hover" @mouseout="unhover">
                        <button
                            class=" pointer-events-none w-full h-full px-8 py-5 relative overflow-hidden  border-[1px] border-solid border-purple rounded-lg">
                            <Icon name="uil:arrow-left" class="mr-2">
                            </Icon>
                            <span>Chillflix</span>
                            <div class="absolute top-full -translate-x-2 translate-y-2 left-0 h-[200%] rotate-6 w-[200%] -z-[1] rounded-lg bg-purple"
                                data-element="first"> </div>
                        </button>
                    </NuxtLink>
                    <NuxtLink to="/work/ficfacfoe/" class="rounded-lg" @mouseover="hover" @mouseout="unhover">
                        <button
                            class=" pointer-events-none w-full h-full px-8 py-5 relative overflow-hidden  border-[1px] border-solid border-purple rounded-lg">
                            <span>Rooms</span>
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

const { width, height } = useWindowSize();

const scrollContainer = ref(null)
const scrollToElement = ref(null)

const ctx = ref(null)

let scroll;

if (typeof window !== "undefined") {
    scroll = useScroll(window, { behavior: 'smooth' })
}

const { top } = useElementBounding(scrollToElement)


defineProps({
    images: {
        type: Array,
        required: true
    }
})

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
