import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelperService } from './http-helper.service';
import { Observable } from 'rxjs';
import {of} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class EventsService {

  constructor(private http: HttpClient, private httpHelper: HttpHelperService) { }

  getEvents(userId: number): Observable<any> {
    return this.http.get(`${environment.ApiBaseUrl}/users/${userId}/events`);
  }

  getEvent(userId: number, eventId: number): Observable<any> {
    return this.http.get(`${environment.ApiBaseUrl}/users/${userId}/events/${eventId}`);
  }

  getEventLocations(userId: number, eventId: number): Observable<any> {

    // return this.http.get(`${environment.ApiBaseUrl}/users/${userId}/events/${eventId}/locations`);

    return of([
      {yelpId: 1, price: '$', rating: 4.5, name: 'Taco Bell', address: 'test address test out a long address',
        imgUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/GrCCQ2Pi3_aVbDbYXH_-iw/o.jpg', url: 'https://www.google.com'},
      {yelpId: 2, price: '$$$', rating: 4, name: 'test location2', address: 'test address2', imgUrl: 'https://via.placeholder.com/500x400'},
      {yelpId: 3, price: '$$$$', rating: 4, name: 'test location2', address: 'test address2',
        imgUrl: 'https://via.placeholder.com/350x250'},
      {yelpId: 4, price: '$$$', rating: 4, name: 'test location2', address: 'test address2', imgUrl: 'https://via.placeholder.com/350x250'}
    ]);
  }

  updateEventWithVote(userId: number, eventId: number, locationId: string): Observable<any> {
    return this.http.patch(`${environment.ApiBaseUrl}/users/${userId}/events/${eventId}`, {locationId});
  }
}
