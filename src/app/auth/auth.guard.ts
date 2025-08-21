import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const user = this.authService.getUser();
    if (user) {
      const expectedRole = route.data['role']; // 👈 from route
      if (!expectedRole || expectedRole === user.role) {
        return true; // allow access
      } else {
        alert('Access denied for this role!');
        return this.router.parseUrl('/login');
      }
    }
    return this.router.parseUrl('/login');
  }
}
