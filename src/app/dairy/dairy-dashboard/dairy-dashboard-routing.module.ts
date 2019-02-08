import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DairyDashboardComponent } from './dairy-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DairyDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DairyDashboardRoutingModule { }
