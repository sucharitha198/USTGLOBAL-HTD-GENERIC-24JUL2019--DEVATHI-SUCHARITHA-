import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CarServiceService} from '../car-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carService: CarServiceService ,
    private router: Router){ }  
    postCar(form: NgForm) {  
if(form.value.id){
      this.carService.updateData(form.value).subscribe((data) => {
        console.log(data);
        this.carService.getData();
        form.reset();
        }, err => {
        console.log(err);
      });
    } else{
this.carService.postData(form.value).subscribe((data) => {
       console.log(data);
       this.carService.getData();
       form.reset();
       this.router.navigateByUrl('/car-details');
     }, err => {
       console.log(err);
     });
     }
    }
 ngOnInit() {
     }
   }
