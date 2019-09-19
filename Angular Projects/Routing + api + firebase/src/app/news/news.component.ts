import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  sportsNews: any[] = [];
  businessNews: any[] = [];
  constructor(private http: HttpClient) {
        http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=3a5065a852e04984a65a291e05e40cce')
    .subscribe(data =>{
      this.sportsNews = data.articles;
    });
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a5065a852e04984a65a291e05e40cce')
    .subscribe(data => {
      this.businessNews = data.articles;
    });
  }

  ngOnInit() {
  }

}
