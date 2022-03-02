import { TypeDto } from "src/shared/interfaces/types";

export class UserTypeModel implements TypeDto {

    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    } 
}