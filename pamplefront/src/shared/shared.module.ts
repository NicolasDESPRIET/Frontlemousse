import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HerointernComponent } from './herointern/herointern.component';
import { FilterbypipePipe } from './pipes/filterbypipe.pipe';
import { SearchtitlepipePipe } from './pipes/searchtitlepipe.pipe';




@NgModule({
  declarations: [
    HeroComponent,
    HerointernComponent,
    FilterbypipePipe,
    SearchtitlepipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    HerointernComponent,
    SearchtitlepipePipe,
    FilterbypipePipe
  ]
})
export class SharedModule { }
