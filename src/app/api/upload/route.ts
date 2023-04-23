import {NextResponse, type NextRequest} from 'next/server';
import {insertImage} from '~/db';

export const config = {
  runtime: 'edge',
};

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const image = form.get('image');
  if (!image) return new NextResponse('No image', {status: 400});
  if (!(image instanceof Blob)) {
    return new NextResponse('Image is not a binary', {status: 400});
  }

  try {
    await insertImage(image);
  } catch (e) {
    return new NextResponse((e as Error).message, {status: 500});
  }

  return new NextResponse('ok', {status: 200});
}
