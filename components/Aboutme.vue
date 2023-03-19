<template>
    <div class="w-full flex flex-col justify-between items-stretch lg:justify-around">
        <div class=" lg:w-1/12 lg:h-full my-2 sm:my-4" ref="container" v-if="width < 1024">
            <MovingText :play="play" text="About Me" start="top" />
        </div>
        <div class="flex flex-col justify-start items-center lg:justify-center gap-5 2xl:gap-14 4xl:gap-20 6xl:gap-24 lg:w-full">
            <div class="w-full flex justify-between items-center">
                <div class="text-2xl sm:text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl 4xl:text-7xl 6xl:text-8xl font-bold text-green">
                    <h1>Frontend</h1>
                    <h1>Developer</h1>
                </div>
                <h3 class="font-semibold sm:text-2xl md:text-3xl lg:text-xl 2xl:text-3xl 4xl:text-5xl 6xl:text-6xl">Nepal</h3>
            </div>
            <ul class="flex flex-grow flex-col justify-around items-start gap-3 2xl:gap-7 4xl:gap-12 6xl:gap-16 font-medium">
                <li class="text-sm sm:text-lg md:text-xl lg:text-lg 2xl:text-xl 4xl:text-3xl 6xl:text-4xl 2xl:leading-relaxed 4xl:leading-relaxed">I build Frontends for the web with <span class="text-green font-bold">JS</span> and <span
                        class="text-green font-bold">VUE</span></li>
                <li class="text-sm sm:text-lg md:text-xl lg:text-lg 2xl:text-xl 4xl:text-3xl  2xl:leading-relaxed 4xl:leading-relaxed">I occasionally hop onto some backend stuffs with <span class="text-green font-bold">nodes.js</span>,
                    <span class="text-green font-bold">express</span> as well.
                </li>
                <li class="text-sm sm:text-lg md:text-xl lg:text-lg 2xl:text-xl 4xl:text-3xl  2xl:leading-relaxed 4xl:leading-relaxed">I am more into the animations and transitions in web, with tech like <span
                        class="text-green font-bold">GSAP</span>, <span class="text-green font-bold">THREEJS</span>, and
                    more</li>
                <li class="text-sm sm:text-lg md:text-xl lg:text-lg 2xl:text-xl 4xl:text-3xl  2xl:leading-relaxed 4xl:leading-relaxed">I also design <span class="text-purple text-sm xl:text-base 4xl:text-xl 6xl:text-2xl">(not much)</span>, with tools like <span
                        class="text-green font-bold">Figma</span>, and <span class="text-green font-bold">Photoshop</span>.
                </li>
            </ul>
        </div>
        <div class=" lg:w-1/12 lg:h-full xl:ml-8" ref="container" v-if="width >= 1024">
            <MovingText :play="play" text="About Me" start="top" />
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
const { width } = useWindowSize();

const props = defineProps({
    play: {
        type: Boolean,
        required: true
    }
})

</script>