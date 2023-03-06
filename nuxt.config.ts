// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    ["@nuxtjs/google-fonts", {
        families: {
            "Inter": [400, 500, 600, 700],
            "Poppins": [400, 500, 600, 700],
        },
        display: "swap",
        download: true,
        preconnect: true,
        preload: true,
    }],
    "@nuxt/image-edge",
  ],
});
