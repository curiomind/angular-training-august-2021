import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CustomHttpService } from './custom-http.service'
import { Dep, Todos } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  title: string = 'dayOne';
  dep: Dep = {
    name: 'Heumen',
  };
  todos?: Todos[];
  selected?: Todos;
  private empCode;

  constructor(private http: CustomHttpService) {
    this.empCode = 17063;
    // this.todos = []
  }

  ngOnInit() {
    console.log('AppComponent - ngOnInit', this.empCode);

    this.http.getTodos("d").subscribe((res) => {
      console.log('Todos', res);
      this.todos = res;
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('AppComponent - ngOnChanges', changes);
  }

  changeName() {
    const date = new Date();
    // this.dep.name = 'Harman - ' + date.toISOString();
    this.dep = {
      name: 'Harman - ' + date.toISOString()
    }

    this.http.User = 'Proloy';
    console.log('UserName', this.http.User)
  }

  onChildData(event: string) {
    console.log('ChildOne Data', event);
  }

  onSelection(todo: Todos) {
    this.selected = todo;
  }

  unloadTodos(event: any) {
    console.log('unloadTodos', event);
    this.todos = [];
  }

  loadTodos(event: any) {
    this.http.getTodos("d").subscribe((res) => {
      console.log('Todos', res);
      this.todos = res;
    })
  }
}
