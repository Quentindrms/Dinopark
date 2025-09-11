import { Dinosaur, DinosaurTypeRow } from "../Dinosaur";

export interface DinosaurReadViewTypeRow{
    dinosaur_id: number | null;
    dinosaur_name: string;
    dinosaur_diet: string;
    dinosaur_description: string;
    dinosaur_resume: string;
    dinosaur_species: string;
    dinosaur_available: boolean;
}

export class DinosaurReadView extends Dinosaur{
    
    constructor(dinosaurId: number|null,
        dinosaurName: string,
        dinosaurDiet: string,
        dinosaurDescription: string,
        dinosaurResume: string,
        dinosaurSpecies: string,
        dinosaurVisitable: boolean
    ){
        super(dinosaurId, dinosaurName, dinosaurDiet, dinosaurDescription, dinosaurResume, dinosaurSpecies, dinosaurVisitable)
    }

    static fromRow(row: DinosaurTypeRow): DinosaurReadView {
        return new DinosaurReadView(row.dinosaur_id, row.dinosaur_name, row.dinosaur_diet, row.dinosaur_description, row.dinosaur_resume, row.dinosaur_species, row.dinosaur_available)
    }

}