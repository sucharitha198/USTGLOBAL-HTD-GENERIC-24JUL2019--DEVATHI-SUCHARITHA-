import { Component, OnInit } from '@angular/core';
import { ProductserveService } from '../productserve.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  products: any;
  constructor(private productserve: ProductserveService) {
    this.getData();
  }
  product = {
    id : '',
    title : '',
    imgUrl : '',
    description: ''
  };
  Products: any[];

  getData() {
    this.productserve.getData().subscribe(data => {
        this.Products = data;
    } , err => {
      console.log(err);
    } , () => {
      console.log("data got Successfully");
    });
  }
  sendProduct(product) {
      this.product.id = product.id;
      this.product.title = product.title;
      this.product.imgUrl = product.imgUrl;
      this.product.description = product.description;
  }
  updateData(key , data) {
      this.productserve.updateData(key , data).subscribe(data => {
        console.log(data);
        this.getData();
      }, err => {
        console.log(err);
      }, () => {
        console.log("data updated successfully");
      });
  }
  deleteData(key) {
        this.productserve.deleteData(key).subscribe(data => {
          console.log(data);
          this.getData();
        } , err => {
          console.log(err);
        } , () => {
          console.log("data deleted successfully");
        });
  }
ngOnInit() {
}
}