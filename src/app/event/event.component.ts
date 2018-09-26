import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  users: SelectItem[];
  selectedUsers: number[] = [];
  date: Date;
  title: string;
  description: string;
  index = 0;
  items: MenuItem[];
  activeIndex = 0;

  constructor() { }

  ngOnInit() {
    this.users = [
      { label: 'Test User', value: 1},
      { label: 'Test User2 ', value: 2}
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

}
