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
    private modaleService: AlertModalService
  ) {}
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
    this.showSussesfullMessage();
  }

  showSussesfullMessage() {
    this.modaleService.handleError(
      'success',
      'Registros listados correctamente'
    );
  }

  handleError() {
    this.modaleService.handleError('danger', 'Ha habido un error');
  }
}
