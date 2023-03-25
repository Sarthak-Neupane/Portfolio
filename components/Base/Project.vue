<template>
    <section class="flex justify-center items-center flex-col gap-5">
        <ClientOnly>
            <template #fallback>
                image                
            </template>
            <div class="h-[90vh] max-h-[90vh] w-full" v-if="width >= 1280">
                <img src="/chillflix/large.jpg" class="h-full w-full object-cover" alt="">
            </div>
        </ClientOnly>
        <div class="xl:max-w-screen-lg 2xl:max-w-screen-xl 4xl:max-w-screen-2xl mx-auto px-2 lg:px-5 flex flex-col justify-start items-start gap-7">
            <div>
                <NuxtLink to="/">
                    <button class="text-purple font-bold text-xs sm:text-sm lg:text-base">
                        <Icon name="uil:arrow-left" />
                        Work
                    </button>
                </NuxtLink>
            </div>
            <div class="flex flex-col justify-center items-start gap-5">
                <div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black">
                        <slot name="title"></slot>
                    </h1>
                    <h2 class="text-xs sm:text-base my-2 lg:my-5 font-medium">
                        <slot name="subtitle"></slot>
                    </h2>
                    <ul class="flex justify-start items-center gap-5 text-xs sm:text-sm lg:text-base">
                        <li class="flex justify-center items-center gap-4"><a
                                class="underline underline-offset-2 text-blue-600"
                                href="https://ficfacfoe.onrender.com">Visit </a>
                            <Icon name="uil:globe" />
                        </li>
                        <li class="flex justify-center items-center gap-4"><a
                                class="underline underline-offset-2 text-blue-600"
                                href="https://github.com/Sarthak-Neupane/Footys">Github</a>
                            <Icon name="uil:github" />
                        </li>
                    </ul>
                </div>
                <div>
                    <ProjectsTitle>Stack :</ProjectsTitle>
                    <ul class="flex text-xs sm:text-base justify-start items-center gap-4 flex-wrap">
                        <li>
                            <slot name="stack1"></slot>
                        </li>
                        <li>
                            <slot name="stack2"></slot>
                        </li>
                        <li>
                            <slot name="stack3"></slot>
                        </li>
                        <li>
                            <slot name="stack4"></slot>
                        </li>
                    </ul>
                </div>
                <div>
                    <ProjectsTitle>Overview</ProjectsTitle>
                    <ProjectsParagraph>
                        <slot name="overview">
                        </slot>
                    </ProjectsParagraph>
                </div>
                <div>
                    <ProjectsTitle>Development Process</ProjectsTitle>
                    <ProjectsParagraph>
                        <slot name="para1">
                        </slot>
                    </ProjectsParagraph>
                    <ProjectsImage :src="images[0].src" class="my-5" alt="Image One" />
                    <ProjectsParagraph>
                        <slot name="para2">
                        </slot>
                    </ProjectsParagraph>

                    <ProjectsParagraph>
                        <slot name="para3"></slot>
                    </ProjectsParagraph>
                    <ProjectsImage :src="images[1].src" class="my-5" alt="Image One" />
                    <ProjectsParagraph>
                        <slot name="para4"></slot>
                    </ProjectsParagraph>
                    <ProjectsParagraph>
                        <slot name="para5">
                        </slot>
                    </ProjectsParagraph>
                    <ProjectsParagraph>
                        <slot name="para6">
                        </slot>
                    </ProjectsParagraph>
                </div>
                <div class="w-full flex justify-between items-center mt-10 text-purple font-semibold">
                    <NuxtLink to="/work/ficfacfoe/" class="px-5 py-2 border-[1px] border-solid border-purple rounded-lg">
                        <Icon name="uil:arrow-left" class="mr-2" /> Chillflix
                    </NuxtLink>
                    <NuxtLink to="/work/ficfacfoe/" class="px-5 py-2 border-[1px] border-solid border-purple rounded-lg">
                        Rooms
                        <Icon name="uil:arrow-right" class="ml-2" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

defineProps({
    images: {
        type: Array,
        required: true
    }
})

</script>
