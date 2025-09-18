import { Router } from "express";
import globalRouter from "./globalRouter";
import { DinosaurController } from "../controllers/DinosaursController";
import { Dinosaur } from "../models/Dinosaur";

const dinosaursRouter = Router();

dinosaursRouter.get('/dinosaures', (request, response) => {
    const controller = new DinosaurController(request, response);
    controller.browseDinosaurs();
});

dinosaursRouter.get('/dinosaures/:id', (request, response) => {
    const controller = new DinosaurController(request, response);
    controller.readDinosaurs();
});

export default dinosaursRouter;