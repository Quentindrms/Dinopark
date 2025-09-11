import { Respository } from "../libs/Respository";
import { Dinosaur } from "../models/Dinosaur"; 
import { DinosaurBrowseView, DinosaurBrowseViewTypeRow } from "../models/views/DinosaurBrowseView";
import { DinosaurReadView, DinosaurReadViewTypeRow } from "../models/views/DinosaurReadView";

export class DinosaurRepository extends Respository{

    findAll = async (): Promise<Dinosaur[]> => {
        /** Requêtte transmise à la BDD */
        const query = {
            name: 'Fetch-all-dinosaurs',
            text: 'SELECT * FROM dinosaur'
        };
        const result = await this.pool.query<DinosaurBrowseViewTypeRow>(query);
        const dinosaurs = result.rows.map((row) => DinosaurBrowseView.fromRow(row));
        return dinosaurs;
}

    findById = async (requestedId:number) : Promise<Dinosaur | null> => {
        const query = {
            name:'Fetch-dinosaur-by-id',
            text: `SELECT * FROM dinosaur WHERE dinosaur_id=$1`,
            values: [requestedId],
        };

        try{
            const result = await this.pool.query<DinosaurReadViewTypeRow>(query);
            if(result.rows[0]){
                const dinosaur = DinosaurReadView.fromRow(result.rows[0]);
                return dinosaur;
            }
            else{
                return null;
            }
        } catch (error){
            console.error(error);
        }
        //Retourne null en cas d'erreur
        return null;
    }
}