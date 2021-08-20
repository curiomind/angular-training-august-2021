import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class AppInitializerService {
  constructor(private dataService: DataService) {}

  public load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.dataService.loadTodo(1).subscribe((res) => {
        this.dataService.todo = res;
        resolve(true);
      });
    });
  }
}
