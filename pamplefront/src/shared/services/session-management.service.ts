import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UsersService } from '../http/users.service';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  sessionInfoSubject: Subject<any> = new Subject<any>();

  constructor(private router: Router, private userService: UsersService) {}

  onConnect(name: string, typeName: string, password: string): boolean{
    let invalidAuth: boolean = true;
    this.userService.getOneUserBByName(name).subscribe(
      (data) => {
        let type = data.type.name;
        if(type == typeName){
          if(data.password == password){
            this._setUserSession(data);
            this._setIsConnected(true);
            switch(type){
              case "stagiaire":
                this.router.navigate(["/intern"]);
                invalidAuth = false;
                break;
              case "admin":
                this.router.navigate(["/admin"]);
                invalidAuth = false;
                break;
            }
          }
        }
      }
    );
    this.sessionInfoSubject.next(this._getSessionInfo());
    return invalidAuth;
  }

  onLogout(){
    this._setDeconnect();
  }

  // Setters
  _setUserSession(data: any): void {
    sessionStorage.setItem("id", data.id.toString());
    sessionStorage.setItem("name", data.name);
    sessionStorage.setItem("type", data.type.name);    
  }

  _setIsConnected(value: boolean): void {
    sessionStorage.setItem("isConnected", "true");  
  }

  _getSessionInfo(): Object {
    return { 
      isConnected: sessionStorage.getItem("isConnected")==="true"?true:false, 
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
  }



}
