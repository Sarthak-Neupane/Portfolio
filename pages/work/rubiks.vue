<template>
    <BaseProject nextRoute="more" :images="images" :links="links" :largeImage="largeImage">
        <template #title>Rubik's Cube Simulator</template>
        <template #subtitle>A simple cube simulator</template>
        <template #stack1>THREE JS</template>
        <template #stack2>VUE/NUXT</template>
        <template #overview>This was a simple Rubik's Cube simulator online. Built with <span class="third">Three JS</span> 
            the site lets users use a rubiks cube just as they would in the real world. The site doesn't have the functionality to solve the cube, however, it is intended to be added in the near future.
        </template>
        <template #para1>
            Will be updated soon.
        </template>
    </BaseProject>
</template>

<script setup>
import transitionConfig from '@/helpers/transition';

useSeoMeta({
   title: 'Cube Simulator',
   ogTitle: 'Work | Rubiks Cube',
   description: "A simple Rubik's Cube simulator online. Built with Three JS the site lets users use a rubiks cube just as they would in the real world. The site doesn't have the functionality to solve the cube, however, it is intended to be added in the near future.",
   ogDescription: 'A simple Rubiks Cube simulator.',
})


defineOgImageStatic({
   component: 'MyOgImage',
   title: 'Work | Sarthak Neupane',
   content: 'Frontend Developer - Vuejs | Nuxtjs',
   backgroundColor: 'bg-[#9E4770]',
})


definePageMeta({
    name: 'Cube Simulator',
    pageTransition: transitionConfig,
})

const images = []

const largeImage = {
    src: '/images/Cube/large.jpg',
    alt: 'Rubiks Cube Simulator',
}

const links = {
    github: 'https://github.com/Sarthak-Neupane/cubeSolver',
    live: 'https://sarthakrubiks.vercel.app/',
}
</script>

<style scoped>
.secondary {
    color: rgb(122 199 79);
    font-weight: bold;
    font-style: italic;
}

.third {
    color: rgb(158 71 112);
    font-size: x-small;
    font-weight: 500;
}

@media screen and (min-width: 640px) {
    .third {
        font-size: small;
    }
}

@media screen and (min-width: 1536px) {
    .third {
        font-size: medium;
    }
}

@media screen and (min-width: 2160px) {
    .third {
        font-size: large;
    }
}

@media screen and (min-width: 3840px) {
    .third {
        font-size: 1.25rem;
    }
}</style>