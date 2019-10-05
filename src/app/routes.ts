import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatesComponent } from './dates/dates.component';
import { Component } from '@angular/core';
import { LoginComponent } from './user/login.component';

export const appRoutes:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'dates', component: DatesComponent},
    { path: 'login', component:LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
]