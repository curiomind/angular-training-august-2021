import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models';

@Pipe({
  name: 'limit',
  pure: true,
})
export class LimitPipe implements PipeTransform {
  transform(posts?: Post[], offset?: number, limit?: number): Post[] {
    if (Array.isArray(posts) && posts.length > 0) {
      if (typeof offset == 'number' && typeof limit == 'number') {
        return posts.slice(offset, limit);
      }
      return [];
    }
    return [];
  }
}
