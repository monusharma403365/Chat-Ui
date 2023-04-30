import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
}) 
export class AsideComponent {
title:string = "Mr.Billson";
search:string = "";
person:any = [
  {
    name:"Mr.Billson"
  },
  {
    name:"Mr.Jack"
  },
  {
    name:"Mr.Pitter"
  },  {
    name:"Mr.John"
  },  {
    name:"Mr.Butteler"
  },  {
    name:"Mr.Bit"
  },  {
    name:"Mr.John K.K"
  },  {
    name:"Mr.J.R"
  },  {
    name:"Mr.R.K"
  },  {
    name:"Mr.P.Roy"
  },
  
]
constructor(private router: Router){

}
addNewMember(){
this.router.navigate(['/member'])
} 
}
