'use client'

import { useRef } from 'react';
import Image from 'next/image';
import 'two-up-element';

import {
  Card,
  CardContent
} from "@/components/ui/card";

import type { TwoUpComparisonProps } from '@/interfaces/ComponentsProps';
import JSConfetti from 'js-confetti';

export const TwoUpComparison = ({ firstImg, secondImg, setLoading }: TwoUpComparisonProps) => {
  const secondImgRef = useRef<HTMLImageElement>(null);

  const jsConfetti = new JSConfetti()


  const handleImageLoad = () => {
    setLoading(false);
    jsConfetti.addConfetti({
      emojis: ['👻', '🎃', '💀', '👻', '💀', '🎃']
    })
  };

  return (
    <Card>
      <CardContent className="flex flex-col sm:flex-row justify-center p-2 gap-2">
        <two-up>
          {
            firstImg && secondImg && (
              <>
                <Image
                  src={ firstImg }
                  alt='first comparison image'
                  width={ 460 }
                  height={ 400 }
                />

                <Image
                  src={ secondImg }
                  alt='second comparison image'
                  width={ 460 }
                  height={ 400 }
                  ref={ secondImgRef }
                  onLoad={ handleImageLoad }
                />
              </>
            )
          }
        </two-up>
      </CardContent>
    </Card>
  );
};