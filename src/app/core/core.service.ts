import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Injectable()
export class CoreService {

  constructor() { }

  getLoggedInUserId(): string {
    return localStorage.getItem('userId');
  }

  getLoggedInFullName(): string {
    return localStorage.getItem('fullName');
  }

  setLoggedInUser(user: UserModel): void {
    localStorage.setItem('userId', user.id.toString());
    localStorage.setItem('fullName', user.firstName + ' ' + user.lastName);
  }

  logUserOut(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('fullName');
  }
}
