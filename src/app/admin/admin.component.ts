import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { Detail } from "./detail";




@Component({
  
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  
})
export class AdminComponent {
  

  // bean = new Detail();
  constructor() { }

// Check(){
//   // alert(this.bean.password);
//   if(this.bean.name=="admin" && this.bean.password=="admin"){
//     alert("Logged in successfully");
//   }
//   else{
//     alert("Login failed :(");
//   }
  
// }

}
