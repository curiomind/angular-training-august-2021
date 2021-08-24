import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appChangeclass]',
})
export class ChangeclassDirective {
  @Input() appChangeclass: string;
  @Input() removeClass: string;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('class') classList?: string;

  constructor() {
    this.appChangeclass = '';
    this.removeClass = '';
    console.log('appChangeclass', this.appChangeclass);
  }

  @HostListener('click', ['$event'])
  onClickHandler(event: Event) {
    console.log(event);
    const classess = this.classList?.split(' ');
    const index = classess?.indexOf(this.removeClass);
    if (index && index > 0) {
      classess?.splice(index, 1);
    } else {
      classess?.push(this.appChangeclass);
    }
  }
}
