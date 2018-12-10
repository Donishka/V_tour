import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'
import { PasswordResetService } from './../../../services/password-reset-service/password-reset.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private passwordResetService: PasswordResetService,
    private authService: AuthService,
    private http: HttpClient,
  ) { }

  id:string;
  token:string;
  password:string;
  repassword:string;

  ngOnInit() {
    this.route.paramMap.subscribe(
      prams=>{
        this.id = prams.get('payloadid');
        this.token = prams.get('token');
      }
    );
    this.getVerification();
  }

  sendPassword(form: NgForm) {
    if (this.repassword == form.value.password) {
      this.passwordResetService.postPassword(form.value).subscribe((res) => {
        if(res==true){
          alert('Password Updated');
          this.display1 = false;
        }else{
          alert('Password Reset Failed');
          this.display1 = false;
        }
      });
    } else {
      alert('Passwords Do Not Match !');
    }
  }

  display1: boolean = false;
  showDialog1() {
    this.display1 = true;
  }
  display2: boolean = false;
  showDialog2() {
    this.display2 = true;
  }


  getVerification(){
    this.passwordResetService.getPasswordReset(this.id, this.token).subscribe(res => {
      if(res==true){
        this.showDialog1();
      }else{
        this.showDialog2();
      }
    });
  }


}
