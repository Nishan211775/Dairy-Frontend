import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DairyLoginRoutingModule } from './dairy-login-routing.module';
import { DairyLoginComponent } from './dairy-login.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [DairyLoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    DairyLoginRoutingModule
  ]
})
export class DairyLoginModule { }
