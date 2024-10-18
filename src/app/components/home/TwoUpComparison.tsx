'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import JSConfetti from 'js-confetti';

import { Card, CardContent } from '@/app/components/ui/card';
import type { TwoUpComparisonProps } from '@/interfaces/ComponentsProps';
import Lottie from 'lottie-react';
import Loader from '@/app/assets/lotties/loader.json';

const TwoUpComparison = ({ firstImg, secondImg, setLoading }: TwoUpComparisonProps) => {
  const jsConfetti = new JSConfetti();
  const [showTwoUp, setShowTwoUp] = useState(false)
  const [showLottie, setShowLottie] = useState(true)

  const handleImageLoad = () => {
    setLoading(false);
    setShowTwoUp(true);
    setShowLottie(false);

    jsConfetti.addConfetti({
      emojis: ['👻', '🎃', '💀', '👻', '💀', '🎃'],
    });
  };

  useEffect(() => {
    // Cargar el Web Component solo en el cliente
    const loadTwoUpElement = async () => {
      if (typeof window !== 'undefined') {
        await import('two-up-element');
      }
    };

    loadTwoUpElement();
  }, []);

  return (
    <Card>
      <CardContent className="flex flex-col sm:flex-row justify-center p-2 gap-2">
        <Lottie
          animationData={ Loader }
          loop={ true }
          className={ `h-80 ${showLottie ? 'block' : 'hidden'}` }
        />

        <div className={ showTwoUp ? 'block' : 'hidden' }>
          <two-up>
            { firstImg && secondImg && (
              <>
                <Image
                  src={ firstImg }
                  alt="first comparison image"
                  width={ 460 }
                  height={ 400 }
                />

                <img
                  src={ secondImg }
                  alt="second comparison image"
                  width={ 460 }
                  height={ 400 }
                  onLoad={ handleImageLoad }
                />
              </>
            ) }
          </two-up>
        </div>
      </CardContent>
    </Card>
  );
};

export default TwoUpComparison;