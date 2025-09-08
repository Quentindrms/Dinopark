export interface TicketTypeRow{
    ticket_id: number;
    ticket_price: number;
    ticket_value: number;
}

export class Ticket{
    protected ticketId: number | null;
    protected ticketPrice: number; 
    protected ticket_value: number;

    constructor(
        ticketId:number|null,
        ticketPrice: number,
        ticketValue: number)
        {
            this.ticketId = ticketId;
            this.ticketPrice = ticketPrice;
            this.ticket_value = ticketValue;
    }

    static fromRow(row: TicketTypeRow): Ticket{
        return new Ticket(row.ticket_id, row.ticket_price, row.ticket_value)
    }
}