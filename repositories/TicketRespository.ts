import { Respository } from "../libs/Respository";
import { Reservation } from "../models/Reservation";
import {Ticket} from "../models/Ticket";

export class TicketRepository extends Respository{

    async findAll(){
            const query = {
        name: 'Fetch-all-ticket', 
        text: 'SELECT * FROM reservation'
    }
    try{
        const result = await this.pool.query(query);
        const data = result.rows.map((row) => {
            return new Reservation(row.id, row.reservationDate, row.reservation_user_id);
        });
        return data;
    } catch(error){
        return [];
    }
    }

}