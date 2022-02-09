/**
 * @file questions.ts
 * @brief define all questions objects used from and for app.
 */

/**
 * @interface Questions
 * @brief question object complet
 */
export interface Question {
  id: number
  enonce: string
  responses: Object
}

/**
 * @interface QcmResponse
 * @brief interface used to create new questions objects
 */
export interface QcmResponse {
  [enonce: string]: number
}

/**
 * @interface QuestionNoResponseDto
 * @brief question object why only responses text
 */
export interface QuestionNoResponseDto {
  id: number
  enonce: string
  responsesList: string[]
}

/**
 * @interface QuestionFromClientDto
 * @brief entri data for question, reponse must be like : {
        "text" : 1,
        "text2" : 0
    }
    @brief 2 at 5 response.
 */
export interface QuestionFromClientDto {
  id?: number;
  enonce: string
  responses: object
}

