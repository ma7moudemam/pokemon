import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonWearComponent } from './pokemon-wear.component';

describe('PokemonWearComponent', () => {
  let component: PokemonWearComponent;
  let fixture: ComponentFixture<PokemonWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonWearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
