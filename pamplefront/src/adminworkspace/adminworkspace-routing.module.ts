import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoqcmresolveService } from 'src/shared/services/doqcmresolve.service';
import { InternlistResolver } from 'src/shared/services/internlist.resolver';
import { ManageinternsPanel } from './components/dumb/manageinterns/manageinterns.panel';
import { ManageqcmPanel } from './components/dumb/manageqcm/manageqcm.panel';
import { AdminworkspacePage } from './components/pages/adminworkspace/adminworkspace.page';

const routes: Routes = [
  {
    path: '',
    component: AdminworkspacePage,
    children: [
    {
      path: 'manage/qcms',
      component: ManageqcmPanel,
      resolve: {qcmList : DoqcmresolveService}
    },
    {
      path: 'manage/interns',
      component: ManageinternsPanel,
      resolve: {userList: InternlistResolver}
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminworkspaceRoutingModule { }