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
import { PollComponent } from './poll/poll.component';
import { EventsService } from './core/events.service';
import { UserService } from 'src/app/core/user.service';

// Imported Componenets
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { HttpHelperService } from './core/http-helper.service';
import { EventComponent } from './event/event.component';
import { AccordionModule, MessagesModule, MessageService } from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import { CreateUserComponent } from 'src/app/create-user/create-user.component';
import { CoreService } from './core/core.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    DashboardComponent,
    LoginComponent,
    PollComponent,
    EventComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
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
    ToastModule
  ],
  providers: [YelpService, HttpHelperService, UserService, EventsService, CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
