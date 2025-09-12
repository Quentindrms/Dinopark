import { Respository } from "../libs/Respository";
import { Booking } from "../models/Booking";
import {Ticket, TicketTypeRow} from "../models/Ticket";

export class TicketRepository extends Respository{

    async findAll() :Promise<Ticket[]>{
            const query = {
        name: 'Fetch-all-ticket', 
        text: 'SELECT * FROM ticket'
    }
    const result = await this.pool.query<TicketTypeRow>(query);
    const tickets = result.rows.map((row) => Ticket.fromRow(row));
    return tickets;
    }
}