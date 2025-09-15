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

    async createUser(surname: string, name:string, birthdate: Date, mail: string, password: string){
        
    }

}