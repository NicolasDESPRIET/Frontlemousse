import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HerointernComponent } from './herointern/herointern.component';
import { FilterbypipePipe } from './pipes/filterbypipe.pipe';
import { SearchtitlepipePipe } from './pipes/searchtitlepipe.pipe';
import { SortbypipePipe } from './pipes/sortbypipe.pipe';
import { InternqcmdurationpipePipe } from './pipes/internqcmdurationpipe.pipe';





@NgModule({
  declarations: [
    HeroComponent,
    HerointernComponent,
    FilterbypipePipe,
    SearchtitlepipePipe,
    SortbypipePipe,
    InternqcmdurationpipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    HerointernComponent,
    SearchtitlepipePipe,
    FilterbypipePipe,
    SortbypipePipe,
    InternqcmdurationpipePipe
  ]
})
export class SharedModule { }
