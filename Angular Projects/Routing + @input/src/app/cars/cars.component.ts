import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carData: any='';
  constructor() { }
  cars= [
    {
      brand: 'volkswagen',
      img: 'https://cdn.pixabay.com/photo/2016/11/21/18/07/automotive-1846910_960_720.jpg',
      description: 'Volkswagen Group, also called Volkswagen AG, major German automobile manufacturer, founded by the German government in 1937 to mass-produce a low-priced “peoples car'
    },
    {
      brand: 'Toyota',
      img: 'https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288__340.jpg',
      description: 'Toyotas product line-up includes subcompact and compact cars, mini-vehicles, mid-size, luxury, sports and specialty cars, recreational and sport-utility vehicles, pickup trucks, minivans, trucks and buses. Toyotas subcompact and compact cars include the four-door Corolla sedan.'
    },
    {
      brand: 'Daimler',
      img: 'https://cdn.pixabay.com/photo/2016/04/17/22/10/car-1335674__340.png',
      description: 'On January 29, 1886, Carl Benz applied for a patent for his “vehicle powered by a gas engine.”. ... In July 1886 the newspapers reported on the first public outing of the three-wheeled Benz Patent Motor Car'
    },
    {
      brand: 'FORD MOTOR',
      img: 'https://cdn.pixabay.com/photo/2012/11/02/13/02/ford-63930__340.jpg',
      description: 'Ford has currently 6 car models on sale, get a complete price list of Ford cars, read ... by the same 1.2-litre petrol engine mated to a 5-speed manual gearbox'
    },
    {
      brand: 'Benz',
      img: 'https://cdn.pixabay.com/photo/2016/04/13/20/36/mercedes-1327610__340.jpg',
      description: 'IHS Markit is your source for General Motors standards and publications. General Motors (GM) manufactures cars and trucks, with brands such as Buick, Cadillac, Chevrolet, and GMC. ... IHS Markit is the exclusive supplier of all General Motors standards and specifications for all GM'
    },
    {
      brand: 'HONDA MOTORS',
      img: 'https://image.shutterstock.com/image-photo/city-cars-260nw-208836406.jpg',
      description: 'Honda car prices start(GST Included) at Rs 4.73 Lakh for the most inexpensive model in its lineup, the Brio. The most expensive car in Honda lineup is the Accord, priced at Rs. ... In total, Honda has 9 models on sale in India'
    },
    {
      brand: 'SAIC',
      img: 'https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288__340.jpg',
      description: 'SAIC Motor Corporation Limited is a Chinese state-owned automotive design and ..... For 2010 ten percent stake, see Ssangyong Motor up for sale, India Mahindra eyes bid. Reuters. 14 May 2010'
    },
    {
      brand: 'FIAT CHRYSLER',
      img: 'https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288__340.jpg',
      description: 'The current FPT engine displaces 3.0 liters and generates 174 horsepower and 295 pound-feet of torque. Adding two cylinders to block would push displacement to 4.0 liters while increasing power. The engine could potentially generate 261 horsepower and an impressive 442 pound-feet of torque – that is, if the power increases at the same percentage as the cylinder count.'
    },
    {
      brand: 'BMW',
      img: 'https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288__340.jpg',
      description: 'The current FPT engine displaces 3.0 liters and generates 174 horsepower and 295 pound-feet of torque. Adding two cylinders to block would push displacement to 4.0 liters while increasing power. The engine could potentially generate 261 horsepower and an impressive 442 pound-feet of torque – that is, if the power increases at the same percentage as the cylinder count.'
    },
    {
      brand: 'NISSAN MOTOR',
      img: 'https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288__340.jpg',
      description: 'Nissan is a multinational carmaker headquartered in Yokohama, Japan. Founded in early Twentieth Century, Nissan went through several name phases including Datsun, Dat Motorcar Co and Kwaishinsha Motorcar Co but settled with Nissan in the 1930s, the name an abbreviation of the name for the Tokyo Stock'
    },                    

  ]
  
  sendCar(car) {
    this.carData= car;
  }

  ngOnInit() {
  }

}
