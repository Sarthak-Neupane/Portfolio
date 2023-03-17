<template>
    <section class="min-h-[90vh] w-full flex flex-col justify-center items-center ">
        <div class="w-full flex justify-center items-center bg-yellow">
            <Subtitle headline="It's Me, Hi" Subtitle="No Taylor swift reference :)" />
        </div>
        <div class="flex-grow flex justify-center items-center sm:items-stretch lg:items-center w-full">
            <div
                class="flex flex-col justify-center sm:justify-around items-start px-3 lg:px-16 2xl:px-32 pb-7 w-full gap-3 lg:flex lg:flex-row lg:justify-around lg:items-stretch lg:gap-5 lg:py-5 4xl:w-9/12 4xl:mx-auto">
                <Aboutme class="lg:w-full lg:flex lg:flex-row lg:justify-center lg:items-stretch" :play="play" />
                <Workexp class="lg:w-full lg:flex lg:flex-row lg:justify-center lg:items-stretch" :play="play" />
            </div>
        </div>
    </section>
</template>

<script setup>
import transitionConfig from '../helpers/transition';

definePageMeta({
    title: 'About',
    name: 'About',
    pageTransition: transitionConfig,
})

const transition = useTransitionComposable()
const play = ref(false)

watch(() => transition.transitionState.transitionComplete, (val) => {
   if (val) {
      play.value = true
   }
})
</script>