import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerLoginRoutingModule } from './farmer-login-routing.module';
import { FarmerLoginComponent } from './farmer-login.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [FarmerLoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    FarmerLoginRoutingModule
  ]
})
export class FarmerLoginModule { }
