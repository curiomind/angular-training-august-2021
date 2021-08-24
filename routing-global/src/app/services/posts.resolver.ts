import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PostsResolver implements Resolve<Post[]> {
  constructor(private data: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post[]> {
    return this.data.getPosts();
  }
}
