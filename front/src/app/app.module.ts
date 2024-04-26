// In your app.module.ts or the relevant module file
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule // Include RouterModule in imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
