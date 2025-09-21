import {Request, Response, NextFunction} from "express";

export function checkAdminRight(request:Request, response:Response, next:NextFunction){

    if(request.cookies.dinopark_connexion){
        const cookie = JSON.parse(request.cookies.dinopark_connexion);
        const privilege = cookie.admin;
        if(privilege == true){
            console.log('Privilège administrateur');
            next();
        }
        else{
            console.log('Aucun privilège administrateur');
            response.render('pages/account/homePage', {
                err: 'Vous ne disposez pas des privilèges administrateur',
                user: cookie,
            })
        }
    } else{
        console.log('Pas de cookie');
        response.status(400).send('Pas ok du tout');
    }



}