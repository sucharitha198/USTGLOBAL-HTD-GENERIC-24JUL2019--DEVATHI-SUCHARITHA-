import { Component, OnInit } from '@angular/core';
import { CarServiceService} from '../car-service.service';
import { Router } from '@angular/router';       

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor(private carService: CarServiceService ,
     private router: Router){ }  
    // update
     updateUser(car) {
      this.carService.selectedCar = car;                       
      this.router.navigateByUrl('/cars');                    
    }
// delete
     deleteUser(user) {
      this.carService.deleteData(user).subscribe(resData => {
          console.log(resData);
          this.carService.getData();
        });
      }
// get
  ngOnInit() {
    this.carService.getData();
    console.log(this.carService.cars);
      }
    }
