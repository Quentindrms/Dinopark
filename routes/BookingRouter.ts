import { Router } from "express";
import { BookingController} from "../controllers/BookingController";

const bookingRouter = Router();

bookingRouter.post('/submit', (request, response) => {
    const controller = new BookingController(request, response);
    controller.postBooking();
})

export default bookingRouter;