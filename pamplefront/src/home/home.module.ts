import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { SharedModule } from 'src/shared/shared.module';
import { HomechoiceComponent } from './components/smart/homechoice/homechoice.component';

@NgModule({
  declarations: [
    HomepageComponent,
    HomechoiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
