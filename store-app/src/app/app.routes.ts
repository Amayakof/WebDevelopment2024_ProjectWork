import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { GameDetailsComponent } from './layout/game-details/game-details.component';
import { UserPageComponent } from './layout/user-page/user-page.component';
import { Page404Component } from './layout/page404/page404.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, title: 'Login page'},
    { path: 'home', component: HomeComponent, title: 'Feed'},
    { path: ':username', component: UserPageComponent, title: 'User page'},
    { path: ':home/app-game-details', component: GameDetailsComponent, title: 'Games Details'},
    { path: '**', component: Page404Component, title: 'ErrorPage' }
];
