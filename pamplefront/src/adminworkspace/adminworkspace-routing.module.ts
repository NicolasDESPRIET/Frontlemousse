import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoqcmresolveService } from 'src/shared/services/doqcmresolve.service';
import { InternlistResolver } from 'src/shared/services/internlist.resolver';
import { QcmeditResolver } from 'src/shared/services/qcmedit.resolver';
import { QuestionlistResolver } from 'src/shared/services/questionlist.resolver';
import { ManageinternsPanel } from './components/dumb/manageinterns/manageinterns.panel';
import { ManageqcmPanel } from './components/dumb/manageqcm/manageqcm.panel';
import { ManagequestionsPanel } from './components/dumb/managequestions/managequestions.panel';
import { AdminworkspacePage } from './components/pages/adminworkspace/adminworkspace.page';
import { CreateqcmPage } from './components/pages/createqcm/createqcm.page';

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
    },
    {
      path: 'manage/questions',
      component: ManagequestionsPanel,
      resolve: {questionList: QuestionlistResolver}      
    }
  ]
  },
  {
    path: 'manage/qcms/new',
    component: CreateqcmPage,
  },
  {
    path: 'manage/qcms/edit/:id',
    component: CreateqcmPage,
    resolve: {qcmEditData: QcmeditResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminworkspaceRoutingModule { }