'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CldUploadWidget } from 'next-cloudinary';
import { getCldImageUrl } from 'next-cloudinary';

import type { StartProps } from '@/interfaces/ComponentsProps';
import type { CloudinaryUploadWidgetInfo } from '@/types/cloudinary';
import { monsters } from '@/data/monsters';
import { welcome, loading, completed } from '@/data/titles';
import TwoUpComparison from './TwoUpComparison'; // Asegúrate de que sea la importación correcta

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
    <div className="flex flex-col min-h-screen items-center text-center text-pretty justify-center gap-5 p-5">
      <h1 className={ `text-5xl text-orange-600 ${creepster.className} text-pretty` }>
        { isLoading ? loading : imgExist ? `${completed} ${monster}!` : welcome }
      </h1>

      <CldUploadWidget
        uploadPreset="upload-unsigned-images"
        options={ {
          sources: ['local'],
          multiple: false,
          maxFiles: 1,
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
            Sube tu foto
          </Button>
        ) }
      </CldUploadWidget>

      { imgExist && imgEmpty && (
        <TwoUpComparison
          firstImg={ publicId?.secure_url }
          secondImg={ publicIdTrans }
          setLoading={ setIsLoading }
        />
      ) }
      { imgExist && imgEmpty && !isLoading && (
        <a href={ publicIdTrans } download className="mt-4" target="_blank">
          <Button>Descarga la imagen</Button>
        </a>
      ) }
    </div>
  );
};