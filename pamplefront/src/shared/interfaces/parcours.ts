/**
 * @file parcours.ts
 * @brief define all parcours objects used from and for app.
 */

import { QcmParcourDto, Qcm } from "./qcms";
import { QuestionNoResponseDto, Question } from "./questions";
import { User } from "./users";

/**
 * @interface Parcours
 * @brief basique parcour object
 */
export interface Parcour {
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
 * @interface ParcourFromClientDto
 * @brief parcour interface for create and update parcours
 */
export interface ParcourFromClientDto {
    time: number;
    note: string;
    nbSucces: number;
    nbFailed: number;
    nbBlank: number[];
    qcmId: number;
    stagiaireId: number;
}

/**
 * @interface ParcourToClientDto
 * @brief parcour interface from server.
 */
export interface ParcourToClientDto {
    time: number;
    note: string;
    nbSucces: number;
    nbFailed: number;
    nbBlank: QuestionNoResponseDto[];
    qcm: QcmParcourDto;
    stagiaire: User;
}
