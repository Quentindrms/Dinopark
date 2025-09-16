import * as z from "zod";
import { unregistredUser } from "../../libs/Types";

export class SignUpValidator{

    static signUpSchema = z.object({
        surname: z.string('Ce champ ne peut pas être vide').min(1, "Le nom doit contenir minimum un caractère").max(50, "Le nom ne peut pas contenir plus de 50 caractères"),
        name: z.string('Ce champ ne peut pas être vide').min(1, "Le prénom doit contenir minimum un caractère").max(50, "Le prénom ne peut pas contenir plus de 50 caractères"),
        birthdate: z.date('Le format de la date est incorrect'), 
        mail :z.email(), 
        password: z.string(), 
    });

    static validateSignUp(rawSignUp:unregistredUser){
        const signUp = this.signUpSchema.safeParse(rawSignUp); 
        return signUp; 
    }

}