import { Respository } from "../libs/Respository";
import { Booking } from "../models/Booking";

export class ReservationRepository extends Respository {

    async findAll(): Promise<Booking[]> {
        const query = {
            name: 'Fetch-all-reservation',
            text: 'SELECT * FROM reservation'
        }
        try {
            const result = await this.pool.query(query);
            const data = result.rows.map((row) => {
                return new Booking(row.id, row.Date, row.reservationUserId)
            })
            return data
        } catch (error) {
            return [];
        }
    }
}