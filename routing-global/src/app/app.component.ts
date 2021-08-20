import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'routing-global';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log('Todo', this.dataService.todo);
  }

  createError() {
    throw new Error('Error Created');
  }
}
