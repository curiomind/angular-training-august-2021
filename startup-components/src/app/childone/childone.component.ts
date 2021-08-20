import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { CustomHttpService } from '../custom-http.service';

import { Dep } from '../model';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.scss'],
})
export class ChildoneComponent implements OnInit, OnChanges {
  @Input() dep: Dep;
  @Output() customEvent: EventEmitter<string> = new EventEmitter();

  constructor(private http: CustomHttpService) {
    this.dep = {
      name: 'Department',
    };
  }

  ngOnInit(): void {
    console.log('ChildoneComponent - ngOnInit', this.dep);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ChildoneComponent - ngOnChanges', changes);
  }

  sendDataToParent() {
    this.http.User = 'Chakroborty';
    console.log('UserName', this.http.User)
    this.customEvent.emit('ChildOne' + this.http.User)
  }
}
