import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthpageComponent } from './components/pages/authpage/authpage.component';
import { AuthformComponent } from './components/smart/authform/authform.component';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    AuthpageComponent,
    AuthformComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
