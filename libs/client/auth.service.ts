import argon2, { verify } from "argon2";

export const AuthService = {

async hashPassword(password:string){
    try{
        const hash = await argon2.hash(password);
        return hash;
    } catch(error){
        console.error(error);
        return undefined;
    }
},

async verifyPassword(password: string, hashedPassword: string){
    return await argon2.verify(hashedPassword, password);
},
}