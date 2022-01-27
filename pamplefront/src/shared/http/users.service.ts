import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
import { UserFromClientDto, User } from '../interfaces/users'

/**
 * backurl for types entities, need to be secured.
 */
const backUrl = 'http://localhost:8091/users/'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor (private httpClient: HttpClient) {}

  getAllUser (): Observable<User[]> {
    return this.httpClient
      .get<User[]>(backUrl)
      .pipe(catchError(this.handleError))
  }

  getAllUserByType (typeId: number): Observable<User[]> {
    return this.httpClient
      .get<User[]>(backUrl + 'type/' + typeId)
      .pipe(catchError(this.handleError))
  }

  getOneUserById (userId: number): Observable<User> {
    return this.httpClient
      .get<User>(backUrl + userId)
      .pipe(catchError(this.handleError))
  }

  getOneUserBByName (userName: string): Observable<User> {
    return this.httpClient
      .get<User>(backUrl + 'name/' + userName)
      .pipe(catchError(this.handleError))
  }

  createUser (userData: UserFromClientDto): Observable<User> {
    return this.httpClient
      .post<User>(backUrl, userData)
      .pipe(catchError(this.handleError))
  }

  updateUser (userData: UserFromClientDto, userId: number): Observable<User> {
    return this.httpClient
      .put<User>(backUrl + userId, userData)
      .pipe(catchError(this.handleError))
  }

  deleteUser (userId: number) {
    return this.httpClient
      .delete(backUrl + userId)
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
