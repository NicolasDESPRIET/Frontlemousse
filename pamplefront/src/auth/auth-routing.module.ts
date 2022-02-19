import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectHomeToWorkspaceWhenConnectedGuard } from 'src/shared/guards/redirect-home-to-workspace-when-connected.guard';
import { AuthpageComponent } from './components/pages/authpage/authpage.component';

const routes: Routes = [
  {
    path: '',
    component: AuthpageComponent,
    canActivate: [RedirectHomeToWorkspaceWhenConnectedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
