import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDairyLoginRoutingModule } from './master-dairy-login-routing.module';
import { MasterDairyLoginComponent } from './master-dairy-login.component';

@NgModule({
  declarations: [MasterDairyLoginComponent],
  imports: [
    CommonModule,
    MasterDairyLoginRoutingModule
  ]
})
export class MasterDairyLoginModule { }
