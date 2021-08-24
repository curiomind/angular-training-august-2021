import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../models';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  private todoData: any;
  constructor(private http: HttpClient) {}

  loadTodo(id: number) {
    return this.http.get(`todos/${id}`);
  }

  getPost(id: string): Observable<Post | null> {
    return this.http
      .get<Post>(`posts/${id}`)
      .pipe(catchError((error) => of(null)));
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`posts`).pipe(catchError((error) => of([])));
  }

  get todo(): any {
    return this.todoData;
  }

  set todo(data: any) {
    this.todoData = data;
  }
}
