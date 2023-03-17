import gsap from 'gsap'
import { useTransitionStore } from '@/store/transition'
import { useTransitionComposable } from '../composables/useTransitionComposable'
import { useTransformComposable } from '../composables/useTransformComposable'
const { toggleTransitionComplete } = useTransitionComposable()
const { transformComplete, toggleTransformComplete } = useTransformComposable()

const pageTransition = {
  name: 'page-transiton',
  mode: 'out-in',
  onEnter: (el, header, done) => {
    const getExactElement = header.querySelector('#animate')
    const pageName = getExactElement.querySelector('#pageName')
    gsap.set(el, { autoAlpha: 0 })
    gsap
      .timeline({
        paused: true,
        onComplete () {
          // toggleTransitionComplete(true)
          done()
        }
      })
      .to(pageName, {
        duration: 0.5,
        yPercent: transformComplete.value ? -0 : -100,
        onComplete: () => {
          toggleTransformComplete()
        }
      })
      .to(getExactElement, {
        duration: 1,
        height: '10vh',
        ease: 'power4.out',
        onComplete: () => {
          toggleTransitionComplete(true)
        }
      })
      .to(el, { duration: 0.5, autoAlpha: 1 }, '-=0.5')
      .play()
  },
  onLeave: (el, header, done) => {
    const getExactElement = header.querySelector('#animate')
    toggleTransitionComplete(false)
    gsap
      .timeline({ paused: true, onComplete: done })
      .to(el, { duration: 0.25, autoAlpha: 0 })
      .to(
        getExactElement,
        { duration: 1, height: '100vh', ease: 'power4.out' },
        '-=0.15'
      )
      .play()
  }
}

export default pageTransition
