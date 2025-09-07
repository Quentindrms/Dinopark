export interface UserTypeRow{
    user_id: number|null;
    user_admin: boolean;
    user_first_name: string;
    user_surname: string;
    user_birthdate: Date;
    user_adress: string;
    user_mail: string;
    user_password: string;
}

export class User{
    protected id: number|null;
    protected admin: boolean;
    protected firstName: string;
    protected surname: string;
    protected birtDate: Date;
    protected adress: string;
    protected mail: string;
    protected password: string;

    constructor(
        id: number|null,
        admin: boolean,
        firstName: string,
        surname: string,
        birthDate: Date,
        adress: string,
        mail: string,
        password: string
    ){
        this.id = id;
        this.admin = admin;
        this.firstName = firstName;
        this.surname = surname;
        this.birtDate = birthDate;
        this.adress = adress;
        this.mail = mail;
        this.password = password;
    }

    static fromRow(row: UserTypeRow): User{
        return new User(row.user_id, row.user_admin, row.user_first_name, row.user_surname, row.user_birthdate, row.user_adress, row.user_mail, row.user_password)
    }
}