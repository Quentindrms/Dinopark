import {Controller} from "../libs/Controller";
import { PostedBooking } from "../libs/Types";
import bookingValidator from "../models/validator/BookingValidator";
import { Booking } from "../models/Booking";
import {z} from "zod";

export class BookingController extends Controller{

    public postBooking(){

        const postedBooking:PostedBooking = {
            name: this.request.body?.name,
            surname: this.request.body?.surname,
            birthDate: new Date(this.request.body?.birthdate),
            mail: this.request.body?.mail,
            visitDate: new Date(this.request.body?.visitDate),
            ticketNumber: parseInt(this.request.body?.countTicket),
        }

        const validation = bookingValidator.validateBooking(postedBooking);

        if(!validation.success){
            const errors = z.treeifyError(validation.error)
            console.log(errors.properties);
            return this.response.status(400).render("pages/reservation", {
                values: postedBooking,
                formErrors: errors.properties,
            })
        }
        else{
            this.response.render("pages/validation");
        }

    }
}