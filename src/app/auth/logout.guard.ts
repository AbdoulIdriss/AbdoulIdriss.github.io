import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, window } from 'rxjs';

export const logoutGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

  const auth = localStorage.getItem('auth')

  //Guard to signin only if you're already loged out

  if (auth !== null) {
   
    return inject(Router).navigate(['/body'])
    
  }
  return true
}