import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild,
  Router, ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Roles } from '../config/roles.config';

import { AuthenticationService } from './../services/auth.service';

/* Interfaces */
import { User } from '../models/user.interface';
import { AuthRoles } from '../models/app.interface';

@Injectable()
export class RoleGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router,
    private authService: AuthenticationService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const decodedToken = this.authService.getDecodedToken();

    if (!decodedToken) {
      this.router.navigate(['/login']);
      return false;
    }

    if (!route.data.roles) {
      return true;
    }

    const routeRoles: AuthRoles = route.data.roles;

    if (this.hasRoles(routeRoles.valid)) {
      return this.isActivate(routeRoles.valid, decodedToken, true);
    }
    if (this.hasRoles(routeRoles.invalid)) {
      return this.isActivate(routeRoles.invalid, decodedToken, false);
    }
    return true;
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.canActivate(route, state);
  }


  /**
   * hasRoles - check "roles" arg for any roles.
   *
   * @param  {Array<string>} roles - array with roles
   * @return {boolean}
   */
  private hasRoles(roles: Array<string>): boolean {
    return Array.isArray(roles) && roles.length !== 0;
  }

  /**
   * isActivate - checks user role and one decides about transition. If hasRole is true,
   * then if user role is in the "roles" array, then user role will be valid else user
   * role will be invalid. Reverse is also true.
   *
   * @param  {Array<string>} roles - array with roles
   * @param  {any} decodedToken - user data
   * @param  {boolean} hasRole - flag: role is in the "roles" array
   * @return {boolean}
   */
  private isActivate(roles: Array<string>, decodedToken: any, hasRole: boolean): boolean {
    const index: number = roles.findIndex((data) => data === decodedToken.role);
    const activate: boolean = hasRole ? index !== -1 : index === -1;

    if (!activate) {
      this.router.navigate(['/404']);
      return false;
    }

    return true;
  }
}
