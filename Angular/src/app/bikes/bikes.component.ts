import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  constructor() { }
bikes = [{
  brand : 'Apache',
  img: 'https://cdn.pixabay.com/photo/2016/07/03/11/38/bikes-1494567__340.jpg',
  description: 'Apache is a freely available Web server that is distributed under an "open source" license. Version 2.0 runs on most UNIX-based operating systems (such as Linux, Solaris, Digital UNIX, and AIX), on other UNIX/POSIX-derived systems (such as Rhapsody, BeOS, and BS2000/OSD), on AmigaOS, and on Windows 2000.'
},
{
  brand : 'KTM',
  img: 'https://cdn.pixabay.com/photo/2015/01/08/15/48/scooter-593155__340.jpg',
  description : 'Scooter definition, a childs vehicle that typically has two wheels with a low footboard between them, is steered by a handlebar, and is propelled'
},
{
  brand: 'Scooty Pep',
  img: 'https://cdn.pixabay.com/photo/2019/02/27/22/43/scooter-4025114__340.jpg',
  description: 'Scooter definition, a childs vehicle that typically has two wheels with a low footboard between them, is steered by a handlebar, and is propelled'
},
{
  brand: 'Scooty vespa',
  img: 'https://cdn.pixabay.com/photo/2014/04/30/10/28/roller-334802__340.jpg',
  description: 'Vespa (Italian pronunciation: [ˈvɛspa]) is an Italian brand of scooter manufactured by Piaggio. The name means wasp in Italian.'
},
{
  brand: 'Royal Enfield',
  img: 'https://cdn.pixabay.com/photo/2017/11/23/04/08/royal-enfield-2972008__340.jpg',
  description: 'About Classic 350 Specs and Features. Royal Enfield Classic 350 price starts at Rs.1.53 lakh (Ex-Showroom, Delhi) and the top end variant Royal Enfield Classic 350 Signals Edition is priced at Rs. 1.64 lakh (Ex-Showroom, Delhi).Royal Enfield Classic 350 Competitors Mojo 300'
}];
bikeData: any = '';
sendBike(b) {
  this.bikeData = b;
}
  ngOnInit() {
  }

}
