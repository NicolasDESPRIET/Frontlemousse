import { TypeDto } from "src/shared/interfaces/types";

export class UserTypeModel implements TypeDto {

    name: string;

    constructor(name: string){
        this.name = name;
    } 
}