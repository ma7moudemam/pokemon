import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  id:any;
  pokemon:any;
  types:string[]=[];
  forms:any[]=[];

  constructor(private route:ActivatedRoute , private service:PokemonService) { 
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.service.getPokemonById(this.id).subscribe((res:any)=>{
      this.pokemon = res;
      this.types = res.types.map((item: { type: { name: any; }; })=>item.type.name);
    },err=>{
      console.log(err.message);
    }
    )
  }


}
