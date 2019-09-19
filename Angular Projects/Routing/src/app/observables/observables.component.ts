import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from "rxjs/operators";
import { UserService } from '../user.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
mySubscription
  constructor(private userService : UserService) {}

  ngOnInit() {
    // interval(1000).subscribe(data=>{
    //   console.log(data)
    // })
   
    //   this.mySubscription = interval(1000).subscribe(data=>{
    //   console.log(data); 
    // },err=>{
    //   console.log('err')
    // },()=>{
    //   console.log('subscription completed')
    // });

    this.mySubscription = interval(1000).pipe(map(data=>{
      return data*10;
    })).subscribe(data=>{
      console.log(data); 
    },err=>{
      console.log('err')
    },()=>{
      console.log('subscription completed')
    });

  }
ngOnDestroy(){
  this.mySubscription.unsubscribe();
 
}
}
