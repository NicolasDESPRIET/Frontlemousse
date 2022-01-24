import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HerointernComponent } from './herointern/herointern.component';
import { FilterbypipePipe } from './pipes/filterbypipe.pipe';
import { SearchtitlepipePipe } from './pipes/searchtitlepipe.pipe';
import { SortbypipePipe } from './pipes/sortbypipe.pipe';
import { InternqcmdurationpipePipe } from './pipes/internqcmdurationpipe.pipe';
import { PicdoqcmComponent } from './picdoqcm/picdoqcm.component';
import { Picdoqcm2Component } from './picdoqcm2/picdoqcm2.component';




@NgModule({
  declarations: [
    HeroComponent,
    HerointernComponent,
    FilterbypipePipe,
    SearchtitlepipePipe,
    SortbypipePipe,
    InternqcmdurationpipePipe,
    PicdoqcmComponent,
    Picdoqcm2Component
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
    InternqcmdurationpipePipe
  ]
})
export class SharedModule { }
