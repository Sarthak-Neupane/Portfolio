<template>
    <div class="w-full h-full flex flex-col justify-center items-center gap-2 2xl:gap-4 4xl:gap-8 6xl:gap-12 text-[#FFFEFF] py-5 md:py-8 lg:py-5 2xl:py-10 4xl:py-16 6xl:py-28">
        <h1 class="font-extrabold text-2xl md:text-3xl lg:text-xl 2xl:text-2xl 4xl:text-3xl 6xl:text-5xl"> {{  headline  }} </h1>
        <h3 class="font-semibold md:text-lg lg:text-base 2xl:text-lg 4xl:text-xl 6xl:text-3xl">{{  Subtitle  }}</h3>
    </div>
</template>

<script setup>
const props = defineProps({
    headline: {
        type: String,
        default: 'Headline'
    },
    Subtitle: {
        type: String,
        default: 'Subtitle'
    }
})

</script>