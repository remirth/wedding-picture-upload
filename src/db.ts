import {type Config, connect} from '@planetscale/database';
import {env} from './env.mjs';
const config = {
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
} satisfies Config;

const connection = connect(config);

export async function insertImage(image: Blob) {
  await connection.execute('INSERT INTO Images (file) VALUES (?)', [image]);
}

export async function insertImages(images: string[]) {
  let query = 'INSERT INTO Images (file) VALUES ';

  for (let i = 0; i < images.length; i++) {
    query += '(?)';
    if (i < images.length - 1) {
      query += ',';
    }
  }

  await connection.execute(query, images);
}

export async function getImageById(id: string): Promise<unknown> {
  const result = await connection.execute(
    'SELECT file FROM Images WHERE id = ?',
    [id]
  );
  const image = (result.rows[0] as any).file;

  return image;
}
