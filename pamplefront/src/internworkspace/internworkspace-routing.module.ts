import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoqcmresolveService } from 'src/shared/services/doqcmresolve.service';
import { DoqcmpageComponent } from './components/pages/doqcmpage/doqcmpage.component';
import { InternworkspacepageComponent } from './components/pages/internworkspacepage/internworkspacepage.component';

const routes: Routes = [
  {
    path: '',
    component: InternworkspacepageComponent
  },
  // This path use a resolver to fetch data before loading the component.
  {
    path: 'qcm/:id',
    component: DoqcmpageComponent,
    resolve: {qcmList : DoqcmresolveService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternworkspaceRoutingModule { }
