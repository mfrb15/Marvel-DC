import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',

})
export class BuscadorComponent implements OnInit {
heroes: any[]= [];
termino: string = '';




  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
     this.termino = (params['termino']);
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
  }



}
