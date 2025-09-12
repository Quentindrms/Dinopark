import Router from "express";
import globalRouter from "./globalRouter";
import dinosaursRouter from "./dinosaursRouter";
import bookingRouter from "./BookingRouter";

const router = Router();

router.use(globalRouter);
router.use(dinosaursRouter);
router.use("/booking", bookingRouter);

export default router;