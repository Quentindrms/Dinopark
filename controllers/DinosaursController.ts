import { Controller } from "../libs/Controller";
import { DinosaurRepository } from "../repositories/DinosaurRepository";
import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";
import { DinosaurEditRaw } from "../libs/Types";

export class DinosaurController extends Controller {

    private dinosaurRepository: DinosaurRepository;
    private userRepository: UserRepository;

    constructor(request: Request, response: Response) {
        super(request, response);
        this.dinosaurRepository = new DinosaurRepository();
        this.userRepository = new UserRepository();
    }

    public async browseDinosaurs() {
        const dinosaurs = await this.dinosaurRepository.findAll();
        this.response.render('pages/dinosaurs', {
            dinosaurs,
        });
    }

    public async readDinosaurs() {
        const requestedDinosaurId = this.request.params.id;

        const dinosaur = await this.dinosaurRepository.findById(parseInt(requestedDinosaurId));
        this.response.render('pages/read-dinosaur', {
            dinosaur,
        })
    }

    public addDinosaurs() {

    }

    public async editDinosaurs() {
        const userCookie = JSON.parse(this.request.cookies.dinopark_connexion);
        const userId = userCookie.id;
        const user = await this.userRepository.findUserById(userId);

        const dinosaurEditValue: DinosaurEditRaw = {
            id: parseInt(this.request.body.id),
            name: this.request.body.name,
            diet: this.request.body.diet,
            resume: this.request.body.resume,
            description: this.request.body.description,
            species: this.request.body.species,
            visitable: this.request.body.visitable
        }

        try {
            this.dinosaurRepository.editDinosaur(
                dinosaurEditValue.id,
                dinosaurEditValue.name,
                dinosaurEditValue.diet,
                dinosaurEditValue.resume,
                dinosaurEditValue.description,
                dinosaurEditValue.species,
                dinosaurEditValue.visitable)
        } catch (error) {
            console.log(error);
        }
        this.response.send('Ok');
    }

    public deleteDinosaurs() {

    }
}
