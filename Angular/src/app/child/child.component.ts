import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent ='';
  @Output() childData = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.childData.emit('this is data from child');
  }

}
