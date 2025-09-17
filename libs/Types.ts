export type PostedBooking = {
    name: string|undefined,
    surname:string|undefined,
    birthDate: Date|undefined,
    mail: string|undefined,
    visitDate: Date|undefined,
    ticketNumber: number|undefined,
}

export type unregistredUser = {
    name: string,
    surname: string,
    birthdate: Date,
    mail: string,
    password: string|undefined,
}