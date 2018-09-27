import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  constructor() { }

  getLoggedInUserId(): string {
    return localStorage.getItem('userId');
  }

  setLoggedInUserId(id: number): void {
    localStorage.setItem('userId', id.toString());
  }
}
