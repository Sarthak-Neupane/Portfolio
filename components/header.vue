<template>
    <div class="text-8xl font-bold w-full h-full text-center px-3 py-4 flex justify-around items-center text-dark">
        <alphabet v-for="(letter, index) in letters" :key="index" :alphabet="letter" :play="play" />
    </div>
</template>
<script setup>
const props = defineProps({
    play: {
        type: Boolean,
        required: true
    },
    letters: {
        type: Array,
        required: true
    }
})

</script>
