import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule here
import { Game } from '../../../shared/models/Game';
import { GameService } from '../../../services/game.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Use styleUrls instead of styleUrl
})
export class HomeComponent implements OnInit {
  
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.games = this.gameService.getAll();
  }
}
