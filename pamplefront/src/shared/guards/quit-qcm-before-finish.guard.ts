import { Injectable } from '@angular/core';
import {CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DoqcmpageComponent } from 'src/internworkspace/components/pages/doqcmpage/doqcmpage.component';
import { DoqcmComponent } from 'src/internworkspace/components/smart/doqcm/doqcm.component';

export interface ICanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuitQcmBeforeFinishGuard implements CanDeactivate<DoqcmComponent> {
  
  canDeactivate(component: DoqcmComponent) {
    return component.canDeactivate();
  }
  
}
