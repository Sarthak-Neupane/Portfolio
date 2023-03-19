<template>
    <div class="fixed h-full w-full overflow-hidden flex justify-center items-center flex-col">
        <h1 class="w-full text-center py-4 font-bold text-xl">Sarthak Neupane</h1>
        <div class="w-full">
            <Subtitle headline="Oops.." :Subtitle="error.message" class="bg-red-600" :nav="false" />
        </div>
        <div class="flex-1 flex justify-center items-center gap-10 flex-col container mx-auto">
            <iframe src="https://giphy.com/embed/Ju7l5y9osyymQ" width="480" height="360" frameBorder="0" class="giphy-embed"
                allowFullScreen></iframe>
            <ul class="w-full flex justify-between items-center gap-1">
                <li class="bg-purple py-5 flex-1 text-center text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-light">
                    <NuxtLink to="/" @click="clearError()"> Work </NuxtLink>
                </li>
                <li class="bg-yellow py-5 flex-1 text-center text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-light">
                    <NuxtLink to="/about" @click="clearError()"> About </NuxtLink>
                </li>
                <li class="bg-green py-5 flex-1 text-center text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-light">
                    <NuxtLink to="/contact" @click="clearError()"> Contact </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    error: {
        type: Object,
        required: true
    }
})

</script>