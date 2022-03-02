import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'src/home/components/pages/homepage/homepage.component';
import { RedirectHomeToWorkspaceWhenConnectedGuard } from 'src/shared/guards/redirect-home-to-workspace-when-connected.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    canActivate: [RedirectHomeToWorkspaceWhenConnectedGuard]
  },
  // Those routes use lazy loading for improved performance. 
  { 
    path: 'auth', 
    loadChildren: () => import('../auth/auth.module')
    .then(m => m.AuthModule) 
  },
  {
    path: 'intern',
    loadChildren: () => import('../internworkspace/internworkspace.module')
    .then(m => m.InternworkspaceModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../adminworkspace/adminworkspace.module')
    .then(m => m.AdminworkspaceModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'disabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
