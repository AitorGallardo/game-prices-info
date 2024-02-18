import { Game } from "@/interfaces/game";
import { Pool } from "pg";

const DEFAULT_CONFIG = {
  user: process.env.DB_USER ?? "",
  host: process.env.DB_HOST ?? "",
  database: process.env.DB_NAME ?? "",
  password: process.env.DB_PASSWORD ?? "",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 1234,
};

const ITEMS_PER_PAGE = 6;

const pool = new Pool(DEFAULT_CONFIG);

function delay(ms: number, data: any): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, ms);
  });
}
// TODO: change genre and platform to be using arrays -> consider in getAll function

type SearchOptions = Partial<Pick<Game, 'title' | 'genre' | 'platform' | 'release_year'>>;

export class GameModel {
  async getById(id: number): Promise<Game | null> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        "SELECT * FROM games WHERE id = $1",
        [id]
      );
      return result.rows[0] ?? null;
    } finally {
      client.release();
    }
  }

  async getAll(options: SearchOptions): Promise<Game[]> {
    const client = await pool.connect();

    let query =
      "SELECT games.id AS game_id, games.title,games.price,games.release_year,ARRAY_AGG(DISTINCT game_genre.genre_id) AS genre_ids, ARRAY_AGG(DISTINCT game_platform.platform_id) AS platform_ids FROM games";
    const params: string[] = [];
    const conditions: string[] = [];

    Object.entries(options).forEach(([key, value], index) => {
      if((key === 'genre' || key === 'platform')&&value){
        const arrOfIds = value as number[]
        conditions.push(`game_${key}.${key}_id IN (${arrOfIds.map((id, index) => {
          const valueIndex = params.length + 1
          params.push(`${id}`);
          return `$${valueIndex}`
        }).join(",")})`);
      }
      else if (value) {
        conditions.push(`LOWER(${key}::TEXT) LIKE LOWER($${params.length  + 1})`);
        params.push(`%${String(value).toLowerCase()}%`);
      }
    });

    // Joining tables
    query += " LEFT JOIN game_genre ON game_genre.game_id = games.id";
    query += " LEFT JOIN game_platform ON game_platform.game_id = games.id";
    
    // If there are conditions, add a WHERE clause to the query
    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    //Grouping by 
    query += " GROUP BY games.id, games.title, games.price, games.release_year";


    try {
      const result = await client.query(query, params);
      return await delay(2000, result.rows);
    } finally {
      client.release();
    }
  }
  // MIRAR EN VIDEO. CADA VEZ QUE ESCRIBO EN EL SEARCH INPUT, SE HACEN 2 QUERIES? 
  //TODO: (MIRAR DE GITHUB!) Lo que quiero hacer es buscar solo por searchquery y mirar solo en el titlez
  async getFiltered(options: SearchOptions,currentPage:number): Promise<Game[]> {
    const client = await pool.connect();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    let query =
      "SELECT games.id AS game_id, games.title,games.price,games.release_year,ARRAY_AGG(DISTINCT game_genre.genre_id) AS genre_ids, ARRAY_AGG(DISTINCT game_platform.platform_id) AS platform_ids FROM games";
    const params: string[] = [];
    const conditions: string[] = [];

    Object.entries(options).forEach(([key, value], index) => {
      if (value) {
        conditions.push(`LOWER(${key}::TEXT) LIKE LOWER($${index + 1})`);
        params.push(`%${String(value).toLowerCase()}%`);
      }
    });

    // Joining tables
    query += " LEFT JOIN game_genre ON game_genre.game_id = games.id";
    query += " LEFT JOIN game_platform ON game_platform.game_id = games.id";
    
    // If there are conditions, add a WHERE clause to the query
    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    //Grouping by 
    query += " GROUP BY games.id, games.title, games.price, games.release_year";

    try {
      const result = await client.query(query, params);
      return await delay(2000, result.rows);
    } finally {
      client.release();
    }
  }
//TODO: Meterle tmb searchquery como en la funcion anterior
  async getAllPages(){
    const client = await pool.connect();
    try {
      const result = await client.query("SELECT COUNT(*) FROM games");
      const totalPages = Math.ceil(Number(result.rows[0].count) / ITEMS_PER_PAGE);
      
      return totalPages;
    } finally {
      client.release();
    }
  }
}
