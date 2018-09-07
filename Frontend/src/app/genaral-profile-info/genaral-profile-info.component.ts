import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-genaral-profile-info',
  templateUrl: './genaral-profile-info.component.html',
  styleUrls: ['./genaral-profile-info.component.css']
})
export class GenaralProfileInfoComponent implements OnInit {
  user:any

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(res=>{
      this.user = res.data.user;
      console.log(this.user);

    })
  }
}
