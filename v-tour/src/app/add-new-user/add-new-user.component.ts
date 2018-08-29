import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  fname:String;
  lname:String;
  username:String;
  password:String;
  email:String;
  telephone:String;


  constructor(private validateService : ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user={
      fname:this.fname,
      lname:this.lname,
      username:this.username,
      password:this.password,
      email:this.email,
      telephone:this.telephone
    }

    //required fields
    if(!this.validateService.validateUserRegister(user)){
      return false;
    }
  }
}
