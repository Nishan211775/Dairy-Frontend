import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerDashboardRoutingModule } from './farmer-dashboard-routing.module';
import { FarmerDashboardComponent } from './farmer-dashboard.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [FarmerDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FarmerDashboardRoutingModule
  ]
})
export class FarmerDashboardModule { }
