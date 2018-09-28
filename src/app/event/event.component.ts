import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem, MessageService } from 'primeng/primeng';
import { YelpService } from '../core/yelp.service';
import { LocationFilter } from '../models/location-filter.model';
import { YelpResult, YelpResults } from '../models/yelp-results.model';
import { UserService } from '../core/user.service';
import { EventsService } from '../core/events.service';
import { SelectedLocation } from '../models/location.model';
import { Router } from '@angular/router';
import { Email } from '../models/email.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [MessageService]
})
export class EventComponent implements OnInit {
  users = Array<SelectItem>();
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
  searchTerm: string;
  restaurantResults: YelpResults;
  eventUsers = Array<{ userId: number }>();
  eventLocations = Array<SelectedLocation>();
  selectedCards = Array<string>();

  constructor(private yelpService: YelpService,
    private userService: UserService,
    private eventService: EventsService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((userList) => {
      userList.forEach(user => {
        const selectItem: SelectItem = {
          label: user.firstName,
          value: user.id
        };
        this.users.push(selectItem);
      });
    });

    this.prices = [
      { label: '$', value: 1 },
      { label: '$$ ', value: 2 },
      { label: '$$$ ', value: 3 },
      { label: '$$$$ ', value: 4 }
    ];

    this.stars = [
      { label: '*', value: 1 },
      { label: '** ', value: 2 },
      { label: '***', value: 3 },
      { label: '**** ', value: 4 },
      { label: '***** ', value: 5 }
    ];


    this.items = [
      { label: 'Event Details' },
      { label: 'Restaurant Criteria' },
      { label: 'Restaurant Selections' }
    ];
  }

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  save() {
    this.selectedUsers.forEach((x) => {
      this.eventUsers.push({ userId: x });
    });
    const event = {
      title: this.title,
      description: this.description,
      eventTime: this.date,
      selectedLocations: this.eventLocations,
      eventUsers: this.eventUsers,
      createdById: localStorage.getItem('userId'),
      createdBy: 'test'
    };
    this.eventService.createEvent(1, event).subscribe((id) => {
      const emailObject = new Email('sulliedhackathon@gmail.com', 'You have been sullied',
        `http://localhost:1111/events/${id}/poll`, this.selectedUsers);
      this.eventService.email(emailObject).subscribe();
      this.router.navigate(['']);
    });
  }

  getRestaurants() {
    const filterData = new LocationFilter(this.location, this.selectedPrices.join(), Math.floor(this.radius / .00062137), this.searchTerm);
    this.yelpService.searchBusinesses(filterData).subscribe((results) => {
      console.log(this.selectedStars);
      if (this.selectedStars.length > 0) {
        const filteredResults = results.businesses.filter(x => this.selectedStars.includes(Math.floor(x.rating)));
        results.businesses = filteredResults;
        this.restaurantResults = results;
      } else {
        this.restaurantResults = results;
      }
      this.activeIndex = 2;
    });
  }
  previous(index: number) {
    this.selectedCards = [];
    this.eventLocations = [];
    this.activeIndex = index;
  }

  cardClicked(result: any) {
      if (!this.eventLocations.find(x => x.yelpId === result.id)) {
        if (this.eventLocations.length < 8) {
        this.eventLocations.push(
          new SelectedLocation(
            result.id,
            result.price,
            result.rating,
            result.name,
            result.location.address1,
            result.image_url,
            result.url));
      }
    }
      if (this.selectedCards.find(x => x === result.id)) {
        this.selectedCards.splice(this.selectedCards.findIndex(x => x === result.id));
      } else {
        if (this.selectedCards.length < 8) {
        this.selectedCards.push(result.id);
        } else {
          this.messageService.add(
            {
              severity: 'error',
              summary: 'Limit of 8 options',
              detail: 'You can only select a maximum of 8 options.'
            });
        }
      }

  }
}
