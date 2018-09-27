import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/primeng';
import { YelpService } from '../core/yelp.service';
import { LocationFilter } from '../models/location-filter.model';
import { YelpResults } from '../models/yelp-results.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  users: SelectItem[];
  prices: SelectItem[];
  stars: SelectItem[];
  selectedUsers: number[] = [];
  selectedPrices: number[] = [];
  selectedStars: number[] = [];
  date: Date;
  title: string;
  location: string;
  description: string;
  radius: number;
  index = 0;
  items: MenuItem[];
  activeIndex = 0;
  model = {};
  restaurantResults: YelpResults;

  constructor(private yelpService: YelpService) { }

  ngOnInit() {
    this.users = [
      { label: 'Test User', value: 1},
      { label: 'Test User2 ', value: 2}
    ];

    this.prices = [
      { label: '$', value: 1},
      { label: '$$ ', value: 2},
      { label: '$$$ ', value: 3},
      { label: '$$$$ ', value: 4}
    ];

    this.stars = [
      { label: '*', value: 1},
      { label: '** ', value: 2},
      { label: '***', value: 3},
      { label: '**** ', value: 4},
      { label: '***** ', value: 5}
    ];


    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
  ];
  }

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  save() {
    window.location.href = '../';
  }

  getRestaurants() {
    this.model = {
      users: this.selectedUsers,
      prices: this.selectedPrices,
      date: this.date,
      title: this.title,
      location: this.location,
      description: this.description,
      radius: this.radius
    };

    const filterData = new LocationFilter(this.location, this.selectedPrices.join(), Math.floor(this.radius / .00062137));
    this.yelpService.searchBusinesses(filterData).subscribe((results) => {
      this.restaurantResults = results;
      this.activeIndex = 2;
    });
  }

}
