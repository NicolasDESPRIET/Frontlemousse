import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionManagementService } from '../services/session-management.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectHomeToWorkspaceWhenConnectedGuard implements CanActivate {

  constructor(private sessionWorker: SessionManagementService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let sessionInfo: any = this.sessionWorker._getSessionInfo();
    if(sessionInfo.isConnected && sessionInfo.userData.type=="stagiaire"){      
      this.router.navigate(["/intern"]);
    }
    if(sessionInfo.isConnected && sessionInfo.userData.type=="admin"){      
      this.router.navigate(["/admin"]);
    }
    if(!sessionInfo.isConnected){
      return true;
    }
    return sessionInfo;
  }
  
}
