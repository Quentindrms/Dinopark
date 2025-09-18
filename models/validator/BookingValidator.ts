import * as z from "zod";

export class BookingValidator{

    static bookingSchema = z.object({
        name: z.string().min(1, 'Le nom doit contenir minimum 1 caractère').max(50, 'Le nom doit contenir maximum 50 caractères'),
        surname: z.string().min(1, 'Le prénom doit contenir au minimum un caractère').max(50, 'Le prénom doit contenir maximum 50 caractères'),
        birthDate: z.date(),
        mail: z.email().max(254, "L'adresse email ne peut pas contenir plus de 254 caractères"),
        visitDate: z.date().min(Date.now(), 'La date de visite doit être supérieure à la date du jour'),
        ticketNumber: z.number().min(1, "Vous devez acheter au minimum un ticket").max(10, "Vous ne pouvez pas achetez plus de dix tickets")
    })

    static validateBooking(rawBooking){
        const booking = this.bookingSchema.safeParse(rawBooking);
        return booking;
    }
}

export default BookingValidator;