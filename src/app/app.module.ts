import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './components/page-1/page-1.component';
import { Page2Component } from './components/page-2/page-2.component';
import { LesionItemComponent } from './components/lesion-item/lesion-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    LesionItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'informatii-victima', component: Page1Component },
      { path: 'leziuni-victima', component: Page2Component },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
