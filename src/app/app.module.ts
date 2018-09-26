import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Pages
import { AppComponent } from './app.component';
import { YelpService } from './core/yelp.service';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserService } from 'src/app/core/user.service';

// Imported Componenets
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { HttpHelperService } from './core/http-helper.service';
import { EventComponent } from './event/event.component';
import { AccordionModule } from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {StepsModule} from 'primeng/steps';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    DashboardComponent,
    LoginComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    MultiSelectModule,
    FormsModule,
    CalendarModule,
    InputTextareaModule,
    InputTextModule,
    StepsModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [YelpService, HttpHelperService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
