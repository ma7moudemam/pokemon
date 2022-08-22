import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPokemosComponent } from './components/all-pokemos/all-pokemos.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { RouterModule } from '@angular/router';
import { PokemonFormsComponent } from './components/pokemon-details/pokemon-forms/pokemon-forms.component';
import { PokemonDetailComponent } from './components/pokemon-details/pokemon-detail/pokemon-detail.component';
import { PokemonTypesComponent } from './components/pokemon-details/pokemon-types/pokemon-types.component';
import { PokemonStatsComponent } from './components/pokemon-details/pokemon-stats/pokemon-stats.component';
import { PokemonWearComponent } from './components/pokemon-details/pokemon-wear/pokemon-wear.component';




@NgModule({
  declarations: [
    AllPokemosComponent,
    PokemonDetailsComponent,
    PokemonComponent,
    PokemonFormsComponent,
    PokemonDetailComponent,
    PokemonTypesComponent,
    PokemonStatsComponent,
    PokemonWearComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    AllPokemosComponent,
  ]
})
export class PokemonsModule { }
