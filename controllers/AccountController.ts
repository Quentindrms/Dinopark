import { Controller } from "../libs/Controller";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../libs/client/auth.service";

export class AccountController extends Controller {

    private userRepository: UserRepository;

    constructor(request, response) {
        super(request, response);
        this.userRepository = new UserRepository();
    }

    async accountAuthentification() {

        const requestedUser = this.request.body.userName; //Mail et mot de passe transmis par l'utilisateur lors de l'identification
        const requestedEmailPassword = this.request.body.password;
        const user = await this.userRepository.findByMail(requestedUser); //Recherche l'utilisateur par son mail
 
        if(user){
            const success = await AuthService.verifyPassword(requestedEmailPassword, user.getPassword()) //Comparaison des mots de passe
            if(success){
                console.log('Vous êtes connecté ! :)');
            }
            else{
                console.log("Vous n'êtes pas connecté :(");
                console.log(success);
            }
        }
    }

}