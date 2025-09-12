export interface bookingTypeRow{
    booking_id: number;
    booking_date: Date;
    booking_user_id: number;
}

export class Booking{
    protected bookingId: number;
    protected bookingDate: Date;
    protected bookingUserId: number;

    constructor(
        bookingId: number,
        bookingDate: Date,
        bookingUserId: number,
    ){
        this.bookingId = bookingId;
        this.bookingDate = bookingDate;
        this.bookingUserId = bookingUserId;
    }

    static fromRow(row: bookingTypeRow){
        return new Booking(row.booking_id, row.booking_date, row.booking_user_id);
    }
}