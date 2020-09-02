import { environment } from './../../environments/environment';
import { Game } from './../models/Game';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
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
}
