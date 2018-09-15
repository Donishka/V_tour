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

  user:any
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
        this.selectProfile();
        }else{
          console.log("else");
          this.flashMessage.show(res.msg, { cssClass: 'alert-success', timeout: 4000 });
          this.router.navigate(['/login']);
        }
    })
  }

  selectProfile(){
    this.authService.getProfile().subscribe(res=>{
      this.user = res.data.user;
      console.log(this.user); 
             
      if(this.user.agegroup !== undefined ){
        console.log("client age group "+this.user.agegroup); 
        this.router.navigate(['/client-account']);
      }
      else if(this.user.discription !== undefined){
        console.log("service proveide desi "+this.user.discription); 
        this.router.navigate(['/service-provider-account']);
      }else{
        console.log("agent aadmin "+this.user.isadmin); 
        this.router.navigate(['/travelagent-account']);
      }

      
    })
  }
  
}
