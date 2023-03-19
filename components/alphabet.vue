<template>
    <div class="overflow-hidden box-border grid text-4xl max-h-9 md:text-6xl md:max-h-[3.75rem] xl:max-h-24 xl:text-8xl 2xl:text-9xl 2xl:max-h-32 font-bold " ref="wheel">
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

const ctx = ref()
const wheel = ref(null)
const letters = ref(null)
const loop = ref(null)

const alphabets = ['-', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


watch(play, (val) => {
    if (loop.value) {
        convertAndSpin(props.alphabet)
        if (val) {
            loop.value.play()
        } else {
            loop.value.pause()
        }
    } else {
        createLoop(val)
        convertAndSpin(props.alphabet)
    }
})

const createLoop = (val) => {
    ctx.value = gsap.context((self) => {
        letters.value = self.selector('.letters');
        loop.value = useVerticalWheelHelper(letters.value, {
            repeat: -1,
            paused: true,
        })
        if (val) {
            loop.value.play()
        } else {
            loop.value.pause()
        }
    }, wheel.value)
}

const convertAndSpin = (alphabet) => {
    const index = (convertToIndex(alphabet))
    spin(loop.value, index)
}

const convertToIndex = (alphabet) => {
    return alphabets.indexOf(alphabet)
}

const spin = (wheel, index) => {
    wheel.toIndex(index, { duration: 1.5, ease: "power2.inOut" });
}

onUnmounted(() => {
    ctx.value.revert();
});

</script>