import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss'],
})
export class TemplateformComponent implements OnInit {
  employeeId?: string;
  fName?: string;
  country?: string;

  constructor() {
    this.fName = 'Proloy';
    this.country = 'IN';
  }

  ngOnInit(): void {}

  onFormSubmit(emp: any) {
    console.log(emp.value);
  }

  onFirstNameChange(event: any) {
    console.log(event);
  }

  onCountryChange(event: any) {
    alert(event);
  }
}
