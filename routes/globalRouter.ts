import {request, Router} from "express";
import {GlobalController} from "../controllers/GlobalControllers";


const globalRouter = Router();


globalRouter.get('/', (request, response) => {
    const controller = new GlobalController(request, response);
    controller.homepage();
});

globalRouter.get('/about-us', (request, response) => {
    const controller = new GlobalController(request, response);
    controller.aboutParc();
})

globalRouter.get('/booking', (request, response) => {
    const controller = new GlobalController(request, response);
    controller.bookingPage();
})

globalRouter.get('/connexion', (request, response) =>{
    const controller = new GlobalController(request, response);
    controller.connexionPage();
})

export default globalRouter;