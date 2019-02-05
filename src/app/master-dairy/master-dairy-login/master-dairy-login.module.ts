import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDairyLoginRoutingModule } from './master-dairy-login-routing.module';
import { MasterDairyLoginComponent } from './master-dairy-login.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [MasterDairyLoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    MasterDairyLoginRoutingModule
  ]
})
export class MasterDairyLoginModule { }
