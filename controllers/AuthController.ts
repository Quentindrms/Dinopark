import { Controller } from "../libs/Controller";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../libs/client/auth.service";
import {unregistredUser} from "../libs/Types"; 
import {SignUpValidator} from "../models/validator/SignUpValidator";


export class AuthController extends Controller{

    private userRepository:UserRepository;

    constructor(request, response){
        super(request, response);
        this.userRepository = new UserRepository(); 
    };

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

    // Formulaire d'inscription avec validation Zod du formulaire
    accountSignUp(){
        const unregistredUser = {
            surname:this.request.body.surname,
            name: this.request.body.name,
            birthdate: new Date(this.request.body.birthdate),
            mail: this.request.body.mail,
            password: this.request.body.password,
        }
        console.log(unregistredUser);
        const result = SignUpValidator.validateSignUp(unregistredUser); 
        if(result){
            console.log('Utilisateur validé par le validateur');
        }
        else{
            console.log('Utilisateur invalidé par le validateur');
        }
        console.log(`Validation : ${result.success}`);
        this.accountRegistration(unregistredUser);
    }

    signupSuccess(){
        this.response.render('pages/account/signup-confirmation');
    }

    //Une fois validée, 
    private async accountRegistration(user:unregistredUser){
        try{
        this.userRepository.createUser(user.surname, user.name, user.birthdate, user.mail, user.password);
        console.log('Utilisateur crée avec succès'); 
        }catch(err){
            console.error(err); 
        }


        this.response.redirect('/signup-success')
    }
}