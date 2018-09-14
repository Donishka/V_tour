import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;

  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  loginUser(){
    const user = {
      email:this.email,
      password:this.password
    }
    this.authService.loginUser(user).subscribe(res=>{
      console.log(res);
      if(res.state){
        
        this.flashMessage.show('You are logged in', { cssClass: 'alert-success', timeout: 4000 });
        console.log("if");
        this.authService.storeData(res.token,res.user);
        this.router.navigate(['/profile']);
        }else{
          console.log("else");
          this.flashMessage.show(res.msg, { cssClass: 'alert-success', timeout: 4000 });
          this.router.navigate(['/login']);
        }
    })
  }
  
}
