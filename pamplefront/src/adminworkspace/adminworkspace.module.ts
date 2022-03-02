import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminworkspaceRoutingModule } from './adminworkspace-routing.module';
import { AdminworkspacePage } from './components/pages/adminworkspace/adminworkspace.page';
import { AdminchoiceComponent } from './components/smart/adminchoice/adminchoice.component';
import { SharedModule } from 'src/shared/shared.module';
import { ManageqcmPanel } from './components/dumb/manageqcm/manageqcm.panel';
import { ManageinternsPanel } from './components/dumb/manageinterns/manageinterns.panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { CreateqcmPage } from './components/pages/createqcm/createqcm.page';
import { QcmformSmart } from './components/smart/qcmform/qcmform.smart';
import { ManagequestionsPanel } from './components/dumb/managequestions/managequestions.panel';


@NgModule({
  declarations: [
    AdminworkspacePage,
    AdminchoiceComponent,
    ManageqcmPanel,
    ManageinternsPanel,
    CreateqcmPage,
    QcmformSmart,
    ManagequestionsPanel,
  ],
  imports: [
    CommonModule,
    AdminworkspaceRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminworkspaceModule { }