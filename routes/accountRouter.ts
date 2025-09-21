import { Router } from "express";
import { AccountController } from "../controllers/AccountController";
import { DinosaurController } from "../controllers/DinosaursController";
import { checkAuth } from "../middlewares/checkAuth";
import { Dinosaur } from "../models/Dinosaur";

const accountRouter = Router();

accountRouter.use(checkAuth);


accountRouter.get('/homepage', (request, response) => {
    const accountController = new AccountController(request, response);
    accountController.accountHomePage();
});

accountRouter.get('/account', (request, response) => {
    const accountController = new AccountController(request, response);
    accountController.accountInformation();
});

accountRouter.get('/admin/dinosaures', (request, response) => {
    const accountController = new AccountController(request, response);
    accountController.dinosaursManagement();
})

accountRouter.get('/admin/dinosaur/:id', (request, response) => {
    const accountController = new AccountController(request, response);
    accountController.editDinosaur();
})

accountRouter.put('/admin/dinosaur/edit', (request, response) => {
    const dinosaurController = new DinosaurController(request, response);
    dinosaurController.editDinosaurs();
});

export default accountRouter;