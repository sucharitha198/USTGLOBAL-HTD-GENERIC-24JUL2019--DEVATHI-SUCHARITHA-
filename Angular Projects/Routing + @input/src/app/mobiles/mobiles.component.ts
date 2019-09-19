import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  constructor() { }
mobiles = [{
  brand : 'iPhone',
  img :'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461__340.jpg',
  // tslint:disable-next-line: max-line-length
  description: 'iPhone is a line of smartphones designed and marketed by Apple Inc. All generations of the ..... The only physical menu button is situated directly below the display, and is called the ..... The iPhone 4 introduced a 5.0-megapixel camera (2592×1936 pixels) that can record video at 720p resolution, considered high-definition.'
},
{
  brand : 'Samsung',
  img :'https://cdn.pixabay.com/photo/2016/11/10/16/03/android-1814556__340.jpg',
  description : 'Samsung Galaxy is Samsung Electronics flagship line of Android smartphones and tablets. ... More than 60 different Samsung Galaxy models have hit the market since then, including an Android-based camera. Popular devices include the Samsung Galaxy Note and Note 2 phablets, as well as the S III and S IV smartphones'
},
{
  brand : 'Nokia',
  img :'https://cdn.pixabay.com/photo/2015/09/06/00/50/nokia-926756__340.jpg',
  description : 'Nokia A300 is Nokia Series 40 offering that combines a keypad and a touchscreen. The phone has 1 GHz processor, 3G connectivity and preloaded with Angry Birds, the first time the game has been offered on non-smartphones. Nokia A303 is a phone with QWERTY keypad input and a touchscreen.'
},
{
  brand : 'One Plus',
  img :'https://cdn.pixabay.com/photo/2018/08/01/23/42/oneplus5-3578543__340.jpg',
  description : 'OnePlus Technology (Shenzhen) Co., Ltd., commonly referred to as OnePlus, is a Chinese smartphone manufacturer based in Shenzhen, Guangdong. It was founded by Pete Lau (CEO) and Carl Pei in December 2013. The company officially serves 34 countries and regions around the world as of July 2018.[2] They have released numerous phones, amongst other products.',
},
{
  brand : 'Sony',
  img :'https://image.shutterstock.com/image-vector/smartphone-mobile-phone-isolated-realistic-260nw-703670326.jpg',
  description: 'The phone comes with a 4.30-inch touchscreen display with a resolution of 720x1280 pixels at a pixel density of 342 pixels per inch (ppi). Sony Xperia S is powered by a 1.5GHz dual-core processor. ... Sensors on the phone include accelerometer, ambient light sensor, gyroscope, proximity sensor, and compass/ magnetometer.'
}]
mobileData: any = '';
sendMobile(mobile) {
  this.mobileData = mobile;
}
  ngOnInit() {
  }

}
