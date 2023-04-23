import Image from 'next/image';
import {getImageById} from '~/db';
export default function ImageGetter() {
  return (
    <>
      <div className='text-primary'>
        <Image
          src='/api/image/7'
          className='absolute'
          alt='generated image'
          fill
          priority={true}
        />
      </div>
    </>
  );
}
