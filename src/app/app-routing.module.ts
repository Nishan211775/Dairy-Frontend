import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule"
  },
  {
    path: "dairy",
    loadChildren: "./dairy/dairy.module#DairyModule"
  },
  {
    path: "master-dairy",
    loadChildren: "./master-dairy/master-dairy.module#MasterDairyModule"
  },
  {
    path: "farmer",
    loadChildren: "./farmer/farmer.module#FarmerModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
