import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private todoData: any;
  constructor(private http: HttpClient) {}

  loadTodo(id: number) {
    return this.http.get(`todos/${id}`);
  }

  get todo(): any {
    return this.todoData;
  }

  set todo(data: any) {
    this.todoData = data;
  }
}
