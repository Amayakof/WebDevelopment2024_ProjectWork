import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Game } from '../shared/models/Game';
import { sample_games } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getAll():Game[]{
    return sample_games;
  }
}
