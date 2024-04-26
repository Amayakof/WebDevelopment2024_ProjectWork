import { Injectable } from '@angular/core';
import { Games } from '../layout/models/game';
import { sample_games } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getAll():Games[] {
    return sample_games
  }
}
