import { Respository } from "../libs/Respository";
import { User } from "../models/User";

export class UserRepository extends Respository{

    async findAll(): Promise<User[]>{
        const query={
            name:'fetch-all-users',
            text:'SELECT * FROM user'
        }
        try{
            const result = await this.pool.query(query);
            const data = result.rows.map((row) => {
                return new User(row.id, row.admin, row.firstName, row.surname, row.birtDate, row.adress, row.mail, row.password)
            })
            return data;
        } catch(error){
            return []; 
        }
    }

}