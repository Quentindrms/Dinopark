import { Router } from "express";
import { AccountController } from "../controllers/AccountController";

const accountRouter = Router();

accountRouter.post('/connexion', (request, response) => {
    const accountController = new AccountController(request, response);
    accountController.accountAuthentification();
});

accountRouter.get('/homepage/', (request, response) => {
    const accountController = new AccountController(request, response);
    accountController.accountHomePage();
})

export default accountRouter;