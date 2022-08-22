import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPokemosComponent } from './all-pokemos.component';

describe('AllPokemosComponent', () => {
  let component: AllPokemosComponent;
  let fixture: ComponentFixture<AllPokemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPokemosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPokemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
