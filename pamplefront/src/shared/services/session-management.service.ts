import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserModel } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {


  // Subjects that will receive data
  //private readonly _userSession = new BehaviorSubject<UserModel | null>(null);
  //private readonly _isConnected = new BehaviorSubject<boolean>(false);

  // Make them as observable
  //readonly userSession$ = this._userSession.asObservable();
  //readonly isConnected$ = this._isConnected.asObservable();

  constructor(private router: Router) { }

  // Setters
  _setUserSession(user: UserModel): void {
    //this._userSession.next(user);
    sessionStorage.setItem("id", user.id.toString());
    sessionStorage.setItem("name", user.name);
    sessionStorage.setItem("type", user.type.name);    
  }

  _setIsConnected(value: boolean): void {
    //this._isConnected.next(value);
    sessionStorage.setItem("isConnected", "true");  
  }

  _getSessionInfo(): Object {
    return { 
      isConnected: sessionStorage.getItem("isConnected"), 
      userData: {
        id: sessionStorage.getItem("id"),
        name : sessionStorage.getItem("name"),
        type : sessionStorage.getItem("type")
      }
    }
  }

  _setDeconnect() {
    sessionStorage.setItem("id", "");
    sessionStorage.setItem("name", "");
    sessionStorage.setItem("type", "");
    sessionStorage.setItem("isConnected", "false");
    this.router.navigate(["/"]);    
  }



}
