<template>
    <ul class="flex justify-start items-center mb-5 gap-5 text-xs sm:text-sm lg:text-base 2xl:text-lg 4xl:text-xl">
        <li class="flex justify-center items-center gap-4" v-if="links.live"><a class="underline underline-offset-2 text-blue-600"
                :href="links.live" target="_blank"  >Visit </a>
            <Icon name="uil:globe" />
        </li>
        <li class="flex justify-center items-center gap-4" v-if="links.github"><a class="underline underline-offset-2 text-blue-600"
                :href="links.github" target="_blank" >Github</a>
            <Icon name="uil:github" />
        </li>
    </ul>
</template>

<script setup>

const props = defineProps({
    links: {
        type: Object,
        required: true,
    },
});
</script>