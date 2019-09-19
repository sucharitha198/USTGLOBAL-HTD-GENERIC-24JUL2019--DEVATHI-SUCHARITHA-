import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor() { }
  news = [
    {
      name: 'Car Accident',
      img: 'https://image.shutterstock.com/image-photo/car-crash-accident-on-road-260nw-577056850.jpg',
      // tslint:disable-next-line: max-line-length
      description: 'Car accidents are usually civil incidents, however, there are several ways in which an accident can escalate and become a criminal offense. Hit and Run. When a driver accidentally hits another vehicle or a pedestrian, he or she is required to stop at the scene even in the case of a minor accident.',
    },
    {
      name: 'murder',
      img: 'https://cdn.pixabay.com/photo/2014/04/05/11/29/people-315910__340.jpg',
      description: ''
    },
    {
      name: 'suicide',
      img: 'https://cdn.pixabay.com/photo/2015/06/28/23/02/depression-824998__340.jpg',
      description: ''
    },
    {
      name: 'Heart Attack',
      img: 'https://image.shutterstock.com/image-photo/severe-heartache-man-suffering-chest-260nw-530566492.jpg',
      description: ''
    },
    {
      name: '',
      img: 'https://cdn.pixabay.com/photo/2017/03/02/18/40/narendra-modi-2112081__340.jpg',
      description: ''
    },
    {
      name: 'pollution',
      img: 'https://cdn.pixabay.com/photo/2014/02/05/08/19/smoke-258786__340.jpg',
      description: ''
    },
    {
      name: '',
      img: '',
      description: ''
    },
    {
      name: '',
      img: '',
      description: ''
    },
    {
      name: '',
      img: '',
      description: ''
    },
    {
      name: '',
      img: '',
      description: ''
    },
  ];
  newsData: any = '';
  sendNews(news) {
  this.newsData = news;
}

  ngOnInit() {
  }

}
