import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potager',
  templateUrl: './potager.component.html',
  styleUrls: ['./potager.component.css']
})
export class PotagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 /*giveImage(value: any){
    let pathImage: string='';
     switch(value){
     case 101: pathImage='../assets/images/carotte.png';
      break;
     default: pathImage='../assets/images/bebecarotte.png';
    }
    return pathImage;
 }*/
}
