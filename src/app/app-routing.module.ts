import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPokemosComponent } from './pokemons/components/all-pokemos/all-pokemos.component';
import { PokemonDetailComponent } from './pokemons/components/pokemon-details/pokemon-detail/pokemon-detail.component';
import { PokemonDetailsComponent } from './pokemons/components/pokemon-details/pokemon-details.component';
import { PokemonFormsComponent } from './pokemons/components/pokemon-details/pokemon-forms/pokemon-forms.component';
import { PokemonStatsComponent } from './pokemons/components/pokemon-details/pokemon-stats/pokemon-stats.component';
import { PokemonTypesComponent } from './pokemons/components/pokemon-details/pokemon-types/pokemon-types.component';
import { PokemonWearComponent } from './pokemons/components/pokemon-details/pokemon-wear/pokemon-wear.component';

const routes: Routes = [
  { path: 'pokemons', component: AllPokemosComponent },
  { path: 'details/:id', component: PokemonDetailsComponent , 
    children: [
      {path: 'forms/:id' , component: PokemonFormsComponent},
      {path:'detail/:id' , component:PokemonDetailComponent},
      {path:'types/:id' , component: PokemonTypesComponent},
      {path:'stats/:id' , component: PokemonStatsComponent},
      {path:'wear/:id' , component:PokemonWearComponent}
    ]
  },
  {path: '**', redirectTo: 'pokemons' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
