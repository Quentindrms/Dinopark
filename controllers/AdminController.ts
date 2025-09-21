import { Controller } from "../libs/Controller";
import { Request, Response } from "express-serve-static-core";
import { DinosaurRepository } from "../repositories/DinosaurRepository";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";

export class AdminController extends Controller{

    private dinosaurRepository: DinosaurRepository;
    private userRepository: UserRepository;

constructor(request:Request, response:Response){
    super(request, response);
    this.dinosaurRepository = new DinosaurRepository();
    this.userRepository = new UserRepository();
}

    public async dinosaursManagement(){
        const userCookie = JSON.parse(this.request.cookies.dinopark_connexion);
        const userId = userCookie.id;
        const user = await this.userRepository.findUserById(userId);

        if(user?.getUserAdmin() == true){
            const dinosaurs = await this.dinosaurRepository.findAll();
            this.response.render('pages/account/dinosaur-management', {
                dinosaurs,
            });
        }
        else{
            console.log("Vous n'avez pas le rang administrateur");
            this.response.status(400).render('pages/account/homePage',{
                user,
            });
        }
    }

}