import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';
import { SharedModule } from '../../shared/module/shared.module';

@NgModule({
  declarations: [
    AdminLoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminLoginRoutingModule
  ]
})
export class AdminLoginModule { }
