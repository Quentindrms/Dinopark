import { Router } from "express";
import { AdminController } from "../controllers/AdminController";
import { DinosaurController } from "../controllers/DinosaursController";
import { Dinosaur } from "../models/Dinosaur";
import { checkAdminRight } from "../middlewares/checkAdminRight";

const adminRouter = Router();

adminRouter.use(checkAdminRight); //Middleware

adminRouter.get('/dinosaures', (request, response) => {
    const adminController = new AdminController(request, response);
    adminController.dinosaursManagement();
})

adminRouter.get('/dinosaur/:id', (request, response) => {
    const adminController = new DinosaurController(request, response);
    adminController.readDinosaurs();
})

adminRouter.put('/dinosaur/edit', (request, response) => {
    const adminController = new DinosaurController(request, response);
    adminController.editDinosaurs();
});


export default adminRouter;