import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import  {doQcmData, questionList} from "../../../assets/fakedata"
import { Qcm } from '../interfaces/qcms';

@Injectable({
  providedIn: 'root'
})
export class QcmeditResolver implements Resolve<Qcm[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Qcm[] {
    let routeId = route.params.id
    let myData: Object | any = {};
    myData.qcmData = doQcmData.filter(item => item.id == routeId);
    myData.questionList = questionList;
    return myData;
  }
}
