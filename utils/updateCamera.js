export const updateCamera = (camera, options) => {
    camera.aspect = options.aspect
    camera.updateProjectionMatrix()
}