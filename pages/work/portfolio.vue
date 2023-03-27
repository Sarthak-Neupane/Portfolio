<template>
    <BaseProject nextRoute="more" :images="images" :links="links" :largeImage="largeImage">
        <template #title>Secondary Portfolio</template>
        <template #subtitle>My Previous Portfolio</template>
        <template #stack1>JAVASCRIPT</template>
        <template #stack2>THREE-JS</template>
        <template #stack3>BARBA-JS</template>
        <template #overview>This was a portfolio site I built a while ago. The project was built using vanilla JS and Three JS <span class="third">(with shaders)</span>. The site uses Barba JS for <span class="secondary">page transitions</span>. The site contains three sites, with all of them containing distinct <span class="secondary">shaders animations</span>. The site is hosted on <span class="secondary">Netlify</span>.
        </template>
        <template #para1>
            Will be updated soon.
        </template>
    </BaseProject>
</template>

<script setup>
import transitionConfig from '@/helpers/transition';

useSeoMeta({
   title: 'Portfolio',
   ogTitle: 'Work | Portfolio',
   description: "This was a portfolio site I built a while ago. The project was built using vanilla JS and Three JS (with shaders). The site uses Barba JS for page transitions. The site contains three sites, with all of them containing distinct shaders animations. The site is hosted on Netlify.",
   ogDescription: 'Secondary Portfolio, My previous personal site.',
})


defineOgImageStatic({
   component: 'MyOgImage',
   title: 'Work | Sarthak Neupane',
   content: 'Frontend Developer - Vuejs | Nuxtjs',
   backgroundColor: 'bg-[#9E4770]',
})


definePageMeta({
    name: 'portfolio',
    pageTransition: transitionConfig,
})

const images = []

const largeImage = {
    src: '/images/portfolio/large.jpg',
    alt: 'portfolio',
}

const links = {
    github: 'https://github.com/Sarthak-Neupane/Portfolio2',
    live: 'https://sarthakneupane.netlify.app',
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