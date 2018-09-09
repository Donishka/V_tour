import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './services/auth.guard';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';





import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { HomeComponent } from './home/home.component';


import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { DraftedItenarariesComponent } from './drafted-itenararies/drafted-itenararies.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { LoginComponent } from './login/login.component';

import { ViewTravelAgentsComponent } from './travelAgent/view-travel-agents/view-travel-agents.component';
import { ViewClientsComponent } from './client/view-clients/view-clients.component';

import { ViewServiceProvidersComponent } from './serviceProvider/view-service-providers/view-service-providers.component';
import { AddNewTravelAgentComponent } from './travelAgent/add-new-travel-agent/add-new-travel-agent.component';
import { AddNewServiceProviderComponent } from './serviceProvider/add-new-service-provider/add-new-service-provider.component';
import { AddNewClientsComponent } from './client/add-new-clients/add-new-clients.component';
import { HeaderBarComponent2 } from './header-bar-2/header-bar.component';
import { BodySplitComponent } from './body-split/body-split.component';

;


const applicationRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'admin-profile',component:AdminProfileComponent},
  {path:'',component:HomeComponent},
  {path:'viewtravelagents',component:ViewTravelAgentsComponent,canActivate: [AuthGuard]},
  {path:'viewserviceproviders',component:ViewServiceProvidersComponent,canActivate: [AuthGuard]},
  {path:'viewclients',component:ViewClientsComponent,canActivate: [AuthGuard]},
  {path:'addnewtravelagent',component:AddNewTravelAgentComponent,canActivate: [AuthGuard]},
  {path:'addnewserviceprovider',component:AddNewServiceProviderComponent,canActivate: [AuthGuard]},
  {path:'addnewclient',component:AddNewClientsComponent,canActivate: [AuthGuard]},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SearchBarComponent,
    QuickAccessComponent,
    DraftedItenarariesComponent,
    GridViewComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminProfileComponent,
    HomeComponent,
    ViewTravelAgentsComponent,
    ViewClientsComponent,
    ViewServiceProvidersComponent,
    AddNewTravelAgentComponent,
    AddNewServiceProviderComponent,
    AddNewClientsComponent,
    HeaderBarComponent2,
    BodySplitComponent

    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
