import { Request, Response } from "express";

function accountRouter(request, response, next){
    if (request.cookies.dinopark_connexion) {
        const authCookie = request.cookies.dinopark_connexion;
        if (authCookie) {
            console.log(`Utilisateur authentifié ${authCookie}`);
            next()
        }
        else{
            console.log('Le cookie existe mais une erreure est survenue');
            next();
        }
    }

    else {
        console.log("Le cookie n'existe pas, redirection");
        response.status(400).render('pages/connexion.ejs');
    }
};