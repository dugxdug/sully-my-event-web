import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  fullName: string;

  constructor(
    private coreService: CoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fullName = this.coreService.getLoggedInFullName();
  }

  logout() {
    this.coreService.logUserOut();
    this.router.navigate(['login']);
  }

}
