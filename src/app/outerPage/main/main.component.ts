import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  submitForm!:FormGroup;
  // getFormDetails:any = [];
  // getFormDetailsStor:any = [];
  formsData:any = [];
  resp:string = ""
  sendData={
    res:"Hi There Are Recieve You Chat"
  } ;
  happyReply:any = [];
  constructor(private fb : FormBuilder){}
  ngOnInit(){
    this.submitForm = this.fb.group({
      message:[null],
    });
  }
  saveData(){
// console.log(this.formsData);
 
  this.responeMessage();
   this.submitForm.reset();
  }
  responeMessage(){
    this.resp = "Hi There Are Recieve You Chat";
this.happyReply.push(this.sendData);
this.formsData.push(this.submitForm.value);
  }
}
