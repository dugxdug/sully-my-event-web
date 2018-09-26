import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './../models/user.model';


@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    logUserIn(user: UserModel): Observable<number> {
        return this.http.post<number>(`https://localhost:44353/v1/login`, user);
    }
}
