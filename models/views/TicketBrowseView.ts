import { Ticket } from "../Ticket";
import { DinosaurBrowseView, DinosaurBrowseViewTypeRow } from "./DinosaurBrowseView";

export interface TicketBrowseViewTypeRow{
    ticket_id: number|null;
    ticket_price: number;
    ticket_name: string;
    ticket_value: string;
}

export class TicketBrowseView extends Ticket{
    constructor(
        ticketId: number|null,
        ticketPrice: number,
        ticketName: string,
        ticketValue: string,
    )
    {
        super(ticketId, ticketPrice, ticketName, ticketValue);
    }

    static fromRow(row: TicketBrowseViewTypeRow): TicketBrowseView{
        return new TicketBrowseView(row.ticket_id, row.ticket_price, row.ticket_name, row.ticket_value);
    }
}