import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AnimationStyleMetadata } from '@angular/core/src/animation/dsl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
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
