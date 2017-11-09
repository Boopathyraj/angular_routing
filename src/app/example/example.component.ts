import { Component } from '@angular/core';
import { Detail } from "../admin/detail";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent  {

  bean = new Detail();
  constructor() { }

Check(){
  // alert(this.bean.password);
  if(this.bean.name=="admin" && this.bean.password=="admin"){
    alert("Logged in successfully");
  }
  else{
    alert("Login failed :(");
  }
  
}

}
