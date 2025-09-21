import { Respository } from "../libs/Respository";
import { Dinosaur } from "../models/Dinosaur"; 
import { DinosaurBrowseView, DinosaurBrowseViewTypeRow } from "../models/views/DinosaurBrowseView";
import { DinosaurReadView, DinosaurReadViewTypeRow } from "../models/views/DinosaurReadView";

export class DinosaurRepository extends Respository{

    findAll = async (): Promise<Dinosaur[]> => {
        /** Requêtte transmise à la BDD */
        const query = {
            name: 'Fetch-all-dinosaurs',
            text: 'SELECT * FROM dinosaur ORDER BY dinosaur_id ASC'
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

    async editDinosaur(id: number, name:string, diet:string, description:string, resume: string, species:string, visitable:boolean){
        const query = {
            name:'Edit-dinosaur',
            text: 'UPDATE dinosaur SET dinosaur_name =$2, dinosaur_diet=$3, dinosaur_species=$4, dinosaur_description=$5, dinosaur_resume=$6, dinosaur_available=$7 WHERE dinosaur_id=$1',
            values:[id, name, diet, species, description, resume, visitable]
        }

        try{
            const dinosaurEditing = await this.pool.query(query);
            console.log(`Ligne affectée : ${dinosaurEditing.rowCount}`);
            console.log(`Valeurs : ${dinosaurEditing.rows[0]}`);
        }catch(error){
            console.error(error);
        }
    }
}