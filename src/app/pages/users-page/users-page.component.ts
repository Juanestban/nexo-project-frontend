import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  addToTable(user: User) {
    this.ref.markForCheck();
  }
}
