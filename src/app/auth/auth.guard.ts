import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | Promise <boolean | UrlTree> | UrlTree => {

  const auth = localStorage.getItem('auth')

  if (auth == null) {

    alert('Please Login first')
    return inject(Router).navigate(["/", 'signin'])

  }
  return true;

};
