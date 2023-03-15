<template>
    <div class="w-full h-full flex flex-col justify-center items-center gap-2 text-[#FFFEFF] py-5 md:py-8">
        <h1 class="font-extrabold text-2xl md:text-3xl "> {{  headline  }} </h1>
        <h3 class="font-semibold md:text-lg">{{  Subtitle  }}</h3>
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