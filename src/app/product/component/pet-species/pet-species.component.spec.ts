import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSpeciesComponent } from './pet-species.component';

describe('PetSpeciesComponent', () => {
  let component: PetSpeciesComponent;
  let fixture: ComponentFixture<PetSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetSpeciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
