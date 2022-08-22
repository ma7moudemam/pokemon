import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormsComponent } from './pokemon-forms.component';

describe('PokemonFormsComponent', () => {
  let component: PokemonFormsComponent;
  let fixture: ComponentFixture<PokemonFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
