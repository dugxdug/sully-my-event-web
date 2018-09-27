import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollComponent } from './poll/poll.component';
import { EventComponent } from './event/event.component';
import { CreateUserComponent } from 'src/app/create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'event',
        component: EventComponent,
        pathMatch: 'full'
      },
      {
        path: 'events/:id/poll',
        component: PollComponent,
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create',
    component: CreateUserComponent,
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
