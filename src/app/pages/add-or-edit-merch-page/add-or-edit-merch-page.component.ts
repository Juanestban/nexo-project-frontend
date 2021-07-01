import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlMerchandise } from 'src/app/models/ControlMerchandise';
import { Merchandise } from 'src/app/models/Merchandise';
import { User } from 'src/app/models/User';
import { ControlMerchandiseService } from 'src/app/services/ControlMerchandiseService/control-merchandise.service';
import { MerchandiseService } from 'src/app/services/MerchandiseService/merchandise.service';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-add-or-edit-merch-page',
  templateUrl: './add-or-edit-merch-page.component.html',
  styleUrls: ['./add-or-edit-merch-page.component.css'],
})
export class AddOrEditMerchPageComponent implements OnInit {
  options!: FormGroup;
  colorControl = new FormControl('accent');
  formMerchandise: Merchandise = {
    nameProduct: '',
    quantity: 0,
    admissionDate: '',
    userRegister: 0,
    idControlMerchandise: 0,
  };
  controlMerchandises: ControlMerchandise[] = [];
  users: User[] = [];
  path!: number | string;

  constructor(
    public fb: FormBuilder,
    private merchandiseService: MerchandiseService,
    private controlMerchandiseService: ControlMerchandiseService,
    private userService: UserService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {
    const {
      params: { id },
    } = activedRoute.snapshot;
    this.path = id;

    this.options = fb.group({
      color: this.colorControl,
    });
  }

  ngOnInit(): void {
    if (this.path !== 'add') {
      this.getMerchandiseById();
    }
    this.getControl();
    this.getAllUsers();
  }

  getMerchandiseById() {
    this.merchandiseService.getMerchandiseById(this.path).subscribe((res) => {
      this.formMerchandise = res;
    });
  }

  getControl() {
    this.controlMerchandiseService
      .getAllControlMerchandise()
      .subscribe((res) => {
        this.controlMerchandises = res;
      });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res;
    });
  }

  onSubmit() {
    if (this.path == 'add') {
      this.merchandiseService
        .postMerchandise(this.formMerchandise)
        .subscribe((res) => {
          console.log('created', res);
          this.router.navigate(['/merchandises']);
        });
    } else {
      this.merchandiseService
        .putMerchandise(this.formMerchandise, this.formMerchandise.userRegister)
        .subscribe((res) => {
          console.log('updated', res);
          this.router.navigate(['/merchandises']);
        });
    }
  }
}
