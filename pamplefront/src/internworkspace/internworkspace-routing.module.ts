import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuitQcmBeforeFinishGuard } from 'src/shared/guards/quit-qcm-before-finish.guard';
import { DoqcmresolveService } from 'src/shared/services/doqcmresolve.service';
import { DoqcmpageComponent } from './components/pages/doqcmpage/doqcmpage.component';
import { InternworkspacepageComponent } from './components/pages/internworkspacepage/internworkspacepage.component';
import { DoqcmComponent } from './components/smart/doqcm/doqcm.component';

const routes: Routes = [
  {
    path: '',
    component: InternworkspacepageComponent,
    resolve: {qcmList : DoqcmresolveService}
  },

  {
    path: 'qcm',
    component: DoqcmpageComponent,
    
    children: [
      {
        // This path use a resolver to fetch data before loading the component.
        path: 'play/:id',
        component: DoqcmComponent,
        resolve: {qcmList : DoqcmresolveService},
        canDeactivate: [QuitQcmBeforeFinishGuard]
      }
    ]
  }
];

@NgModule({
  providers:[QuitQcmBeforeFinishGuard],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternworkspaceRoutingModule { }
