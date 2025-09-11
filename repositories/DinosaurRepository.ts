import { Respository } from "../libs/Respository";
import { Dinosaur } from "../models/Dinosaur"; 
import { DinosaurBrowseView, DinosaurBrowseViewTypeRow } from "../models/views/DinosaurBrowseView";

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
}