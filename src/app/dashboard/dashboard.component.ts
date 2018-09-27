import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessageService } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  voted = false;
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
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
