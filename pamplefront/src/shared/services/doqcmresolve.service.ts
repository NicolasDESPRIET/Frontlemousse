import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iqcm } from 'src/models/qcm.interface';
import { doQcmData } from '../../../assets/fakedata';
import { Qcm } from '../interfaces/qcms';
import { ParcoursService } from '../http/parcours.service';
import { QcmsService } from '../http/qcms.service';
import { ParcoursToClientDto } from '../interfaces/parcours';
import { SessionManagementService } from './session-management.service';

/**
 * This class is used to get QCM data before the navigation resolve. For testing purpose
 * is does not do any API calls but instead relies on the file fakedata.ts.
 * This has been built thanks to this tutorial : 
 * https://www.c-sharpcorner.com/article/load-all-data-before-loading-the-component-view-in-angular-6
 */

@Injectable({
  providedIn: 'root'
})
export class DoqcmresolveService implements Resolve<Object> {


  constructor(private qcmService: QcmsService, private parcoursService: ParcoursService, private sessionWorker: SessionManagementService) { }

  resolve(route: ActivatedRouteSnapshot): Object{
    let session: any = this.sessionWorker._getSessionInfo();
    let id: number = parseInt(session.userData.id);
    let data: any = {};
    const parcours = new Promise((resolve, reject)=> {
      this.parcoursService.getAllParcoursByUser(id).subscribe((res)=>{
        resolve(res);
      }, (err)=>{console.log('err', err)});
    }); 
    const qcms = new Promise((resolve, reject)=> {
      this.qcmService.getAllQcms().subscribe((res)=>{
        resolve(res);
      }, (err)=>{console.log('err', err)});
    }); 
    return Promise.all([parcours, qcms]);
  }
}
