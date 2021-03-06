import { Component, OnInit,NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { NgxSpinnerService } from 'ngx-spinner';

import { ServiceProviderService } from '../../../services/user-service/serviceProvider/serviceprovider.service';
import { ServiceProvider } from '../../../services/user-service/serviceProvider/serviceprovider.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-service-provider-account',
  templateUrl: './service-provider-account.component.html',
  styleUrls: ['./service-provider-account.component.css'],
  providers:[ServiceProviderService]
})
export class ServiceProviderAccountComponent implements OnInit {

  user: any = { profilepic: null, lname: "Last name", usertype: "travelagent" };
  constructor(
    private authService:AuthService,
    private router:Router,
    public serviceProviderService:ServiceProviderService,
    private zone:NgZone,
    private spinner: NgxSpinnerService

  ) { }

  ngOnInit() {

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

    this.getProfileDetails();
  }
  getDetails(_id: string) {
    this.serviceProviderService.get1ServiceProvider(_id).subscribe((res: any) => {
      this.user = res;
    })
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      this.getDetails(this.user._id);
    });
  }

}
