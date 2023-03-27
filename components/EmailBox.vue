<template>
    <button class="w-full bg-purple py-5 text-light font-bold" v-if="isSupported" @click="copy(source)">
        <Transition name="slide-fade" mode="out-in">
            <span v-if="!copied"> Copy E-Mail Address </span>
            <span v-else> Email Address Copied </span>
        </Transition>
    </button>
    <div v-else>
        <p> Oops! your device doesn't support Clipboard API. </p>
        <p>You can still contact me at: hello@sarthakneupane.com</p>
    </div>
</template>


<script setup>
import { useClipboard } from '@vueuse/core';

const source = ref('hello@sarthakneupane.com')
const { text, copy, copied, isSupported } = useClipboard({ copiedDuring: 3000 })

</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}
</style>