import React from 'react'
import Lottie from 'react-lottie'
function TracksAnimation({animationData}) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <Lottie options={defaultOptions} height={300} width={300} />
  )
}

export default TracksAnimation