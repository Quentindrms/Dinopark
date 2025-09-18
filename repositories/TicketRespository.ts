import { Respository } from "../libs/Respository";
import { Booking } from "../models/Booking";
import { Ticket, TicketTypeRow } from "../models/Ticket";

export class TicketRepository extends Respository {

    async findAll(): Promise<Ticket[]> {
        const query = {
            name: 'Fetch-all-ticket',
            text: 'SELECT * FROM ticket'
        }
        const result = await this.pool.query<TicketTypeRow>(query);
        const tickets = result.rows.map((row) => Ticket.fromRow(row));
        return tickets;
    }

    async findTicketById(requestedId: number): Promise<Ticket | null> {
        const query = {
            name: 'Fetch-ticket-by-id',
            text: 'SELECT * FROM ticket WHERE ticket_id=$1',
            values: [requestedId],
        };

        try {
            const result = await this.pool.query<TicketTypeRow>(query);
            if (result.rows[0]) {
                const ticket = Ticket.fromRow(result.rows[0]);
                return ticket;
            }
            else {
                return null;
            }
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}