import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  previousUrl: string | null;
  currentUrl: string | null;
  constructor() {
    this.previousUrl = null; // localStorage.getItem('url');
    this.currentUrl = null;
  }

  // set previousUrl(val: string) {
  //   localStorage.setItem('url', val);
  //   this.previousUrl = val
  // }
}
