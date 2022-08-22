import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-all-pokemos',
  templateUrl: './all-pokemos.component.html',
  styleUrls: ['./all-pokemos.component.css']
})
export class AllPokemosComponent implements OnInit {

  pokemons:any[]=[];

  constructor(private service:PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
    this.service.getAllPokemons().subscribe(
      (res:any)=>{
        this.pokemons=res.results;
      },
      (err)=>{
        console.log(err.message);
      }
    )
  }

}
