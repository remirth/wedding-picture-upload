'use client';
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';

import Image from 'next/image';
import type {GalleryItem} from '~/types';
import {memo} from 'react';

type GalleryProps = {
  images: GalleryItem[];
};
export default function Gallery({images}: GalleryProps) {
  return (
    <>
      <ImageGallery
        items={images}
        renderItem={(o) => <Item {...(o as any)} />}
        renderThumbInner={(o) => <ThumbInner {...(o as any)} />}
        lazyLoad={false}
      />
    </>
  );
}

const Item = memo(
  ({
    description,
    fullscreen, // fullscreen version of img
    original,
    originalAlt,
    originalTitle,
    sizes,
    isFullscreen,
    onImageError,
    handleImageLoaded,
    originalWidth,
    originalHeight,
  }: ReactImageGalleryItem & {
    isFullscreen: boolean;
    handleImageLoaded: (e: unknown, o: string) => void;
    onImageError: React.EventHandler<any>;
  } & GalleryItem) => {
    const itemSrc = isFullscreen ? fullscreen || original : original;

    return (
      <>
        <Image
          className='image-gallery-image slide-height'
          src={itemSrc}
          alt={originalAlt ?? 'A gallery item'}
          width={originalWidth}
          height={originalHeight}
          priority
          sizes={sizes}
          onError={onImageError}
          onLoad={(e) => handleImageLoaded?.(e, original)}
          title={originalTitle}
        />
        {description && (
          <span className='image-gallery-description'>{description}</span>
        )}
      </>
    );
  }
);

Item.displayName = 'RenderItem';

const ThumbInner = memo((item: ReactImageGalleryItem & GalleryItem) => {
  return (
    <>
      <span className='image-gallery-thumbnail-inner'>
        <Image
          className='image-gallery-thumbnail-image'
          src={item.thumbnail}
          height={item.thumbnailHeight}
          width={item.thumbnailWidth}
          alt={item.thumbnailAlt ?? 'Thumbnail'}
          title={item.thumbnailTitle}
          loading={item.thumbnailLoading}
        />
        {item.thumbnailLabel && (
          <div className='image-gallery-thumbnail-label'>
            {item.thumbnailLabel}
          </div>
        )}
      </span>
    </>
  );
});

ThumbInner.displayName = 'ThumbInner';
