import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Add standalone: true flag here
})

export class AppComponent {
  title = 'front';
}