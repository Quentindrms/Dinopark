import {Pool} from "pg";
import dotenv from "dotenv";

export class Database{
    private static pool: Pool;

    static getPool(): Pool{
        /** Si une pool de connexion n'existe pas alors en créer une */
        if(!Database.pool){
            dotenv.config() //Accès au fichier .env contenant les informations de connexion

            Database.pool = new Pool({ //Assignation des informations à la pool
                user: process.env.PGUSER,
                password: process.env.PGPASSWORD,
                host: process.env.PGHOST,
                port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10):undefined,
                database: process.env.PGDATABASE
            });
        }
        return Database.pool;
    }
}