import { Controller } from "../libs/Controller";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../libs/client/auth.service";
import cookieParser from "cookie-parser";
import { Request, Response } from "express";
import {DinosaurRepository} from "../repositories/DinosaurRepository";
import { Dinosaur } from "../models/Dinosaur";

export class AccountController extends Controller {

    private userRepository: UserRepository;
    private dinosaurRepository: DinosaurRepository;

    constructor(request: Request, response: Response) {
        super(request, response);
        this.userRepository = new UserRepository();
        this.dinosaurRepository = new DinosaurRepository();
    }

    async accountAuthentification() {

        const requestedUser = this.request.body.mail; //Mail et mot de passe transmis par l'utilisateur lors de l'identification
        const requestedEmailPassword = this.request.body.password;
        const user = await this.userRepository.findByMail(requestedUser); //Recherche l'utilisateur par son mail
        console.log(user);
        if (user) {
            const success = await AuthService.verifyPassword(requestedEmailPassword, user.getPassword()) //Comparaison des mots de passe
            if (success) {
                console.log('Vous êtes connecté ! :)');
                this.response.cookie('dinopark_connexion', JSON.stringify(user));
                this.response.redirect('/account/homepage/');
            }
            else {
                console.log("Vous n'êtes pas connecté :(");
                this.response.status(400).render('pages/connexion', {
                    authError: "L'identifiant et/ou le mot de passe sont incorrects"
                });
            }
        }
    }

    public async accountHomePage() {
        const userCookie = JSON.parse(this.request.cookies.dinopark_connexion);
        const userId = userCookie.id;

        const user = await this.userRepository.findUserById(userId);

        this.response.render('pages/account/homePage',{
            user,
        });
    }

    public async accountInformation() {
        const userCookie = JSON.parse(this.request.cookies.dinopark_connexion);
        const userId = userCookie.id;

        const user = await this.userRepository.findUserById(userId);

        this.response.render('pages/account/accountInformation', {
            user,
        });
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

    public async editDinosaur(){
        const userCookie = JSON.parse(this.request.cookies.dinopark_connexion);
        const userId = userCookie.id;
        const user = await this.userRepository.findUserById(userId);

        const requestedId:number = parseInt(this.request.params.id);

        if(user?.getUserAdmin() == true){
            const dinosaur = await this.dinosaurRepository.findById(requestedId);
            this.response.render('pages/account/edit-dinosaur', {
                dinosaur,
            });
        }
        else{
            console.log("Vous n'avez pas le rang administrateur");
            this.response.status(400).render('pages/account/homePage',{
                user,
            });
        }
    }

    public async sendDinosaurEdit(){

    }
}