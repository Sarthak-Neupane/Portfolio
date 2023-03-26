<template>
    <BaseProject :images="images" :links="links" :largeImage="largeImage">
        <template #title>Rooms</template>
        <template #subtitle>A lightweight Project Management tool</template>
        <template #stack1>VUE/VITE</template>
        <template #stack2>FIREBASE/AUTH</template>
        <template #stack3>FIREBASE/FIRESTORE</template>
        <template #stack4>TAILWIND</template>
        <template #overview> Rooms is a <span class="secondary">lightweight</span> project management tool built with Vue,
            Tailwind, and Firebase. It
            allows users to create and join rooms, add friends, switch the room type from shared to private, and much more.
            Each room consists of a <span class="secondary">chat</span>, <span class="secondary">member-list</span>, <span class="secondary">files</span>, <span class="secondary">reminders</span> <span class="third">(to-do's)</span>.
            The app also allows users to create a profile: <span class="secondary">customize</span> color theme, and chose a display avatar. The app makes
            use of Firebase
            Authentication and Firestore for storing data.
        </template>
        <template #overview-second>
            <span class="secondary">Note:</span> The app is not hosted, as it is still in development. <span class="third">You can check the github repository.</span>
        </template>
        <template #para1>
            Will be updated soon.
        </template>
    </BaseProject>
</template>

<script setup>
import transitionConfig from '@/helpers/transition';
definePageMeta({
    name: 'rooms',
    pageTransition: transitionConfig,
})

const images = []

const largeImage = {
    src: '/rooms/large.jpg',
    alt: 'rooms',
}

const links = {
    github: 'https://github.com/Sarthak-Neupane/Rooms',
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
}
</style>