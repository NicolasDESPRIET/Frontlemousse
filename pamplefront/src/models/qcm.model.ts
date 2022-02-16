import { Qcm } from "src/shared/interfaces/qcms";
import { Question } from "src/shared/interfaces/questions";


export class QcmModel implements Qcm {
    id: number | undefined;
    name: string;
    description: string;
    author: string;
    qcmQuestion: Question[];

    constructor(id: number | undefined, name: string, description: string, author: string, qcmQuestion: Question[])
    {
        this.id = id;
        this.description = description;
        this.author = author;
        this.qcmQuestion = qcmQuestion;
        this.name = name;
    }

}