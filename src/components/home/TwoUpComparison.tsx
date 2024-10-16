'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import JSConfetti from 'js-confetti';

import { Card, CardContent } from '@/components/ui/card';
import type { TwoUpComparisonProps } from '@/interfaces/ComponentsProps';

const TwoUpComparison = ({ firstImg, secondImg, setLoading }: TwoUpComparisonProps) => {
  const jsConfetti = new JSConfetti();

  const handleImageLoad = () => {
    setLoading(false);
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
      </CardContent>
    </Card>
  );
};

export default TwoUpComparison;