import Router from "express";
import { AccountController } from "../controllers/AccountController";

const authRouter = Router();

authRouter.post('/auth', (request, response) => {
    const accountController = new AccountController(request, response);
    accountController.accountAuthentification();
});

export default authRouter;
