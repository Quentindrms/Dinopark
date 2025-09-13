import Router from "express";
import globalRouter from "./globalRouter";
import dinosaursRouter from "./dinosaursRouter";
import bookingRouter from "./bookingRouter";
import accountRouter from "./accountRouter";

const router = Router();

router.use(globalRouter);
router.use(dinosaursRouter);
router.use("/booking", bookingRouter);
router.use("/account/", accountRouter);

export default router;