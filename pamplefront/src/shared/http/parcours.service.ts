import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
import {
  ParcoursFromClientDto,
  ParcoursToClientDto
} from '../interfaces/parcours'

/**
 * backurl for types entities, need to be secured.
 */
const backUrl = 'http://localhost:8091/parcour/'

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  constructor (private httpClient: HttpClient) {}

  getAllParcours (): Observable<ParcoursToClientDto[]> {
    return this.httpClient
      .get<ParcoursToClientDto[]>(backUrl)
      .pipe(catchError(this.handleError))
  }

  getAllParcoursByDate (date: string): Observable<ParcoursToClientDto[]> {
    return this.httpClient
      .get<ParcoursToClientDto[]>(backUrl + 'date?date=' + date)
      .pipe(catchError(this.handleError))
  }

  getAllParcoursByUser (userId: number): Observable<ParcoursToClientDto[]> {
    return this.httpClient
      .get<ParcoursToClientDto[]>(backUrl + 'user/' + userId)
      .pipe(catchError(this.handleError))
  }

  getAllParcoursByQcm (qcmId: number): Observable<ParcoursToClientDto[]> {
    return this.httpClient
      .get<ParcoursToClientDto[]>(backUrl + 'qcm/' + qcmId)
      .pipe(catchError(this.handleError))
  }

  getOneById (parcourId: number): Observable<ParcoursToClientDto> {
    return this.httpClient
      .get<ParcoursToClientDto>(backUrl + parcourId)
      .pipe(catchError(this.handleError))
  }

  createParcour (body: ParcoursFromClientDto): Observable<ParcoursToClientDto> {
    return this.httpClient
      .post<ParcoursToClientDto>(backUrl, body)
      .pipe(catchError(this.handleError))
  }

  updateParcour (body: ParcoursFromClientDto, id: number): Observable<ParcoursToClientDto> {
    return this.httpClient
      .put<ParcoursToClientDto>(backUrl+id, body)
      .pipe(catchError(this.handleError))
  }

  deleteParcour(id:number) {
    return this.httpClient
      .delete<ParcoursToClientDto>(backUrl+id)
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
