import {Controller} from "../libs/Controller";
import { DinosaurRepository } from "../repositories/DinosaurRepository";
import {Request, Response} from "express";

export class DinosaurController extends Controller{

    private dinosaurRepository: DinosaurRepository;

    constructor(request:Request, response:Response){
        super(request, response);
        this.dinosaurRepository = new DinosaurRepository();
    }

    public async browseDinosaurs(){
        const dinosaurs = await this.dinosaurRepository.findAll();
        this.response.render('pages/dinosaurs', {
            dinosaurs,
        });
    }

    public async readDinosaurs(){
        const requestedDinosaurId = this.request.params.id;

        const dinosaur = await this.dinosaurRepository.findById(parseInt(requestedDinosaurId));
        this.response.render('pages/read-dinosaur', {
            dinosaur,
        })
    }

    public addDinosaurs(){

    }

    public editDinosaurs(){

    }

    public deleteDinosaurs(){
        
    }
}
