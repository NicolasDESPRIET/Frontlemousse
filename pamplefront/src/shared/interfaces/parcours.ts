/**
 * @file parcours.ts
 * @brief define all parcours objects used from and for app.
 */

import { QcmParcourDto, Qcm } from "./qcms";
import { QuestionNoResponseDto, Question } from "./questions";
import { User } from "./users";

/**
 * @interface Parcours
 * @brief basique parcours object
 */
export interface Parcours {
    id: number;
    time: number;
    date: string;
    note: string;
    nbSucces: number;
    nbFailed: number;
    nbBlank: Question[];
    qcm: Qcm;
    stagiaire: User;
}

/**
 * @interface ParcoursFromClientDto
 * @brief parcours interface for create and update parcours
 */
export interface ParcoursFromClientDto {
    time: number;
    note: string;
    nbSucces: number;
    nbFailed: number;
    nbBlank: number[];
    qcmId: number;
    stagiaireId: number;
}

/**
 * @interface ParcoursToClientDto
 * @brief parcours interface from server.
 */
export interface ParcoursToClientDto {
    time: number;
    note: string;
    nbSucces: number;
    nbFailed: number;
    nbBlank: QuestionNoResponseDto[];
    qcm: QcmParcourDto;
    stagiaire: User;
}
