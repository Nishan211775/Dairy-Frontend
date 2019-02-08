import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/module/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/services/auth-guard.service';
import { HomeComponent } from './shared/components/home/home.component';

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
    { provide: 'API_ROOT_URL', useValue: 'http://nishandhungana41-001-site1.etempurl.com/' },
    { provide: 'API_URL', useValue: 'http://nishandhungana41-001-site1.etempurl.com/api/' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
