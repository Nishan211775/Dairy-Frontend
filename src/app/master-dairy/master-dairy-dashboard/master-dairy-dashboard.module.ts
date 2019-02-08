import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDairyDashboardRoutingModule } from './master-dairy-dashboard-routing.module';
import { MasterDairyDashboardComponent } from './master-dairy-dashboard.component';

@NgModule({
  declarations: [MasterDairyDashboardComponent],
  imports: [
    CommonModule,
    MasterDairyDashboardRoutingModule
  ]
})
export class MasterDairyDashboardModule { }
