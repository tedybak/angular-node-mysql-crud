import { Router } from '@angular/router';
import { ModalComponent } from './../../shared/modal/modal.component';
import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { Observable, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from './../../shared/alert-modal.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  constructor(
    private service: GamesService,
    private modaleService: AlertModalService,
    private route: Router
  ) {}
  games$: Observable<any>;
  error$ = new Subject<boolean>();

  ngOnInit(): void {
    this.getGames();
  }

  deleteGame(id) {
    this.service.deleteGame(id).subscribe(
      (resp) => {
        this.modaleService.handleError(
          'danger',
          'El registro se ha eliminado satisfactoriamente'
        );
        this.getGames();
      },
      (error) => console.log(error)
    );
  }

  getGames() {
    this.games$ = this.service.getGames().pipe(
      catchError((error) => {
        this.error$.next(true);
        this.modaleService.handleError('danger', 'Ha habido un error');
        return empty();
      })
    );
  }
}
