import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})
export class RecipieDetailsComponent implements OnInit {

  constructor() { }
@Input() recipieDetails : any='';
  ngOnInit() {
  }

}
