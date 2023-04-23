import {NextResponse, type NextRequest} from 'next/server';
import {getImageById} from '~/db';

type QueryParams = {
  params: {
    id: string;
  };
};
export async function GET(request: NextRequest, query: QueryParams) {
  const image = await getImageById(query.params.id);
  return new NextResponse(image as never, {status: 200});
}
