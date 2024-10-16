'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import { CldImage } from 'next-cloudinary';
import type { CardExampleProp } from '@/interfaces/ComponentsProps';

export const CardExample = ({ name, first_public_id, second_public_id, className }: CardExampleProp) => {
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{ name }</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row justify-center p-2 gap-2">
        <div className="flex-1">
          <CldImage
            src={ first_public_id }
            width="360" // Specify width
            height="300" // Specify height
            sizes="(max-width: 600px) 100vw, 50vw"
            alt="Imagen normal de la persona"
            style={ { width: '100%', height: 'auto' } } // Responsive style
          />
        </div>

        <div className="flex-1">
          <CldImage
            src={ second_public_id }
            width="360" // Specify width
            height="300" // Specify height
            sizes="(max-width: 600px) 100vw, 50vw"
            alt="Imagen transformada en monstruo"
            style={ { width: '100%', height: 'auto' } } // Responsive style
          />
        </div>
      </CardContent>
    </Card>
  )
}