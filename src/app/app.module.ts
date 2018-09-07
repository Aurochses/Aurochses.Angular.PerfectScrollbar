import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfectScrollbarModule } from '@aurochses/angular-perfect-scrollbar';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { OtherComponent } from './main/other/other.component';

const appRoutes: Routes = [
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

    PerfectScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
