import { Component } from '@angular/core';
import { AppstateService } from './shared/services/appstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clickMeOneClassList: string;
  setSuccess: boolean;
  setWarning: string;
  setWarningBol: boolean;

  constructor(private appState: AppstateService) {
    this.appState.tabOneContent = 'First Tab Content';
    this.appState.tabTwoContent = 'Second Tab Content';
    this.clickMeOneClassList = 'btn btn-primary btn-lg';
    this.setSuccess = false;
    this.setWarning = 'blue';
    this.setWarningBol = false;
  }

  clickMeClassesOne() {
    this.clickMeOneClassList = 'btn btn-success btn-lg';
  }

  clickMeClassesTwo() {
    this.setSuccess = !this.setSuccess;
  }

  clickMeStyle() {
    this.setWarning = 'orange';
    this.setWarningBol = true;
  }
}
