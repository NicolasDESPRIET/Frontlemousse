import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionManagementService } from '../services/session-management.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectToLoginPageGuard implements CanActivate {

  constructor(private sessionWorker: SessionManagementService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let sessionInfo: any = this.sessionWorker._getSessionInfo();
    console.log(sessionInfo);
    console.log(route);
    console.log(state);
    const regexUrlBeginning = /^\/[a-zA-Z]+/;
    const urlBeginning = state.url.match(regexUrlBeginning);
    switch(urlBeginning![0]){
      case "/intern":
        if(sessionInfo.isConnected && sessionInfo.userData.type=="intern"){
          return true;
        }
        else{
          console.log("You are not connected, intern");
          this.router.navigate(["/auth"], {queryParams: {workspace: 'intern'}});
        }
        break;
      case "/admin":
        if(sessionInfo.isConnected && sessionInfo.userData.type=="admin"){
          return true;
        }
        else{
          console.log("You are not connected, admin");
          this.router.navigate(["/auth"], {queryParams: {workspace: 'admin'}});
        }
          break;
      default:
        console.log("hello");
        return false;
    }
    return sessionInfo;
      
  }
}
