import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './../models/user.model';


@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    logUserIn(user: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>(`https://localhost:44353/v1/login`, user);
    }

    createUser(user: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>(`https://localhost:44353/v1/users`, user);
    }

    getUsers(): Observable<any> {
        return this.http.get<any>(`https://localhost:44353/v1/users`);
    }
}
