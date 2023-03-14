<template>
    <section>
        <div class="w-full flex justify-center items-center lg:mb-7 bg-yellow">
            <Subtitle headline="It's Me, Hi" Subtitle="No Taylor swift reference :)" />
        </div>
        <div
            class="flex flex-col justify-center items-start px-3 pb-7 w-full gap-3 lg:py-0 lg:flex lg:flex-row lg:justify-around lg:items-stretch lg:gap-5 lg:container lg:mx-auto lg:px-0">
            <Aboutme class="lg:w-full lg:flex lg:flex-row lg:justify-center lg:items-stretch" />
            <Workexp class="lg:w-full lg:flex lg:flex-row lg:justify-center lg:items-stretch" />
        </div>
    </section>
</template>

<script setup>
const emit = defineEmits(['initiateTransition'])

onBeforeRouteLeave(() => {
    emit('initiateTransition')
})
</script>