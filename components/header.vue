<template>
    <div class="text-8xl font-bold w-full h-full text-center px-3 py-4 flex justify-around items-center text-dark">
        <alphabet alphabet="-" :play="play" />
        <alphabet alphabet="-" :play="play" />
        <alphabet alphabet="-" :play="play" />
        <alphabet alphabet="W" :play="play" />
        <alphabet alphabet="O" :play="play" />
        <alphabet alphabet="R" :play="play" />
        <alphabet alphabet="K" :play="play" />
        <alphabet alphabet="-" :play="play" />
        <alphabet alphabet="-" :play="play" />
        <alphabet alphabet="-" :play="play" />
    </div>
</template>
<script setup>
defineProps({
    play: {
        type: Boolean,
        required: true
    }
})
</script>
