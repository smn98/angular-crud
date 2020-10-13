import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  locationList = [];
  skillsArray = ["HTML5,CSS3,JS", "SASS", "ES5,ES6,ES7,...", "Bootstrap 4", "Angular 8", "React JS", "Vue JS", "TypeScript", "Express JS", "Node JS", "MongoDB"]

  form = new FormGroup({
    associateName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern("[a-zA-Z ]*")
      ]),
    associateID: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern("[0-9]*")
      ]),
    projectID: new FormControl('',
      [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
        Validators.pattern("[a-zA-Z0-9]*")
      ]),
    location: new FormControl('', Validators.required),
    selectedLocation: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  })


  get associateName() {
    return this.form.get('associateName');
  }

  get associateID() {
    return this.form.get('associateID');
  }

  get projectID() {
    return this.form.get('projectID');
  }

  get location() {
    return this.form.get('location');
  }

  get selectedLocation() {
    return this.form.get('selectedLocation');
  }

  get comment() {
    return this.form.get('comment');
  }

  locationChanged() {
    if (this.location.value === "offShore") {
      this.locationList = ["Chennai", "Bangalore",
        "Hyderabad", "Pune", "Kochi"];
    } else {
      this.locationList = ["US", "Non US"];
    }
    this.selectedLocation.markAsUntouched();
    this.selectedLocation.setValue("");
  }

  ngOnInit(): void {
  }


}
