import {NextResponse, type NextRequest} from 'next/server';

export const config = {
  runtime: 'edge',
};

export async function POST(req: NextRequest) {
  const form = await req.formData();
  return new NextResponse('ok', {status: 200});
}
