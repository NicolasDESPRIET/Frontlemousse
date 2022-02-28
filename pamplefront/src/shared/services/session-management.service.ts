import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserModel } from 'src/models/user';
import { UsersService } from '../http/users.service';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {


  constructor(private router: Router, private userService: UsersService) { }

  testConnect(name: string, typeName: string, password: string){
    this.userService.getOneUserBByName(name).subscribe(
      (data) => {
        console.log(data);
        let type = data.type.name;
        console.log(type)
        console.log(typeName);
        console.log(data.password);
        console.log(password);
        if(type == typeName){
          console.log("first cond")
          if(data.password == password){
            this._setUserSession(data);
            this._setIsConnected(true);
            switch(type){
              case "stagiaire":
                this.router.navigate(["/intern"]);
                break;
              case "admin":
                this.router.navigate(["/admin"]);
                break;
            }
          }else{
            console.log("not logged");
          }
          
        }
      }
    );
    
  }

  // Setters
  _setUserSession(data: any): void {
    sessionStorage.setItem("id", data.id.toString());
    sessionStorage.setItem("name", data.name);
    sessionStorage.setItem("type", data.type.name);    
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
