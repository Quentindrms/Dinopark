import { Controller } from "../libs/Controller";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

export class AccountController extends Controller{

    private userRepository:UserRepository;

    constructor(request, response){
        super(request, response);
        this.userRepository = new UserRepository();
    }

    async accountAuthentification(){
        const requestedUser = this.request.body.userName; 
        const users = await this.userRepository.findAll();
        let userMail:string;
        let userId:number|undefined;
        console.log(this.request.body.mail);
        console.log(users);
        console.log(`Requested mail : ${requestedUser}`);

        const matchingUser = users.forEach((user):number|undefined => {
            userMail = user.getUserMail();
            if(userMail == requestedUser){
                console.log('Correspondance email');
                userId = user.getUserId();
                console.log(`ID correspondant : ${userId}`)
                return userId;
            }
        })

        console.log(`Correspondance à l'id : ${userId}`);
    }

}