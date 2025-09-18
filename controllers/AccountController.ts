import { Controller } from "../libs/Controller";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../libs/client/auth.service";
import cookieParser from "cookie-parser";
import {Request, Response} from "express";

export class AccountController extends Controller {

    private userRepository: UserRepository;

    constructor(request:Request, response:Response) {
        super(request, response);
        this.userRepository = new UserRepository();
    }

    async accountAuthentification() {

        const requestedUser = this.request.body.mail; //Mail et mot de passe transmis par l'utilisateur lors de l'identification
        const requestedEmailPassword = this.request.body.password;
        const user = await this.userRepository.findByMail(requestedUser); //Recherche l'utilisateur par son mail
        console.log(user);
        if(user){
            const success = await AuthService.verifyPassword(requestedEmailPassword, user.getPassword()) //Comparaison des mots de passe
            if(success){
                console.log('Vous êtes connecté ! :)');
                this.response.cookie('dinopark_connexion', JSON.stringify(user));
                this.response.redirect('/account/homepage/');
            }
            else{
                console.log("Vous n'êtes pas connecté :(");
                this.response.status(400).render('pages/connexion', {
                    authError:"L'identifiant et/ou le mot de passe sont incorrects"
                });
            }
        }
    }

    async accountHomePage(){
        this.response.render('pages/account/homePage');
    }

}