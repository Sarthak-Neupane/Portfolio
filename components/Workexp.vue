<template>
    <div class="w-full flex flex-col justify-between items-stretch xl:justify-around">
        <div class=" xl:w-1/12 xl:h-full my-2 sm:my-4 xl:my-0 xl:mr-8" ref="container">
            <MovingText :play="play" text="Experience" start="bottom" />
        </div>
        <div class="flex flex-col justify-center items-start gap-8 2xl:gap-12 4xl:gap-24 6xl:gap-32 xl:w-full">
            <work-inner>
                <template #headline>
                    2020-2022
                </template>
                <template #subtitle>
                    Freelance Web Developer
                </template>
                <template #desc>
                    Worked as a freelance web developer through fiverr and upwork.
                </template>
            </work-inner>
            <div class="h-[1px] w-full bg-purple"></div>
            <AvailableWork />
            <div class="h-[1px] w-full bg-purple"></div>
            <AboutMeNavbar />
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    play: {
        type: Boolean,
        required: true
    }
})

</script>