<template>
    <div class="relative overflow-hidden box-border max-h-24" ref="wheel">
        <h1 v-for="alph in alphabets" :key="alph" class="letters box-border">{{ alph }}</h1>
    </div>
</template>


<script setup>
import gsap from 'gsap';
import { toRefs } from 'vue';

const props = defineProps({
    alphabet: {
        type: String,
        required: true
    },
    play: {
        type: Boolean,
        required: true
    }
})

const play = toRefs(props).play
const alphabet = toRefs(props).alphabet

const ctx = ref()
const wheel = ref(null)
const letters = ref(null)
const loop = ref(null)

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-']

watch(play, (val) => {
    if (val) {
        if (loop.value) {
            loop.value.play()
        } else {
            ctx.value = gsap.context((self) => {
                letters.value = self.selector('.letters');
                loop.value = useVerticalWheelHelper(letters.value, {
                    repeat: -1,
                    paused: true,
                })
            }, wheel.value)
        }
    } else {
        if (loop.value) {
            loop.value.pause()
        }
    }
})

watch(alphabet, (newVal, oldVal) => {
    if (newVal) {
        const index = (convertToIndex(props.alphabet))
        spin(loop.value, index)
    }
})

const convertToIndex = (alphabet) => {
    return alphabets.indexOf(alphabet)
}

const spin = (wheel, index) => {
    wheel.toIndex(index, { duration: 1.5, ease: "power2.inOut" });
}

watch(letters, (newVal, oldVal) => {
    if (newVal) {
        const index = (convertToIndex(props.alphabet))
        spin(loop.value, index)
    }
})

onUnmounted(() => {
    ctx.value.revert(); 
});

</script>