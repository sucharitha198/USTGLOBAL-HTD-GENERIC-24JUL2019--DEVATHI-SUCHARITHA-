import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url: string = 'https://ang-https-ebc7b.firebaseio.com/';    // copy from the database saving it in one variable


selectedUser: User = {                                         // creating object for updating
  name: null,
  email: null,
  phno: null,
  id: null,
};
constructor( private http: HttpClient) { }                   // to make http request we write HttpClient  
   users = [];
   getData() {
   this.http.get(`${this.url}users.json`).pipe(map(resData => {      // pipe -filter the data and made into array
   let usersArray = [];
   for(let key in resData) {
   usersArray.push({...resData[key],id: key})                       // pushing the data into usersArray
 }                                      // creating new obj ...spread operator (concating two objects)
    return usersArray;
    })).subscribe(data => {
      this.users = data;
    }, err => {
      console.log(err);
    });
  }
  postData(data) {                                              // for post request we use post method
    return this.http.post(`${this.url}users.json`, data);       // api ,data which we need to send.... ${}stringinterpolation in js
  }

  updateData(data){
  return  this.http.put(`${this.url}users/${data.id}.json`, data);
  }

  deleteData(data){
    return this.http.delete(`${this.url}users/${data.id}.json`);
  }
ngDoCheck() {
  this.getData();
}
}
