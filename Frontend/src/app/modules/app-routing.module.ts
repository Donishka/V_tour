import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuard } from '../services/auth.guard';

import { ProfileComponent } from '../components/profile/profile.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { ViewTravelAgentsComponent } from '../components/travelAgent/view-travel-agents/view-travel-agents.component';
import { ViewClientsComponent } from '../components/client/view-clients/view-clients.component';
import { ViewServiceProvidersComponent } from '../components/serviceProvider/view-service-providers/view-service-providers.component';
import { AddNewTravelAgentComponent } from '../components/travelAgent/add-new-travel-agent/add-new-travel-agent.component';
import { AddNewServiceProviderComponent } from '../components/serviceProvider/add-new-service-provider/add-new-service-provider.component';
import { AddNewClientsComponent } from '../components/client/add-new-clients/add-new-clients.component';
import { TravelAgentAccountComponent } from '../components/travelAgent/travel-agent-account/travel-agent-account.component';
import { EditTravelAgentComponent } from '../components/travelAgent/edit-travel-agent/edit-travel-agent.component';
import { ServiceProviderAccountComponent } from '../components/serviceProvider/service-provider-account/service-provider-account.component';
import { ClientAccountComponent } from '../components/client/client-account/client-account.component';
import { EditServiceProviderComponent } from '../components/serviceProvider/edit-service-provider/edit-service-provider.component';
import { ClientPaymentComponent } from '../components/client/client-payment/client-payment.component';

import { ViewClientPaymentsComponent } from '../components/payments/view-client-payments/view-client-payments.component';
import { ItineraryComponent } from '../components/itinerary/itinerary.component';
import { ViewItineraryComponent } from '../components/itinerary/view-itinerary/view-itinerary.component';

const applicationRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'',component:HomeComponent},
  {path:'viewtravelagents',component:ViewTravelAgentsComponent,canActivate: [AuthGuard]},
  {path:'viewserviceproviders',component:ViewServiceProvidersComponent,canActivate: [AuthGuard]},
  {path:'viewclients',component:ViewClientsComponent,canActivate: [AuthGuard]},
  {path:'addnewtravelagent',component:AddNewTravelAgentComponent,canActivate: [AuthGuard]},
  {path:'addnewserviceprovider',component:AddNewServiceProviderComponent,canActivate: [AuthGuard]},
  {path:'addnewclient',component:AddNewClientsComponent,canActivate: [AuthGuard]},
  {path:'edittravelagent',component:EditTravelAgentComponent,canActivate: [AuthGuard]},
  {path:'editserviceprovider',component:EditServiceProviderComponent,canActivate: [AuthGuard]},
  {path:'service-provider-account',component:ServiceProviderAccountComponent,canActivate: [AuthGuard]},
  {path:'client-account',component:ClientAccountComponent,canActivate: [AuthGuard]},
  {path:'travelagent-account',component:TravelAgentAccountComponent,canActivate: [AuthGuard]},
  {path: 'client-payment', component: ClientPaymentComponent, canActivate: [AuthGuard] },
  {path: 'viewclientpayment', component: ViewClientPaymentsComponent, canActivate: [AuthGuard] },
  {path: 'itinerary', component: ItineraryComponent, canActivate: [AuthGuard] },
  {path: 'view-itinerary', component: ViewItineraryComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [
    RouterModule.forRoot(applicationRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
