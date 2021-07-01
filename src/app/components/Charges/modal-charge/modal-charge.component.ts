import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { Charge } from 'src/app/models/Charge';
import { ChargeService } from 'src/app/services/ChargeService/charge.service';

@Component({
  selector: 'app-modal-charge',
  templateUrl: './modal-charge.component.html',
  styleUrls: ['./modal-charge.component.css'],
})
export class ModalChargeComponent implements OnInit {
  options!: FormGroup;
  colorControl = new FormControl('accent');
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  chargeForm: Charge = {
    name: '',
  };

  constructor(
    public fb: FormBuilder,
    private chargeService: ChargeService,
    private _snackBar: MatSnackBar
  ) {
    this.options = fb.group({
      color: this.colorControl,
    });
  }

  ngOnInit(): void {}

  openSnackBar() {
    const charge: string = this.chargeForm.name;

    this._snackBar.open(`charge [${charge}] saved`, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
    });
  }

  saveCharge(): void {
    this.chargeService.postAllCharges(this.chargeForm).subscribe(() => {
      this.openSnackBar();
      this.chargeForm.name = '';
    });
  }
}
