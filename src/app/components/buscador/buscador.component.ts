import { Component, OnInit, Input } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',

})
export class BuscadorComponent implements OnInit {
@Input() heroes: any= {};
@Input() index?: number;
termino: string = '';




  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
     this.termino = (params['termino']);
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
  }

  verHeroe(){
    console.log(this.index);
    this.router.navigate(['/heroe', this.index])
  }



}
