import Router from "express";
import { AuthController } from "../controllers/authController";

const authRouter = Router();

authRouter.post('/auth', (request, response) => {
    const authController = new AuthController(request, response);
    authController.accountAuthentification();
});

authRouter.get('/sign-up', (request, response) => {
    const authController = new AuthController(request, response);
    authController.accountSignUp();
})

authRouter.post('/sign-up', (request, response) => {
    const authController = new AuthController(request, response);
    authController.accountRegistration();
})

authRouter.get('/signup-success', (request, response) => {
    const authController = new AuthController(request, response);
    authController.signupSuccess();
})

export default authRouter;
