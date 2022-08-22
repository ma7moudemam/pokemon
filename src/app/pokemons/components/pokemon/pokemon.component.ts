import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon!:any;
  @Input() number!:number;
  myPokemon!:any;
  type!:string;
  constructor(private service:PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.service.getPokemon(this.pokemon.url).subscribe(
      (res:any)=>{
        this.myPokemon=res;
        this.type=this.myPokemon.types[0].type.name;
        console.log(this.myPokemon)
      }
    )
  }
}
