import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule",
  },
  {
    path: "dairy",
    loadChildren: "./dairy/dairy.module#DairyModule",
  },
  {
    path: "master-dairy",
    loadChildren: "./master-dairy/master-dairy.module#MasterDairyModule",
  },
  {
    path: "farmer",
    loadChildren: "./farmer/farmer.module#FarmerModule",
    },
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found' },
  { path: '**/**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
