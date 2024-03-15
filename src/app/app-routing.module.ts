import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EstablishmentComponent } from './pages/establishment/establishment.component';

const routes: Routes = [
  { path: 'establishment', component: EstablishmentComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: '', redirectTo: '/establishment', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
