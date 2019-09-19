import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductserveService {

  constructor(private http: HttpClient) { }
    url = 'https://fir-items-a5609.firebaseio.com/';
    postData(data) {
      return this.http.post(`${this.url}product.json` , data);
    }
    getData() {
      return this.http.get(`${this.url}product.json`).pipe(map(data => {
                  let newArray: any[] = [];
                  for(let key in data){
                    newArray.push({...data[key] , id : key });
                  }
                  return newArray;
      }));
    }
    updateData(key , data) {
     return this.http.patch(`${this.url}/product/${key}.json` , data);
    }
    deleteData(key) {
      return this.http.delete(`${this.url}/product/${key}.json`);
    }
  }