import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { DraftedItenarariesComponent } from './drafted-itenararies/drafted-itenararies.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { LoginComponent } from './login/login.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { ViewTravelAgentsComponent } from './travelAgent/view-travel-agents/view-travel-agents.component';

import { ViewClientsComponent } from './client/view-clients/view-clients.component';
import { ServiceproviderComponent } from './service/serviceProvider/serviceprovider/serviceprovider.component';

import { DemoModalServiceStaticComponent } from './popup/y';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SearchBarComponent,
    QuickAccessComponent,
    DraftedItenarariesComponent,
    GridViewComponent,
    LoginComponent,
    AddNewUserComponent,
    ViewTravelAgentsComponent,
    ViewClientsComponent,
    ServiceproviderComponent,
    DemoModalServiceStaticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
