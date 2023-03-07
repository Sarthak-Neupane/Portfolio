export const useScene = (options) => {
    const nuxtApp = useNuxtApp()
    return useState(() => {
        const scene = new nuxtApp.$three.Scene(options);
        return scene;
    })
}