import { Type } from "src/shared/interfaces/types";
import { User } from "src/shared/interfaces/users";

export class UserModel implements User {

    id: number;
    type: Type;
    name: string;
    password: string;
    societe: string;

    constructor(id: number, type: Type, name: string, password: string, societe: string){
        this.id = id;
        this.type = type;
        this.name = name;
        this.password = password;
        this.societe = societe;
    } 
}