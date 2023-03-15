<template>
    <div class="w-full flex flex-col justify-between items-stretch lg:justify-around lg:h-full lg:bg-red-300">
        <div class="lg:w-1/12 lg:h-full my-2 sm:my-4" ref="container" v-if="width < 1024">
            <MovingText />
        </div>
        <div class="flex flex-col justify-start items-center lg:justify-between gap-5 lg:w-full h-full lg:bg-red-600">
            <div class="w-full flex justify-between items-center">
                <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-green">
                    <h1>Frontend</h1>
                    <h1>Developer</h1>
                </div>
                <h3 class="font-semibold sm:text-2xl md:text-3xl">Nepal</h3>
            </div>
            <ul class="flex flex-grow flex-col justify-around items-start gap-3 font-medium">
                <li class="text-sm sm:text-lg md:text-xl">I build Frontends for the web with <span class="text-green font-bold">JS</span> and <span
                        class="text-green font-bold">VUE</span></li>
                <li class="text-sm sm:text-lg md:text-xl">I occasionally hop onto some backend stuffs with <span class="text-green font-bold">nodes.js</span>,
                    <span class="text-green font-bold">express</span> as well.
                </li>
                <li class="text-sm sm:text-lg md:text-xl">I am more into the animations and transitions in web, with tech like <span
                        class="text-green font-bold">GSAP</span>, <span class="text-green font-bold">THREEJS</span>, and
                    more</li>
                <li class="text-sm sm:text-lg md:text-xl">I also design <span class="text-purple text-sm">(not much)</span>, with tools like <span
                        class="text-green font-bold">Figma</span>, and <span class="text-green font-bold">Photoshop</span>.
                </li>
            </ul>
        </div>
        <div class="lg:w-1/12 lg:h-full" ref="container" v-if="width > 1024">
            <MovingText />
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
const { width } = useWindowSize();
</script>