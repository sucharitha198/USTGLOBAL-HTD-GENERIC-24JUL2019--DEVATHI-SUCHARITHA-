import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-all-task',
  templateUrl: './view-all-task.component.html',
  styleUrls: ['./view-all-task.component.css']
})
export class ViewAllTaskComponent implements OnInit {

  constructor() { }
  @Input() task: any[];
  ngOnInit() {
  }

}
