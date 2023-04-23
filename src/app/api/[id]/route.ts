import {NextResponse, type NextRequest} from 'next/server';
import {getImageById} from '~/db';

type QueryParams = {
  id: string;
};
export async function GET(request: NextRequest, params: QueryParams) {
  const image = await getImageById(params.id);
  return new NextResponse(image as never, {status: 200});
}
