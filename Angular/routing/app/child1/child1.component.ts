import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  get name(){
    return this.reactive.get('name');
  }
  get pass(){
    return this.reactive.get('pass');
  }
  constructor() { }
  reactive = new FormGroup({
    name : new FormControl('',[ Validators.required,Validators.minLength(3)]),
    pass : new FormControl('',[Validators.required,Validators.pattern('suchi')])
  })
  sendForm(reactive){
    console.log(reactive);
  }

  ngOnInit() {
  }

}
