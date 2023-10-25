'use client'

import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottiePlayer = () => {
  return (
      <DotLottiePlayer
        src="animation_llqd7ey4.lottie"
        autoplay
          loop
          className='md:col-span-2 md:border-r-2'
      >
      </DotLottiePlayer>
  );
};

export default LottiePlayer;