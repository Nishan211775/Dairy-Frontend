import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DairyDashboardRoutingModule } from './dairy-dashboard-routing.module';
import { DairyDashboardComponent } from './dairy-dashboard.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [DairyDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DairyDashboardRoutingModule
  ]
})
export class DairyDashboardModule { }
