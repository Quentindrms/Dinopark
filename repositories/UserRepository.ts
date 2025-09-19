import { number } from "zod";
import { Respository } from "../libs/Respository";
import { User, UserTypeRow } from "../models/User";

export class UserRepository extends Respository {

    async findAll(): Promise<User[]> {
        const query = {
            name: 'fetch-all-users',
            text: 'SELECT * FROM utilisateur'
        }

        const result = await this.pool.query<UserTypeRow>(query);
        const users = result.rows.map((row) => User.fromRow(row));
        return users;
    }

        async findUserById(requestedId: number): Promise<User | null> {
            const query = {
                name: 'Fetch-ticket-by-id',
                text: 'SELECT * FROM utilisateur WHERE user_id=$1',
                values: [requestedId],
            };
    
            try {
                const result = await this.pool.query<UserTypeRow>(query);
                if (result.rows[0]) {
                    const user = User.fromRow(result.rows[0]);
                    return user;
                }
                else {
                    return null;
                }
            } catch (error) {
                console.error(error);
            }
            return null;
        }

    async findByMail(requestedMail: string): Promise<User | undefined> {
        const query = {
            name: 'fetch-user-by-mail',
            text: 'SELECT * FROM utilisateur WHERE user_mail=$1',
            values: [requestedMail],
        };
        console.log(query)

        try {
            const result = await this.pool.query<UserTypeRow>(query);
            console.log(result.rows);
            if (result.rows) {
                const user = User.fromRow(result.rows[0]);
                return user;
            }
            else {
                console.log('Aucune correspondance trouvée');
            }
        } catch (error) {
            console.log(error);
            return;
        }
    }

    async createUser(surname: string, name: string, birthDate: Date, mail: string, password: string) {
        const query = {
            name: 'create-user',
            text: "INSERT INTO utilisateur (user_admin, user_first_name, user_surname, user_birthdate, user_mail, user_password) VALUES ($1, $2, $3, $4, $5, $6)",
            values: [false, surname, name, birthDate, mail, password],
        }

        // Validation de l'utilisateur par validateur
        try {
            const userCreation = await this.pool.query(query);
            console.log(userCreation);  
        } catch (error) {
            console.log(error);
        }
    }

}