import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
})
export class GameFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private gamesService: GamesService) {}

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
  }
  procesar() {
    this.gamesService.saveGame(this.formulario.value).subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
