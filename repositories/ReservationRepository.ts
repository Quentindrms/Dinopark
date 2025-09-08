import { Respository } from "../libs/Respository";
import { Reservation } from "../models/Reservation";

export class ReservationRepository extends Respository {

    async findAll(): Promise<Reservation[]> {
        const query = {
            name: 'Fetch-all-reservation',
            text: 'SELECT * FROM reservation'
        }
        try {
            const result = await this.pool.query(query);
            const data = result.rows.map((row) => {
                return new Reservation(row.id, row.Date, row.reservationUserId)
            })
            return data
        } catch (error) {
            return [];
        }
    }
}