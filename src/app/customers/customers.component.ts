import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    hobies: new FormArray([
      new FormControl()
    ])
  });

  get hobies() {
    return this.profileForm.get('hobies') as FormArray;
  }
  get name() {
    return this.profileForm.get('name') as FormControl;
  }
  addHobbies() {
    this.hobies.push(new FormControl());
  }
}

