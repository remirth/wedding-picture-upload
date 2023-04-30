import {type NextRequest, ImageResponse} from 'next/server';
import {getImageById} from '~/actions';
export const config = {
  runtime: 'edge',
};

type QueryParams = {
  params: {
    id: string;
    width: number | undefined;
    height: number | undefined;
  };
};
export async function GET(req: NextRequest, query: QueryParams) {
  let image = '';
  const params = new URLSearchParams(decodeURI(req.url));

  const height = params.get('height');
  const width = params.get('width');

  try {
    image = await getImageById(query.params.id);
  } catch (e) {
    console.error(e);
    return new ImageResponse(
      (
        <>
          <h1>Image not found</h1>
          <p>
            The image with id {query.params.id} was not found. Please try again.
          </p>
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
          alt={`The image with id ${query.params.id}`}
          height={height ?? ''}
          width={width ?? ''}
        />
      </>
    ),
    {status: 200}
  );
}
