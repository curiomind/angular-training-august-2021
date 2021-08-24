import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UrlService } from '../services/url.service';

@Injectable({
  providedIn: 'root',
})
export class CanactivateGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private urlService: UrlService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.auth.AllowActivate) {
      this.router.navigateByUrl(this.urlService.previousUrl ?? '/home');
      location.href =
        'http://login.example.com?redirect=' + this.urlService.currentUrl;
    }

    return this.auth.AllowActivate;
  }
}
