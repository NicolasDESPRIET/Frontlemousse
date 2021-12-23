import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HerointernComponent } from './herointern/herointern.component';



@NgModule({
  declarations: [
    HeroComponent,
    HerointernComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    HerointernComponent
  ]
})
export class SharedModule { }
