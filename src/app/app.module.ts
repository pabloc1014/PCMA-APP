import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { DatesComponent } from './dates/dates.component';
import { NavBarComponent } from './navbar/navbar.component';
import { DatesService } from './services/dates.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatesComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
