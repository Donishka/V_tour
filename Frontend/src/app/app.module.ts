import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './services/auth.guard';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
import { ViewTravelAgentsComponent } from './components/travelAgent/view-travel-agents/view-travel-agents.component';
import { ViewClientsComponent } from './components/client/view-clients/view-clients.component';
import { ViewServiceProvidersComponent } from './components/serviceProvider/view-service-providers/view-service-providers.component';
import { AddNewTravelAgentComponent } from './components/travelAgent/add-new-travel-agent/add-new-travel-agent.component';
import { AddNewServiceProviderComponent } from './components/serviceProvider/add-new-service-provider/add-new-service-provider.component';
import { AddNewClientsComponent } from './components/client/add-new-clients/add-new-clients.component';
import { TravelAgentAccountComponent } from './components/travelAgent/travel-agent-account/travel-agent-account.component';
import { EditTravelAgentComponent } from './components/travelAgent/edit-travel-agent/edit-travel-agent.component';
import { ServiceProviderAccountComponent } from './components/serviceProvider/service-provider-account/service-provider-account.component';
import { ClientAccountComponent } from './components/client/client-account/client-account.component';
import { EditServiceProviderComponent } from './components/serviceProvider/edit-service-provider/edit-service-provider.component';

import { SigninModule } from './modules/signin/signin.module';
import { SignupModule } from './modules/signup/signup.module';
import { UserAccountModule } from './modules/user-account/user-account.module';
import { AppRoutingModule } from './modules/app-routing.module'



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
    ViewTravelAgentsComponent,
    ViewClientsComponent,
    ViewServiceProvidersComponent,
    AddNewTravelAgentComponent,
    AddNewServiceProviderComponent,
    AddNewClientsComponent,
    TravelAgentAccountComponent,
    EditTravelAgentComponent,
    ServiceProviderAccountComponent,
    ClientAccountComponent,
    EditServiceProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    ModalModule.forRoot(),
    SigninModule,
    SignupModule,
    UserAccountModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
