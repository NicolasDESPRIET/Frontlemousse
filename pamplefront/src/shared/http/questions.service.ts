import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
import { Question, QuestionFromClientDto, QuestionNoResponseDto } from '../interfaces/questions'

/**
 * backurl for types entities, need to be secured.
 */
const backUrl = 'http://localhost:8091/questions/'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor (private httpClient: HttpClient) {}

  getAllQuestions (): Observable<Question[]> {
    return this.httpClient
      .get<Question[]>(backUrl)
      .pipe(catchError(this.handleError))
  }

  getQuestionsbyId (id: number): Observable<Question> {
    return this.httpClient
      .get<Question>(backUrl + id)
      .pipe(catchError(this.handleError))
  }

  getQuestionsbyIdNor (id: number): Observable<QuestionNoResponseDto[]> {
    return this.httpClient
      .get<QuestionNoResponseDto[]>(backUrl + id + '/noR/')
      .pipe(catchError(this.handleError))
  }

  // getQuestionsbyEnnonce (ennonce: string): Observable<Question> {
  //   return this.httpClient
  //     .get<Question>(backUrl+"ennonce/"+ennonce)
  //     .pipe(catchError(this.handleError))
  // }

  createQuestion (qcmId: number, body: QuestionFromClientDto): Observable<Question> {
    return this.httpClient
      .post<Question>(backUrl + qcmId, body)
      .pipe(catchError(this.handleError))
  }

  updateQuestion (questionId: number, body: QuestionFromClientDto): Observable<Question> {
    return this.httpClient
      .put<Question>(backUrl + questionId, body)
      .pipe(catchError(this.handleError))
  }

  deleteQuestion (id: number): Observable<Question> {
    return this.httpClient
      .delete<Question>(backUrl + id)
      .pipe(catchError(this.handleError))
  }

  private handleError (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent || error.status === 400) {
      console.error('An error occured: ', error.error.message)
    } else {
      console.error('BackEnd returned code ' + error.status)
    }
    return throwError(error.error)
  }
}
