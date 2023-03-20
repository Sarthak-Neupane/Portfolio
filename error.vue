<template>
    <div class="fixed h-full w-full overflow-hidden flex justify-center items-center flex-col">
        <h1 class="w-full flex justify-center items-center py-4 font-bold text-xl h-[10vh] bg-light">Sarthak Neupane</h1>
        <h1 class="w-full h-[10vh] py-4 font-bold text-xl fixed top-0 flex justify-center items-center bg-light" ref="animate">
            Sarthak Neupane</h1>
        <div class="w-full">
            <Subtitle headline="Oops.." :Subtitle="error.message" class="bg-red-600" :nav="false" />
        </div>
        <div class="flex-1 flex justify-center items-center gap-10 flex-col container mx-auto">
            <iframe src="https://giphy.com/embed/Ju7l5y9osyymQ" width="480" height="360" frameBorder="0" class="giphy-embed"
                allowFullScreen></iframe>
            <button class="border-2 border-purple py-5 px-4 text-dark hover:bg-purple hover:text-white transition-all"
                @click="takeMeHome"> Take Me Home </button>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap'

const animate = ref(null)

const props = defineProps({
    error: {
        type: Object,
        required: true
    }
})

const takeMeHome = () => {
    gsap.to(animate.value, {
        height: '100%', duration: 1, ease: 'power4.out', onComplete: () => {
            clearError({ redirect: '/' })
        }
    })
}

</script>