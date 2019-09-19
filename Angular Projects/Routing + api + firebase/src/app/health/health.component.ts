import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  indianNews:any[]=[];
  constructor(private http : HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=3a5065a852e04984a65a291e05e40cce')
    .subscribe(data =>{
      this.indianNews = data.articles;
    })
  }

  ngOnInit() {
  }

}
