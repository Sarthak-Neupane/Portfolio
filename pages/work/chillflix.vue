<template>
    <BaseProject :images="images" :links="links" :largeImage="largeImage">
        <template #title>Chillflix</template>
        <template #subtitle></template>
        <template #stack1>VUE</template>
        <template #stack2>FIREBASE/AUTH</template>
        <template #stack3>FIREBASE/REAL-TIME DB</template>
        <template #overview> Chillflix is <span class="secondary">similar</span> to what you call as 'Netflix'. This is a
            completely working project with <span class="secondary">features</span> including searching for movies and TV
            shows, dynamic routing, filtering
            movies/tv by popularity and ratings, creating a personal list, and much more. The website also connects to
            Google <span class="secondary">Firebase</span> for <span class="secondary">Authentication</span> and <span
                class="secondary">Database</span>. The website makes use of an <span class="secondary">API</span> for movies
            and tv shows data:
            TMDB API. <span class="third">However, movies/shows cannot be played, as this was only a personal
                project.</span>
        </template>
        <template #para1>
            Will be updated soon.
        </template>
    </BaseProject>
</template>

<script setup>
import transitionConfig from '@/helpers/transition';
definePageMeta({
    name: 'chillflix',
    pageTransition: transitionConfig,
})

const images = []

const largeImage = {
    src: '/chillflix/large.jpg',
    alt: 'chillflix',
}

const links = {
    github: 'https://github.com/Sarthak-Neupane/NetFlixClone',
    live: 'https://netflixclonefirst.web.app/home',
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