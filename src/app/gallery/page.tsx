import Gallery from './gallery';
import {getAllImageUrls} from '~/actions';

export const revalidate = 60;

export const runtime = 'edge';

export default async function Page() {
  const links = await getAllImageUrls();
  return <Gallery images={links} />;
}
