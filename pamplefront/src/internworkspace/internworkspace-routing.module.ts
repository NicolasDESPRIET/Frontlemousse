import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternworkspacepageComponent } from './components/pages/internworkspacepage/internworkspacepage.component';

const routes: Routes = [
  {
    path: '',
    component: InternworkspacepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternworkspaceRoutingModule { }
