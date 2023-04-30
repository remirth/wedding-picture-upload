import {NextResponse, type NextRequest} from 'next/server';
import {insertImages} from '~/db';
import {isImage} from '~/utils';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const images: string[] = [];

  for (const value of form.values()) {
    if (!isImage(value)) continue;
    images.push(Buffer.from(await value.arrayBuffer()).toString('base64'));
  }

  if (!images.length) {
    return new NextResponse('No image', {status: 400});
  }

  try {
    await insertImages(images);
  } catch (e) {
    return new NextResponse((e as Error).message, {status: 500});
  }

  return new NextResponse('ok', {status: 200});
}
