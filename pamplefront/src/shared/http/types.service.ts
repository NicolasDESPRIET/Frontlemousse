import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Type, TypeDto } from '../interfaces/types'
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'

/**
 * backurl for types entities, need to be secured.
 */
const backUrl = 'http://localhost:8091/types/'

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  constructor (private httpClient: HttpClient) {}

  getAllTypes (): Observable<Type[]> {
    return this.httpClient
      .get<Type[]>(backUrl)
      .pipe(catchError(this.handleError))
  }

  getOneTypeById (typeId: number): Observable<Type> {
    return this.httpClient
      .get<Type>(backUrl + typeId)
      .pipe(catchError(this.handleError))
  }

  createType(body: TypeDto): Observable<Type> {
    return this.httpClient
      .post<Type>(backUrl, body)
      .pipe(catchError(this.handleError))
  }

  updateType(body: TypeDto, typeId: number): Observable<Type> {
    return this.httpClient
      .put<Type>(backUrl+ typeId, body)
      .pipe(catchError(this.handleError))
  }

  deleteType (typeId: number) {
    return this.httpClient
      .delete(backUrl + typeId)
      .pipe(catchError(this.handleError));
  }

  private handleError (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent || error.status === 400) {
      console.error('An error occured: ', error.error.message);
    } else {
      console.error('BackEnd returned code '+ error.status );
    }
    return throwError(error.error)
  }
}
