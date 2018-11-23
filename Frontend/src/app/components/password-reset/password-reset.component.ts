import { PasswordResetService } from './../../services/password-reset-service/password-reset.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  email:any;
  constructor(
    private passwordResetService: PasswordResetService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private zone: NgZone,
    private http: HttpClient,) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.passwordResetService.postEmail(form.value).subscribe((res:any) => {
      alert(res.msg);
      if(res.state==true){
        this.router.navigateByUrl('/login');
      }
    });
  }
}
