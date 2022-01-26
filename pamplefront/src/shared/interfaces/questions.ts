/**
 * @file questions.ts
 * @brief define all questions objects used from and for app.
 */

/**
 * @interface Questions
 * @brief question object complet
 */
export interface Questions {
  id: number
  ennonce: string
  responses: Map<string, number>
}

/**
 * @interface QuestionNoResponseDto
 * @brief question object why only responses text
 */
export interface QuestionNoResponseDto {
  id: number
  ennonce: string
  responsesList: string[]
}
