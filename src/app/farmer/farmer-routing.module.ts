import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: "farmer-login",
    loadChildren: "./farmer-login/farmer-login.module#FarmerLoginModule"
  },
  {
    path: "farmer-dashboard",
    loadChildren: "./farmer-dashboard/farmer-dashboard.module#FarmerDashboardModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
