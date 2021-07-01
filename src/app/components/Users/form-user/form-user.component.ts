import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Charge } from 'src/app/models/Charge';
import { User } from 'src/app/models/User';
import { ChargeService } from 'src/app/services/ChargeService/charge.service';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  @Output()
  refresh: EventEmitter<User> = new EventEmitter<User>();
  options!: FormGroup;
  colorControl = new FormControl('accent');
  formUser: User = {
    name: '',
    age: 0,
    date_entry_company: '',
    id_charge: 0,
  };
  charges: Charge[] = [];

  constructor(
    public fb: FormBuilder,
    private chargeService: ChargeService,
    private userService: UserService
  ) {
    this.options = fb.group({
      color: this.colorControl,
    });
  }

  ngOnInit(): void {
    this.chargeService.getAllCharges().subscribe((res) => {
      this.charges = res;
    });
  }

  onSubmit(): void {
    this.formUser.date_entry_company =
      this.formUser.date_entry_company.toString();
    console.log(this.formUser);
    this.userService.postUser(this.formUser).subscribe((res) => {
      console.log(res);
      this.refresh.emit(this.formUser);
      location.reload();
    });
  }
}
