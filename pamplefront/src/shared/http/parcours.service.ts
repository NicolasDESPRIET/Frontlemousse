import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
import {
  ParcourFromClientDto,
  ParcourToClientDto
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

  getAllParcours (): Observable<ParcourToClientDto[]> {
    return this.httpClient
      .get<ParcourToClientDto[]>(backUrl)
      .pipe(catchError(this.handleError))
  }

  getAllParcoursByDate (date: string): Observable<ParcourToClientDto[]> {
    return this.httpClient
      .get<ParcourToClientDto[]>(backUrl + 'date?date=' + date)
      .pipe(catchError(this.handleError))
  }

  getAllParcoursByUser (userId: number): Observable<ParcourToClientDto[]> {
    return this.httpClient
      .get<ParcourToClientDto[]>(backUrl + 'user/' + userId)
      .pipe(catchError(this.handleError))
  }

  getAllParcoursByQcm (qcmId: number): Observable<ParcourToClientDto[]> {
    return this.httpClient
      .get<ParcourToClientDto[]>(backUrl + 'qcm/' + qcmId)
      .pipe(catchError(this.handleError))
  }

  getOneById (parcourId: number): Observable<ParcourToClientDto> {
    return this.httpClient
      .get<ParcourToClientDto>(backUrl + parcourId)
      .pipe(catchError(this.handleError))
  }

  createParcour (body: ParcourFromClientDto): Observable<ParcourToClientDto> {
    return this.httpClient
      .post<ParcourToClientDto>(backUrl, body)
      .pipe(catchError(this.handleError))
  }

  updateParcour (body: ParcourFromClientDto, id: number): Observable<ParcourToClientDto> {
    return this.httpClient
      .put<ParcourToClientDto>(backUrl+id, body)
      .pipe(catchError(this.handleError))
  }

  deleteParcour(id:number) {
    return this.httpClient
      .delete<ParcourToClientDto>(backUrl+id)
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
