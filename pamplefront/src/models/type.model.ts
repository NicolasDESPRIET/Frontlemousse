import { Type } from "src/shared/interfaces/types";

export class TypeModel implements Type {

    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    

}