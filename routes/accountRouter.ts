import { Router } from "express";
import { AccountController } from "../controllers/AccountController";
import { checkAuth } from "../middlewares/checkAuth";

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

export default accountRouter;