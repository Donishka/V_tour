import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  fname:String;
  lname:String;
  userid:String;
  username:String;
  password:String;
  telephone:String;


  constructor(private validateService : ValidateService,
              private authService : AuthService,
              private router : Router         
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user={
      Fname:this.fname,
      Lname:this.lname,
      userID:this.userid,
      userName:this.username,
      password:this.password,
      telephone:this.telephone
    }

    this.authService.addNewUser(user).subscribe(data=>{

    });
  }
}
