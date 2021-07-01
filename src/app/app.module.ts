import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ModalChargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
