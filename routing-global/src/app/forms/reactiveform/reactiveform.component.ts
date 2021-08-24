import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent implements OnInit {
  employeeForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  employeeId: FormControl;
  email: FormControl;

  firstNameSubscription?: Subscription;

  constructor() {
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl();
    this.employeeId = new FormControl();
    this.email = new FormControl('p@gmail.com');

    this.employeeForm = new FormGroup(
      {
        firstname: this.firstName,
        lastname: this.lastName,
        employeeid: this.employeeId,
        email: this.email,
      },
      { updateOn: 'blur' }
    );

    this.email.disable();
  }

  ngOnInit(): void {
    this.firstNameSubscription = this.firstName.valueChanges.subscribe(
      (value) => {
        console.log('FirstName: ', value);
      }
    );
  }

  onFormSubmut() {
    console.log('Is Form Value', this.employeeForm.valid);
    console.log('formValue', this.employeeForm.value);
    console.log('getRawValue', this.employeeForm.getRawValue());
  }

  ngOnDestroy(): void {
    if (this.firstNameSubscription) {
      this.firstNameSubscription.unsubscribe();
    }
  }
}
