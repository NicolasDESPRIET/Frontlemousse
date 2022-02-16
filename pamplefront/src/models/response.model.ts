import { QcmResponse } from "src/shared/interfaces/questions";

export class QcmResponseModel implements QcmResponse {

    constructor(){}

    [enonce: string] : number;

}