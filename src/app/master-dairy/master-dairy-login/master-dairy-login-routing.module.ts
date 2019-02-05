import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDairyLoginComponent } from './master-dairy-login.component';

const routes: Routes = [
  {
    path: "",
    component: MasterDairyLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDairyLoginRoutingModule { }
