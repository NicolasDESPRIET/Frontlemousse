import { Type } from "src/shared/interfaces/types";
import { User, UserFromClientDto } from "src/shared/interfaces/users";

export class UserModel implements UserFromClientDto {

    typeId: number;
    name: string;
    password: string;
    societe: string;

    constructor(name: string, password: string, typeId: number, societe: string){
        this.typeId = typeId;
        this.name = name;
        this.password = password;
        this.societe = societe;
    } 
}