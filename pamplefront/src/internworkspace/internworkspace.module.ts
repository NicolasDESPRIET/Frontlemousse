import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternworkspaceRoutingModule } from './internworkspace-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { InternworkspacepageComponent } from './components/pages/internworkspacepage/internworkspacepage.component';
import { InternchoiceComponent } from './components/dumb/internchoice/internchoice.component';
import { QcmchoicepanelComponent } from './components/smart/qcmchoicepanel/qcmchoicepanel.component';
import { QcmcardComponent } from './components/dumb/qcmcard/qcmcard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import {MatIconModule} from '@angular/material/icon';
import { DoqcmpageComponent } from './components/pages/doqcmpage/doqcmpage.component';
import { DoqcmComponent } from './components/smart/doqcm/doqcm.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    InternworkspacepageComponent,
    InternchoiceComponent,
    QcmchoicepanelComponent,
    QcmcardComponent,
    DoqcmpageComponent,
    DoqcmComponent
  ],
  imports: [
    CommonModule,
    InternworkspaceRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class InternworkspaceModule { }
