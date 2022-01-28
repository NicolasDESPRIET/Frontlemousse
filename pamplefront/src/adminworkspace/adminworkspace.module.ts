import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminworkspaceRoutingModule } from './adminworkspace-routing.module';
import { AdminworkspacePage } from './components/pages/adminworkspace/adminworkspace.page';
import { AdminchoiceComponent } from './components/smart/adminchoice/adminchoice.component';
import { SharedModule } from 'src/shared/shared.module';
import { ManageqcmPanel } from './components/dumb/manageqcm/manageqcm.panel';
import { ManageinternsPanel } from './components/dumb/manageinterns/manageinterns.panel';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';


@NgModule({
  declarations: [
    AdminworkspacePage,
    AdminchoiceComponent,
    ManageqcmPanel,
    ManageinternsPanel,
  ],
  imports: [
    CommonModule,
    AdminworkspaceRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminworkspaceModule { }