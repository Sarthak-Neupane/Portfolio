<template>
    <div class="w-full flex flex-col justify-center items-center gap-2 text-[#FFFEFF] py-7">
        <h1 class="font-extrabold text-2xl "> {{  headline  }} </h1>
        <h3 class="font-semibold">{{  Subtitle  }}</h3>
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