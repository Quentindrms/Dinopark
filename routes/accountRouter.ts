import { Router } from "express";
import { AccountController } from "../controllers/AccountController";
import { checkAuth } from "../middlewares/checkAuth";

const accountRouter = Router();

accountRouter.use(checkAuth);


accountRouter.get('/homepage', (request, response) => {
    const accountController = new AccountController(request, response);
    accountController.accountHomePage();
})

export default accountRouter;