import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  indianNews: any[] = [];
  constructor(private http: HttpClient){
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=eedc5461c6aa45bc9252e3336bb69f97')
    .subscribe(resData => {
      this.indianNews = resData.articles;
    });
  }

  ngOnInit() {
  }

}
