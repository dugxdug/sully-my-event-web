import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YelpService } from './core/yelp.service';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpHelperService } from './core/http-helper.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [YelpService, HttpHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
