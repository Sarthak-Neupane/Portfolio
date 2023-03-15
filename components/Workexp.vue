<template>
    <div class="w-full flex flex-col justify-between items-stretch lg:justify-around">
        <div class=" lg:w-1/12 lg:h-full my-2 sm:my-4" ref="container">
            <MovingText />
        </div>
        <div class="flex flex-col justify-center items-start gap-8 lg:w-full">
            <work-inner>
                <template #headline>
                    2020-2022
                </template>
                <template #subtitle>
                    Freelance Web Developer
                </template>
                <template #desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facere inventore officiis
                    reprehenderit laudantium unde sed modi non sint nemo!
                </template>
            </work-inner>
            <div class="h-[1px] w-full bg-purple"></div>
            <AvailableWork />
            <div class="h-[1px] w-full bg-purple"></div>
            <AboutMeNavbar />
        </div>
    </div>
</template>
