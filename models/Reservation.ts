export interface ReservationTypeRow{
    reservation_id: number;
    reservation_date: Date;
    reservation_user_id: number;
}

export class Reservation{
    protected reservationId: number;
    protected reservationDate: Date;
    protected reservationUserId: number;

    constructor(
        reservationId: number,
        reservationDate: Date,
        reservationUserId: number,
    ){
        this.reservationId = reservationId;
        this.reservationDate = reservationDate;
        this.reservationUserId = reservationUserId;
    }

    static fromRow(row: ReservationTypeRow){
        return new Reservation(row.reservation_id, row.reservation_date, row.reservation_user_id);
    }
}