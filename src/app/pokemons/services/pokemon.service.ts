import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getAllPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

  getPokemon(url:string){
    return this.http.get(url);
  }

  getPokemonById(id:number){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+id);
  }

  getPokemonForms(id: number){
    return this.http.get('https://pokeapi.co/api/v2/pokemon-form/'+id);
  }

}
