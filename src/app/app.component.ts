import { Component } from '@angular/core';
import { YelpService } from './core/yelp.service';
import { LocationFilter } from './models/location-filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
  }
}
