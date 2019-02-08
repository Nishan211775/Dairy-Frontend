import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: "master-dairy-login",
    loadChildren: "./master-dairy-login/master-dairy-login.module#MasterDairyLoginModule"
  },
  {
    path: "master-dairy-dashboard",
    loadChildren: "./master-dairy-dashboard/master-dairy-dashboard.module#MasterDairyDashboardModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDairyRoutingModule { }
