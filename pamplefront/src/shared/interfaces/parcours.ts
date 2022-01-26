/**
 * @file parcours.ts
 * @brief define all parcours objects used from and for app.
 */

import { QcmParcourDto, Qcms } from "./qcms";
import { QuestionNoResponseDto, Questions } from "./questions";
import { Users } from "./users";

/**
 * @interface Parcours
 * @brief basique parcour object
 */
export interface Parcours {
    id: number;
    time: number;
    date: string;
    note: string;
    nbSucces: number;
    nbFailed: number;
    nbBlank: Questions[];
    qcm: Qcms;
    stagiaire: Users;
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
    stagiaire: Users;
}
