import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  indianNews:any[]=[];
  constructor(private http : HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=3a5065a852e04984a65a291e05e40cce')
    .subscribe(data =>{
      this.indianNews = data.articles;
    })
  }


  ngOnInit() {
  }

}
