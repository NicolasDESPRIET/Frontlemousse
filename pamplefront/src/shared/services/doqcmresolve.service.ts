import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Iqcm } from 'src/models/qcm.interface';
import { doQcmData } from '../../../assets/fakedata';
import { ParcoursService } from '../http/parcours.service';
import { ParcoursToClientDto } from '../interfaces/parcours';

/**
 * This class is used to get QCM data before the navigation resolve. For testing purpose
 * is does not do any API calls but instead relies on the file fakedata.ts.
 * This has been built thanks to this tutorial : 
 * https://www.c-sharpcorner.com/article/load-all-data-before-loading-the-component-view-in-angular-6
 */

@Injectable({
  providedIn: 'root'
})
export class DoqcmresolveService implements Resolve<ParcoursToClientDto[]> {


  constructor(private parcoursService: ParcoursService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ParcoursToClientDto[]>{
    return this.parcoursService.getAllParcours();
  }
}
