import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalChargeComponent } from 'src/app/components/Charges/modal-charge/modal-charge.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onOpenDialog(): void {
    this.dialog.open(ModalChargeComponent, { width: '50%' });
  }
}
