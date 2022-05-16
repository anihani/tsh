import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    hobies: new FormArray([
      new FormControl()
    ])
  });

  get hobies() {
    return this.contactForm.get('hobies') as FormArray;
  }

  get lastName() {
    return this.contactForm.get('lastName') as FormArray;
  }
  get firstName() {
    return this.contactForm.get('firstName') as FormArray;
  }


  addHobbies() {

    this.hobies.push(new FormControl());

  }
  removeHobies(index: any) {
    this.hobies.removeAt(index);
  }
  onSubmit(){
   console.log(this.contactForm.value);
  }
}
