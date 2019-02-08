import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem('admin-token')
        || sessionStorage.getItem('farmer-token')
        || sessionStorage.getItem('dairy-token')
        || sessionStorage.getItem('master-dairy-token')) {

      return true;
    }

    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}