import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  array = [];

  constructor() { }

  print(form: NgForm) {
    this.array.push(form.value);
    console.log(form.value);
    // this.router.navigateByUrl('/view_all_task'); 
    form.reset();
  }
  ngOnInit() {
  }

}
