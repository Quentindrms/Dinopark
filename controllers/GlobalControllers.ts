import {Controller} from "../libs/Controller";
import {DinosaurRepository} from "../repositories/DinosaurRepository";
import { TicketRepository } from "../repositories/TicketRespository";
import {Request, Response} from "express";

export class GlobalController extends Controller {

    private ticketRepository: TicketRepository;

    constructor(request:Request, response:Response){
        super(request, response);
        this.ticketRepository = new TicketRepository();
    }

    public homepage(){

        this.response.render('pages/homepage', {
        })
    }

    public aboutParc(){

        this.response.render('pages/about-parc');
    }

    public async bookingPage(){
        const tickets = await this.ticketRepository.findAll();
        console.log(`Ticket : ${tickets}`)
        tickets.forEach((ticket) => {
            console.log(ticket);
        })


        this.response.render('pages/reservation', {
            values:[],
            formErrors: [],
            tickets,
        });
    }

    public connexionPage(){
        this.response.render('pages/connexion', {
            authError:undefined,
        });
    }

}