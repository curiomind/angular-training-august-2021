import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeclassDirective } from '../directives/changeclass.directive';
import { TakeinputComponent } from '../takeinput/takeinput.component';

@NgModule({
  declarations: [ChangeclassDirective, TakeinputComponent],
  imports: [CommonModule],
  exports: [ChangeclassDirective, TakeinputComponent],
})
export class SharedModule {}
