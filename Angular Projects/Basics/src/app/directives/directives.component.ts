import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  users=[{
    id:123,
    name:'suchi',
    city:'kdp'
  },
  {
    id :234,
    name : 'madhu',
    city : 'madhavaram',
  },
  {
    id :345,
    name : 'Pallavi',
    city : 'Anantapur'
  },
  {
    id : 456,
    name : 'triveni',
    city : 'Tirupati'
  }];

  constructor() { }
  condition=  false;
  removeUser(user){
  let index = this.users.indexOf(user);
  this.users.splice(index,1);
  this.condition = true;


}
  ngOnInit() {
  }

}
