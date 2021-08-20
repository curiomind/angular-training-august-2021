import { Component, OnInit } from '@angular/core';
import { AppstateService } from '../../services/appstate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public appState: AppstateService) {}

  ngOnInit(): void {}
}
