import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AboutComponent } from '../about/about.component';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CandeactivateGuard implements CanDeactivate<AboutComponent> {
  constructor(private auth: AuthService) {}

  canDeactivate(
    component: AboutComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.AllowDeActivate;
  }
}
