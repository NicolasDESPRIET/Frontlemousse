/**
 * @file qcms.ts
 * @brief define all qcms objects used from and for app.
 */

import { QuestionNoResponseDto, Questions } from './questions'

/**
 * @interface Qcms
 * @brief basique Qcm object.
 */
export interface Qcms {
  id: number
  name: string
  description: string
  author: string
  qcmQuestion: Questions[]
}

/**
 * @interface QcmFromClientDto
 * @brief qcm dta to create and update.
 */
export interface QcmFromClientDto {
  name: string
  description: string
  author: string
}

/**
 * @interface QcmToClientNoRDto
 * @brief qcm with all question only text response.
 */
export interface QcmToClientNoRDto {
  id: number
  name: string
  description: string
  author: string
  qcmQuestion: QuestionNoResponseDto[]
}

/**
 * @interface QcmParcourDto
 * @brief qcm object use in @link ParcourToClientDto
 */
export interface QcmParcourDto {
  id: number
  name: string
  description: string
  author: string
}
