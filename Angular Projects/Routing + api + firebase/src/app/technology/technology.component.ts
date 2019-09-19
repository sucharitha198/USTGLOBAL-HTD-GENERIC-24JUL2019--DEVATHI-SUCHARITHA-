import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  indianNews:any[]=[];
  constructor(private http : HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3a5065a852e04984a65a291e05e40cce')
    .subscribe(data =>{
      this.indianNews = data.articles;
    })
  }
  ngOnInit() {
  }

}
