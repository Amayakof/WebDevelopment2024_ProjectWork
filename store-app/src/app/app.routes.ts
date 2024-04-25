import { Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', redirectTo: 'header', pathMatch: 'full'},
];
