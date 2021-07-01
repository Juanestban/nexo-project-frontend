import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-charge',
  templateUrl: './modal-charge.component.html',
  styleUrls: ['./modal-charge.component.css'],
})
export class ModalChargeComponent implements OnInit {
  options!: FormGroup;
  colorControl = new FormControl('accent');

  constructor(public fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
    });
  }

  ngOnInit(): void {}
}
