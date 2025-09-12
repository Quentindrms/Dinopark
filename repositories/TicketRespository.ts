import { Respository } from "../libs/Respository";
import { Booking } from "../models/Booking";
import {Ticket} from "../models/Ticket";
import { TicketBrowseView, TicketBrowseViewTypeRow } from "../models/views/TicketBrowseView";

export class TicketRepository extends Respository{

    async findAll() :Promise<Ticket[]>{
            const query = {
        name: 'Fetch-all-ticket', 
        text: 'SELECT * FROM ticket'
    }
    const result = await this.pool.query<TicketBrowseViewTypeRow>(query);
    const tickets = result.rows.map((row) => TicketBrowseView.fromRow(row));
    return tickets;
    }
}