import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatesComponent } from './dates/dates.component';

export const appRoutes:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'dates', component: DatesComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
]