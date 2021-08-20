import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Todos } from './model'

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  private host: string;

  private userName: string;

  constructor(private http: HttpClient) {
    // this.host = 'https://jsonplaceholder.typicode.com/';
    this.host = environment.host;
    this.userName = '';
  }

  getTodos(filter: string): Observable<Todos[]> {
    return this.http.get<Todos[]>(`${this.host}todos`).pipe(map((data) => {
      return data.filter((item) => item.title.startsWith(filter))
    }), map((data) => {
      return data.map(item => {
        return {
          ...item, price: 50, date: new Date().toISOString()
        }
      })
    }))
  }

  get User(): string {
    return this.userName;
  }

  set User(user: string) {
    this.userName = user;
  }
}
