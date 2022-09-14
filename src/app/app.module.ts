import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChartsComponent } from './charts/charts.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaluclatorComponent } from './caluclator/caluclator.component';
import { SquareComponent } from './square/square.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { CartComponent } from './cart/cart.component';
import { Cart2Component } from './cart2/cart2.component';
import { EmployeesdtailsComponent } from './employeesdtails/employeesdtails.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { CarsComponent } from './cars/cars.component';
import { GpayComponent } from './gpay/gpay.component';
import{ HttpClientModule } from '@angular/common/http';
import { CarapidataComponent } from './carapidata/carapidata.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { ItemscartComponent } from './itemscart/itemscart.component';
import { MailserviceComponent } from './mailservice/mailservice.component';
import { UserapiComponent } from './userapi/userapi.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    ChartsComponent,
    LayoutsComponent,
    ComponentsComponent,
    AboutComponent,
    DatabindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    CaluclatorComponent,
    SquareComponent,
    RectangularComponent,
    EventRegistrationComponent,
    CartComponent,
    Cart2Component,
    EmployeesdtailsComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    CarsComponent,
    GpayComponent,
    CarapidataComponent,
    BankaccountComponent,
    ItemscartComponent,
    MailserviceComponent,
    UserapiComponent,
    CreatevehicleComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
