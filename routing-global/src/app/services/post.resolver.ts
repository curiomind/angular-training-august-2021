import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post } from '../models';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<Post | null> {
  constructor(private data: DataService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post | null> {
    const id = route.paramMap.get('id');
    const productParent =
      route.parent?.url.toString().includes('products') ?? false;
    if (id) {
      return this.data.getPost(id);
    } else {
      if (productParent) {
        this.router.navigateByUrl('/products');
      }
      return of(null);
    }
  }
}
