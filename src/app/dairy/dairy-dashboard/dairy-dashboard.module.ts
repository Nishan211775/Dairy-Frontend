import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DairyDashboardRoutingModule } from './dairy-dashboard-routing.module';
import { DairyDashboardComponent } from './dairy-dashboard.component';

@NgModule({
  declarations: [DairyDashboardComponent],
  imports: [
    CommonModule,
    DairyDashboardRoutingModule
  ]
})
export class DairyDashboardModule { }
