/**
 * @file dates.ts
 * @brief define dates object to filtre parcours by date.
 */

/**
 * @interface DateDto
 * @brief dates object to filtre parcours by date.
 * need match with yyyy-MM-dd ( regex : /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
)
 */
export interface DateDto {
  date: string
}
