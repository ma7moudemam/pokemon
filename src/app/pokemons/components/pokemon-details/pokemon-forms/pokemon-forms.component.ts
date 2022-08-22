import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemons/services/pokemon.service';

@Component({
  selector: 'app-pokemon-forms',
  templateUrl: './pokemon-forms.component.html',
  styleUrls: ['./pokemon-forms.component.css']
})
export class PokemonFormsComponent implements OnInit {

  id:any;
  forms:any[]=[];
  constructor(private route:ActivatedRoute , private service:PokemonService) {
    this.id=this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getForms();
  }

  getForms(){
    this.service.getPokemonForms(this.id).subscribe((res:any)=>{
      this.forms = res.sprites.map();
      console.log(this.forms)
    })
  }

}
