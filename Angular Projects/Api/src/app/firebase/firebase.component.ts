import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FirebaseService} from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private firebaseService: FirebaseService,
    private router :Router) { }    // dependency injection for posting injected


 postUser(form: NgForm) {                         // function declaration ....ngForm for posting the data

  if (form.value.id) {
    this.firebaseService.updateData(form.value).subscribe((data) => {
      console.log(data);
      this.firebaseService.getData();
      form.reset();
      }, err => {
      console.log(err);
    });
  } else {
  this.firebaseService.postData(form.value).subscribe((data) => {
  console.log(data);
  this.firebaseService.getData();
  form.reset();
  this.router.navigateByUrl('/users');
}, err => {
  console.log(err);
});
}
}
  ngOnInit() {
  }

}
