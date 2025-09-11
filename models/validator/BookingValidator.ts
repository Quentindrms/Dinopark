import * as z from "zod";

export class BookingValidator{

    static bookingSchema = z.object({
        name: z.string(),
        surname: z.string(),
        birthDate: z.date(),
        mail: z.email(),
        visitDate: z.date(),
        ticketNumber: z.number()
    })

    static validateBooking(rawBooking){
        const booking = this.bookingSchema.safeParse(rawBooking);
        return booking;
    }
}

export default BookingValidator;