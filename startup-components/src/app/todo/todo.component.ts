import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todos | undefined;
  @Input() first: boolean;
  @Input() last: boolean;
  @Output() selectedTodo: EventEmitter<Todos> = new EventEmitter();

  @Input() selected?: Todos;

  constructor() {
    this.first = false;
    this.last = false;
  }

  ngOnInit(): void {
  }

  clickMe(todo?: Todos) {
    console.log('sekected', todo)
    this.selectedTodo.emit(todo);
  }
}
