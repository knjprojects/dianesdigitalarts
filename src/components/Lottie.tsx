
import React from 'react'
import animation from "../../public/assets/animations/colors.json"
import Lottie from 'lottie-react';

const LottieAnimation = () => {
    return (
        <div>
             <Lottie
    animationData={animation}
    autoplay
    loop
  />
        </div>
    )
}

export default LottieAnimation
