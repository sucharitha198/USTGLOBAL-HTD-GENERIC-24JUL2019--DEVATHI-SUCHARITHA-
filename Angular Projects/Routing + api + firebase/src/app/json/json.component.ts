import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  user: any[] = [];
  constructor(private http: HttpClient) {
    http.get<any>('https://jsonplaceholder.typicode.com/posts').
    subscribe(resData => {
      this.user = resData;
    });
  }

  ngOnInit() {
  }

}
