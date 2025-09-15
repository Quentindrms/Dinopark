import * as z from "zod";
import { unregistredUser } from "../../libs/Types";

export class SignUpValidator{

    static signUpSchema = z.object({
        surname: z.string().min(1),
        name: z.string(),
        birthdate: z.date(), 
        mail :z.string(), 
        password: z.string(), 
    });

    static validateSignUp(rawSignUp:unregistredUser){
        const signUp = this.signUpSchema.safeParse(rawSignUp); 
        return signUp; 
    }

}