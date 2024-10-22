'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { CldUploadWidget } from 'next-cloudinary';
import { getCldImageUrl } from 'next-cloudinary';

import type { StartProps } from '@/interfaces/ComponentsProps';
import type { CloudinaryUploadWidgetInfo } from '@/types/cloudinary';
import { monsters } from '@/data/monsters';
import { welcome, loading, completed } from '@/data/titles';
import TwoUpComparison from './TwoUpComparison';

import { Loader2 } from 'lucide-react';
import { ArrowDownIcon } from "@radix-ui/react-icons";

export const Start = ({ creepster }: StartProps) => {
  const [publicId, setPublicId] = useState<CloudinaryUploadWidgetInfo>();
  const [publicIdTrans, setPublicIdTrans] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [monster, setMonster] = useState('');

  const imgEmpty = publicId?.public_id !== '' && publicIdTrans !== '';
  const imgExist = !!publicIdTrans && !!publicId;

  useEffect(() => {
    if (!publicId) return;

    setIsLoading(true); // Start loading

    const newUrl = getCldImageUrl({
      src: publicId.public_id,
      replace: {
        from: 'person',
        to: monster,
        preserveGeometry: true,
      },
    });

    setPublicIdTrans(newUrl);
  }, [publicId, monster]);

  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen p-5">
      <div className='flex flex-col items-center justify-center text-center text-pretty gap-5'>
        <h1 className={ `text-5xl text-orange-600 ${creepster.className} text-pretty` }>
          { isLoading ? loading : imgExist ? `${completed} ${monster}!` : welcome }
        </h1>

        <CldUploadWidget
          uploadPreset="upload-unsigned-images"
          options={ {
            sources: ['local'],
            multiple: false,
            clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp'],
            maxFiles: 1,
            resourceType: 'image',
            styles: {
              backgroundColor: '#1A1A2E',
            },
          } }
          onSuccess={ (result) => {
            if (typeof result.info === 'object' && 'public_id' in result.info) {
              const info = result.info as CloudinaryUploadWidgetInfo;
              setPublicId(info);
              setPublicIdTrans(undefined);
              setMonster(monsters[Math.floor(Math.random() * monsters.length)]);
            }
          } }
        >
          { ({ open }) => (
            <Button onClick={ () => open() } disabled={ isLoading }>
              { isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sube tu foto' }
            </Button>
          ) }
        </CldUploadWidget>
      </div>

      { imgExist && imgEmpty && (
        <TwoUpComparison
          firstImg={ publicId?.secure_url }
          secondImg={ publicIdTrans }
          setLoading={ setIsLoading }
        />
      ) }

      {
        !imgExist && (
          <div className="flex flex-col items-center mt-auto animate-bounce">
            <a href='#example'>
              🎃
            </a>
            <ArrowDownIcon />
          </div>
        )
      }
    </div>
  );
};