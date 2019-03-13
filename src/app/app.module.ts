import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/module/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './shared/services/auth-guard.service';
import { HomeComponent } from './shared/components/home/home.component';
import { DairyService } from './shared/services/dairy.service';
import { HandleErrorService } from './shared/services/handle-error.service';
import { MyInterceptorService } from './shared/services/my-interceptor.service';
import { MembersService } from './shared/services/members.service';
import { FarmersService } from './shared/services/farmers.service';
import { MilkPriceService } from './shared/services/milk-price.service';
import { DashboardService } from './shared/services/dashboard.service';
import { MilkService } from './shared/services/milk.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    // { provide: 'API_ROOT_URL', useValue: 'http://nishandhungana41-001-site1.etempurl.com/' },
    // { provide: 'API_URL', useValue: 'http://nishandhungana41-001-site1.etempurl.com/api/' },
    { provide: 'API_ROOT_URL', useValue: 'https://localhost:44336/' },
    { provide: 'API_URL', useValue: 'https://localhost:44336/api/' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptorService,
      multi: true,
    },
    HandleErrorService,
    DairyService,
    MembersService,
    FarmersService,
    MilkPriceService,
    DashboardService,
    MilkService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
