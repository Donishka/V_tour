import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  user: any = {username:"Janiya"};

  private messageSource = new BehaviorSubject<any>(this.user);
  currentMessge = this.messageSource.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
  }

  

  constructor(
    private authService: AuthService
  ) {}

  shareUserData(){
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      this.changeMessage(this.user);
       //console.log("ShareUserData in service "+JSON.stringify(this.user));
    });
  }
}
