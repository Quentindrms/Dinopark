import {Controller} from "../libs/Controller";
import bookingValidator from "../models/validator/BookingValidator";
import {z} from "zod";

export class BookingController extends Controller{

    public postBooking(){
        console.log(this.request);
        const result = bookingValidator.validateBooking(this.request.body);
        if(!result.success){
            const errors = z.treeifyError(result.error);
            return this.response.status(400);
    }
}
}