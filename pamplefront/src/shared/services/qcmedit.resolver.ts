import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import  {doQcmData} from "../../../assets/fakedata"
import { Qcm } from '../interfaces/qcms';

@Injectable({
  providedIn: 'root'
})
export class QcmeditResolver implements Resolve<Qcm[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Qcm[] {
    let routeId = route.params.id
    return doQcmData.filter(item => item.id == routeId);
  }
}
