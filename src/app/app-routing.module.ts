import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditMerchPageComponent } from './pages/add-or-edit-merch-page/add-or-edit-merch-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MerchandisesPageComponent } from './pages/merchandises-page/merchandises-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'merchandises', component: MerchandisesPageComponent },
  { path: 'merchandises/:id', component: AddOrEditMerchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
