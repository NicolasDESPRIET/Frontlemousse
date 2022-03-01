import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuitQcmBeforeFinishGuard } from 'src/shared/guards/quit-qcm-before-finish.guard';
import { RedirectToLoginPageGuard } from 'src/shared/guards/redirect-to-login-page.guard';
import { DoqcmresolveService } from 'src/shared/services/doqcmresolve.service';
import { DoqcmpageComponent } from './components/pages/doqcmpage/doqcmpage.component';
import { InternworkspacepageComponent } from './components/pages/internworkspacepage/internworkspacepage.component';
import { DoqcmComponent } from './components/smart/doqcm/doqcm.component';

const routes: Routes = [
  {
    path: '',
    component: InternworkspacepageComponent,
    canActivate: [RedirectToLoginPageGuard]
  },

  {
    path: 'qcm',
    component: DoqcmpageComponent,
    canActivate: [RedirectToLoginPageGuard],
    
    children: [
      {
        // This path use a resolver to fetch data before loading the component.
        path: 'play/:id',
        component: DoqcmComponent,
        resolve: {qcmList : DoqcmresolveService},
        canDeactivate: [QuitQcmBeforeFinishGuard],
        canActivate: [RedirectToLoginPageGuard]
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
