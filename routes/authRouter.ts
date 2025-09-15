import Router from "express";
import { AuthController } from "../controllers/AuthController";

const authRouter = Router();

authRouter.post('/auth', (request, response) => {
    const authController = new AuthController(request, response);
    authController.accountAuthentification();
});

authRouter.get('/sign-up', (request, response) => {
    const authController = new AuthController(request, response);
    authController.signUp();
})

authRouter.post('/sign-up', (request, response) => {
    const authController = new AuthController(request, response);
    authController.accountSignUp();
})

export default authRouter;
