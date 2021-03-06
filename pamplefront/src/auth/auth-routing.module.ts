import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthpageComponent } from './components/pages/authpage/authpage.component';

const routes: Routes = [
  {
    path: '',
    component: AuthpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
