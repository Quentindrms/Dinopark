import { Respository } from "../libs/Respository";
import { Dinosaur } from "../models/Dinosaur"; 

export class DinosaurRepository extends Respository{

    async findAll():Promise<Dinosaur[]>{
        /** Requêtte transmise à la BDD */
        const query = {
            name: 'Fetch-all-dinosaurs',
            text: 'SELECT * FROM dinosaurs'
        }
        try{
            // Envoi de la requêtte 
            const result = await this.pool.query(query)
            // Trasnforme les données en objet exploitable
            const data = result.rows.map((row) => {
                return new Dinosaur(row.id, row.name, row.diet, row.description, row.species, row.visitable);
            })
        return data} //Retourne la promesse
        catch(error){
            return [];
        }
    }
}