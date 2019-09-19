import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  indianNews:any[]=[];
  constructor(private http : HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a5065a852e04984a65a291e05e40cce')
    .subscribe(data =>{
      this.indianNews = data.articles;
    })
  }


  ngOnInit() {
  }

}
