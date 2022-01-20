import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternworkspaceRoutingModule } from './internworkspace-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { InternworkspacepageComponent } from './components/pages/internworkspacepage/internworkspacepage.component';
import { InternchoiceComponent } from './components/dumb/internchoice/internchoice.component';


@NgModule({
  declarations: [
    InternworkspacepageComponent,
    InternchoiceComponent
  ],
  imports: [
    CommonModule,
    InternworkspaceRoutingModule,
    SharedModule
  ]
})
export class InternworkspaceModule { }
