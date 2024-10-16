'use client'

import Lottie from 'lottie-react';
import Halloween from '@/assets/lotties/halloween.json';

export const CommingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Lottie
        animationData={ Halloween }
        loop={ true }
        className='h-80 w-80'
      />
      <h1 className='text-2xl font-semibold'>Comming soon...</h1>
    </div>
  )
}