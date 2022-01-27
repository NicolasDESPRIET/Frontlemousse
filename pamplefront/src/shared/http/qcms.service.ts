import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
import { Qcm, QcmFromClientDto, QcmToClientNoRDto } from '../interfaces/qcms'

/**
 * backurl for qcm entities, need to be secured.
 */
const backUrl = 'http://localhost:8091/qcm/'

@Injectable({
  providedIn: 'root'
})
export class QcmsService {
  constructor (private httpClient: HttpClient) {}

  getAllQcms (): Observable<Qcm[]> {
    return this.httpClient
      .get<Qcm[]>(backUrl)
      .pipe(catchError(this.handleError))
  }

  getAllQcmsNoR (): Observable<QcmToClientNoRDto[]> {
    return this.httpClient
      .get<QcmToClientNoRDto[]>(backUrl + 'nor/')
      .pipe(catchError(this.handleError))
  }

  getOneById (id: number): Observable<Qcm> {
    return this.httpClient
      .get<Qcm>(backUrl + id)
      .pipe(catchError(this.handleError))
  }

  getOneByIdnoR (id: number): Observable<QcmToClientNoRDto> {
    return this.httpClient
      .get<QcmToClientNoRDto>(backUrl + 'nor/' + id)
      .pipe(catchError(this.handleError))
  }

  getOneByName (name: string): Observable<Qcm> {
    return this.httpClient
      .get<Qcm>(backUrl + 'name/' + name)
      .pipe(catchError(this.handleError))
  }

  createQcm (body: QcmFromClientDto): Observable<Qcm> {
    return this.httpClient
      .post<Qcm>(backUrl, body)
      .pipe(catchError(this.handleError))
  }

  updateQcm (body: QcmFromClientDto, qcmId: number): Observable<Qcm> {
    return this.httpClient
      .put<Qcm>(backUrl + qcmId, body)
      .pipe(catchError(this.handleError))
  }

  deleteQcm (qcmId: number) {
    return this.httpClient
      .delete<Qcm>(backUrl + qcmId)
      .pipe(catchError(this.handleError))
  }

  addQuestion (qcmId: number, questionId: number): Observable<Qcm> {
    return this.httpClient
      .put<Qcm>(backUrl + qcmId + '/add/' + questionId + '/', null)
      .pipe(catchError(this.handleError))
  }

  removeQuestion (qcmId: number, questionId: number): Observable<Qcm> {
    return this.httpClient
      .put<Qcm>(backUrl + qcmId + '/remove/' + questionId + '/', null)
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
