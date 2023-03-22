<template>
    <ul class="w-full px-4 flex flex-col sm:flex-row justify-center items-start gap-5 text-xl font-semibold" ref="links">
        <li class="flex justify-center items-center gap-3"> <a href="https://github.com/Sarthak-Neupane/" @mouseenter="hovered" @mouseleave="unHovered"
                class="relative">Github <div class="absolute top-full -translate-y-full left-0 w-0 bg-green h-0.5" ></div> </a>
            <ClientOnly>
                <Icon name="uil:github" />
                <template #fallback>
                    <p>Loading Icon...</p>
                </template>
            </ClientOnly>
        </li>
        <li class="text-yellow flex justify-center items-center gap-3"><a class="relative"
                href="https://twitter.com/VanTheBast/"  @mouseenter="hovered" @mouseleave="unHovered">Twitter <div
                    class="absolute top-full -translate-y-full left-0 w-0 bg-green h-0.5"></div></a>
            <ClientOnly>
                <template #fallback>
                    <p>Loading Icon...</p>
                </template>
                <Icon name="uil:twitter" />
            </ClientOnly>
        </li>
        <li class="flex justify-center items-center gap-3"> <a class="relative"
                href="https://www.linkedin.com/in/sarthak-neupane-97451b242/"  @mouseenter="hovered" @mouseleave="unHovered">LinkedIn <div
                    class="absolute top-full -translate-y-full left-0 w-0 bg-green h-0.5"></div></a>
            <ClientOnly>
                <template #fallback>
                    <p>Loading Icon...</p>
                </template>
                <Icon name="uil:linkedin" />
            </ClientOnly>
        </li>
        <li class="text-yellow flex justify-center items-center gap-3"><a class="relative"
                href="https://www.instagram.com/neupane.sarthak/"  @mouseenter="hovered" @mouseleave="unHovered">Instagram <div
                    class="absolute top-full -translate-y-full left-0 w-0 bg-green h-0.5"></div></a>
            <ClientOnly>
                <template #fallback>
                    <p>Loading Icon...</p>
                </template>
                <Icon name="uil:instagram" />
            </ClientOnly>
        </li>
    </ul>
</template>

<script setup>
import gsap from 'gsap';
const ctx = ref(null);
const links = ref(null);

const hovered = (e) => {
    if (links.value) {
        ctx.value = gsap.context((self) => {
            const underline = e.target.lastElementChild;
            gsap.to(underline, { width: e.target.offsetWidth, duration: 0.5, ease: 'power4.out' })
        }, links.value)
    }
}

const unHovered = (e) => {
    if (links.value) {
        ctx.value.add((self) => {
            const underline = e.target.lastElementChild;
            gsap.to(underline, { width: 0, duration: 0.5, ease: 'power4.out' })
        })
    }
}

onUnmounted(() => {
    if (ctx.value) {
        ctx.value.revert();
    }
})
</script>