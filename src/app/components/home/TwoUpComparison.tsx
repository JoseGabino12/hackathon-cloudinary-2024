'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import JSConfetti from 'js-confetti';

import { Card, CardContent } from '@/app/components/ui/card';
import type { TwoUpComparisonProps } from '@/interfaces/ComponentsProps';
import { Loader2 } from 'lucide-react';

import { Share, Download } from 'lucide-react';
import { download, shareTo } from '@/lib/utilsImg';
import { Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
    <div className='flex flex-col items-center justify-center text-center text-pretty gap-5 p-2'>
      <Card>
        <CardContent className="flex flex-col sm:flex-row justify-center p-2 gap-2">
          <div className={ `flex flex-col justify-center items-center p-2 h-[300px] w-[300px] sm:h-[400px] sm:w-[460px] ${showLottie ? 'block' : 'hidden'}` }>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <h2>
              Cargando...
            </h2>
          </div>

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

      <div className='flex gap-5'>
        <Button variant="outline" onClick={ () => download(secondImg) }>
          <Download />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"><Share /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem onClick={ () => shareTo('facebook', secondImg) }>
              <Facebook className="mr-2 h-4 w-4" />
              <span>Facebook</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={ () => shareTo('twitter', secondImg) }>
              <Twitter className="mr-2 h-4 w-4" />
              <span>Twitter</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={ () => shareTo('email', secondImg) }>
              <Mail className="mr-2 h-4 w-4" />
              <span>Correo electrónico</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TwoUpComparison;