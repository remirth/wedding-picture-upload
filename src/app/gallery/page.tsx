import Gallery from './gallery';
import {getAllImageUrls} from '~/actions';

export const runtime = 'edge';

export default async function Page() {
  const links = await getAllImageUrls();
  return (
    <div className='col-span-12 h-[80%]'>
      <Gallery images={links} />
    </div>
  );
}
