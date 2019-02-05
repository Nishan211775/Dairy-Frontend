import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "master-dairy-login",
    loadChildren: "./master-dairy-login/master-dairy-login.module#MasterDairyLoginModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDairyRoutingModule { }
