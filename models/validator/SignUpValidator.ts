import * as z from "zod";

export class SignUpValidator{

    static signUpSchema = z.object({
        firstName: z.string().min(1),
        surname: z.string(),
        birthDate: z.date(), 
        adress: z.string(), 
        mail :z.string(), 
        password: z.string(), 
    });

    static validateSignUp(rawSignUp){
        const signUp = this.signUpSchema.safeParse(rawSignUp); 
        return signUp; 
    }

}