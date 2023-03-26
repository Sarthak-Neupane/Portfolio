<template>
    <BaseProject nextRoute="chillflix" :images="images" :links="links" :largeImage="largeImage">
        <template #title>FICFACFOE</template>
        <template #subtitle>A multiplayer Football-Transfers based game</template>
        <template #stack1>VUE/NUXT</template>
        <template #stack2>MONGO DB</template>
        <template #stack3>SOCKET IO</template>
        <template #stack4>TAILWIND</template>
        <template #overview>Ficfacfoe is a <span class="secondary">Tic-Tac-Toe</span> styled football
            transfers themed game. Currently deployed on render, it is a <span class="secondary">multiplayer</span> game
            where you can play with your friends. It is a
            <span class="secondary">real-time</span> game where you can see your opponent's move as soon as
            he makes it. It is a <span class="secondary">turn-based</span> game where you can only make a
            move when it is your turn. It is a <span class="secondary">responsive</span> game which means
            you can play it on your mobile phone as well.</template>
        <template #para1>This is a fullstack project with <span class="secondary">NUXT</span> on the
            front,
            <span class="secondary">Mongo DB</span> as a database, and uses Nuxt's server api and server
            middlewares for backend. The project also consists of a <span class="secondary">Socket Io</span>
            integration for multiplayer to work <span class="third">(was tricky to deploy)</span>. With
            <span class="secondary">gsap</span> and <span class="secondary">tailwind</span> on the frontend,
            the
            UI and UX is seemingly smooth.</template>
        <template #para2> The project started off with filling the database with several clubs and
            players.
            Currently consists <span class="secondary">150+ football clubs</span> and <span class="secondary">1000+
                players</span>. Each player document consists of a
            <span class="third">unique id </span>, <span class="third">name</span>, <span class="third">shirt
                number</span>, <span class="third">position</span>, <span class="third">current club</span>,
            and
            an array of <span class="third">clubs played for</span>.</template>
        <template #para3>The frontend consists of <span class="secondary">2 static routes</span> and a <span
                class="secondary">dynamic route</span> <span class="third">(the
                game route)</span>. The Home page consist a how-to-play and a find-a-game buttons. On
            clicking
            the find-a-game button, the app calls a socket event to switch the user into a <span
                class="secondary">lobby</span>.
            Simultaneously, when another user searches for a game the lobby will now consist two or more
            players. Behind the scenes, an event to switch the two players into a new game room is
            <span class="secondary">triggered</span>.</template>
        <template #para4> The players are now pushed to a new dynamic route. On entering the route, the
            app
            hits a <span class="secondary">api route</span> to fill the game data. The api <span class="third">(existing in
                the server
                directory)</span> now runs few <span class="secondary">algorithms</span> to find out a random set of clubs
            <span class="third">
                (6) </span> which consist a common player between each of them. <span class="third">(In
                total, 6
                clubs and 9 players are chosen)</span>. After the game data is finalised, the server
            randomly
            selects a player to go first and the other to go second. Finally, the game room now gets the
            complete game data and fires a socket event to <span class="secondary">start the game</span></template>
        <template #para5> Each player now <span class="secondary">takes their turn</span> one after the other. If the guess
            is correct,
            one
            box in the grid, which corresponds to the current answer, <span class="secondary">fills</span> with the current
            player's color
            <span class="third">(which is also decided on random by the server, while selecting the
                turn)</span>. If the guess is incorrect, the turn is passed on to another player. The same
            thing
            happens when the player fails to guess within the given time frame <span class="third">(30
                seconds)</span>. All the guesses is displayed on the side <span class="third">(desktop
                view)</span> and below the grid <span class="third">(mobile view)</span>.</template>
        <template #para6> The app runs an <span class="secondary">algorithm</span> to check if there is a winner, after the
            initial 3
            rounds
            are played. After the winner is found, a socket event is fired to let both players know the
            ending
            of the game. The UI now displays <span class="secondary">return-home</span> and <span
                class="secondary">play-again</span> buttons. The play-again buttons
            fires a
            new socket event which removes the player from the game room and puts into the lobby. From where
            they search for another user to join the lobby <span class="third">(If there are none)</span>.</template>
    </BaseProject>
</template>

<script setup>
import transitionConfig from '@/helpers/transition';
definePageMeta({
    name: 'ficfacfoe',
    pageTransition: transitionConfig,
})

const images = [
    {
        src: '/chillflix/large.jpg',
        alt: 'chillflix',
    },
    {
        src: '/ficfacfoe/large.jpg',
        alt: 'ficfacfoe',
    },
    {
        src: '/rooms/large.jpg',
        alt: 'rooms',
    },
    {
        src: '/others/large.jpg',
        alt: 'others',
    },
]

const largeImage = {
    src: '/ficfacfoe/large.jpg',
    alt: 'ficfacfoe',
}

const links = {
    github: 'https://github.com/Sarthak-Neupane/Footys',
    live: 'https://ficfacfoe.onrender.com',
}

</script>

<style scoped>
.secondary {
    color: rgb(122 199 79);
    font-weight: bold;
    font-style: italic;
}

.third {
    color: rgb(158 71 112);
    font-size: x-small;
    font-weight: 500;
}

@media screen and (min-width: 640px) {
    .third {
        font-size: small;
    }
}

@media screen and (min-width: 1536px) {
    .third {
        font-size: medium;
    }
}

@media screen and (min-width: 2160px) {
    .third {
        font-size: large;
    }
}

@media screen and (min-width: 3840px) {
    .third {
        font-size: 1.25rem;
    }
}
</style>