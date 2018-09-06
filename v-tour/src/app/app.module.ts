import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { RouterModule,Routes } from '@angular/router'



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
import { DemoModalServiceStaticComponent } from './popup/y';
import { ViewServiceProvidersComponent } from './serviceProvider/view-service-providers/view-service-providers.component';
import { AddNewTravelAgentComponent } from './travelAgent/add-new-travel-agent/add-new-travel-agent.component';
import { AddNewServiceProviderComponent } from './serviceProvider/add-new-service-provider/add-new-service-provider.component';
import { AddNewClientsComponent } from './client/add-new-clients/add-new-clients.component';

const applicationRoutes:Routes=[
  {path:'',component:HeaderBarComponent},
  {path:'viewtravelagents',component:ViewTravelAgentsComponent},
  {path:'viewserviceproviders',component:ViewServiceProvidersComponent},
  {path:'viewclients',component:ViewClientsComponent},
  {path:'addnewtravelagent',component:AddNewTravelAgentComponent},
  {path:'addnewserviceprovider',component:AddNewServiceProviderComponent},
  {path:'addnewclient',component:AddNewClientsComponent},
];

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
    DemoModalServiceStaticComponent,
    ViewServiceProvidersComponent,
    AddNewTravelAgentComponent,
    AddNewServiceProviderComponent,

    AddNewClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
