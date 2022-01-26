import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Iqcm } from 'src/models/qcm.interface';
import { doQcmData } from '../../../assets/fakedata';

/**
 * This class is used to get QCM data before the navigation resolve. For testing purpose
 * is does not do any API calls but instead relies on the file fakedata.ts.
 * This has been built thanks to this tutorial : 
 * https://www.c-sharpcorner.com/article/load-all-data-before-loading-the-component-view-in-angular-6
 */

@Injectable({
  providedIn: 'root'
})
export class DoqcmresolveService implements Resolve<Iqcm[]> {


  constructor() { }

  resolve(route: ActivatedRouteSnapshot): Observable<Iqcm[]>{
    return doQcmData;
  }
}
