import { environment } from './../../environments/environment';
import { Game } from './../models/Game';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, Observable } from 'rxjs';
import { take, delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getGames() {
    return this.http
      .get<Game[]>(`${environment.base_url}/games`)
      .pipe(delay(2000), tap());
  }

  saveGame(game: Game) {
    return this.http
      .post(`${environment.base_url}/games`, game)
      .pipe(delay(2000), tap());
  }

  getGameId(id: number) {
    return this.http
      .get(`${environment.base_url}/games/${id}`)
      .pipe(delay(2000), tap());
  }

  deleteGame(id: number) {
    return this.http
      .delete(`${environment.base_url}/games/${id}`)
      .pipe(delay(2000), tap());
  }

  updateGame(id: number, game: Game) {
    return this.http
      .put(`${environment.base_url}/games/${id}`, game)
      .pipe(delay(2000), tap());
  }
}
