import Router from "express";
import globalRouter from "./globalRouter";

const router = Router();

router.use(globalRouter);

export default router;