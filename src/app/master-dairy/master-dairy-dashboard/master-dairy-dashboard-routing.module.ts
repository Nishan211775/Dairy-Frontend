import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDairyDashboardComponent } from './master-dairy-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: MasterDairyDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDairyDashboardRoutingModule { }
