import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HeroComponent } from './components/dumb/hero/hero.component';
import { AuthpageComponent } from './components/pages/authpage/authpage.component';
import { AuthformComponent } from './components/smart/authform/authform.component';


@NgModule({
  declarations: [
    HeroComponent,
    AuthpageComponent,
    AuthformComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
