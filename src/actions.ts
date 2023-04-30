import {cache} from 'react';
import {getAllImageIds, getImageByIdFromDb} from './db';
import type {GalleryItem} from './types';
let imageLinks = new Array<GalleryItem>(10000);

const THUMBNAIL_WIDTH = 250 as const;
const THUMBNAIL_HEIGHT = 150 as const;
const IMAGE_WIDTH = 1000 as const;
const IMAGE_HEIGHT = 600 as const;
const IMAGE_URL_BASE = '/api/image' as const;

export const getAllImageUrls = cache(async () => {
  const ids = await getAllImageIds();
  imageLinks = new Array<GalleryItem>(ids.length);

  for (let i = 0; i < ids.length; i++) {
    imageLinks[i] = {
      original: `${IMAGE_URL_BASE}/${
        ids[i] as string
      }?width=${IMAGE_WIDTH}&height=${IMAGE_HEIGHT}`,
      thumbnail: `${IMAGE_URL_BASE}/${
        ids[i] as string
      }?width=${THUMBNAIL_WIDTH}&height=${THUMBNAIL_HEIGHT}`,
    };
  }

  return imageLinks;
});

export const getImageById = cache(getImageByIdFromDb);
