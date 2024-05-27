// components/LottieAnimation.js
import React from 'react';
import Lottie from 'lottie-react-web';
import animationData from '../path/to/animation.json';

const LottieAnimation = () => {
  return <Lottie options={{ animationData }} width={200} height={200} />;
};

export default LottieAnimation;
