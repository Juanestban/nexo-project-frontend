import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ControlMerchandise } from 'src/app/models/ControlMerchandise';
import { Merchandise } from 'src/app/models/Merchandise';
import { MerchandiseUser } from 'src/app/models/MerchandiseUser';
import { User } from 'src/app/models/User';
import { ControlMerchandiseService } from 'src/app/services/ControlMerchandiseService/control-merchandise.service';
import { MerchandiseService } from 'src/app/services/MerchandiseService/merchandise.service';
import { MerchandiseUserService } from 'src/app/services/MerchandiseUserService/merchandise-user.service';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-table-merchandises',
  templateUrl: './table-merchandises.component.html',
  styleUrls: ['./table-merchandises.component.css'],
})
export class TableMerchandisesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nameProduct',
    'quantity',
    'admissionDate',
    'userRegister',
    'idControlMerchandise',
    'actions',
  ];
  dataSource!: MatTableDataSource<Merchandise>;
  users: User[] = [];
  controlMercandises: ControlMerchandise[] = [];
  merchandiseUsers: MerchandiseUser[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private merchandiseService: MerchandiseService,
    private userService: UserService,
    private controlMerchandiseService: ControlMerchandiseService,
    private merchandiseUserService: MerchandiseUserService
  ) {}

  ngOnInit(): void {
    this.getAllMerchandises();
    this.getAllUsers();
    this.getAllControlMerchandise();
  }

  getAllMerchandises() {
    this.merchandiseService.getAllMerchandises().subscribe((res) => {
      const merchandises = res;
      this.dataSource = new MatTableDataSource(merchandises);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res;
    });
  }

  getAllControlMerchandise() {
    this.controlMerchandiseService
      .getAllControlMerchandise()
      .subscribe((res) => {
        this.controlMercandises = res;
      });
  }

  getByMerchandiseUserId(idMerchandiseUser: number | string) {
    this.merchandiseUserService
      .getByIdMerchandise(idMerchandiseUser)
      .subscribe((res) => {
        this.merchandiseUsers = res;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteMerchandise(idMerchandise: number | string) {
    this.merchandiseService.deleteMerchandise(idMerchandise).subscribe(() => {
      console.log('deleted:');
      this.getAllMerchandises();
    });
  }

  // get the control Active / Desactive [state]
  filterControlMerchandise(idControl: number | string): string | undefined {
    return this.controlMercandises.find((el) => el.id == idControl)?.name;
  }

  // get the name from user that edited or created the merchandise
  filterGetUserName(idUser: number | string): string | undefined {
    return this.users.find((el) => el.id == idUser)?.name;
  }
}
