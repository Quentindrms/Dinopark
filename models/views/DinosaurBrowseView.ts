import { Dinosaur } from "../Dinosaur";

export interface DinosaurBrowseViewTypeRow {
    dinosaur_id: number | null;
    dinosaur_name: string;
    dinosaur_diet: string;
    dinosaur_description: string;
    dinosaur_species: string;
    dinosaur_available: boolean;
}

export class DinosaurBrowseView extends Dinosaur{

    constructor(
        id: number | null, 
        dinosaurName: string, 
        dinosaurDiet: string, 
        dinosaurDescription: string,
        dinosaurSpecies: string,
        dinosaurVisitable: boolean) {
            super(id, dinosaurName, dinosaurDiet, dinosaurDescription, dinosaurSpecies, dinosaurVisitable);
    }

    static fromRow(row: DinosaurBrowseViewTypeRow): DinosaurBrowseView {
        return new DinosaurBrowseView(row.dinosaur_id, row.dinosaur_name, row.dinosaur_diet, row.dinosaur_description, row.dinosaur_species, row.dinosaur_available);
    }
}