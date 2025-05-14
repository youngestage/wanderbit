import { LayoutAnimation } from 'react-native';

export const springAnimation = {
  duration: 300,
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7,
  },
  delete: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7,
  },
};

export const enableLayoutAnimations = () => {
  LayoutAnimation.configureNext(springAnimation);
}; 