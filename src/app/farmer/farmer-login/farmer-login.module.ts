import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerLoginRoutingModule } from './farmer-login-routing.module';
import { FarmerLoginComponent } from './farmer-login.component';

@NgModule({
  declarations: [FarmerLoginComponent],
  imports: [
    CommonModule,
    FarmerLoginRoutingModule
  ]
})
export class FarmerLoginModule { }
