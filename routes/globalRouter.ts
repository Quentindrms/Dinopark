import {request, Router} from "express";
import {GlobalController} from "../controllers/globalController";


const globalRouter = Router();


globalRouter.get('/', (request, response) => {
    const controller = new GlobalController(request, response);
    controller.homepage();
})

export default globalRouter;