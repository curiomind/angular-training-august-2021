import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private allowActivateRoute: boolean;
  private allowDeactivateRoute: boolean;
  private allowActivateChild: boolean;
  private allowLoadChild: boolean;

  constructor() {
    this.allowActivateChild = false;
    this.allowDeactivateRoute = false;
    this.allowActivateRoute = false;
    this.allowLoadChild = false;
  }

  get AllowActivate(): boolean {
    return this.allowActivateRoute;
  }
  set AllowActivate(val: boolean) {
    this.allowActivateRoute = val;
  }

  get AllowDeActivate(): boolean {
    return this.allowDeactivateRoute;
  }
  set AllowDeActivate(val: boolean) {
    this.allowDeactivateRoute = val;
  }

  get AllowActivateChild(): boolean {
    return this.allowActivateChild;
  }
  set AllowActivateChild(val: boolean) {
    this.allowActivateChild = val;
  }

  get AllowLoadingChild(): boolean {
    return this.allowLoadChild;
  }
  set AllowLoadingChild(val: boolean) {
    this.allowLoadChild = val;
  }
}
