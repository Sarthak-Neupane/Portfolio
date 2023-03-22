<template>
    <div class="w-full flex justify-between items-start">
        <div class="flex flex-col justify-center items-start gap-3 4xl:gap-7 6xl:gap-10">
            <h1 class="font-semibold text-sm md:text-lg 2xl:text-2xl 4xl:text-4xl 6xl:text-5xl">Not Convinced?</h1>
            <NuxtLink to="/"
                class="text-purple font-medium text-xs md:text-base lg:text-sm 2xl:text-lg 4xl:text-2xl 6xl:text-3xl">
                <ClientOnly>
                    <template #fallback>
                        <p>Loading Icon...</p>
                    </template>
                    <Icon name="uil:arrow-left" />
                </ClientOnly>
                See Work
            </NuxtLink>
        </div>
        <div class="flex flex-col justify-center items-start gap-3 4xl:gap-7 6xl:gap-10">
            <h1 class="font-semibold text-sm md:text-lg 2xl:text-2xl 4xl:text-4xl 6xl:text-5xl">Convinced?</h1>
            <NuxtLink to="/contact/"
                class="text-purple font-medium text-xs md:text-base lg:text-sm 2xl:text-lg 4xl:text-2xl 6xl:text-3xl">
                <ClientOnly>
                    <template #fallback>
                        <p>Loading Icon...</p>
                    </template>
                    <Icon name="uil:arrow-right" />
                </ClientOnly>
                Contact
        </NuxtLink>
    </div>
</div></template>