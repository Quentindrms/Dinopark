/** Define la structure du TypeRow
 * Reprend le nom des colonnes en BDD
 */

export interface DinosaurTypeRow{
    dinosaur_id: number | null;
    dinosaur_name: string;
    dinosaur_diet: string;
    dinosaur_description: string;
    dinosaur_species: string;
    dinosaur_visitable: boolean;
}
/** Class Dinosaur
 * Détermine la structure de l'objet
 * Récupère une ligne dans le BDD et la retourne sous forme d'objet Dinosaur
 */

export class Dinosaur {
    protected id: number | null;
    protected name: string;
    protected diet: string;
    protected description: string;
    protected species: string;
    protected visitable: boolean;

    constructor(
        id: number | null,
        name: string,
        diet: string,
        description: string,
        species: string,
        visitable: boolean
    ){
        this.id = id;
        this.name = name;
        this.diet = diet;
        this.description = description;
        this.species = species;
        this.visitable = visitable;
    }

    static fromRow(row: DinosaurTypeRow): Dinosaur{
        return new Dinosaur(row.dinosaur_id, row.dinosaur_name, row.dinosaur_diet, row.dinosaur_description, row.dinosaur_species, row.dinosaur_visitable);
    }
}