import { Router } from "express";
import  {AccountController} from "../controllers/AccountController";

const accountRouter = Router();

accountRouter.post('/connexion', (request, response) => {
    const accountController = new AccountController(request, response);
    console.log(`Request body : ${request.body.userName}`);
    accountController.accountAuthentification(); 
});

export default accountRouter;