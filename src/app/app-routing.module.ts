import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { CaluclatorComponent } from './caluclator/caluclator.component';
import { CarapidataComponent } from './carapidata/carapidata.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { Cart2Component } from './cart2/cart2.component';
import { ComponentsComponent } from './components/components.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EmployeesdtailsComponent } from './employeesdtails/employeesdtails.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { GpayComponent } from './gpay/gpay.component';
import { ItemscartComponent } from './itemscart/itemscart.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { MailserviceComponent } from './mailservice/mailservice.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import { SquareComponent } from './square/square.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { UserapiComponent } from './userapi/userapi.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], children:[
    {path:'Components', component: ComponentsComponent},
    {path:'About', component: AboutComponent},
    {path:'Layouts', component: LayoutsComponent},
    {path: 'databinding', component: DatabindingComponent},
    {path: 'Eventbinding', component: EventbindingComponent},
    {path: 'Twowaybinding', component: TwowaybindingComponent},
    {path: 'Caluclator', component: CaluclatorComponent},
    {path: 'Square', component: SquareComponent},
    {path: 'Rectangular', component: RectangularComponent},
    {path: 'Event-registration', component: EventRegistrationComponent},
    {path: 'Cart', component: CartComponent},
    {path: 'Cart2', component: Cart2Component},
    {path: 'Employeesdetails', component: EmployeesdtailsComponent},
    {path: 'Pipes', component: PipesComponent},
    {path: 'Cars', component: CarsComponent},
    {path: 'gpay', component: GpayComponent},
    {path: 'carapidata', component: CarapidataComponent},
    {path: 'bankaccount', component: BankaccountComponent},
    {path: 'itemscart', component: ItemscartComponent},
    {path: 'mailservice', component: MailserviceComponent},
    {path: 'userapi', component: UserapiComponent},
    {path: 'createvehicle', component: CreatevehicleComponent, canDeactivate: [NotifyGuard]},
    {path: 'create-user', component: CreateUserComponent}
  ],
},
  {path: '',component: LoginComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
