import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessageService } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../core/events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  voted = false;
  nextEvent = null;
  events = [];
  userId = 1;
  constructor(
    private eventsService: EventsService,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventsService.getEvents(this.userId).subscribe(events => {
      this.nextEvent = events[0];
      this.events = events.slice(1);
      console.log(events);
    });
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      this.voted = params['voted'];
      if (this.voted) {
        setTimeout(() => {
          this.messageService.add(
            {
              key: 'voteSuccess',
              severity: 'success',
              summary: 'Vote was cast!',
              detail: 'You successfully cast your vote.'
            });
        }, 1000);
      }
    });
  }

}
