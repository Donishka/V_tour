import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';

import { RegisterComponent } from './register/register.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { DraftedItenarariesComponent } from './drafted-itenararies/drafted-itenararies.component';
import { GridViewComponent } from './grid-view/grid-view.component';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

import { SigninModule } from './modules/signin/signin.module';
import { SignupModule } from './modules/signup/signup.module';
import { UserAccountModule } from './modules/user-account/user-account.module';
import { EditUserModule } from './modules/user-account/edit-user.module';
import { ViewUserModule } from './modules/user-account/view-user.module';
import { AppRoutingModule } from './modules/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SearchBarComponent,
    QuickAccessComponent,
    DraftedItenarariesComponent,
    GridViewComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    ModalModule.forRoot(),
    SigninModule,
    SignupModule,
    UserAccountModule,
    EditUserModule,
    ViewUserModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
