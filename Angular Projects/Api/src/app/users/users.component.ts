import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../firebase.service';
import { Router } from '@angular/router';            // navigate by url method

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private firebaseService: FirebaseService ,
     private router: Router){ }     // injecting a service into component--Dependency injection

  updateUser(user) {
    this.firebaseService.selectedUser = user;                       // assigned user to the selecteduser variable
    this.router.navigateByUrl('/firebase');                    // assigning the data to firebase...navigating to that page
  }

  deleteUser(user) {
    this.firebaseService.deleteData(user).subscribe(resData => {
        console.log(resData);
        this.firebaseService.getData();
      });
    }
  ngOnInit() {
    this.firebaseService.getData();
    console.log(this.firebaseService.users);
  }

}
