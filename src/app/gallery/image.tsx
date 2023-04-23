import Image from 'next/image';
import {cache} from 'react';
import {getImageById} from '~/db';
export default async function ImageGetter() {
  const base64 = await cache(() => getImageById('6'))();
  return (
    <>
      <div className='text-primary'>
        <Image
          src={`data:image/jpeg;base64,${base64 as string}`}
          alt='generated image'
          fill
          priority={true}
        />
      </div>
    </>
  );
}
