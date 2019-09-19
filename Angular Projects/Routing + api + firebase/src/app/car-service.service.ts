import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Car } from './car-details/user';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  selectedUser: Car ={
    name : null,
    model : null,
    release : null,
    cost : null,
    units : null,

  };
  selectedCar: any;
  constructor( private http: HttpClient) { }     
  url ='https://fir-cars-19d6d.firebaseio.com/';               
  cars = [];
  getData() {
  this.http.get(`${this.url}cars.json`).pipe(map(resData => {
  let carsArray = [];
  for(let key in resData) {
  carsArray.push({...resData[key],id: key})
}
   return carsArray;
   })).subscribe(data => {
     this.cars = data;
   }, err => {
     console.log(err);
   });
 }
//  post
 postData(data) {
  return this.http.post(`${this.url}cars.json`, data);
}
// update
updateData(data){
  return  this.http.put(`${this.url}cars/${data.id}.json`, data);
  }
// delete
deleteData(data){
  return this.http.delete(`${this.url}cars/${data.id}.json`);
}
ngDoCheck() {
  this.getData();
}
}

