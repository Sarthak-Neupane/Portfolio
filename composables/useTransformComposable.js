import { reactive, ref } from 'vue';

const transformComplete = ref(false)


export const useTransformComposable = () => {
  const toggleTransformComplete = () => {
    transformComplete.value = !transformComplete.value;
  };

  return {
    transformComplete,
    toggleTransformComplete,
  };
};
