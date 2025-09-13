import { Respository } from "../libs/Respository";
import { User, UserTypeRow } from "../models/User";

export class UserRepository extends Respository{

    async findAll(): Promise<User[]>{
        const query={
            name:'fetch-all-users',
            text:'SELECT * FROM utilisateur'
        }

        const result = await this.pool.query<UserTypeRow>(query);
        const users = result.rows.map((row) => User.fromRow(row));
        return users;
    }

}