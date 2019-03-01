import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: "admin-login",
    loadChildren: "./admin-login/admin-login.module#AdminLoginModule",
  },
  {
    path: "admin-dashboard",
    loadChildren: "./admin-dashboard/admin-dashboard.module#AdminDashboardModule",
    canActivate: [AuthGuard]
  },
  {
    path: "requested-dairy",
    loadChildren: "./requested-dairy/requested-dairy.module#RequestedDairyModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
