import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carData: any;

  constructor() { }
  cars = [
    {img: 'https://cdn.pixabay.com/photo/2017/08/22/00/27/car-dashboard-2667434__340.jpg'},
    {img: 'https://cdn.pixabay.com/photo/2012/11/02/13/02/ford-63930__340.jpg'},
    {img: 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png'},
    {img: 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png'},
    {img: 'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg'},
    {img: 'https://cdn.pixabay.com/photo/2016/11/22/23/44/buildings-1851246__340.jpg'},
    {img: 'https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-2118857__340.jpg'},
    {img: 'https://cdn.pixabay.com/photo/2013/07/12/12/56/ford-mustang-146580__340.png'},
    {img: 'https://cdn.pixabay.com/photo/2013/07/13/11/50/auto-158795__340.png'},]
  sendCar(car) {
    this.carData = car;
  }
  ngOnInit() {
  }

}
