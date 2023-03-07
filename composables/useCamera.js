export const useCamera = (options) => {
    const nuxtApp = useNuxtApp()
    return useState(() => {
        let camera;
        if(options.cameraType == 'Perspective') {
            camera = new nuxtApp.$three.PerspectiveCamera(options.fov, options.aspect, options.near, options.far);
        } else {
            camera = new nuxtApp.$three.OrthographicCamera(options);
        }
        return camera;
    })
}