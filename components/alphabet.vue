<template>
    <div class="relative overflow-hidden box-border max-h-24" ref="wheel">
        <h1 v-for="alph in alphabets" :key="alph" class="letters box-border">{{ alph }}</h1>
    </div>
</template>


<script setup>
import gsap from 'gsap';

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-']

const props = defineProps({
    alphabet: {
        type: String,
        required: true
    }
})
const ctx = ref()
const wheel = ref(null)
const letters = ref(null)
const loop = ref(null)

onMounted(() => {
    ctx.value = gsap.context((self) => {
        letters.value = self.selector('.letters');
        loop.value = useVerticalWheelHelper(letters.value, {
            repeat: -1,
            paused: true,
        })
    }, wheel.value)
})

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
});

const convertToIndex = (alphabet) => {
    return alphabets.indexOf(alphabet)
}

const spin = (wheel, index) => {
    wheel.toIndex(index, { duration: 3, ease: "power2.inOut" });
}

watch(letters, (newVal, oldVal) => {
    if (newVal) {
        const index = (convertToIndex(props.alphabet))
        spin(loop.value, index)
    }
})


// watch(loop, (newVal, oldVal) => {
//     if (newVal) {

//     }
// })

// if(props.alphabet && loop) {
//     const index = convertToIndex(props.alphabet)
//     spin(loop, index)
// }



</script>