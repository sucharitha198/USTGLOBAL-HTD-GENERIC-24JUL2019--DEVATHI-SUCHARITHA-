import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  users: any = [];
  constructor(private service: ServiceService) {
    this.getdata();
  }

  getdata() {
    this.service.getData().subscribe(data => {
      this.users = data;
    } , err => {
      console.log(err);

    });
  }
  deleteUser(key) {
    this.service.deleteData(key).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
