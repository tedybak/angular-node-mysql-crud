import { AlertModalService } from './../../shared/alert-modal.service';
import { Router } from '@angular/router';
import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
})
export class GameFormComponent implements OnInit {
  formulario: FormGroup;
  id: number;
  data: Game = {
    title: '',
    description: '',
    image: '',
  };
  title = '';
  edit: boolean = false;

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private navigation: Router,
    private modaleService: AlertModalService
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      image: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
    if (this.route.paramMap) {
      this.route.paramMap.subscribe((data) => {
        this.id = data['params']['id'];
        this.gamesService.getGameId(this.id).subscribe((data) => {
          this.data = data[0];
          this.edit = true;
        });
      });
    }
  }
  procesar() {
    this.gamesService.saveGame(this.formulario.value).subscribe((resp: any) => {
      this.navigation.navigate(['games']);
    });
  }

  update() {
    this.gamesService.updateGame(this.id, this.data).subscribe((resp: any) => {
      this.modaleService.handleError(
        'susscess',
        'El registro se ha actualizado satisfactoriamente'
      );
      this.navigation.navigate(['games']);
    });
  }
}
