import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchandisesPageComponent } from './pages/merchandises-page/merchandises-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AddOrEditMerchPageComponent } from './pages/add-or-edit-merch-page/add-or-edit-merch-page.component';
import { TableMerchandisesComponent } from './components/Merchandises/table-merchandises/table-merchandises.component';
import { FormMerchandiseComponent } from './components/Merchandises/form-merchandise/form-merchandise.component';
import { TableUsersComponent } from './components/Users/table-users/table-users.component';
import { FormUserComponent } from './components/Users/form-user/form-user.component';
import { ModalChargeComponent } from './components/Charges/modal-charge/modal-charge.component';
import AngularMaterialModule from './imports/angular-material';
import { ChargeService } from './services/ChargeService/charge.service';
import { ControlMerchandiseService } from './services/ControlMerchandiseService/control-merchandise.service';
import { MerchandiseService } from './services/MerchandiseService/merchandise.service';
import { MerchandiseUserService } from './services/MerchandiseUserService/merchandise-user.service';
import { UserService } from './services/UserService/user.service';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MerchandisesPageComponent,
    UsersPageComponent,
    AddOrEditMerchPageComponent,
    TableMerchandisesComponent,
    FormMerchandiseComponent,
    TableUsersComponent,
    FormUserComponent,
    ModalChargeComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...AngularMaterialModule,
  ],
  providers: [
    ChargeService,
    ControlMerchandiseService,
    MerchandiseService,
    MerchandiseUserService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
