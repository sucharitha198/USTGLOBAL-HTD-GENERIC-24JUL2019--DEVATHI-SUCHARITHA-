import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  url = 'https://api.github.com/users';
  getData() {
    return this.http.get(`${this.url}`);
  }
  deleteData(key) {
    return this.http.delete(`${this.url}/${key}`);
  }
}
