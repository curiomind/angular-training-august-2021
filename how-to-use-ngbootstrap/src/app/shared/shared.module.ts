import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppstateService } from './services/appstate.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgbModule],
  providers: [AppstateService],
  exports: [CommonModule, NgbModule, HeaderComponent],
})
export class SharedModule {}
