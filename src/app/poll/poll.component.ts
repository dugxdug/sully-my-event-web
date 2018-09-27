import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventsService } from '../core/events.service';
import { Observable } from 'rxjs';
import { CoreService } from '../core/core.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PollComponent implements OnInit {

  constructor(
    private eventsService: EventsService,
    private coreService: CoreService,
    private route: ActivatedRoute,
    private router: Router) { }

  eventLocations: Observable<any>;
  eventId: number;
  userId: number;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = +params['id'];
      this.userId = +this.coreService.getLoggedInUserId();
    this.eventLocations = this.eventsService.getEventLocations(this.userId, this.eventId);
    });
  }

  vote($event, locationId: string) {
    this.eventsService.updateEventWithVote(this.userId, this.eventId, locationId).subscribe();
    this.router.navigate([''], {queryParams: {voted: true}});
  }

}
