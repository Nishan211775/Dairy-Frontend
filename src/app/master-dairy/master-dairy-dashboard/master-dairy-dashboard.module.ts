import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDairyDashboardRoutingModule } from './master-dairy-dashboard-routing.module';
import { MasterDairyDashboardComponent } from './master-dairy-dashboard.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [MasterDairyDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MasterDairyDashboardRoutingModule
  ]
})
export class MasterDairyDashboardModule { }
