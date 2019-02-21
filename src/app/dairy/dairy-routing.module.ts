import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: "dairy-login",
    loadChildren: "./dairy-login/dairy-login.module#DairyLoginModule",
  },
  {
    path: "dairy-dashboard",
    loadChildren: "./dairy-dashboard/dairy-dashboard.module#DairyDashboardModule",
    canActivate: [AuthGuard]
  },
  {
    path: "dairy-register",
    loadChildren: "./dairy-register/dairy-register.module#DairyRegisterModule",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DairyRoutingModule { }
