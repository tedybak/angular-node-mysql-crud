import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { Observable, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  constructor(private service: GamesService) {}
  games$: Observable<any>;
  error$ = new Subject<boolean>();

  ngOnInit(): void {
    this.games$ = this.service.getGames().pipe(
      catchError((error) => {
        this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
  }

  handleError() {}
}
