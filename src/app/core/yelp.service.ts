import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpHelperService } from './http-helper.service';
import { LocationFilter } from '../models/location-filter.model';
import { YelpResult, YelpResults } from '../models/yelp-results.model';

@Injectable()
export class YelpService {

  constructor(private http: HttpClient, private httpHelper: HttpHelperService) {}

  searchBusinesses(filters: LocationFilter): Observable<YelpResults> {
    const options = {};
    if (filters) {
      options['params'] = this.httpHelper.buildParams(filters);
    }
    return this.http.get<YelpResults>(`${environment.ApiBaseUrl}/yelp-search`,
    options);
  }

  getBusiness(id: number): Observable<YelpResult> {
    return this.http.get<YelpResult>(`${environment.ApiBaseUrl}/yelp-search/${id}`);
  }
}
