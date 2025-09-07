import { Pool } from "pg";
import { Database } from "./Database";

/** Classe abstraite pour les repository
 * Récupère la pool dans Database et la transmet au respository devant établir une connexion
 */

export abstract class Respository {
    protected pool: Pool;

    constructor(){
        this.pool = Database.getPool();
    }
}