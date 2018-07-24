import { LesionService } from './services/lesion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './components/page-1/page-1.component';
import { Page2Component } from './components/page-2/page-2.component';
import { LesionItemComponent } from './components/lesion-item/lesion-item.component';
import { LesionsListModalComponent } from './components/lesions-list-modal/lesions-list-modal.component';
import { LesionLocationListModalComponent } from './components/lesion-location-list-modal/lesion-location-list-modal.component';
import { BaremComponent } from './components/barem/barem.component';
import { BaremLesionComponent } from './components/barem-lesion/barem-lesion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    LesionItemComponent,
    LesionsListModalComponent,
    LesionLocationListModalComponent,
    BaremComponent,
    BaremLesionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'informatii-victima', component: Page1Component },
      { path: 'leziuni-victima', component: Page2Component },
      { path: 'barem', component: BaremComponent },
    ]),
    ModalModule.forRoot(),
  ],
  providers: [
    LesionService
  ],
  entryComponents: [
    LesionsListModalComponent,
    LesionLocationListModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
