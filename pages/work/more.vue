<template>
    <BaseMore :large-image="largeImage" :projects="allProjects" ></BaseMore>
</template>

<script setup>
import transitionConfig from '@/helpers/transition';

useSeoMeta({
   title: 'More Projects',
   ogTitle: 'Work | More Projects',
   description: "A collection of various small projects Sarthak Neupane built with various tech stacks. From Three JS to Barba JS to Vue JS, there's a lot to explore. The projects are hosted on Netlify. The source code is available on Github, and there is also a link to the live site. ",
   ogDescription: "My collection of small projects built with various tech stacks",
})


defineOgImageStatic({
   component: 'MyOgImage',
   title: 'Work | Sarthak Neupane',
   content: 'Frontend Developer - Vuejs | Nuxtjs',
   backgroundColor: 'bg-[#9E4770]',
})

definePageMeta({
    name: 'more',
    pageTransition: transitionConfig,
})

const largeImage = {
    src: '/others/large.jpg',
    alt: 'others',
}

const allProjects = [
    {
        title: 'Hover Transitions',
        description: 'A cool shader effects applied when an image is hovered',
        links: {
            github: null,
            live: 'https://hovertransitions.netlify.app',
        }
    },
    {
        title: 'Quizz Website',
        description: 'Quiz website with a few questions about football',
        links: {
            github: 'https://github.com/Sarthak-Neupane/Football-Quiz-Game',
            live: 'https://sarthak-quiz.netlify.app',
        }
    },
    {
        title: 'Covid Tracker',
        description: 'Covid Tracker website built during the Covid Lockdown',
        links: {
            github: 'https://github.com/Sarthak-Neupane/Covid-Tracker-Vanilla-JS',
            live: 'https://sarthakcovidtracker.netlify.app',
        }
    },
    {
        title: 'More Three JS Shaders Effect',
        description: 'Shader effect is applied on image, and a navigation bar is added to navigate between different images',
        links: {
            github: null,
            live: 'https://simpleeffect.netlify.app',
        }
    },
    {
        title: 'Gsap Animations',
        description: 'Gsap animations are applied on scroll. Note: Isn\'t responsive',
        links: {
            github: 'https://github.com/Sarthak-Neupane/Fashion-Page',
            live: 'https://fashionanimations.netlify.app',
        }
    },
    {
        title: 'Unfinished Portfolio Website',
        description: 'Uses Three js, gsap, and a few other libraries to create my first portfolio website',
        links: {
            github: null,
            live: 'https://portfoliodemonow.netlify.app/home',
        }
    },
]

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
}
</style>