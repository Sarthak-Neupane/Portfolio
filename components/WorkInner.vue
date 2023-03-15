<template>
    <div class="flex flex-col justify-center items-start gap-4 sm:gap-5 md:gap-8">
        <h1 class="text-7xl md:text-8xl sm:w-full font-bold text-purple stroke-purple stroke-2 w-3/4">
            <!-- 2020 - 2022 -->
            <slot name="headline"></slot>
        </h1>
        <h2 class="font-semibold text-xl md:text-2xl">
            <!-- Freelance Web Developer -->
            <slot name="subtitle"></slot>
        </h2>
        <p class="font-medium text-sm md:text-base">
            <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam molestias dignissimos hic iste quidem consequuntur modi officia optio adipisci quo. -->
            <slot name="desc"></slot>
        </p>
    </div>
</template>

<style scoped>
@supports (-webkit-text-stroke: 3px #9E4770) {
    h1 {
        -webkit-text-stroke: 3px #9E4770;
        -webkit-text-fill-color: #FFFEFF;
    }
}
</style>
