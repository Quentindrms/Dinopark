import { Router } from "express";
import { AccountController } from "../controllers/AccountController";
import { DinosaurController } from "../controllers/DinosaursController";
import { checkAuth } from "../middlewares/checkAuth";
import { Dinosaur } from "../models/Dinosaur";
import adminRouter from "./adminRouter";

const accountRouter = Router();

accountRouter.use(checkAuth);
accountRouter.use('/admin', adminRouter);

accountRouter.get('/homepage', (request, response) => {
    const accountController = new AccountController(request, response);
    accountController.accountHomePage();
});

accountRouter.get('/account', (request, response) => {
    const accountController = new AccountController(request, response);
    accountController.accountInformation();
});

export default accountRouter;