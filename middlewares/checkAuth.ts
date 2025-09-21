import { Request, Response, NextFunction } from "express";

export function checkAuth(request:Request, response:Response, next:NextFunction) {
    if (request.cookies.dinopark_connexion) {
        const authCookie = request.cookies.dinopark_connexion;
        if (authCookie) {
            console.log(`Utilisateur authentifié ${authCookie}`);
            next()
        }
        else {
            console.log('Le cookie existe mais une erreure est survenue');
            next();
        }
    }

    else {
        /**    console.log("Le cookie n'existe pas, redirection");
           response.status(400).render('pages/connexion.ejs'); */
        console.log('Pas de cookie détectée')
        response.status(400).render('pages/connexion', {
            authError:'Vous ne pouvez pas accéder à cette page sans être connecté',
        })
    }
};