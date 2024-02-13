import { Pool } from "pg";

const DEFAULT_CONFIG = {
    user: process.env.DB_USER ?? '',
    host: process.env.DB_HOST ?? '',
    database: process.env.DB_NAME ?? '',
    password: process.env.DB_PASSWORD ?? '',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 1234
  }

const pool = new Pool(DEFAULT_CONFIG);

function delay(ms: number, data: any): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, ms);
  });
}
export class GameModel {
  async getAll({ genre }: any): Promise<any> {
    const client = await pool.connect();
    try {
      if (genre) {
        genre = genre as string;
        const lowerCaseGenre = genre.toLowerCase();
        const result = await client.query(
          "SELECT * FROM games WHERE LOWER(genre::TEXT) = $1",
          [lowerCaseGenre]
        );
        return await delay(2000, result.rows);
      }
      const result = await client.query("SELECT * FROM cart_items");
      return await delay(2000, result.rows);
    } finally {
      client.release();
    }
  }

}
