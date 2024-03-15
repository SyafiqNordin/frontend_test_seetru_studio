import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstablishmentComponent } from './pages/establishment/establishment.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageTabsComponent } from './components/page-tabs/page-tabs.component';
import { PageTitleContainerComponent } from './components/page-title-container/page-title-container.component';

@NgModule({
  declarations: [
    AppComponent,
    EstablishmentComponent,
    ContactUsComponent,
    PageHeaderComponent,
    PageTabsComponent,
    PageTitleContainerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline', floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
