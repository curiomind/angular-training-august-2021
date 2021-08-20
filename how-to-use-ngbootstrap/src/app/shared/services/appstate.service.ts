import { Injectable } from '@angular/core';

@Injectable()
export class AppstateService {
  private tabOne: string;
  private tabTwo: string;

  constructor() {
    this.tabOne = '';
    this.tabTwo = '';
  }

  get tabOneContent(): string {
    return this.tabOne;
  }
  set tabOneContent(value: string) {
    this.tabOne = value;
  }

  get tabTwoContent(): string {
    return this.tabTwo;
  }
  set tabTwoContent(value: string) {
    this.tabTwo = value;
  }
}
