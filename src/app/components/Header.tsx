'use client'

import SpiderWeb2 from '@/app/assets/images/bg-header2.webp';
import SpiderWeb from '@/app/assets/images/bg-header-1.webp';
import Spider from '@/app/assets/lotties/bg-header2.json';

import Image from 'next/image'

import Lottie from 'lottie-react'

export const Header = () => {
  return (
    <header className='flex'>
      <div className="p-2" />
      <Lottie
        animationData={ Spider }
        loop={ true }
        className='absolute w-[300px] -z-10'
      />

      <Image
        src={ SpiderWeb.src }
        alt='Spiderweb'
        width={ 600 }
        height={ 600 }
        className='absolute right-0 sm:right-0 md:right-96 -z-10'
      />

      <Image
        src={ SpiderWeb2.src }
        alt='Spiderweb'
        width={ 600 }
        height={ 600 }
        className='absolute right-0 hidden sm:block -z-10'
      />
    </header>
  )
}