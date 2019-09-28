import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
  users: any = [];

  constructor() { }
  print(form: NgForm) {
    console.log(form);
    this.users.push(form);
  }
  delete(i) {
    this.users.splice(i,1);
  }
  ngOnInit() {
  }

}
