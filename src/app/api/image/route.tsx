import {type NextRequest, ImageResponse} from 'next/server';
import {getImageById} from '~/actions';
export const runtime = 'edge';

export async function GET(req: NextRequest) {
  let image = '';
  const {searchParams} = new URL(req.url);

  const height = searchParams.get('height');
  const width = searchParams.get('width');
  const id = searchParams.get('id');
  console.log(searchParams.toString());

  try {
    if (!id) throw new Error('No id provided');
    image = await getImageById(id);
  } catch (e) {
    console.error({id, height, width, searchParams});
    console.error(e);
    return new ImageResponse(
      (
        <>
          <h1>Image not found</h1>
          <p>The image with id {id} was not found. Please try again.</p>
        </>
      ),
      {status: 404}
    );
  }

  return new ImageResponse(
    (
      <>
        {/* Img allows for ArrayBuffers as arguments in ImageResponses but Typescript doesn't know that */}
        <img
          src={Buffer.from(image, 'base64').buffer as never}
          alt={`The image with id ${id}`}
          height={parseInt(height ?? '720')}
          width={parseInt(width ?? '1280')}
        />
      </>
    ),
    {status: 200}
  );
}
