import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  async canActivate(): Promise<boolean> {
    let user = sessionStorage.getItem('userApproved');
    if (user) {
      return true;
    }
    else {
      this.router.navigateByUrl('/signin');
      return false;
    }
  }
}
