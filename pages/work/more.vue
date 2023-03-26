<template>
    <BaseMore :large-image="largeImage" :projects="allProjects" ></BaseMore>
</template>

<script setup>
import transitionConfig from '@/helpers/transition';
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