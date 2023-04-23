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

export async function getImageById(id: string): Promise<string> {
  const result = await connection.execute(
    'SELECT file FROM Images WHERE id = ?',
    [id]
  );

  // Do a little unsafe type assertion here,
  // Rows is an array of objects, whose keys correspond to the column names.
  //
  // We could do a runtime assertion that this object is what we assume it is,
  // however, the column 'file' is a LONGTEXT of base64-encoded images,
  // so any validation that includes memory allocation will be costly.
  return (result.rows[0] as Record<'file', string>).file;
}
