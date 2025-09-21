import {Controller} from "../libs/Controller";
import { PostedBooking } from "../libs/Types";
import bookingValidator from "../models/validator/BookingValidator";
import { Booking } from "../models/Booking";
import { TicketRepository } from "../repositories/TicketRespository";
import {z} from "zod";
import { Ticket } from "../models/Ticket";
import {Request, Response} from "express";

export class BookingController extends Controller{

    private ticketRepository:TicketRepository;

    constructor(request:Request, response:Response){
        super(request, response);
        this.ticketRepository = new TicketRepository();
    }

    public browseBooking(){

    }

    public editBooking(){

    }

    public async addBooking(){

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

            const tickets = await this.ticketRepository.findAll();
            const errors = z.treeifyError(validation.error)
            console.log(errors.properties);
            return this.response.status(400).render("pages/reservation", {
                values: postedBooking,
                formErrors: errors.properties,
                tickets,
            })
        }
        else{
            this.response.render("pages/validation");
        }

    }

    public deleteBooking(){

    }
}