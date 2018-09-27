import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelperService } from './http-helper.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class EventsService {

  constructor(private http: HttpClient, private httpHelper: HttpHelperService) { }

  getEvents(userId: number): Observable<any> {
    // return this.http.get(`${environment.ApiBaseUrl}/users/${userId}/events`);
    return of([
      {
        id: 1,
        Title: 'Test Event 1',
        Description: 'This is a test event',
        Time: '10/16/2018 12:00:00PM',
        LocationId: 'some location',
        imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/GrCCQ2Pi3_aVbDbYXH_-iw/o.jpg'
      },
      {
        id: 2,
        Title: 'Test Event 2',
        Description: 'This is a test event',
        Time: '10/20/2018 12:00:00PM',
        LocationId: 'some location',
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/4GlCfMYCgbgT32XgWKC0dQ/ls.jpg'
      },
      {
        id: 3,
        Title: 'Test Event 3',
        Description: 'This is a test event',
        Time: '11/06/2018 12:00:00PM',
        LocationId: 'some location',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/cV73a7HjnayHF5Zw2D0-qQ/ls.jpg'
      },
      {
        id: 4,
        Title: 'Test Event 4',
        Description: 'This is a test event',
        Time: '12/03/2018 12:00:00PM',
        LocationId: 'some location',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/jmAMo8LI5U-3NaN1RWbsxg/ls.jpg'
      },
      {
        id: 5,
        Title: 'Test Event 5',
        Description: 'This is a test event',
        Time: '12/03/2018 12:00:00PM',
        LocationId: 'some location',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/jmAMo8LI5U-3NaN1RWbsxg/ls.jpg'
      },
      {
        id: 6,
        Title: 'Test Event 6',
        Description: 'This is a test event',
        Time: '12/03/2018 12:00:00PM',
        LocationId: 'some location',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/jmAMo8LI5U-3NaN1RWbsxg/ls.jpg'
      }
    ]);
  }

  getEvent(userId: number, eventId: number): Observable<any> {
    return this.http.get(`${environment.ApiBaseUrl}/users/${userId}/events/${eventId}`);
  }

  getEventLocations(userId: number, eventId: number): Observable<any> {

    return this.http.get(`${environment.ApiBaseUrl}/users/${userId}/events/${eventId}/locations`);

   /*  return of([
      {
        yelpId: 1, price: '$', rating: 4.5, name: 'Taco Bell', address: 'test address test out a long address',
        imgUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/GrCCQ2Pi3_aVbDbYXH_-iw/o.jpg', url: 'https://www.google.com'
      },
      { yelpId: 2, price: '$$$', rating: 4, name: 'test location2', address: 'test address2',
      imgUrl: 'https://via.placeholder.com/500x400' },
      {
        yelpId: 3, price: '$$$$', rating: 4, name: 'test location2', address: 'test address2',
        imgUrl: 'https://via.placeholder.com/350x250'
      },
      { yelpId: 4, price: '$$$', rating: 4, name: 'test location2', address: 'test address2',
      imgUrl: 'https://via.placeholder.com/350x250' }
    ]); */
  }

  updateEventWithVote(userId: number, eventId: number, locationId: string): Observable<any> {
    return this.http.put(`${environment.ApiBaseUrl}/users/${userId}/events/${eventId}/vote`, { userId, eventId, locationId });
  }

  createEvent(userId: number, event: any): Observable<any> {
    return this.http.post(`${environment.ApiBaseUrl}/users/${userId}/events/`, event);
  }
}
