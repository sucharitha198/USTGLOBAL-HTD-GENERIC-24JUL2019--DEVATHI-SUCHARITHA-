import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {
  isSuccess = true;
  classesArray =["text-danger","bg-dark","mt-5"]
  constructor() { }

  ngOnInit() {
  }

}
