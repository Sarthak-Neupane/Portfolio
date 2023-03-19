import { reactive } from 'vue';

const transitionState = reactive({
  transitionComplete: false,
});

export const useTransitionComposable = () => {
  const toggleTransitionComplete = (value) => {
    transitionState.transitionComplete = value;
    console.log('transitionState.transitionComplete', transitionState.transitionComplete);
  };

  return {
    transitionState,
    toggleTransitionComplete,
  };
};
