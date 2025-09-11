import Router from "express";
import globalRouter from "./globalRouter";
import dinosaursRouter from "./dinosaursRouter";

const router = Router();

router.use(globalRouter);
router.use(dinosaursRouter);

export default router;