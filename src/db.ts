import {type Config, connect} from '@planetscale/database';
import {env} from './env.mjs';
const config = {
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
} satisfies Config;

const connection = connect(config);

export async function insertImage(image: Blob) {
  if (!image.type.includes('image')) throw new Error('Not an image');

  await connection.execute('INSERT INTO Images (file) VALUES (?)', [image]);
}
