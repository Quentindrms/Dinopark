export interface TicketTypeRow{
    ticket_id: number;
    ticket_price: number;
    ticket_name: string,
    ticket_value: string;
}

export class Ticket{
    protected id: number | null;
    protected price: number;
    protected name: string; 
    protected value: string;

    constructor(
        ticketId:number|null,
        ticketPrice: number,
        ticketName: string,
        ticketValue: string)
        {
            this.id = ticketId;
            this.price = ticketPrice;
            this.name = ticketName;
            this.value = ticketValue;
    }

    static fromRow(row: TicketTypeRow): Ticket{
        return new Ticket(row.ticket_id, row.ticket_price, row.ticket_name, row.ticket_value)
    }

}