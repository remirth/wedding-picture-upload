'use client';
import ImageGallery from 'react-image-gallery';

import Image from 'next/image';
import type {GalleryItem} from '~/types';

type GalleryProps = {
  images: GalleryItem[];
};

export default function Gallery({images}: GalleryProps) {
  return (
    <>
      <ImageGallery items={images} />
    </>
  );
}
