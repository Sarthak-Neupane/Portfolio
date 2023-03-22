<template>
    <div class="overflow-hidden box-border grid text-3xl max-h-7 md:text-4xl md:max-h-9 lg:text-6xl lg:max-h-16 xl:max-h-24 xl:text-8xl 2xl:text-9xl 2xl:max-h-32 6xl:text-[11rem] 6xl:max-h-44 font-bold "
        ref="wheel">
        <h1 v-for="alph in alphabets" :key="alph" class="letters box-border">{{ alph }}</h1>
    </div>
</template>


<script setup>
import gsap from 'gsap';
import { toRefs } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { useWindowSize } from '@vueuse/core';


const { width } = useWindowSize();

const props = defineProps({
    alphabet: {
        type: String,
        required: true
    },
    play: {
        type: Boolean,
        required: true
    },
    resized: {
        type: Number,
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
            paused: width.value <= 768 ? true : false,
        })
        if (val) {
            loop.value.play()
        } else {
            loop.value.pause()
        }
    }, wheel.value)
}

const convertAndSpin = (alphabet, duration) => {
    const index = (convertToIndex(alphabet))
    spin(loop.value, index, duration)
}

const convertToIndex = (alphabet) => {
    return alphabets.indexOf(alphabet)
}

const spin = (loop, index, dur) => {
    loop.toIndex(index, { duration: dur ? dur : 1.5, ease: "power2.inOut" });
}


watchEffect(() => {
    if (props.resized) {
        if (loop.value) {
            let duration = 1
            convertAndSpin(props.alphabet, duration)
        }
    }
})


onUnmounted(() => {
    if(ctx.value){
        ctx.value.revert();
    }
});

</script>