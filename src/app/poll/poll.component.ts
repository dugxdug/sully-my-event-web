import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventsService } from '../core/events.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PollComponent implements OnInit {

  constructor(private eventsService: EventsService) { }
  events: Observable<any>;
  ngOnInit() {
    this.events = this.eventsService.getEventLocations(1, 2);
  }

}
