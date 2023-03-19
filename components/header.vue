<template>
    <div
        class="w-full lg:h-full text-center px-3 py-4 flex justify-around items-center lg:items-center text-dark overflow-hidden">
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
