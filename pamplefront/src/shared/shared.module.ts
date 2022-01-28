import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './images-components/hero/hero.component';
import { HerointernComponent } from './images-components/herointern/herointern.component';
import { FilterbypipePipe } from './pipes/filterbypipe.pipe';
import { SearchtitlepipePipe } from './pipes/searchtitlepipe.pipe';
import { SortbypipePipe } from './pipes/sortbypipe.pipe';
import { InternqcmdurationpipePipe } from './pipes/internqcmdurationpipe.pipe';
import { PicdoqcmComponent } from './images-components/picdoqcm/picdoqcm.component';
import { Picdoqcm2Component } from './images-components/picdoqcm2/picdoqcm2.component';
import { HeroadminComponent } from './images-components/heroadmin/heroadmin.component';




@NgModule({
  declarations: [
    HeroComponent,
    HerointernComponent,
    FilterbypipePipe,
    SearchtitlepipePipe,
    SortbypipePipe,
    InternqcmdurationpipePipe,
    PicdoqcmComponent,
    Picdoqcm2Component,
    HeroadminComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    HerointernComponent,
    PicdoqcmComponent,
    Picdoqcm2Component,
    SearchtitlepipePipe,
    FilterbypipePipe,
    SortbypipePipe,
    InternqcmdurationpipePipe,
    HeroadminComponent
  ]
})
export class SharedModule { }
