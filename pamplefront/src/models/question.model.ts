import { Question } from "src/shared/interfaces/questions";

export class QuestionModel implements Question {

    id: number;
    enonce: string;
    responses: Object;
    
    constructor(id: number, enonce: string, responses: Object){
        this.id = id;
        this.enonce = enonce;
        this.responses = responses;
    }

}