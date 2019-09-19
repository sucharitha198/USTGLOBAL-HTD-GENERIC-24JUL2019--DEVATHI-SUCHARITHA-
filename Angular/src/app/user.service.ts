import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class UserService {
users = [
    {
        name : 'sai',
        company: 'scientific games' ,
    },
    {
        name : 'suchi',
        company : 'ust global' ,
    },
    {
        name : 'swaroop',
        company : 'ibm' ,
    }]
}
// printDetails(){
// console.log("the function present in the service is executed")
//}